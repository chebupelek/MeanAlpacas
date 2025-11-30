using hitscord.Models.request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text;

namespace hack.Controllers;

[ApiController]
[Route("hack")]
public class HackController : ControllerBase
{
	private readonly IHttpContextAccessor _httpContextAccessor;

	public HackController(IHttpContextAccessor httpContextAccessor)
	{
		_httpContextAccessor = httpContextAccessor ?? throw new ArgumentNullException(nameof(httpContextAccessor));
	}

	[HttpPost]
	[Route("ask")]
	public async Task<IActionResult> Ask([FromForm] AskFileDTO data)
	{
		try
		{
			if (data.file == null || data.file.Length == 0)
				return BadRequest("Файл не получен");

			var tempInputFile = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid()}.csv");
			var tempOutputFile = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid()}_processed.csv");

			await using (var stream = new FileStream(tempInputFile, FileMode.Create))
			{
				await data.file.CopyToAsync(stream);
				await stream.FlushAsync();
			}

			var scriptPath = Path.Combine(AppContext.BaseDirectory, "prep.py");
			if (!System.IO.File.Exists(scriptPath))
			{
				return StatusCode(500, $"Скрипт не найден: {scriptPath}");
			}

			var uploadedText = await System.IO.File.ReadAllTextAsync(tempInputFile, Encoding.UTF8);

			var pythonExe = @"C:\Users\misti\source\repos\hack_back\hack_back\venv\Scripts\python.exe";

			var psi = new ProcessStartInfo
			{
				FileName = pythonExe,
				Arguments = $"\"{scriptPath}\" --input \"{tempInputFile}\" --output \"{tempOutputFile}\"",
				RedirectStandardOutput = true,
				RedirectStandardError = true,
				UseShellExecute = false,
				CreateNoWindow = true
			};

			psi.WorkingDirectory = AppContext.BaseDirectory;

			using var process = new Process { StartInfo = psi };

			var stdoutLog = new StringBuilder();
			var stderrLog = new StringBuilder();

			process.OutputDataReceived += (sender, e) =>
			{
				if (!string.IsNullOrEmpty(e.Data))
				{
					Console.WriteLine("[Python stdout] " + e.Data);
					stdoutLog.AppendLine(e.Data);
				}
			};
			process.ErrorDataReceived += (sender, e) =>
			{
				if (!string.IsNullOrEmpty(e.Data))
				{
					Console.WriteLine("[Python stderr] " + e.Data);
					stderrLog.AppendLine(e.Data);
				}
			};

			process.Start();

			process.BeginOutputReadLine();
			process.BeginErrorReadLine();

			process.WaitForExit();

			if (process.ExitCode != 0)
			{
				return StatusCode(500, $"Ошибка Python: {stderrLog}\n{stdoutLog}");
			}

			if (!System.IO.File.Exists(tempOutputFile))
			{
				return StatusCode(500, "Выходной файл не создан Python");
			}

			string processedCsv = await System.IO.File.ReadAllTextAsync(tempOutputFile, Encoding.UTF8);

			return Ok(new
			{
				message = "Файл обработан",
				content = processedCsv,
				log = stdoutLog.ToString(),
			});


		}
		catch (Exception ex)
		{
			return StatusCode(500, ex.Message);
		}
	}

}
