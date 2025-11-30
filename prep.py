# Sam Lunew & Mean Alpacas. 2025. 

import argparse
import pandas as pd
import numpy as np
from collections import Counter

def clean_numeric_column(series):
    try:
        return series.str.replace(',', '.').astype(float)
    except Exception:
        return series

def main(input_file, output_file):
    print(f"Reading input file: {input_file}")
    
    # Read CSV with flexible parsing of decimal commas
    df = pd.read_csv(input_file, sep=';', decimal=',', encoding='utf-8')

    # Clean numeric columns
    numeric_columns = df.select_dtypes(include='object').columns
    for col in numeric_columns:
        df[col] = clean_numeric_column(df[col])

    # Replace empty strings and "nan" strings with actual NaN
    df.replace('', np.nan, inplace=True)
    df.replace('nan', np.nan, inplace=True)
    df.replace('NaN', np.nan, inplace=True)

    # Fill missing values - FIXED CHAINED ASSIGNMENT WARNING
    for col in df.columns:
        df[col] = df[col].fillna(0)

    # Handle gender mapping properly
    if 'gender' in df.columns:
        # Map gender values: assuming Russian terms
        gender_mapping = {
            'Мужской': 1,
            'Женский': 0,
            np.nan: np.nan
        }
        df['gender'] = df['gender'].map(gender_mapping)

    # Drop specified columns
    drop_cols = [
        'dp_ils_paymentssum_avg_12m',
        'city_smart_name',
        'dp_ils_days_from_last_doc',
        'dp_ils_avg_salary_1y',
        'dp_ils_avg_salary_2y',
        'dp_ils_paymentssum_avg_6m',
        'dp_ils_salary_ratio_1y3y',
        'mob_cnt_days',
        'dp_ils_paymentssum_avg_6m_current',
        'salary_median_in_gex_r1',
        'cntVoiceOutMob6m',
        'vert_has_app_ru_cian_main',
        'adminarea',
        'dp_ewb_last_employment_position',
        'addref',
        'addrref',
        'dp_payoutincomedata_payout_avg_3_month',
        'dp_payoutincomedata_payout_sum_3_month',
        'cntOnnRinCallAvg6m',
        'vert_has_app_ru_tinkoff_investing',
        'dp_ewb_dismissal_due_contract_violation_by_lb_cnt',
        'by_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami',
        'avg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet',
        'accountsalary_out_flag',
        'first_salary_income'
    ]
    df.drop(columns=[col for col in drop_cols if col in df.columns], inplace=True)

    # Parse date column 'dt' into year, month, day
    if 'dt' in df.columns:
        df['dt'] = pd.to_datetime(df['dt'], errors='coerce')
        df['dt_year'] = df['dt'].dt.year
        df['dt_month'] = df['dt'].dt.month
        df['dt_day'] = df['dt'].dt.day
        df.drop(columns=['dt'], inplace=True)

        # Reorder columns: place year/month/day after 'id'
        cols = list(df.columns)
        if 'id' in cols:
            id_idx = cols.index('id')
            dt_cols = ['dt_year', 'dt_month', 'dt_day']
            # Create new column order - put dt columns right after 'id'
            new_cols = cols[:id_idx+1] + dt_cols + cols[id_idx+1:]
            # Remove duplicates that might have occurred
            seen = set()
            unique_cols = []
            for col in new_cols:
                if col not in seen:
                    seen.add(col)
                    unique_cols.append(col)
            df = df[unique_cols]

    # Move target to first position if exists
    if 'target' in df.columns:
        cols = list(df.columns)
        cols.remove('target')
        cols.insert(0, 'target')
        df = df[cols]

    # Save processed data
    df.to_csv(output_file, index=False)

    print(f"\n✅ Processed data saved to {output_file}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Preprocess income dataset for machine learning.")
    parser.add_argument("--input", default="hackathon_income_train.csv",
                        help="Input CSV file name (default: hackathon_income_train.csv)")
    parser.add_argument("--output", default="preprocessed_data.csv",
                        help="Output CSV file name (default: preprocessed_data.csv)")

    args = parser.parse_args()

    main(args.input, args.output)
