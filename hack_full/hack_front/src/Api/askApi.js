import routers from "../Router/routers";

function ask(data){
    const formData = new FormData();
    formData.append("file", data, "payload.csv");

    return fetch(routers.ask, {
        method: "POST",
        headers: {},
        body: formData
    }).then(response => {
        if(!response.ok){
            if (response.status === 500) {
                alert('Internal Server Error');
                return null;
            } else {
                alert(`HTTP error! Status: ${response.status}`);
                return null;
            }
        }
        return response.json();
    }).then(data =>{
        return data;
    }).catch(error=>{
        console.log(error.message);
        return null;
    });
}

export const askApi = {
    ask : ask
}