import { Button, Col, Row, Card, Select, Input, Space, Pagination, Collapse, DatePicker, Upload, message, Spin } from "antd";
import Papa from "papaparse";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from "react-router-dom";
import {askThunkCreator} from "../../Reducers/ManReducer"
import dayjs from "dayjs";
import { CloseOutlined } from '@ant-design/icons';

function Human() 
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [dt, setdt] = useState(null);
    const [turn_cur_cr_avg_act_v2, setturn_cur_cr_avg_act_v2] = useState("");
    const [salary_6to12m_avg, setsalary_6to12m_avg] = useState("");
    const [hdb_bki_total_max_limit, sethdb_bki_total_max_limit] = useState("");
    const [dp_ils_paymentssum_avg_12m, setdp_ils_paymentssum_avg_12m] = useState("");
    const [hdb_bki_total_cc_max_limit, sethdb_bki_total_cc_max_limit] = useState("");
    const [incomeValue, setincomeValue] = useState("");
    const [gender, setgender] = useState("");
    const [avg_cur_cr_turn, setavg_cur_cr_turn] = useState("");
    const [adminarea, setadminarea] = useState("");
    const [turn_cur_cr_avg_v2, setturn_cur_cr_avg_v2] = useState("");
    const [turn_cur_cr_max_v2, setturn_cur_cr_max_v2] = useState("");
    const [hdb_bki_total_pil_max_limit, sethdb_bki_total_pil_max_limit] = useState("");
    const [age, setage] = useState("");
    const [dp_ils_avg_salary_1y, setdp_ils_avg_salary_1y] = useState("");
    const [turn_cur_cr_sum_v2, setturn_cur_cr_sum_v2] = useState("");
    const [by_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp, setby_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp] = useState("");
    const [turn_cur_db_sum_v2, setturn_cur_db_sum_v2] = useState("");
    const [turn_cur_db_avg_act_v2, setturn_cur_db_avg_act_v2] = useState("");
    const [dp_ils_avg_salary_2y, setdp_ils_avg_salary_2y] = useState("");
    const [curr_rur_amt_cm_avg, setcurr_rur_amt_cm_avg] = useState("");
    const [turn_cur_db_avg_v2, setturn_cur_db_avg_v2] = useState("");
    const [by_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp, setby_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp] = useState("");
    const [dp_ils_paymentssum_avg_6m, setdp_ils_paymentssum_avg_6m] = useState("");
    const [avg_cur_db_turn, setavg_cur_db_turn] = useState("");
    const [hdb_bki_active_cc_max_limit, sethdb_bki_active_cc_max_limit] = useState("");
    const [incomeValueCategory, setincomeValueCategory] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate, setavg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate] = useState("");
    const [avg_credit_turn_rur, setavg_credit_turn_rur] = useState("");
    const [dp_ils_salary_ratio_1y3y, setdp_ils_salary_ratio_1y3y] = useState("");
    const [by_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona, setby_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona] = useState("");
    const [turn_cur_cr_7avg_avg_v2, setturn_cur_cr_7avg_avg_v2] = useState("");
    const [dp_ils_accpayment_avg_12m, setdp_ils_accpayment_avg_12m] = useState("");
    const [curbal_usd_amt_cm_avg, setcurbal_usd_amt_cm_avg] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__supermarkety, setavg_by_category__amount__sum__cashflowcategory_name__supermarkety] = useState("");
    const [avg_loan_cnt_with_insurance, setavg_loan_cnt_with_insurance] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__gipermarkety, setavg_by_category__amount__sum__cashflowcategory_name__gipermarkety] = useState("");
    const [city_smart_name, setcity_smart_name] = useState("");
    const [uniV5, setuniV5] = useState("");
    const [turn_cur_db_max_v2, setturn_cur_db_max_v2] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__kafe, setavg_by_category__amount__sum__cashflowcategory_name__kafe] = useState("");
    const [turn_other_db_max_v2, setturn_other_db_max_v2] = useState("");
    const [turn_cur_cr_min_v2, setturn_cur_cr_min_v2] = useState("");
    const [hdb_bki_other_active_pil_outstanding, sethdb_bki_other_active_pil_outstanding] = useState("");
    const [dp_ewb_last_employment_position, setdp_ewb_last_employment_position] = useState("");
    const [turn_cur_db_min_v2, setturn_cur_db_min_v2] = useState("");
    const [hdb_bki_total_products, sethdb_bki_total_products] = useState("");
    const [per_capita_income_rur_amt, setper_capita_income_rur_amt] = useState("");
    const [avg_debet_turn_rur, setavg_debet_turn_rur] = useState("");
    const [hdb_relend_active_max_psk, sethdb_relend_active_max_psk] = useState("");
    const [dda_rur_amt_curr_v2, setdda_rur_amt_curr_v2] = useState("");
    const [mob_cnt_days, setmob_cnt_days] = useState("");
    const [dp_ils_days_from_last_doc, setdp_ils_days_from_last_doc] = useState("");
    const [avg_6m_money_transactions, setavg_6m_money_transactions] = useState("");
    const [transaction_category_supermarket_percent_cnt_2m, settransaction_category_supermarket_percent_cnt_2m] = useState("");
    const [pil, setpil] = useState("");
    const [hdb_bki_total_max_overdue_sum, sethdb_bki_total_max_overdue_sum] = useState("");
    const [avg_6m_clothing, setavg_6m_clothing] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi, setavg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi] = useState("");
    const [addrref, setaddrref] = useState("");
    const [bki_total_auto_cnt, setbki_total_auto_cnt] = useState("");
    const [dp_payoutincomedata_payout_avg_3_month, setdp_payoutincomedata_payout_avg_3_month] = useState("");
    const [hdb_outstand_sum, sethdb_outstand_sum] = useState("");
    const [avg_3m_money_transactions, setavg_3m_money_transactions] = useState("");
    const [dp_address_unique_regions, setdp_address_unique_regions] = useState("");
    const [min_balance_rur_amt_6m_af, setmin_balance_rur_amt_6m_af] = useState("");
    const [transaction_category_supermarket_sum_cnt_m3_4, settransaction_category_supermarket_sum_cnt_m3_4] = useState("");
    const [dp_payoutincomedata_payout_max_3_month, setdp_payoutincomedata_payout_max_3_month] = useState("");
    const [hdb_bki_total_ip_max_limit, sethdb_bki_total_ip_max_limit] = useState("");
    const [hdb_bki_total_cnt, sethdb_bki_total_cnt] = useState("");
    const [blacklist_flag, setblacklist_flag] = useState("");
    const [bki_total_oth_cnt, setbki_total_oth_cnt] = useState("");
    const [dp_payoutincomedata_payout_sum_3_month, setdp_payoutincomedata_payout_sum_3_month] = useState("");
    const [hdb_relend_outstand_sum, sethdb_relend_outstand_sum] = useState("");
    const [total_rur_amt_cm_avg, settotal_rur_amt_cm_avg] = useState("");
    const [mob_cover_days, setmob_cover_days] = useState("");
    const [dp_payoutincomedata_payout_max_6_month, setdp_payoutincomedata_payout_max_6_month] = useState("");
    const [label_Below_50k_share_r1, setlabel_Below_50k_share_r1] = useState("");
    const [turn_fdep_db_sum_v2, setturn_fdep_db_sum_v2] = useState("");
    const [dp_ils_accpayment_avg_6m_current, setdp_ils_accpayment_avg_6m_current] = useState("");
    const [transaction_category_cash_percent_amt_2m, settransaction_category_cash_percent_amt_2m] = useState("");
    const [curr_rur_amt_3m_avg, setcurr_rur_amt_3m_avg] = useState("");
    const [transaction_category_restaurants_sum_amt_m2, settransaction_category_restaurants_sum_amt_m2] = useState("");
    const [loan_cnt, setloan_cnt] = useState("");
    const [turn_fdep_db_avg_v2, setturn_fdep_db_avg_v2] = useState("");
    const [turn_cur_db_7avg_avg_v2, setturn_cur_db_7avg_avg_v2] = useState("");
    const [bki_total_ip_max_outstand, setbki_total_ip_max_outstand] = useState("");
    const [amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate, setamount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate] = useState("");
    const [profit_income_out_rur_amt_12m, setprofit_income_out_rur_amt_12m] = useState("");
    const [avg_6m_hotels, setavg_6m_hotels] = useState("");
    const [hdb_ovrd_sum, sethdb_ovrd_sum] = useState("");
    const [dp_ils_total_seniority, setdp_ils_total_seniority] = useState("");
    const [dp_ils_paymentssum_avg_6m_current, setdp_ils_paymentssum_avg_6m_current] = useState("");
    const [smsInWavg6m, setsmsInWavg6m] = useState("");
    const [avg_fdep_db_turn, setavg_fdep_db_turn] = useState("");
    const [device_iphone_avg, setdevice_iphone_avg] = useState("");
    const [by_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps, setby_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps] = useState("");
    const [avg_balance_rur_amt_1m_af, setavg_balance_rur_amt_1m_af] = useState("");
    const [curr_rur_amt_cm_avg_period_days_ago_v2, setcurr_rur_amt_cm_avg_period_days_ago_v2] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__oteli, setavg_by_category__amount__sum__cashflowcategory_name__oteli] = useState("");
    const [hdb_bki_total_ip_cnt, sethdb_bki_total_ip_cnt] = useState("");
    const [hdb_bki_active_cc_max_outstand, sethdb_bki_active_cc_max_outstand] = useState("");
    const [hdb_other_outstand_sum, sethdb_other_outstand_sum] = useState("");
    const [days_to_last_transaction, setdays_to_last_transaction] = useState("");
    const [hdb_bki_total_pil_max_overdue, sethdb_bki_total_pil_max_overdue] = useState("");
    const [vert_pil_last_credit_step_screen_view_3m, setvert_pil_last_credit_step_screen_view_3m] = useState("");
    const [acard, setacard] = useState("");
    const [bki_total_il_max_limit, setbki_total_il_max_limit] = useState("");
    const [other_credits_count, setother_credits_count] = useState("");
    const [tz_msk_timedelta, settz_msk_timedelta] = useState("");
    const [turn_save_db_min_v2, setturn_save_db_min_v2] = useState("");
    const [profit_income_out_rur_amt_9m, setprofit_income_out_rur_amt_9m] = useState("");
    const [dp_ils_ipkcurrentyear_currentyearpensfactor, setdp_ils_ipkcurrentyear_currentyearpensfactor] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__odezhda, setavg_by_category__amount__sum__cashflowcategory_name__odezhda] = useState("");
    const [cntOnnRinCallAvg6m, setcntOnnRinCallAvg6m] = useState("");
    const [dda_rur_amt_3m_avg, setdda_rur_amt_3m_avg] = useState("");
    const [winback_cnt, setwinback_cnt] = useState("");
    const [salary_median_in_gex_r1, setsalary_median_in_gex_r1] = useState("");
    const [dp_payoutincomedata_payout_avg_prev_year, setdp_payoutincomedata_payout_avg_prev_year] = useState("");
    const [avg_amount_daily_transactions_90d, setavg_amount_daily_transactions_90d] = useState("");
    const [vert_has_app_ru_tinkoff_investing, setvert_has_app_ru_tinkoff_investing] = useState("");
    const [transaction_category_supermarket_inc_cnt_2m, settransaction_category_supermarket_inc_cnt_2m] = useState("");
    const [vert_pil_sms_success_3m, setvert_pil_sms_success_3m] = useState("");
    const [min_balance_rur_amt_1m_af, setmin_balance_rur_amt_1m_af] = useState("");
    const [dp_ils_max_seniority, setdp_ils_max_seniority] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__set_supermarketov, setavg_by_category__amount__sum__cashflowcategory_name__set_supermarketov] = useState("");
    const [label_500k_to_1M_share_r1, setlabel_500k_to_1M_share_r1] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii, setavg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii] = useState("");
    const [bki_total_products, setbki_total_products] = useState("");
    const [avg_6m_all, setavg_6m_all] = useState("");
    const [dp_ils_avg_simultanious_jobs_5y, setdp_ils_avg_simultanious_jobs_5y] = useState("");
    const [dp_ewb_dismissal_due_contract_violation_by_lb_cnt, setdp_ewb_dismissal_due_contract_violation_by_lb_cnt] = useState("");
    const [summarur_1m_purch, setsummarur_1m_purch] = useState("");
    const [diff_avg_cr_db_turn, setdiff_avg_cr_db_turn] = useState("");
    const [dp_ils_cnt_changes_1y, setdp_ils_cnt_changes_1y] = useState("");
    const [dp_ils_employeers_cnt_last_month, setdp_ils_employeers_cnt_last_month] = useState("");
    const [dp_payoutincomedata_payout_avg_6_month, setdp_payoutincomedata_payout_avg_6_month] = useState("");
    const [dp_ewb_last_organization, setdp_ewb_last_organization] = useState("");
    const [by_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami, setby_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami] = useState("");
    const [bki_active_auto_cnt, setbki_active_auto_cnt] = useState("");
    const [turn_other_cr_avg_act_v2, setturn_other_cr_avg_act_v2] = useState("");
    const [cntVoiceOutMob6m, setcntVoiceOutMob6m] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__puteshestvija, setavg_by_category__amount__sum__cashflowcategory_name__puteshestvija] = useState("");
    const [loanacc_rur_amt_cm_avg, setloanacc_rur_amt_cm_avg] = useState("");
    const [transaction_category_supermarket_sum_cnt_m2, settransaction_category_supermarket_sum_cnt_m2] = useState("");
    const [transaction_category_supermarket_sum_amt_d15, settransaction_category_supermarket_sum_amt_d15] = useState("");
    const [avg_fdep_cr_turn, setavg_fdep_cr_turn] = useState("");
    const [transaction_category_restaurants_percent_cnt_2m, settransaction_category_restaurants_percent_cnt_2m] = useState("");
    const [bki_total_max_limit, setbki_total_max_limit] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete, setavg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete] = useState("");
    const [transaction_category_restaurants_percent_amt_2m, settransaction_category_restaurants_percent_amt_2m] = useState("");
    const [turn_fdep_db_avg_act_v2, setturn_fdep_db_avg_act_v2] = useState("");
    const [dp_ils_accpayment_avg_6m, setdp_ils_accpayment_avg_6m] = useState("");
    const [turn_other_cr_sum_v2, setturn_other_cr_sum_v2] = useState("");
    const [client_active_flag, setclient_active_flag] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__produkty, setavg_by_category__amount__sum__cashflowcategory_name__produkty] = useState("");
    const [curr_rur_amt_cm_avg_inc_v2, setcurr_rur_amt_cm_avg_inc_v2] = useState("");
    const [nonresident_flag, setnonresident_flag] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__kosmetika, setavg_by_category__amount__sum__cashflowcategory_name__kosmetika] = useState("");
    const [vert_has_app_ru_vtb_invest, setvert_has_app_ru_vtb_invest] = useState("");
    const [dp_ils_avg_salary_3y, setdp_ils_avg_salary_3y] = useState("");
    const [hdb_bki_total_auto_max_limit, sethdb_bki_total_auto_max_limit] = useState("");
    const [days_after_last_request, setdays_after_last_request] = useState("");
    const [cntRegionTripsWavg1m, setcntRegionTripsWavg1m] = useState("");
    const [vert_has_app_ru_cian_main, setvert_has_app_ru_cian_main] = useState("");
    const [loanacc_rur_amt_curr_v2, setloanacc_rur_amt_curr_v2] = useState("");
    const [avg_3m_no_cat, setavg_3m_no_cat] = useState("");
    const [vert_ghost_close_dpay3_last_days, setvert_ghost_close_dpay3_last_days] = useState("");
    const [vert_has_app_ru_raiffeisennews, setvert_has_app_ru_raiffeisennews] = useState("");
    const [dp_ils_days_ip_share_5y, setdp_ils_days_ip_share_5y] = useState("");
    const [avg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet, setavg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet] = useState("");
    const [hdb_bki_total_micro_max_overdue, sethdb_bki_total_micro_max_overdue] = useState("");
    const [bki_total_active_products, setbki_total_active_products] = useState("");
    const [by_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu, setby_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu] = useState("");
    const [calledCtnOutGroup, setcalledCtnOutGroup] = useState("");
    const [vert_pil_loan_application_success_3m, setvert_pil_loan_application_success_3m] = useState("");
    const [vert_pil_fee_discount_change_3m, setvert_pil_fee_discount_change_3m] = useState("");
    const [businessTelSubs, setbusinessTelSubs] = useState("");
    const [profit_income_out_rur_amt_l2m, setprofit_income_out_rur_amt_l2m] = useState("");
    const [avg_3m_healthcare_services, setavg_3m_healthcare_services] = useState("");
    const [dp_ils_paymentssum_month_avg, setdp_ils_paymentssum_month_avg] = useState("");
    const [ovrd_sum, setovrd_sum] = useState("");
    const [hdb_bki_total_active_products, sethdb_bki_total_active_products] = useState("");
    const [hdb_bki_total_micro_cnt, sethdb_bki_total_micro_cnt] = useState("");
    const [hdb_bki_active_pil_cnt, sethdb_bki_active_pil_cnt] = useState("");
    const [loan_cur_amt, setloan_cur_amt] = useState("");
    const [mob_total_sessions, setmob_total_sessions] = useState("");
    const [period_last_act_ad, setperiod_last_act_ad] = useState(null);
    const [dp_ils_days_multiple_job_share_2y, setdp_ils_days_multiple_job_share_2y] = useState("");
    const [hdb_bki_total_cc_max_overdue, sethdb_bki_total_cc_max_overdue] = useState("");
    const [lifetimeComp, setlifetimeComp] = useState("");
    const [hdb_bki_total_pil_last_days, sethdb_bki_total_pil_last_days] = useState("");
    const [amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi, setamount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi] = useState("");
    const [turn_save_cr_max_v2, setturn_save_cr_max_v2] = useState("");
    const [hdb_bki_active_pil_max_limit, sethdb_bki_active_pil_max_limit] = useState("");
    const [dp_ils_accpayment_avg_3m, setdp_ils_accpayment_avg_3m] = useState("");
    const [avg_6m_restaurants, setavg_6m_restaurants] = useState("");
    const [hdb_bki_total_pil_cnt, sethdb_bki_total_pil_cnt] = useState("");
    const [transaction_category_fastfood_percent_cnt_2m, settransaction_category_fastfood_percent_cnt_2m] = useState("");
    const [hdb_bki_total_pil_max_del90, sethdb_bki_total_pil_max_del90] = useState("");
    const [accountsalary_out_flag, setaccountsalary_out_flag] = useState("");
    const [cntBlockWavg6m, setcntBlockWavg6m] = useState("");
    const [express_rur_amt_cm_avg, setexpress_rur_amt_cm_avg] = useState("");
    const [loanacc_rur_amt_cm_avg_inc_v2, setloanacc_rur_amt_cm_avg_inc_v2] = useState("");
    const [hdb_bki_last_product_days, sethdb_bki_last_product_days] = useState("");
    const [dp_ils_days_multiple_job_cnt_5y, setdp_ils_days_multiple_job_cnt_5y] = useState("");
    const [dp_ils_accpayment_month_avg, setdp_ils_accpayment_month_avg] = useState("");
    const [cred_dda_rur_amt_3m_avg, setcred_dda_rur_amt_3m_avg] = useState("");
    const [avg_3m_all, setavg_3m_all] = useState("");
    const [hdb_other_active_max_psk, sethdb_other_active_max_psk] = useState("");
    const [hdb_bki_other_active_ip_outstanding, sethdb_bki_other_active_ip_outstanding] = useState("");
    const [total_sum, settotal_sum] = useState("");
    const [dp_ils_uniq_companies_1y, setdp_ils_uniq_companies_1y] = useState("");
    const [avg_6m_travel, setavg_6m_travel] = useState("");
    const [avg_6m_government_services, setavg_6m_government_services] = useState("");
    const [hdb_bki_active_cc_max_overdue, sethdb_bki_active_cc_max_overdue] = useState("");
    const [total_rur_amt_cm_avg_period_days_ago_v2, settotal_rur_amt_cm_avg_period_days_ago_v2] = useState("");
    const [label_Above_1M_share_r1, setlabel_Above_1M_share_r1] = useState("");
    const [transaction_category_supermarket_sum_cnt_d15, settransaction_category_supermarket_sum_cnt_d15] = useState("");
    const [max_balance_rur_amt_1m_af, setmax_balance_rur_amt_1m_af] = useState("");
    const [id, setid] = useState("");
    const [w, setw] = useState("");
    const [first_salary_income, setfirst_salary_income] = useState("");

    const handleAsk = async () => {
        setLoading(true);

        const payload = { 
            dt: dt ? dt.format("YYYY-MM-DD") : "",
            turn_cur_cr_avg_act_v2: turn_cur_cr_avg_act_v2,
            salary_6to12m_avg: salary_6to12m_avg,
            hdb_bki_total_max_limit: hdb_bki_total_max_limit,
            dp_ils_paymentssum_avg_12m: dp_ils_paymentssum_avg_12m,
            hdb_bki_total_cc_max_limit: hdb_bki_total_cc_max_limit,
            incomeValue: incomeValue,
            gender: gender,
            avg_cur_cr_turn: avg_cur_cr_turn,
            adminarea: adminarea,
            turn_cur_cr_avg_v2: turn_cur_cr_avg_v2,
            turn_cur_cr_max_v2: turn_cur_cr_max_v2,
            hdb_bki_total_pil_max_limit: hdb_bki_total_pil_max_limit,
            age: age,
            dp_ils_avg_salary_1y: dp_ils_avg_salary_1y,
            turn_cur_cr_sum_v2: turn_cur_cr_sum_v2,
            by_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp: by_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp,
            turn_cur_db_sum_v2: turn_cur_db_sum_v2,
            turn_cur_db_avg_act_v2: turn_cur_db_avg_act_v2,
            dp_ils_avg_salary_2y: dp_ils_avg_salary_2y,
            curr_rur_amt_cm_avg: curr_rur_amt_cm_avg,
            turn_cur_db_avg_v2: turn_cur_db_avg_v2,
            by_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp: by_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp,
            dp_ils_paymentssum_avg_6m: dp_ils_paymentssum_avg_6m,
            avg_cur_db_turn: avg_cur_db_turn,
            hdb_bki_active_cc_max_limit: hdb_bki_active_cc_max_limit,
            incomeValueCategory: incomeValueCategory,
            avg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate: avg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate,
            avg_credit_turn_rur: avg_credit_turn_rur,
            dp_ils_salary_ratio_1y3y: dp_ils_salary_ratio_1y3y,
            by_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona: by_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona,
            turn_cur_cr_7avg_avg_v2: turn_cur_cr_7avg_avg_v2,
            dp_ils_accpayment_avg_12m: dp_ils_accpayment_avg_12m,
            curbal_usd_amt_cm_avg: curbal_usd_amt_cm_avg,
            avg_by_category__amount__sum__cashflowcategory_name__supermarkety: avg_by_category__amount__sum__cashflowcategory_name__supermarkety,
            avg_loan_cnt_with_insurance: avg_loan_cnt_with_insurance,
            avg_by_category__amount__sum__cashflowcategory_name__gipermarkety: avg_by_category__amount__sum__cashflowcategory_name__gipermarkety,
            city_smart_name: city_smart_name,
            uniV5: uniV5,
            turn_cur_db_max_v2: turn_cur_db_max_v2,
            avg_by_category__amount__sum__cashflowcategory_name__kafe: avg_by_category__amount__sum__cashflowcategory_name__kafe,
            turn_other_db_max_v2: turn_other_db_max_v2,
            turn_cur_cr_min_v2: turn_cur_cr_min_v2,
            hdb_bki_other_active_pil_outstanding: hdb_bki_other_active_pil_outstanding,
            dp_ewb_last_employment_position: dp_ewb_last_employment_position,
            turn_cur_db_min_v2: turn_cur_db_min_v2,
            hdb_bki_total_products: hdb_bki_total_products,
            per_capita_income_rur_amt: per_capita_income_rur_amt,
            avg_debet_turn_rur: avg_debet_turn_rur,
            hdb_relend_active_max_psk: hdb_relend_active_max_psk,
            dda_rur_amt_curr_v2: dda_rur_amt_curr_v2,
            mob_cnt_days: mob_cnt_days,
            dp_ils_days_from_last_doc: dp_ils_days_from_last_doc,
            avg_6m_money_transactions: avg_6m_money_transactions,
            transaction_category_supermarket_percent_cnt_2m: transaction_category_supermarket_percent_cnt_2m,
            pil: pil,
            hdb_bki_total_max_overdue_sum: hdb_bki_total_max_overdue_sum,
            avg_6m_clothing: avg_6m_clothing,
            avg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi: avg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi,
            addrref: addrref,
            bki_total_auto_cnt: bki_total_auto_cnt,
            dp_payoutincomedata_payout_avg_3_month: dp_payoutincomedata_payout_avg_3_month,
            hdb_outstand_sum: hdb_outstand_sum,
            avg_3m_money_transactions: avg_3m_money_transactions,
            dp_address_unique_regions: dp_address_unique_regions,
            min_balance_rur_amt_6m_af: min_balance_rur_amt_6m_af,
            transaction_category_supermarket_sum_cnt_m3_4: transaction_category_supermarket_sum_cnt_m3_4,
            dp_payoutincomedata_payout_max_3_month: dp_payoutincomedata_payout_max_3_month,
            hdb_bki_total_ip_max_limit: hdb_bki_total_ip_max_limit,
            hdb_bki_total_cnt: hdb_bki_total_cnt,
            blacklist_flag: blacklist_flag,
            bki_total_oth_cnt: bki_total_oth_cnt,
            dp_payoutincomedata_payout_sum_3_month: dp_payoutincomedata_payout_sum_3_month,
            hdb_relend_outstand_sum: hdb_relend_outstand_sum,
            total_rur_amt_cm_avg: total_rur_amt_cm_avg,
            mob_cover_days: mob_cover_days,
            dp_payoutincomedata_payout_max_6_month: dp_payoutincomedata_payout_max_6_month,
            label_Below_50k_share_r1: label_Below_50k_share_r1,
            turn_fdep_db_sum_v2: turn_fdep_db_sum_v2,
            dp_ils_accpayment_avg_6m_current: dp_ils_accpayment_avg_6m_current,
            transaction_category_cash_percent_amt_2m: transaction_category_cash_percent_amt_2m,
            curr_rur_amt_3m_avg: curr_rur_amt_3m_avg,
            transaction_category_restaurants_sum_amt_m2: transaction_category_restaurants_sum_amt_m2,
            loan_cnt: loan_cnt,
            turn_fdep_db_avg_v2: turn_fdep_db_avg_v2,
            turn_cur_db_7avg_avg_v2: turn_cur_db_7avg_avg_v2,
            bki_total_ip_max_outstand: bki_total_ip_max_outstand,
            amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate: amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate,
            profit_income_out_rur_amt_12m: profit_income_out_rur_amt_12m,
            avg_6m_hotels: avg_6m_hotels,
            hdb_ovrd_sum: hdb_ovrd_sum,
            dp_ils_total_seniority: dp_ils_total_seniority,
            dp_ils_paymentssum_avg_6m_current: dp_ils_paymentssum_avg_6m_current,
            smsInWavg6m: smsInWavg6m,
            avg_fdep_db_turn: avg_fdep_db_turn,
            device_iphone_avg: device_iphone_avg,
            by_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps: by_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps,
            avg_balance_rur_amt_1m_af: avg_balance_rur_amt_1m_af,
            curr_rur_amt_cm_avg_period_days_ago_v2: curr_rur_amt_cm_avg_period_days_ago_v2,
            avg_by_category__amount__sum__cashflowcategory_name__oteli: avg_by_category__amount__sum__cashflowcategory_name__oteli,
            hdb_bki_total_ip_cnt: hdb_bki_total_ip_cnt,
            hdb_bki_active_cc_max_outstand: hdb_bki_active_cc_max_outstand,
            hdb_other_outstand_sum: hdb_other_outstand_sum,
            days_to_last_transaction: days_to_last_transaction,
            hdb_bki_total_pil_max_overdue: hdb_bki_total_pil_max_overdue,
            vert_pil_last_credit_step_screen_view_3m: vert_pil_last_credit_step_screen_view_3m,
            acard: acard,
            bki_total_il_max_limit: bki_total_il_max_limit,
            other_credits_count: other_credits_count,
            tz_msk_timedelta: tz_msk_timedelta,
            turn_save_db_min_v2: turn_save_db_min_v2,
            profit_income_out_rur_amt_9m: profit_income_out_rur_amt_9m,
            dp_ils_ipkcurrentyear_currentyearpensfactor: dp_ils_ipkcurrentyear_currentyearpensfactor,
            avg_by_category__amount__sum__cashflowcategory_name__odezhda: avg_by_category__amount__sum__cashflowcategory_name__odezhda,
            cntOnnRinCallAvg6m: cntOnnRinCallAvg6m,
            dda_rur_amt_3m_avg: dda_rur_amt_3m_avg,
            winback_cnt: winback_cnt,
            salary_median_in_gex_r1: salary_median_in_gex_r1,
            dp_payoutincomedata_payout_avg_prev_year: dp_payoutincomedata_payout_avg_prev_year,
            avg_amount_daily_transactions_90d: avg_amount_daily_transactions_90d,
            vert_has_app_ru_tinkoff_investing: vert_has_app_ru_tinkoff_investing,
            transaction_category_supermarket_inc_cnt_2m: transaction_category_supermarket_inc_cnt_2m,
            vert_pil_sms_success_3m: vert_pil_sms_success_3m,
            min_balance_rur_amt_1m_af: min_balance_rur_amt_1m_af,
            dp_ils_max_seniority: dp_ils_max_seniority,
            avg_by_category__amount__sum__cashflowcategory_name__set_supermarketov: avg_by_category__amount__sum__cashflowcategory_name__set_supermarketov,
            label_500k_to_1M_share_r1: label_500k_to_1M_share_r1,
            avg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii: avg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii,
            bki_total_products: bki_total_products,
            avg_6m_all: avg_6m_all,
            dp_ils_avg_simultanious_jobs_5y: dp_ils_avg_simultanious_jobs_5y,
            dp_ewb_dismissal_due_contract_violation_by_lb_cnt: dp_ewb_dismissal_due_contract_violation_by_lb_cnt,
            summarur_1m_purch: summarur_1m_purch,
            diff_avg_cr_db_turn: diff_avg_cr_db_turn,
            dp_ils_cnt_changes_1y: dp_ils_cnt_changes_1y,
            dp_ils_employeers_cnt_last_month: dp_ils_employeers_cnt_last_month,
            dp_payoutincomedata_payout_avg_6_month: dp_payoutincomedata_payout_avg_6_month,
            dp_ewb_last_organization: dp_ewb_last_organization,
            by_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami: by_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami,
            bki_active_auto_cnt: bki_active_auto_cnt,
            turn_other_cr_avg_act_v2: turn_other_cr_avg_act_v2,
            cntVoiceOutMob6m: cntVoiceOutMob6m,
            avg_by_category__amount__sum__cashflowcategory_name__puteshestvija: avg_by_category__amount__sum__cashflowcategory_name__puteshestvija,
            loanacc_rur_amt_cm_avg: loanacc_rur_amt_cm_avg,
            transaction_category_supermarket_sum_cnt_m2: transaction_category_supermarket_sum_cnt_m2,
            transaction_category_supermarket_sum_amt_d15: transaction_category_supermarket_sum_amt_d15,
            avg_fdep_cr_turn: avg_fdep_cr_turn,
            transaction_category_restaurants_percent_cnt_2m: transaction_category_restaurants_percent_cnt_2m,
            bki_total_max_limit: bki_total_max_limit,
            avg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete: avg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete,
            transaction_category_restaurants_percent_amt_2m: transaction_category_restaurants_percent_amt_2m,
            turn_fdep_db_avg_act_v2: turn_fdep_db_avg_act_v2,
            dp_ils_accpayment_avg_6m: dp_ils_accpayment_avg_6m,
            turn_other_cr_sum_v2: turn_other_cr_sum_v2,
            client_active_flag: client_active_flag,
            avg_by_category__amount__sum__cashflowcategory_name__produkty: avg_by_category__amount__sum__cashflowcategory_name__produkty,
            curr_rur_amt_cm_avg_inc_v2: curr_rur_amt_cm_avg_inc_v2,
            nonresident_flag: nonresident_flag,
            avg_by_category__amount__sum__cashflowcategory_name__kosmetika: avg_by_category__amount__sum__cashflowcategory_name__kosmetika,
            vert_has_app_ru_vtb_invest: vert_has_app_ru_vtb_invest,
            dp_ils_avg_salary_3y: dp_ils_avg_salary_3y,
            hdb_bki_total_auto_max_limit: hdb_bki_total_auto_max_limit,
            days_after_last_request: days_after_last_request,
            cntRegionTripsWavg1m: cntRegionTripsWavg1m,
            vert_has_app_ru_cian_main: vert_has_app_ru_cian_main,
            loanacc_rur_amt_curr_v2: loanacc_rur_amt_curr_v2,
            avg_3m_no_cat: avg_3m_no_cat,
            vert_ghost_close_dpay3_last_days: vert_ghost_close_dpay3_last_days,
            vert_has_app_ru_raiffeisennews: vert_has_app_ru_raiffeisennews,
            dp_ils_days_ip_share_5y: dp_ils_days_ip_share_5y,
            avg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet: avg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet,
            hdb_bki_total_micro_max_overdue: hdb_bki_total_micro_max_overdue,
            bki_total_active_products: bki_total_active_products,
            by_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu: by_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu,
            calledCtnOutGroup: calledCtnOutGroup,
            vert_pil_loan_application_success_3m: vert_pil_loan_application_success_3m,
            vert_pil_fee_discount_change_3m: vert_pil_fee_discount_change_3m,
            businessTelSubs: businessTelSubs,
            profit_income_out_rur_amt_l2m: profit_income_out_rur_amt_l2m,
            avg_3m_healthcare_services: avg_3m_healthcare_services,
            dp_ils_paymentssum_month_avg: dp_ils_paymentssum_month_avg,
            ovrd_sum: ovrd_sum,
            hdb_bki_total_active_products: hdb_bki_total_active_products,
            hdb_bki_total_micro_cnt: hdb_bki_total_micro_cnt,
            hdb_bki_active_pil_cnt: hdb_bki_active_pil_cnt,
            loan_cur_amt: loan_cur_amt,
            mob_total_sessions: mob_total_sessions,
            period_last_act_ad: period_last_act_ad ? period_last_act_ad.format("YYYY-MM-DD") : "",
            dp_ils_days_multiple_job_share_2y: dp_ils_days_multiple_job_share_2y,
            hdb_bki_total_cc_max_overdue: hdb_bki_total_cc_max_overdue,
            lifetimeComp: lifetimeComp,
            hdb_bki_total_pil_last_days: hdb_bki_total_pil_last_days,
            amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi: amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi,
            turn_save_cr_max_v2: turn_save_cr_max_v2,
            hdb_bki_active_pil_max_limit: hdb_bki_active_pil_max_limit,
            dp_ils_accpayment_avg_3m: dp_ils_accpayment_avg_3m,
            avg_6m_restaurants: avg_6m_restaurants,
            hdb_bki_total_pil_cnt: hdb_bki_total_pil_cnt,
            transaction_category_fastfood_percent_cnt_2m: transaction_category_fastfood_percent_cnt_2m,
            hdb_bki_total_pil_max_del90: hdb_bki_total_pil_max_del90,
            accountsalary_out_flag: accountsalary_out_flag,
            cntBlockWavg6m: cntBlockWavg6m,
            express_rur_amt_cm_avg: express_rur_amt_cm_avg,
            loanacc_rur_amt_cm_avg_inc_v2: loanacc_rur_amt_cm_avg_inc_v2,
            hdb_bki_last_product_days: hdb_bki_last_product_days,
            dp_ils_days_multiple_job_cnt_5y: dp_ils_days_multiple_job_cnt_5y,
            dp_ils_accpayment_month_avg: dp_ils_accpayment_month_avg,
            cred_dda_rur_amt_3m_avg: cred_dda_rur_amt_3m_avg,
            avg_3m_all: avg_3m_all,
            hdb_other_active_max_psk: hdb_other_active_max_psk,
            hdb_bki_other_active_ip_outstanding: hdb_bki_other_active_ip_outstanding,
            total_sum: total_sum,
            dp_ils_uniq_companies_1y: dp_ils_uniq_companies_1y,
            avg_6m_travel: avg_6m_travel,
            avg_6m_government_services: avg_6m_government_services,
            hdb_bki_active_cc_max_overdue: hdb_bki_active_cc_max_overdue,
            total_rur_amt_cm_avg_period_days_ago_v2: total_rur_amt_cm_avg_period_days_ago_v2,
            label_Above_1M_share_r1: label_Above_1M_share_r1,
            transaction_category_supermarket_sum_cnt_d15: transaction_category_supermarket_sum_cnt_d15,
            max_balance_rur_amt_1m_af: max_balance_rur_amt_1m_af,
            id: id,
            w: w,
            first_salary_income: first_salary_income
        };
        const convertToCSV = (obj) => {
        const headers = Object.keys(obj).join(";");
        const values = Object.values(obj)
            .map(val => {
                if (typeof val === "string" && val.includes(";")) {
                    return `"${val}"`;
                }
                return val;
            })
            .join(";");
            return headers + "\n" + values;
        };

        const csvString = convertToCSV(payload);
        console.log(csvString);

        const blob = new Blob([csvString], { type: 'text/csv' });

        try 
        {
            await dispatch(askThunkCreator(blob, navigate));
        } 
        finally 
        {
            setLoading(false);
        }
    };

    const handleCSVUpload = (file) => {
        setLoading(true);
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (results.data.length > 0) {
                    const row = results.data[0];
                    const csvdt = row.dt?.trim();
                    const parseddt = dayjs(csvdt, "YYYY-MM-DD", true);
                    if (parseddt.isValid()) 
                    {
                        setdt(parseddt);
                    } 
                    else 
                    {
                        const parseddttry = dayjs(csvdt, "DD.MM.YYYY", true);
                        if (parseddttry.isValid()) 
                        {
                            setdt(parseddttry);
                        } 
                        else
                        {
                            setdt(null);
                        }
                    }
                    if (row.turn_cur_cr_avg_act_v2) setturn_cur_cr_avg_act_v2(row.turn_cur_cr_avg_act_v2);
                    if (row.salary_6to12m_avg) setsalary_6to12m_avg(row.salary_6to12m_avg);
                    if (row.hdb_bki_total_max_limit) sethdb_bki_total_max_limit(row.hdb_bki_total_max_limit);
                    if (row.dp_ils_paymentssum_avg_12m) setdp_ils_paymentssum_avg_12m(row.dp_ils_paymentssum_avg_12m);
                    if (row.hdb_bki_total_cc_max_limit) sethdb_bki_total_cc_max_limit(row.hdb_bki_total_cc_max_limit);
                    if (row.incomeValue) setincomeValue(row.incomeValue);
                    if (row.gender) setgender(row.gender);
                    if (row.avg_cur_cr_turn) setavg_cur_cr_turn(row.avg_cur_cr_turn);
                    if (row.adminarea) setadminarea(row.adminarea);
                    if (row.turn_cur_cr_avg_v2) setturn_cur_cr_avg_v2(row.turn_cur_cr_avg_v2);
                    if (row.turn_cur_cr_max_v2) setturn_cur_cr_max_v2(row.turn_cur_cr_max_v2);
                    if (row.hdb_bki_total_pil_max_limit) sethdb_bki_total_pil_max_limit(row.hdb_bki_total_pil_max_limit);
                    if (row.age) setage(row.age);
                    if (row.dp_ils_avg_salary_1y) setdp_ils_avg_salary_1y(row.dp_ils_avg_salary_1y);
                    if (row.turn_cur_cr_sum_v2) setturn_cur_cr_sum_v2(row.turn_cur_cr_sum_v2);
                    if (row.by_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp) setby_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp(row.by_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp);
                    if (row.turn_cur_db_sum_v2) setturn_cur_db_sum_v2(row.turn_cur_db_sum_v2);
                    if (row.turn_cur_db_avg_act_v2) setturn_cur_db_avg_act_v2(row.turn_cur_db_avg_act_v2);
                    if (row.dp_ils_avg_salary_2y) setdp_ils_avg_salary_2y(row.dp_ils_avg_salary_2y);
                    if (row.curr_rur_amt_cm_avg) setcurr_rur_amt_cm_avg(row.curr_rur_amt_cm_avg);
                    if (row.turn_cur_db_avg_v2) setturn_cur_db_avg_v2(row.turn_cur_db_avg_v2);
                    if (row.by_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp) setby_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp(row.by_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp);
                    if (row.dp_ils_paymentssum_avg_6m) setdp_ils_paymentssum_avg_6m(row.dp_ils_paymentssum_avg_6m);
                    if (row.avg_cur_db_turn) setavg_cur_db_turn(row.avg_cur_db_turn);
                    if (row.hdb_bki_active_cc_max_limit) sethdb_bki_active_cc_max_limit(row.hdb_bki_active_cc_max_limit);
                    if (row.incomeValueCategory) setincomeValueCategory(row.incomeValueCategory);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate) setavg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate(row.avg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate);
                    if (row.avg_credit_turn_rur) setavg_credit_turn_rur(row.avg_credit_turn_rur);
                    if (row.dp_ils_salary_ratio_1y3y) setdp_ils_salary_ratio_1y3y(row.dp_ils_salary_ratio_1y3y);
                    if (row.by_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona) setby_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona(row.by_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona);
                    if (row.turn_cur_cr_7avg_avg_v2) setturn_cur_cr_7avg_avg_v2(row.turn_cur_cr_7avg_avg_v2);
                    if (row.dp_ils_accpayment_avg_12m) setdp_ils_accpayment_avg_12m(row.dp_ils_accpayment_avg_12m);
                    if (row.curbal_usd_amt_cm_avg) setcurbal_usd_amt_cm_avg(row.curbal_usd_amt_cm_avg);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__supermarkety) setavg_by_category__amount__sum__cashflowcategory_name__supermarkety(row.avg_by_category__amount__sum__cashflowcategory_name__supermarkety);
                    if (row.avg_loan_cnt_with_insurance) setavg_loan_cnt_with_insurance(row.avg_loan_cnt_with_insurance);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__gipermarkety) setavg_by_category__amount__sum__cashflowcategory_name__gipermarkety(row.avg_by_category__amount__sum__cashflowcategory_name__gipermarkety);
                    if (row.city_smart_name) setcity_smart_name(row.city_smart_name);
                    if (row.uniV5) setuniV5(row.uniV5);
                    if (row.turn_cur_db_max_v2) setturn_cur_db_max_v2(row.turn_cur_db_max_v2);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__kafe) setavg_by_category__amount__sum__cashflowcategory_name__kafe(row.avg_by_category__amount__sum__cashflowcategory_name__kafe);
                    if (row.turn_other_db_max_v2) setturn_other_db_max_v2(row.turn_other_db_max_v2);
                    if (row.turn_cur_cr_min_v2) setturn_cur_cr_min_v2(row.turn_cur_cr_min_v2);
                    if (row.hdb_bki_other_active_pil_outstanding) sethdb_bki_other_active_pil_outstanding(row.hdb_bki_other_active_pil_outstanding);
                    if (row.dp_ewb_last_employment_position) setdp_ewb_last_employment_position(row.dp_ewb_last_employment_position);
                    if (row.turn_cur_db_min_v2) setturn_cur_db_min_v2(row.turn_cur_db_min_v2);
                    if (row.hdb_bki_total_products) sethdb_bki_total_products(row.hdb_bki_total_products);
                    if (row.per_capita_income_rur_amt) setper_capita_income_rur_amt(row.per_capita_income_rur_amt);
                    if (row.avg_debet_turn_rur) setavg_debet_turn_rur(row.avg_debet_turn_rur);
                    if (row.hdb_relend_active_max_psk) sethdb_relend_active_max_psk(row.hdb_relend_active_max_psk);
                    if (row.dda_rur_amt_curr_v2) setdda_rur_amt_curr_v2(row.dda_rur_amt_curr_v2);
                    if (row.mob_cnt_days) setmob_cnt_days(row.mob_cnt_days);
                    if (row.dp_ils_days_from_last_doc) setdp_ils_days_from_last_doc(row.dp_ils_days_from_last_doc);
                    if (row.avg_6m_money_transactions) setavg_6m_money_transactions(row.avg_6m_money_transactions);
                    if (row.transaction_category_supermarket_percent_cnt_2m) settransaction_category_supermarket_percent_cnt_2m(row.transaction_category_supermarket_percent_cnt_2m);
                    if (row.pil) setpil(row.pil);
                    if (row.hdb_bki_total_max_overdue_sum) sethdb_bki_total_max_overdue_sum(row.hdb_bki_total_max_overdue_sum);
                    if (row.avg_6m_clothing) setavg_6m_clothing(row.avg_6m_clothing);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi) setavg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi(row.avg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi);
                    if (row.addrref) setaddrref(row.addrref);
                    if (row.bki_total_auto_cnt) setbki_total_auto_cnt(row.bki_total_auto_cnt);
                    if (row.dp_payoutincomedata_payout_avg_3_month) setdp_payoutincomedata_payout_avg_3_month(row.dp_payoutincomedata_payout_avg_3_month);
                    if (row.hdb_outstand_sum) sethdb_outstand_sum(row.hdb_outstand_sum);
                    if (row.avg_3m_money_transactions) setavg_3m_money_transactions(row.avg_3m_money_transactions);
                    if (row.dp_address_unique_regions) setdp_address_unique_regions(row.dp_address_unique_regions);
                    if (row.min_balance_rur_amt_6m_af) setmin_balance_rur_amt_6m_af(row.min_balance_rur_amt_6m_af);
                    if (row.transaction_category_supermarket_sum_cnt_m3_4) settransaction_category_supermarket_sum_cnt_m3_4(row.transaction_category_supermarket_sum_cnt_m3_4);
                    if (row.dp_payoutincomedata_payout_max_3_month) setdp_payoutincomedata_payout_max_3_month(row.dp_payoutincomedata_payout_max_3_month);
                    if (row.hdb_bki_total_ip_max_limit) sethdb_bki_total_ip_max_limit(row.hdb_bki_total_ip_max_limit);
                    if (row.hdb_bki_total_cnt) sethdb_bki_total_cnt(row.hdb_bki_total_cnt);
                    if (row.blacklist_flag) setblacklist_flag(row.blacklist_flag);
                    if (row.bki_total_oth_cnt) setbki_total_oth_cnt(row.bki_total_oth_cnt);
                    if (row.dp_payoutincomedata_payout_sum_3_month) setdp_payoutincomedata_payout_sum_3_month(row.dp_payoutincomedata_payout_sum_3_month);
                    if (row.hdb_relend_outstand_sum) sethdb_relend_outstand_sum(row.hdb_relend_outstand_sum);
                    if (row.total_rur_amt_cm_avg) settotal_rur_amt_cm_avg(row.total_rur_amt_cm_avg);
                    if (row.mob_cover_days) setmob_cover_days(row.mob_cover_days);
                    if (row.dp_payoutincomedata_payout_max_6_month) setdp_payoutincomedata_payout_max_6_month(row.dp_payoutincomedata_payout_max_6_month);
                    if (row.label_Below_50k_share_r1) setlabel_Below_50k_share_r1(row.label_Below_50k_share_r1);
                    if (row.turn_fdep_db_sum_v2) setturn_fdep_db_sum_v2(row.turn_fdep_db_sum_v2);
                    if (row.dp_ils_accpayment_avg_6m_current) setdp_ils_accpayment_avg_6m_current(row.dp_ils_accpayment_avg_6m_current);
                    if (row.transaction_category_cash_percent_amt_2m) settransaction_category_cash_percent_amt_2m(row.transaction_category_cash_percent_amt_2m);
                    if (row.curr_rur_amt_3m_avg) setcurr_rur_amt_3m_avg(row.curr_rur_amt_3m_avg);
                    if (row.transaction_category_restaurants_sum_amt_m2) settransaction_category_restaurants_sum_amt_m2(row.transaction_category_restaurants_sum_amt_m2);
                    if (row.loan_cnt) setloan_cnt(row.loan_cnt);
                    if (row.turn_fdep_db_avg_v2) setturn_fdep_db_avg_v2(row.turn_fdep_db_avg_v2);
                    if (row.turn_cur_db_7avg_avg_v2) setturn_cur_db_7avg_avg_v2(row.turn_cur_db_7avg_avg_v2);
                    if (row.bki_total_ip_max_outstand) setbki_total_ip_max_outstand(row.bki_total_ip_max_outstand);
                    if (row.amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate) setamount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate(row.amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate);
                    if (row.profit_income_out_rur_amt_12m) setprofit_income_out_rur_amt_12m(row.profit_income_out_rur_amt_12m);
                    if (row.avg_6m_hotels) setavg_6m_hotels(row.avg_6m_hotels);
                    if (row.hdb_ovrd_sum) sethdb_ovrd_sum(row.hdb_ovrd_sum);
                    if (row.dp_ils_total_seniority) setdp_ils_total_seniority(row.dp_ils_total_seniority);
                    if (row.dp_ils_paymentssum_avg_6m_current) setdp_ils_paymentssum_avg_6m_current(row.dp_ils_paymentssum_avg_6m_current);
                    if (row.smsInWavg6m) setsmsInWavg6m(row.smsInWavg6m);
                    if (row.avg_fdep_db_turn) setavg_fdep_db_turn(row.avg_fdep_db_turn);
                    if (row.device_iphone_avg) setdevice_iphone_avg(row.device_iphone_avg);
                    if (row.by_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps) setby_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps(row.by_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps);
                    if (row.avg_balance_rur_amt_1m_af) setavg_balance_rur_amt_1m_af(row.avg_balance_rur_amt_1m_af);
                    if (row.curr_rur_amt_cm_avg_period_days_ago_v2) setcurr_rur_amt_cm_avg_period_days_ago_v2(row.curr_rur_amt_cm_avg_period_days_ago_v2);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__oteli) setavg_by_category__amount__sum__cashflowcategory_name__oteli(row.avg_by_category__amount__sum__cashflowcategory_name__oteli);
                    if (row.hdb_bki_total_ip_cnt) sethdb_bki_total_ip_cnt(row.hdb_bki_total_ip_cnt);
                    if (row.hdb_bki_active_cc_max_outstand) sethdb_bki_active_cc_max_outstand(row.hdb_bki_active_cc_max_outstand);
                    if (row.hdb_other_outstand_sum) sethdb_other_outstand_sum(row.hdb_other_outstand_sum);
                    if (row.days_to_last_transaction) setdays_to_last_transaction(row.days_to_last_transaction);
                    if (row.hdb_bki_total_pil_max_overdue) sethdb_bki_total_pil_max_overdue(row.hdb_bki_total_pil_max_overdue);
                    if (row.vert_pil_last_credit_step_screen_view_3m) setvert_pil_last_credit_step_screen_view_3m(row.vert_pil_last_credit_step_screen_view_3m);
                    if (row.acard) setacard(row.acard);
                    if (row.bki_total_il_max_limit) setbki_total_il_max_limit(row.bki_total_il_max_limit);
                    if (row.other_credits_count) setother_credits_count(row.other_credits_count);
                    if (row.tz_msk_timedelta) settz_msk_timedelta(row.tz_msk_timedelta);
                    if (row.turn_save_db_min_v2) setturn_save_db_min_v2(row.turn_save_db_min_v2);
                    if (row.profit_income_out_rur_amt_9m) setprofit_income_out_rur_amt_9m(row.profit_income_out_rur_amt_9m);
                    if (row.dp_ils_ipkcurrentyear_currentyearpensfactor) setdp_ils_ipkcurrentyear_currentyearpensfactor(row.dp_ils_ipkcurrentyear_currentyearpensfactor);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__odezhda) setavg_by_category__amount__sum__cashflowcategory_name__odezhda(row.avg_by_category__amount__sum__cashflowcategory_name__odezhda);
                    if (row.cntOnnRinCallAvg6m) setcntOnnRinCallAvg6m(row.cntOnnRinCallAvg6m);
                    if (row.dda_rur_amt_3m_avg) setdda_rur_amt_3m_avg(row.dda_rur_amt_3m_avg);
                    if (row.winback_cnt) setwinback_cnt(row.winback_cnt);
                    if (row.salary_median_in_gex_r1) setsalary_median_in_gex_r1(row.salary_median_in_gex_r1);
                    if (row.dp_payoutincomedata_payout_avg_prev_year) setdp_payoutincomedata_payout_avg_prev_year(row.dp_payoutincomedata_payout_avg_prev_year);
                    if (row.avg_amount_daily_transactions_90d) setavg_amount_daily_transactions_90d(row.avg_amount_daily_transactions_90d);
                    if (row.vert_has_app_ru_tinkoff_investing) setvert_has_app_ru_tinkoff_investing(row.vert_has_app_ru_tinkoff_investing);
                    if (row.transaction_category_supermarket_inc_cnt_2m) settransaction_category_supermarket_inc_cnt_2m(row.transaction_category_supermarket_inc_cnt_2m);
                    if (row.vert_pil_sms_success_3m) setvert_pil_sms_success_3m(row.vert_pil_sms_success_3m);
                    if (row.min_balance_rur_amt_1m_af) setmin_balance_rur_amt_1m_af(row.min_balance_rur_amt_1m_af);
                    if (row.dp_ils_max_seniority) setdp_ils_max_seniority(row.dp_ils_max_seniority);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__set_supermarketov) setavg_by_category__amount__sum__cashflowcategory_name__set_supermarketov(row.avg_by_category__amount__sum__cashflowcategory_name__set_supermarketov);
                    if (row.label_500k_to_1M_share_r1) setlabel_500k_to_1M_share_r1(row.label_500k_to_1M_share_r1);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii) setavg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii(row.avg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii);
                    if (row.bki_total_products) setbki_total_products(row.bki_total_products);
                    if (row.avg_6m_all) setavg_6m_all(row.avg_6m_all);
                    if (row.dp_ils_avg_simultanious_jobs_5y) setdp_ils_avg_simultanious_jobs_5y(row.dp_ils_avg_simultanious_jobs_5y);
                    if (row.dp_ewb_dismissal_due_contract_violation_by_lb_cnt) setdp_ewb_dismissal_due_contract_violation_by_lb_cnt(row.dp_ewb_dismissal_due_contract_violation_by_lb_cnt);
                    if (row.summarur_1m_purch) setsummarur_1m_purch(row.summarur_1m_purch);
                    if (row.diff_avg_cr_db_turn) setdiff_avg_cr_db_turn(row.diff_avg_cr_db_turn);
                    if (row.dp_ils_cnt_changes_1y) setdp_ils_cnt_changes_1y(row.dp_ils_cnt_changes_1y);
                    if (row.dp_ils_employeers_cnt_last_month) setdp_ils_employeers_cnt_last_month(row.dp_ils_employeers_cnt_last_month);
                    if (row.dp_payoutincomedata_payout_avg_6_month) setdp_payoutincomedata_payout_avg_6_month(row.dp_payoutincomedata_payout_avg_6_month);
                    if (row.dp_ewb_last_organization) setdp_ewb_last_organization(row.dp_ewb_last_organization);
                    if (row.by_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami) setby_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami(row.by_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami);
                    if (row.bki_active_auto_cnt) setbki_active_auto_cnt(row.bki_active_auto_cnt);
                    if (row.turn_other_cr_avg_act_v2) setturn_other_cr_avg_act_v2(row.turn_other_cr_avg_act_v2);
                    if (row.cntVoiceOutMob6m) setcntVoiceOutMob6m(row.cntVoiceOutMob6m);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__puteshestvija) setavg_by_category__amount__sum__cashflowcategory_name__puteshestvija(row.avg_by_category__amount__sum__cashflowcategory_name__puteshestvija);
                    if (row.loanacc_rur_amt_cm_avg) setloanacc_rur_amt_cm_avg(row.loanacc_rur_amt_cm_avg);
                    if (row.transaction_category_supermarket_sum_cnt_m2) settransaction_category_supermarket_sum_cnt_m2(row.transaction_category_supermarket_sum_cnt_m2);
                    if (row.transaction_category_supermarket_sum_amt_d15) settransaction_category_supermarket_sum_amt_d15(row.transaction_category_supermarket_sum_amt_d15);
                    if (row.avg_fdep_cr_turn) setavg_fdep_cr_turn(row.avg_fdep_cr_turn);
                    if (row.transaction_category_restaurants_percent_cnt_2m) settransaction_category_restaurants_percent_cnt_2m(row.transaction_category_restaurants_percent_cnt_2m);
                    if (row.bki_total_max_limit) setbki_total_max_limit(row.bki_total_max_limit);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete) setavg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete(row.avg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete);
                    if (row.transaction_category_restaurants_percent_amt_2m) settransaction_category_restaurants_percent_amt_2m(row.transaction_category_restaurants_percent_amt_2m);
                    if (row.turn_fdep_db_avg_act_v2) setturn_fdep_db_avg_act_v2(row.turn_fdep_db_avg_act_v2);
                    if (row.dp_ils_accpayment_avg_6m) setdp_ils_accpayment_avg_6m(row.dp_ils_accpayment_avg_6m);
                    if (row.turn_other_cr_sum_v2) setturn_other_cr_sum_v2(row.turn_other_cr_sum_v2);
                    if (row.client_active_flag) setclient_active_flag(row.client_active_flag);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__produkty) setavg_by_category__amount__sum__cashflowcategory_name__produkty(row.avg_by_category__amount__sum__cashflowcategory_name__produkty);
                    if (row.curr_rur_amt_cm_avg_inc_v2) setcurr_rur_amt_cm_avg_inc_v2(row.curr_rur_amt_cm_avg_inc_v2);
                    if (row.nonresident_flag) setnonresident_flag(row.nonresident_flag);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__kosmetika) setavg_by_category__amount__sum__cashflowcategory_name__kosmetika(row.avg_by_category__amount__sum__cashflowcategory_name__kosmetika);
                    if (row.vert_has_app_ru_vtb_invest) setvert_has_app_ru_vtb_invest(row.vert_has_app_ru_vtb_invest);
                    if (row.dp_ils_avg_salary_3y) setdp_ils_avg_salary_3y(row.dp_ils_avg_salary_3y);
                    if (row.hdb_bki_total_auto_max_limit) sethdb_bki_total_auto_max_limit(row.hdb_bki_total_auto_max_limit);
                    if (row.days_after_last_request) setdays_after_last_request(row.days_after_last_request);
                    if (row.cntRegionTripsWavg1m) setcntRegionTripsWavg1m(row.cntRegionTripsWavg1m);
                    if (row.vert_has_app_ru_cian_main) setvert_has_app_ru_cian_main(row.vert_has_app_ru_cian_main);
                    if (row.loanacc_rur_amt_curr_v2) setloanacc_rur_amt_curr_v2(row.loanacc_rur_amt_curr_v2);
                    if (row.avg_3m_no_cat) setavg_3m_no_cat(row.avg_3m_no_cat);
                    if (row.vert_ghost_close_dpay3_last_days) setvert_ghost_close_dpay3_last_days(row.vert_ghost_close_dpay3_last_days);
                    if (row.vert_has_app_ru_raiffeisennews) setvert_has_app_ru_raiffeisennews(row.vert_has_app_ru_raiffeisennews);
                    if (row.dp_ils_days_ip_share_5y) setdp_ils_days_ip_share_5y(row.dp_ils_days_ip_share_5y);
                    if (row.avg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet) setavg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet(row.avg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet);
                    if (row.hdb_bki_total_micro_max_overdue) sethdb_bki_total_micro_max_overdue(row.hdb_bki_total_micro_max_overdue);
                    if (row.bki_total_active_products) setbki_total_active_products(row.bki_total_active_products);
                    if (row.by_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu) setby_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu(row.by_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu);
                    if (row.calledCtnOutGroup) setcalledCtnOutGroup(row.calledCtnOutGroup);
                    if (row.vert_pil_loan_application_success_3m) setvert_pil_loan_application_success_3m(row.vert_pil_loan_application_success_3m);
                    if (row.vert_pil_fee_discount_change_3m) setvert_pil_fee_discount_change_3m(row.vert_pil_fee_discount_change_3m);
                    if (row.businessTelSubs) setbusinessTelSubs(row.businessTelSubs);
                    if (row.profit_income_out_rur_amt_l2m) setprofit_income_out_rur_amt_l2m(row.profit_income_out_rur_amt_l2m);
                    if (row.avg_3m_healthcare_services) setavg_3m_healthcare_services(row.avg_3m_healthcare_services);
                    if (row.dp_ils_paymentssum_month_avg) setdp_ils_paymentssum_month_avg(row.dp_ils_paymentssum_month_avg);
                    if (row.ovrd_sum) setovrd_sum(row.ovrd_sum);
                    if (row.hdb_bki_total_active_products) sethdb_bki_total_active_products(row.hdb_bki_total_active_products);
                    if (row.hdb_bki_total_micro_cnt) sethdb_bki_total_micro_cnt(row.hdb_bki_total_micro_cnt);
                    if (row.hdb_bki_active_pil_cnt) sethdb_bki_active_pil_cnt(row.hdb_bki_active_pil_cnt);
                    if (row.loan_cur_amt) setloan_cur_amt(row.loan_cur_amt);
                    if (row.mob_total_sessions) setmob_total_sessions(row.mob_total_sessions);
                    const csvperiod_last_act_ad = row.period_last_act_ad?.trim();
                    const parsedperiod_last_act_ad = dayjs(csvperiod_last_act_ad, "YYYY-MM-DD", true);
                    if (parsedperiod_last_act_ad.isValid()) 
                    {
                        setperiod_last_act_ad(parsedperiod_last_act_ad);
                    } 
                    else 
                    {
                        const parsedperiod_last_act_adtry = dayjs(csvperiod_last_act_ad, "DD.MM.YYYY", true);
                        if (parsedperiod_last_act_adtry.isValid()) 
                        {
                            setperiod_last_act_ad(parsedperiod_last_act_adtry);
                        } 
                        else
                        {
                            setperiod_last_act_ad(null);
                        }
                    }
                    if (row.dp_ils_days_multiple_job_share_2y) setdp_ils_days_multiple_job_share_2y(row.dp_ils_days_multiple_job_share_2y);
                    if (row.hdb_bki_total_cc_max_overdue) sethdb_bki_total_cc_max_overdue(row.hdb_bki_total_cc_max_overdue);
                    if (row.lifetimeComp) setlifetimeComp(row.lifetimeComp);
                    if (row.hdb_bki_total_pil_last_days) sethdb_bki_total_pil_last_days(row.hdb_bki_total_pil_last_days);
                    if (row.amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi) setamount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi(row.amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi);
                    if (row.turn_save_cr_max_v2) setturn_save_cr_max_v2(row.turn_save_cr_max_v2);
                    if (row.hdb_bki_active_pil_max_limit) sethdb_bki_active_pil_max_limit(row.hdb_bki_active_pil_max_limit);
                    if (row.dp_ils_accpayment_avg_3m) setdp_ils_accpayment_avg_3m(row.dp_ils_accpayment_avg_3m);
                    if (row.avg_6m_restaurants) setavg_6m_restaurants(row.avg_6m_restaurants);
                    if (row.hdb_bki_total_pil_cnt) sethdb_bki_total_pil_cnt(row.hdb_bki_total_pil_cnt);
                    if (row.transaction_category_fastfood_percent_cnt_2m) settransaction_category_fastfood_percent_cnt_2m(row.transaction_category_fastfood_percent_cnt_2m);
                    if (row.hdb_bki_total_pil_max_del90) sethdb_bki_total_pil_max_del90(row.hdb_bki_total_pil_max_del90);
                    if (row.accountsalary_out_flag) setaccountsalary_out_flag(row.accountsalary_out_flag);
                    if (row.cntBlockWavg6m) setcntBlockWavg6m(row.cntBlockWavg6m);
                    if (row.express_rur_amt_cm_avg) setexpress_rur_amt_cm_avg(row.express_rur_amt_cm_avg);
                    if (row.loanacc_rur_amt_cm_avg_inc_v2) setloanacc_rur_amt_cm_avg_inc_v2(row.loanacc_rur_amt_cm_avg_inc_v2);
                    if (row.hdb_bki_last_product_days) sethdb_bki_last_product_days(row.hdb_bki_last_product_days);
                    if (row.dp_ils_days_multiple_job_cnt_5y) setdp_ils_days_multiple_job_cnt_5y(row.dp_ils_days_multiple_job_cnt_5y);
                    if (row.dp_ils_accpayment_month_avg) setdp_ils_accpayment_month_avg(row.dp_ils_accpayment_month_avg);
                    if (row.cred_dda_rur_amt_3m_avg) setcred_dda_rur_amt_3m_avg(row.cred_dda_rur_amt_3m_avg);
                    if (row.avg_3m_all) setavg_3m_all(row.avg_3m_all);
                    if (row.hdb_other_active_max_psk) sethdb_other_active_max_psk(row.hdb_other_active_max_psk);
                    if (row.hdb_bki_other_active_ip_outstanding) sethdb_bki_other_active_ip_outstanding(row.hdb_bki_other_active_ip_outstanding);
                    if (row.total_sum) settotal_sum(row.total_sum);
                    if (row.dp_ils_uniq_companies_1y) setdp_ils_uniq_companies_1y(row.dp_ils_uniq_companies_1y);
                    if (row.avg_6m_travel) setavg_6m_travel(row.avg_6m_travel);
                    if (row.avg_6m_government_services) setavg_6m_government_services(row.avg_6m_government_services);
                    if (row.hdb_bki_active_cc_max_overdue) sethdb_bki_active_cc_max_overdue(row.hdb_bki_active_cc_max_overdue);
                    if (row.total_rur_amt_cm_avg_period_days_ago_v2) settotal_rur_amt_cm_avg_period_days_ago_v2(row.total_rur_amt_cm_avg_period_days_ago_v2);
                    if (row.label_Above_1M_share_r1) setlabel_Above_1M_share_r1(row.label_Above_1M_share_r1);
                    if (row.transaction_category_supermarket_sum_cnt_d15) settransaction_category_supermarket_sum_cnt_d15(row.transaction_category_supermarket_sum_cnt_d15);
                    if (row.max_balance_rur_amt_1m_af) setmax_balance_rur_amt_1m_af(row.max_balance_rur_amt_1m_af);
                    if (row.id) setid(row.id);
                    if (row.w) setw(row.w);
                    if (row.first_salary_income) setfirst_salary_income(row.first_salary_income);
                    message.success("CSV успешно загружен и поля заполнены");
                    setLoading(false);
                }
            },
            error: (err) => {
                message.error("Ошибка при чтении CSV: " + err.message);
                setLoading(false);
            }
        });
        return false;
    };

    const handleClear = () => {
        setdt(null);
        setturn_cur_cr_avg_act_v2("");
        setsalary_6to12m_avg("");
        sethdb_bki_total_max_limit("");
        setdp_ils_paymentssum_avg_12m("");
        sethdb_bki_total_cc_max_limit("");
        setincomeValue("");
        setgender("");
        setavg_cur_cr_turn("");
        setadminarea("");
        setturn_cur_cr_avg_v2("");
        setturn_cur_cr_max_v2("");
        sethdb_bki_total_pil_max_limit("");
        setage("");
        setdp_ils_avg_salary_1y("");
        setturn_cur_cr_sum_v2("");
        setby_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp("");
        setturn_cur_db_sum_v2("");
        setturn_cur_db_avg_act_v2("");
        setdp_ils_avg_salary_2y("");
        setcurr_rur_amt_cm_avg("");
        setturn_cur_db_avg_v2("");
        setby_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp("");
        setdp_ils_paymentssum_avg_6m("");
        setavg_cur_db_turn("");
        sethdb_bki_active_cc_max_limit("");
        setincomeValueCategory("");
        setavg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate("");
        setavg_credit_turn_rur("");
        setdp_ils_salary_ratio_1y3y("");
        setby_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona("");
        setturn_cur_cr_7avg_avg_v2("");
        setdp_ils_accpayment_avg_12m("");
        setcurbal_usd_amt_cm_avg("");
        setavg_by_category__amount__sum__cashflowcategory_name__supermarkety("");
        setavg_loan_cnt_with_insurance("");
        setavg_by_category__amount__sum__cashflowcategory_name__gipermarkety("");
        setcity_smart_name("");
        setuniV5("");
        setturn_cur_db_max_v2("");
        setavg_by_category__amount__sum__cashflowcategory_name__kafe("");
        setturn_other_db_max_v2("");
        setturn_cur_cr_min_v2("");
        sethdb_bki_other_active_pil_outstanding("");
        setdp_ewb_last_employment_position("");
        setturn_cur_db_min_v2("");
        sethdb_bki_total_products("");
        setper_capita_income_rur_amt("");
        setavg_debet_turn_rur("");
        sethdb_relend_active_max_psk("");
        setdda_rur_amt_curr_v2("");
        setmob_cnt_days("");
        setdp_ils_days_from_last_doc("");
        setavg_6m_money_transactions("");
        settransaction_category_supermarket_percent_cnt_2m("");
        setpil("");
        sethdb_bki_total_max_overdue_sum("");
        setavg_6m_clothing("");
        setavg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi("");
        setaddrref("");
        setbki_total_auto_cnt("");
        setdp_payoutincomedata_payout_avg_3_month("");
        sethdb_outstand_sum("");
        setavg_3m_money_transactions("");
        setdp_address_unique_regions("");
        setmin_balance_rur_amt_6m_af("");
        settransaction_category_supermarket_sum_cnt_m3_4("");
        setdp_payoutincomedata_payout_max_3_month("");
        sethdb_bki_total_ip_max_limit("");
        sethdb_bki_total_cnt("");
        setblacklist_flag("");
        setbki_total_oth_cnt("");
        setdp_payoutincomedata_payout_sum_3_month("");
        sethdb_relend_outstand_sum("");
        settotal_rur_amt_cm_avg("");
        setmob_cover_days("");
        setdp_payoutincomedata_payout_max_6_month("");
        setlabel_Below_50k_share_r1("");
        setturn_fdep_db_sum_v2("");
        setdp_ils_accpayment_avg_6m_current("");
        settransaction_category_cash_percent_amt_2m("");
        setcurr_rur_amt_3m_avg("");
        settransaction_category_restaurants_sum_amt_m2("");
        setloan_cnt("");
        setturn_fdep_db_avg_v2("");
        setturn_cur_db_7avg_avg_v2("");
        setbki_total_ip_max_outstand("");
        setamount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate("");
        setprofit_income_out_rur_amt_12m("");
        setavg_6m_hotels("");
        sethdb_ovrd_sum("");
        setdp_ils_total_seniority("");
        setdp_ils_paymentssum_avg_6m_current("");
        setsmsInWavg6m("");
        setavg_fdep_db_turn("");
        setdevice_iphone_avg("");
        setby_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps("");
        setavg_balance_rur_amt_1m_af("");
        setcurr_rur_amt_cm_avg_period_days_ago_v2("");
        setavg_by_category__amount__sum__cashflowcategory_name__oteli("");
        sethdb_bki_total_ip_cnt("");
        sethdb_bki_active_cc_max_outstand("");
        sethdb_other_outstand_sum("");
        setdays_to_last_transaction("");
        sethdb_bki_total_pil_max_overdue("");
        setvert_pil_last_credit_step_screen_view_3m("");
        setacard("");
        setbki_total_il_max_limit("");
        setother_credits_count("");
        settz_msk_timedelta("");
        setturn_save_db_min_v2("");
        setprofit_income_out_rur_amt_9m("");
        setdp_ils_ipkcurrentyear_currentyearpensfactor("");
        setavg_by_category__amount__sum__cashflowcategory_name__odezhda("");
        setcntOnnRinCallAvg6m("");
        setdda_rur_amt_3m_avg("");
        setwinback_cnt("");
        setsalary_median_in_gex_r1("");
        setdp_payoutincomedata_payout_avg_prev_year("");
        setavg_amount_daily_transactions_90d("");
        setvert_has_app_ru_tinkoff_investing("");
        settransaction_category_supermarket_inc_cnt_2m("");
        setvert_pil_sms_success_3m("");
        setmin_balance_rur_amt_1m_af("");
        setdp_ils_max_seniority("");
        setavg_by_category__amount__sum__cashflowcategory_name__set_supermarketov("");
        setlabel_500k_to_1M_share_r1("");
        setavg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii("");
        setbki_total_products("");
        setavg_6m_all("");
        setdp_ils_avg_simultanious_jobs_5y("");
        setdp_ewb_dismissal_due_contract_violation_by_lb_cnt("");
        setsummarur_1m_purch("");
        setdiff_avg_cr_db_turn("");
        setdp_ils_cnt_changes_1y("");
        setdp_ils_employeers_cnt_last_month("");
        setdp_payoutincomedata_payout_avg_6_month("");
        setdp_ewb_last_organization("");
        setby_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami("");
        setbki_active_auto_cnt("");
        setturn_other_cr_avg_act_v2("");
        setcntVoiceOutMob6m("");
        setavg_by_category__amount__sum__cashflowcategory_name__puteshestvija("");
        setloanacc_rur_amt_cm_avg("");
        settransaction_category_supermarket_sum_cnt_m2("");
        settransaction_category_supermarket_sum_amt_d15("");
        setavg_fdep_cr_turn("");
        settransaction_category_restaurants_percent_cnt_2m("");
        setbki_total_max_limit("");
        setavg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete("");
        settransaction_category_restaurants_percent_amt_2m("");
        setturn_fdep_db_avg_act_v2("");
        setdp_ils_accpayment_avg_6m("");
        setturn_other_cr_sum_v2("");
        setclient_active_flag("");
        setavg_by_category__amount__sum__cashflowcategory_name__produkty("");
        setcurr_rur_amt_cm_avg_inc_v2("");
        setnonresident_flag("");
        setavg_by_category__amount__sum__cashflowcategory_name__kosmetika("");
        setvert_has_app_ru_vtb_invest("");
        setdp_ils_avg_salary_3y("");
        sethdb_bki_total_auto_max_limit("");
        setdays_after_last_request("");
        setcntRegionTripsWavg1m("");
        setvert_has_app_ru_cian_main("");
        setloanacc_rur_amt_curr_v2("");
        setavg_3m_no_cat("");
        setvert_ghost_close_dpay3_last_days("");
        setvert_has_app_ru_raiffeisennews("");
        setdp_ils_days_ip_share_5y("");
        setavg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet("");
        sethdb_bki_total_micro_max_overdue("");
        setbki_total_active_products("");
        setby_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu("");
        setcalledCtnOutGroup("");
        setvert_pil_loan_application_success_3m("");
        setvert_pil_fee_discount_change_3m("");
        setbusinessTelSubs("");
        setprofit_income_out_rur_amt_l2m("");
        setavg_3m_healthcare_services("");
        setdp_ils_paymentssum_month_avg("");
        setovrd_sum("");
        sethdb_bki_total_active_products("");
        sethdb_bki_total_micro_cnt("");
        sethdb_bki_active_pil_cnt("");
        setloan_cur_amt("");
        setmob_total_sessions("");
        setperiod_last_act_ad(null);
        setdp_ils_days_multiple_job_share_2y("");
        sethdb_bki_total_cc_max_overdue("");
        setlifetimeComp("");
        sethdb_bki_total_pil_last_days("");
        setamount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi("");
        setturn_save_cr_max_v2("");
        sethdb_bki_active_pil_max_limit("");
        setdp_ils_accpayment_avg_3m("");
        setavg_6m_restaurants("");
        sethdb_bki_total_pil_cnt("");
        settransaction_category_fastfood_percent_cnt_2m("");
        sethdb_bki_total_pil_max_del90("");
        setaccountsalary_out_flag("");
        setcntBlockWavg6m("");
        setexpress_rur_amt_cm_avg("");
        setloanacc_rur_amt_cm_avg_inc_v2("");
        sethdb_bki_last_product_days("");
        setdp_ils_days_multiple_job_cnt_5y("");
        setdp_ils_accpayment_month_avg("");
        setcred_dda_rur_amt_3m_avg("");
        setavg_3m_all("");
        sethdb_other_active_max_psk("");
        sethdb_bki_other_active_ip_outstanding("");
        settotal_sum("");
        setdp_ils_uniq_companies_1y("");
        setavg_6m_travel("");
        setavg_6m_government_services("");
        sethdb_bki_active_cc_max_overdue("");
        settotal_rur_amt_cm_avg_period_days_ago_v2("");
        setlabel_Above_1M_share_r1("");
        settransaction_category_supermarket_sum_cnt_d15("");
        setmax_balance_rur_amt_1m_af("");
        setid("");
        setw("");
        setfirst_salary_income("");
    };


    return (
        <div style={{ width: '75%', marginBottom: '2%' }}>
            <Row align="middle">
                <h1>Данные клиента</h1>
            </Row>
            <div style={{ width: '100%', marginBottom: '2%' }}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Upload beforeUpload={handleCSVUpload} showUploadList={false} accept=".csv">
                            <Button type="default">Загрузить CSV</Button>
                        </Upload>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" block style={{ backgroundColor: '#ff2020ff', marginLeft: 'auto' }} onClick={handleClear} icon={<CloseOutlined />}>
                            Очистить
                        </Button>
                    </Col>
                </Row>
            </div>
            <Spin spinning={loading} tip="Ожидайте">
                <Card style={{ width: '100%', boxSizing: 'border-box', backgroundColor: '#f6f6fb' }}>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Дата события</span>
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        value={dt}
                                        onChange={(date) => setdt(date)}
                                        disabledDate={(current) => current && current > dayjs()}
                                        format="YYYY-MM-DD"
                                    />
                                </Col>
                                <Col span={12}>
                                    <span>Средний текущий кредитовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_cr_avg_act_v2} onChange={e => {
                                            const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_cr_avg_act_v2(val);
                                            }
                                        }} min={0}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Усреднённая ЗП клиента</span>
                                    <Input type="text" value={salary_6to12m_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setsalary_6to12m_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Максимальный кредитный лимит по любому продукту за все время</span>
                                    <Input type="text" value={hdb_bki_total_max_limit} onChange={value => sethdb_bki_total_max_limit(value)}
                                        min={0}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_paymentssum_avg_12m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_paymentssum_avg_12m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Максимальный лимит по кредитному продукту Кредитная карта за все время</span>
                                    <Input type="text" value={hdb_bki_total_cc_max_limit} onChange={value => sethdb_bki_total_cc_max_limit(value)}
                                        min={0}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Значение дохода абонента</span>
                                    <Input type="text" value={incomeValue} onChange={value => setincomeValue(value)}
                                        min={0}
                                    />
                                </Col>
                                <Col span={12}>
                                    <span>Пол клиента</span>
                                    <Select style={{ width: '100%' }} value={gender} onChange={value => setgender(value)} placeholder="Выберите пол">
                                        <Select.Option value=""></Select.Option>
                                        <Select.Option value="Мужской">Мужской</Select.Option>
                                        <Select.Option value="Женский">Женский</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний кредитовый оборот по текущим счетам за 3 месяца</span>
                                    <Input type="text" value={avg_cur_cr_turn}  onChange={value => setavg_cur_cr_turn(value)}
                                        min={0}
                                    />
                                </Col>
                                <Col span={12}>
                                    <span>Регион клиента по geo cross model</span>
                                    <Input value={adminarea} onChange={e => setadminarea(e.target.value)} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний кредитовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_cr_avg_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_cr_avg_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Максимальный кредитовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_cr_max_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_cr_max_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Максимальный лимит по кредитному продукту Кредит за все время</span>
                                    <Input type="text" value={hdb_bki_total_pil_max_limit} onChange={value => sethdb_bki_total_pil_max_limit(value)}
                                        min={0}
                                    />
                                </Col>
                                <Col span={12}>
                                    <span>Возраст клиента</span>
                                    <Input type="text" value={age} onChange={value => setage(value)} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_avg_salary_1y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_avg_salary_1y(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Общий кредитовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_cr_sum_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_cr_sum_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма электронных операций в категории - Исходящий быстрый платеж СБП за месяц на протяжении года</span>
                                    <Input type="text" value={by_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setby_category__amount__sum__eoperation_type_name__ishodjaschij_bystryj_platezh_sbp(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Общий дебетовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_db_sum_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_db_sum_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний текущий дебетовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_db_avg_act_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_db_avg_act_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_avg_salary_2y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_avg_salary_2y(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Среднее за 12 месяцев среднемесячных остатков на группе счетов Основные текущие счета</span>
                                    <Input type="text" value={curr_rur_amt_cm_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcurr_rur_amt_cm_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средний дебетовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_db_avg_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_db_avg_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма электронных операций в категории - Входящий быстрый платеж СБП за месяц на протяжении года</span>
                                    <Input type="text" value={by_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setby_category__amount__sum__eoperation_type_name__vhodjaschij_bystryj_platezh_sbp(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_paymentssum_avg_6m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_paymentssum_avg_6m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний дебетовый оборот по текущим счетам за 3 месяца</span>
                                    <Input type="text" value={avg_cur_db_turn} onChange={e => setavg_cur_db_turn(e.target.value)}min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Максимальный лимит по активному кредитному продукту Кредитная карта</span>
                                    <Input type="text" value={hdb_bki_active_cc_max_limit} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_active_cc_max_limit(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Категория дохода абонента</span>
                                    <Input type="text" value={incomeValueCategory} onChange={e => setincomeValueCategory(e.target.value)} min={0} max={12}/>
                                </Col>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Выдача наличных в банкомате за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний кредитовый оборот по всем счетам за 3 месяца</span>
                                    <Input type="text" value={avg_credit_turn_rur} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_credit_turn_rur(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_salary_ratio_1y3y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_salary_ratio_1y3y(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма электронных операций в категории - Перевод по номеру телефона за месяц на протяжении года</span>
                                    <Input type="text" value={by_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setby_category__amount__sum__eoperation_type_name__perevod_po_nomeru_telefona(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средний кредитовый оборот за последние 7 дней по текущим счетам</span>
                                    <Input type="text" value={turn_cur_cr_7avg_avg_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_cr_7avg_avg_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_accpayment_avg_12m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_accpayment_avg_12m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средний баланс текущих счетов за последние 3 месяца</span>
                                    <Input type="text" value={curbal_usd_amt_cm_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcurbal_usd_amt_cm_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Супермаркеты за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__supermarkety} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__supermarkety(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Среднее число кредитов наличными со страховкой, начиная с 2018 года</span>
                                    <Input type="text" value={avg_loan_cnt_with_insurance} onChange={e => setavg_loan_cnt_with_insurance(e.target.value)} min={0} max={1}/>
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Гипермаркеты за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__gipermarkety} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__gipermarkety(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Город клиента по методике SMART</span>
                                    <Input value={city_smart_name} onChange={e => setcity_smart_name(e.target.value)} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Скоринг-отчет для банка V5</span>
                                    <Input type="text" value={uniV5} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setuniV5(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Максимальный дебетовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_db_max_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_db_max_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Кафе за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__kafe} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__kafe(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Максимальный дебетовый оборот по другим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_other_db_max_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_other_db_max_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Минимальный кредитовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_cr_min_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_cr_min_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Суммарная задолженность по крединым продуктам Кредит в других банках</span>
                                    <Input type="text" value={hdb_bki_other_active_pil_outstanding} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_other_active_pil_outstanding(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input value={dp_ewb_last_employment_position} onChange={e => setdp_ewb_last_employment_position(e.target.value)} />
                                </Col>
                                <Col span={12}>
                                    <span>Минимальный дебетовый оборот по текущим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_cur_db_min_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_db_min_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Число кредитных продуктов, в которых клиент является основным заемщиком</span>
                                    <Input type="text" value={hdb_bki_total_products} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_products(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Среднедушевой доход в регионе клиента по Росстату</span>
                                    <Input type="text" value={per_capita_income_rur_amt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setper_capita_income_rur_amt(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний дебетовый оборот по всем счетам за 3 месяца</span>
                                    <Input type="text" value={avg_debet_turn_rur} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_debet_turn_rur(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Максимальная ПСК по активным кредитным продуктам клиента Кредит наличным, Кредитная карта, Микрокредит, Другой</span>
                                    <Input type="text" value={hdb_relend_active_max_psk} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_relend_active_max_psk(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Сумма средств клиента на группе счетов Счета до востребования</span>
                                    <Input type="text" value={dda_rur_amt_curr_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdda_rur_amt_curr_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество дней, в которые клиент заходил в Альфа-Мобайл за 90 дней</span>
                                    <Input type="text" value={mob_cnt_days} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setmob_cnt_days(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_days_from_last_doc} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_days_from_last_doc(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средние за 6 месяцев траты по группе MCC кодов: Финансовые услуги</span>
                                    <Input type="text" value={avg_6m_money_transactions} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_6m_money_transactions(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Доля количества транзакций в категории Супермаркеты от общего количества транзакций за 2 месяца</span>
                                    <Input type="text" value={transaction_category_supermarket_percent_cnt_2m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_supermarket_percent_cnt_2m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество кредитов наличными</span>
                                    <Input type="text" value={pil} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setpil(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Максимальная сумма просрочки за все время на клиента</span>
                                    <Input type="text" value={hdb_bki_total_max_overdue_sum} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_max_overdue_sum(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средние за 6 месяцев траты по группе MCC кодов: Одежда</span>
                                    <Input type="text" value={avg_6m_clothing} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_6m_clothing(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Электронные деньги за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__elektronnye_dengi(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Регион отделения</span>
                                    <Input value={addrref} onChange={e => setaddrref(e.target.value)} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество кредитных продуктов Автокредит за все время</span>
                                    <Input type="text" value={bki_total_auto_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setbki_total_auto_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_payoutincomedata_payout_avg_3_month} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_payoutincomedata_payout_avg_3_month(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Сумма задолженности</span>
                                    <Input type="text" value={hdb_outstand_sum} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_outstand_sum(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средние за 3 месяца траты по группе MCC кодов: Финансовые услуги</span>
                                    <Input type="text" value={avg_3m_money_transactions} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_3m_money_transactions(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_address_unique_regions} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_address_unique_regions(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Минимальный баланс за последние 6 месяцев по всем фабрикам</span>
                                    <Input type="text" value={min_balance_rur_amt_6m_af} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setmin_balance_rur_amt_6m_af(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество транзакций в категории Супермаркеты в интервале 3 ... 4 месяцев</span>
                                    <Input type="text" value={transaction_category_supermarket_sum_cnt_m3_4} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_supermarket_sum_cnt_m3_4(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_payoutincomedata_payout_max_3_month} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_payoutincomedata_payout_max_3_month(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Максимальный лимит по кредитному продукту Ипотека за все время</span>
                                    <Input type="text" value={hdb_bki_total_ip_max_limit} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_ip_max_limit(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Число обращений в БКИ по клиенту</span>
                                    <Input type="text" value={hdb_bki_total_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Флаг черного списка</span>
                                    <Input type="text" value={blacklist_flag} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setblacklist_flag(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество кредитных продуктов Другой за все время</span>
                                    <Input type="text" value={bki_total_oth_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setbki_total_oth_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_payoutincomedata_payout_sum_3_month} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_payoutincomedata_payout_sum_3_month(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Сумма задолженности по продуктам Кредит наличным, Кредитная карта, Микрокредит, Другой</span>
                                    <Input type="text" value={hdb_relend_outstand_sum} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_relend_outstand_sum(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Среднее за 12 месяцев среднемесячных остатков на группе счетов Собственные средства</span>
                                    <Input type="text" value={total_rur_amt_cm_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settotal_rur_amt_cm_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество дней, в течение которых клиент заходил в Альфа-Мобайле, поделенные на период 90 дней</span>
                                    <Input type="text" value={mob_cover_days} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setmob_cover_days(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_payoutincomedata_payout_max_6_month} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_payoutincomedata_payout_max_6_month(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Внешние данные</span>
                                    <Input type="text" value={label_Below_50k_share_r1} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setlabel_Below_50k_share_r1(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Общий дебетовый оборот по депозитным счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_fdep_db_sum_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_fdep_db_sum_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_accpayment_avg_6m_current} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_accpayment_avg_6m_current(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Доля суммы транзакций в категории Cash от общей суммы транзакций за 2 месяца</span>
                                    <Input type="text" value={transaction_category_cash_percent_amt_2m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_cash_percent_amt_2m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Среднее за 3 месяца среднемесячных остатков на группе счетов Основные текущие счета</span>
                                    <Input type="text" value={curr_rur_amt_3m_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcurr_rur_amt_3m_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Сумма транзакций в категории Рестораны за 2 месяца</span>
                                    <Input type="text" value={transaction_category_restaurants_sum_amt_m2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_restaurants_sum_amt_m2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Число кредитов наличными у клиента, начиная с 2018 года</span>
                                    <Input type="text" value={loan_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setloan_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний дебетовый оборот по депозитным счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_fdep_db_avg_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_fdep_db_avg_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средний дебетовый оборот за последние 7 дней по текущим счетам</span>
                                    <Input type="text" value={turn_cur_db_7avg_avg_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_cur_db_7avg_avg_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Максимальная задолженность по кредитному продукту Ипотека</span>
                                    <Input type="text" value={bki_total_ip_max_outstand} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setbki_total_ip_max_outstand(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Сумма транзакций за 90 дней в категории Выдача наличных в банкомате</span>
                                    <Input type="text" value={amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setamount_by_category_90d__summarur_amt__sum__cashflowcategory_name__vydacha_nalichnyh_v_bankomate(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний операционный доход за 12 месяцев до даты расчета</span>
                                    <Input type="text" value={profit_income_out_rur_amt_12m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setprofit_income_out_rur_amt_12m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средние за 6 месяцев траты по группе MCC кодов: Отели</span>
                                    <Input type="text" value={avg_6m_hotels} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_6m_hotels(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Сумма просрочки</span>
                                    <Input type="text" value={hdb_ovrd_sum} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_ovrd_sum(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_total_seniority} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_total_seniority(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_paymentssum_avg_6m_current} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_paymentssum_avg_6m_current(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средневзвешенное значение “среднемесячного кол-ва входящих сообщений абонентов Компании за 6 месяцев, включая отчетный” по группе общения</span>
                                    <Input type="text" value={smsInWavg6m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setsmsInWavg6m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний дебетовый оборот по депозитным счетам за 3 месяца</span>
                                    <Input type="text" value={avg_fdep_db_turn} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_fdep_db_turn(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Доля сессий в Альфа-Мобайле с устройства iphone за период 90 дней</span>
                                    <Input type="text" value={device_iphone_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdevice_iphone_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма электронных операций в категории - Платёж за мобильный через ПС за месяц на протяжении года</span>
                                    <Input type="text" value={by_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setby_category__amount__sum__eoperation_type_name__platezh_za_mobilnyj_cherez_ps(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средний баланс за последний месяц по всем фабрикам</span>
                                    <Input type="text" value={avg_balance_rur_amt_1m_af} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_balance_rur_amt_1m_af(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма средств клиента на группе счетов Основные текущие счета за 2 месяца до даты расчета</span>
                                    <Input type="text" value={curr_rur_amt_cm_avg_period_days_ago_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcurr_rur_amt_cm_avg_period_days_ago_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Отели за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__oteli} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__oteli(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Количество кредитных продуктов Ипотека за все время</span>
                                    <Input type="text" value={hdb_bki_total_ip_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_ip_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Максимальная текущая задолженность по кредитному продукту Кредитная карта</span>
                                    <Input type="text" value={hdb_bki_active_cc_max_outstand} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_active_cc_max_outstand(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Сумма задолженности по крединым продуктам в других банках</span>
                                    <Input type="text" value={hdb_other_outstand_sum} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_other_outstand_sum(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество дней до последней транзакции</span>
                                    <Input type="text" value={days_to_last_transaction} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdays_to_last_transaction(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Максимальная просрочка по кредитному продукту Кредит за все время</span>
                                    <Input type="text" value={hdb_bki_total_pil_max_overdue} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_pil_max_overdue(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество событий вида 'Last Credit Step Screen View' за 3 месяца</span>
                                    <Input type="text" value={vert_pil_last_credit_step_screen_view_3m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setvert_pil_last_credit_step_screen_view_3m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество Альфа-карт</span>
                                    <Input type="text" value={acard} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setacard(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Максимальный лимит по кредитному продукту Кредит</span>
                                    <Input type="text" value={bki_total_il_max_limit} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setbki_total_il_max_limit(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество кредитных продуктов в других банках</span>
                                    <Input type="text" value={other_credits_count} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setother_credits_count(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Таймзона относительно Москвы</span>
                                    <Input type="text" value={tz_msk_timedelta} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settz_msk_timedelta(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Минимальный дебетовый оборот по накопительным счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_save_db_min_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_save_db_min_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средний операционный доход за 9 месяцев до даты расчета</span>
                                    <Input type="text" value={profit_income_out_rur_amt_9m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setprofit_income_out_rur_amt_9m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_ipkcurrentyear_currentyearpensfactor} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_ipkcurrentyear_currentyearpensfactor(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Одежда за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__odezhda} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__odezhda(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Среднемесячное количество входящих звонков во внутрисетевом роуминге за 6 месяцев (включая отчетный месяц)</span>
                                    <Input type="text" value={cntOnnRinCallAvg6m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcntOnnRinCallAvg6m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Среднее за 3 месяца среднемесячных остатков на группе счетов Счета до востребования</span>
                                    <Input type="text" value={dda_rur_amt_3m_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdda_rur_amt_3m_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество раз возвращений в WinBack (возвращения клиента из состоятния оттока)</span>
                                    <Input type="text" value={winback_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setwinback_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>гео данные</span>
                                    <Input type="text" value={salary_median_in_gex_r1} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setsalary_median_in_gex_r1(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_payoutincomedata_payout_avg_prev_year} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_payoutincomedata_payout_avg_prev_year(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средняя дневная сумма транзакций за 90 дней</span>
                                    <Input type="text" value={avg_amount_daily_transactions_90d} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_amount_daily_transactions_90d(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Наличие у клиента приложения Тинькоф Инвестиции</span>
                                    <Input type="text" value={vert_has_app_ru_tinkoff_investing} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setvert_has_app_ru_tinkoff_investing(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество транзакций в категории Супермаркеты за последние 2 месяца поделённое на среднее Количество транзакций в этой категории за 2 месяца (на протяжении года)</span>
                                    <Input type="text" value={transaction_category_supermarket_inc_cnt_2m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_supermarket_inc_cnt_2m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество событий вида 'Sms Success' за 3 месяца</span>
                                    <Input type="text" value={vert_pil_sms_success_3m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setvert_pil_sms_success_3m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Минимальный баланс за последний месяц по всем фабрикам</span>
                                    <Input type="text" value={min_balance_rur_amt_1m_af} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setmin_balance_rur_amt_1m_af(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_max_seniority} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_max_seniority(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Сеть супермаркетов за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__set_supermarketov} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__set_supermarketov(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Внешние данные</span>
                                    <Input type="text" value={label_500k_to_1M_share_r1} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setlabel_500k_to_1M_share_r1(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Зарубежные финансовые операции за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__zarubezhnye_finansovye_operatsii(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество кредитных продуктов за все время на клиента</span>
                                    <Input type="text" value={bki_total_products} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setbki_total_products(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средние за 6 месяцев траты по всем группам MCC кодов</span>
                                    <Input type="text" value={avg_6m_all} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_6m_all(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_avg_simultanious_jobs_5y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_avg_simultanious_jobs_5y(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ewb_dismissal_due_contract_violation_by_lb_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ewb_dismissal_due_contract_violation_by_lb_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Сумма покупок в текущем месяце</span>
                                    <Input type="text" value={summarur_1m_purch} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setsummarur_1m_purch(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Разница между средним кредитовым и дебетовым оборотом по счетам за 3 месяца</span>
                                    <Input type="text" value={diff_avg_cr_db_turn} onChange={e => {
                                        const val = e.target.value;
                                            if (/^-?[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdiff_avg_cr_db_turn(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_cnt_changes_1y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_cnt_changes_1y(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_employeers_cnt_last_month} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_employeers_cnt_last_month(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_payoutincomedata_payout_avg_6_month} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_payoutincomedata_payout_avg_6_month(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ewb_last_organization} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ewb_last_organization(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма электронных операций в категории - Перевод между своими счетами за месяц на протяжении года</span>
                                    <Input type="text" value={by_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setby_category__amount__sum__eoperation_type_name__perevod_mezhdu_svoimi_schetami(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество активных кредитных продуктов Автокредит</span>
                                    <Input type="text" value={bki_active_auto_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setbki_active_auto_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний текущий кредитовый оборот по другим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_other_cr_avg_act_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_other_cr_avg_act_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Среднее значение “среднемесячного кол-ва исходящих звонков (onnet+offnet) абонента Компании за 6 месяцев, включая отчетный” по группе общения</span>
                                    <Input type="text" value={cntVoiceOutMob6m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcntVoiceOutMob6m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Путешествия за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__puteshestvija} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__puteshestvija(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Среднее за 12 месяцев среднемесячных остатков на группе счетов Кредитные счета</span>
                                    <Input type="text" value={loanacc_rur_amt_cm_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setloanacc_rur_amt_cm_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество транзакций в категории Супермаркеты за 2 месяца</span>
                                    <Input type="text" value={transaction_category_supermarket_sum_cnt_m2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_supermarket_sum_cnt_m2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Сумма транзакций в категории Супермаркеты за 15 дней</span>
                                    <Input type="text" value={transaction_category_supermarket_sum_amt_d15} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_supermarket_sum_amt_d15(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средний кредитовый оборот по депозитным счетам за 3 месяца</span>
                                    <Input type="text" value={avg_fdep_cr_turn} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_fdep_cr_turn(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Доля количества транзакций в категории Рестораны от общего количества транзакций за 2 месяца</span>
                                    <Input type="text" value={transaction_category_restaurants_percent_cnt_2m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_restaurants_percent_cnt_2m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Максимальный кредитный лимит по любому продукту за все время</span>
                                    <Input type="text" value={bki_total_max_limit} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setbki_total_max_limit(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Реклама в интернете за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__reklama_v_internete(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Доля суммы транзакций в категории Рестораны от общей суммы транзакций за 2 месяца</span>
                                    <Input type="text" value={transaction_category_restaurants_percent_amt_2m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_restaurants_percent_amt_2m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средний текущий дебетовый оборот по депозитным счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_fdep_db_avg_act_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_fdep_db_avg_act_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_accpayment_avg_6m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_accpayment_avg_6m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Общий кредитовый оборот по другим счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_other_cr_sum_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_other_cr_sum_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Флаг активности клиента</span>
                                    <Input type="text" value={client_active_flag} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setclient_active_flag(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Продукты за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__produkty} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__produkty(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Разница средней суммы на Основных текущих счетах за текущий месяц на начало и конец 2х-месячного периода</span>
                                    <Input type="text" value={curr_rur_amt_cm_avg_inc_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^-?[0-9]*$/.test(val) || val === "") {
                                                setcurr_rur_amt_cm_avg_inc_v2(val);
                                            }
                                    }} />
                                </Col>
                                <Col span={12}>
                                    <span>Признак нерезидента РФ</span>
                                    <Input type="text" value={nonresident_flag} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setnonresident_flag(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Косметика за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__kosmetika} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__kosmetika(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Наличие у клиента приложения ВТБ Инвестиции</span>
                                    <Input type="text" value={vert_has_app_ru_vtb_invest} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setvert_has_app_ru_vtb_invest(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_avg_salary_3y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_avg_salary_3y(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Максимальный лимит по кредитному продукту Автокредит за все время</span>
                                    <Input type="text" value={hdb_bki_total_auto_max_limit} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_auto_max_limit(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество дней между датой расчета и event time - времени запроса к Beeline</span>
                                    <Input type="text" value={days_after_last_request} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdays_after_last_request(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средневзвешенное значение “кол-ва поездок в регионы России (не в Москву) абонента Компании” по группе общения за отчетный месяц</span>
                                    <Input type="text" value={cntRegionTripsWavg1m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcntRegionTripsWavg1m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Наличие у клиента приложения ЦИАН</span>
                                    <Input type="text" value={vert_has_app_ru_cian_main} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setvert_has_app_ru_cian_main(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Сумма средств клиента на группе счетов Кредитные счета</span>
                                    <Input type="text" value={loanacc_rur_amt_curr_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setloanacc_rur_amt_curr_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средние за 3 месяца траты по группе MCC кодов: Без категории</span>
                                    <Input type="text" value={avg_3m_no_cat} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_3m_no_cat(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество дней до последнего закрытия продукта призрака с темой 'Daily Pay'</span>
                                    <Input type="text" value={vert_ghost_close_dpay3_last_days} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setvert_ghost_close_dpay3_last_days(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Наличие у клиента приложения Раффайзенбанка</span>
                                    <Input type="text" value={vert_has_app_ru_raiffeisennews} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setvert_has_app_ru_raiffeisennews(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_days_ip_share_5y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_days_ip_share_5y(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма транзакций в категории Платежи через интернет за месяц на протяжении года</span>
                                    <Input type="text" value={avg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_by_category__amount__sum__cashflowcategory_name__platezhi_cherez_internet(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Максимальная просрочка по кредитному продукту Микрокредит за все время</span>
                                    <Input type="text" value={hdb_bki_total_micro_max_overdue} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_micro_max_overdue(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество активных кредитных продуктов на клиента</span>
                                    <Input type="text" value={bki_total_active_products} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setbki_total_active_products(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средняя сумма электронных операций в категории - Перевод с карты на карту за месяц на протяжении года</span>
                                    <Input type="text" value={by_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setby_category__amount__sum__eoperation_type_name__perevod_s_karty_na_kartu(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Размер группы общения по новому алгоритму при исходящих звонках/смс</span>
                                    <Input type="text" value={calledCtnOutGroup} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcalledCtnOutGroup(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Количество событий вида 'Loan Application Success' за 3 месяца</span>
                                    <Input type="text" value={vert_pil_loan_application_success_3m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setvert_pil_loan_application_success_3m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество событий вида 'Fee Discount Change' за 3 месяца</span>
                                    <Input type="text" value={vert_pil_fee_discount_change_3m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setvert_pil_fee_discount_change_3m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Кол-во абонентов из группы общения, имеющих значение «Business» в показателе «Класс устройства» (CLASS) на дату заявки</span>
                                    <Input type="text" value={businessTelSubs} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setbusinessTelSubs(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Операционный доход Profit3 (на месяц T-4) где Т -- месяц оттока</span>
                                    <Input type="text" value={profit_income_out_rur_amt_l2m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setprofit_income_out_rur_amt_l2m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средние за 3 месяца траты по группе MCC кодов: Медицинские услуги</span>
                                    <Input type="text" value={avg_3m_healthcare_services} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_3m_healthcare_services(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_paymentssum_month_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_paymentssum_month_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Сумма просрочки</span>
                                    <Input type="text" value={ovrd_sum} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setovrd_sum(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Количество активных кредитных продуктов на клиента</span>
                                    <Input type="text" value={hdb_bki_total_active_products} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_active_products(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Количество кредитных продуктов Микрокредит за все время</span>
                                    <Input type="text" value={hdb_bki_total_micro_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_micro_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Количество активных кредитных продуктов Кредит</span>
                                    <Input type="text" value={hdb_bki_active_pil_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_active_pil_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Сумма запрашиваемого кредита</span>
                                    <Input type="text" value={loan_cur_amt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setloan_cur_amt(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество сессий в Альфа-Мобайле за период 90 дней</span>
                                    <Input type="text" value={mob_total_sessions} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setmob_total_sessions(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Год-месяц последней активности в АД на текущую дату</span>
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        value={dt}
                                        onChange={(date) => setperiod_last_act_ad(date)}
                                        disabledDate={(current) => current && current > dayjs()}
                                        format="YYYY-MM-DD"
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_days_multiple_job_share_2y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_days_multiple_job_share_2y(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Максимальная просрочка по кредитному продукту Кредитная карта за все время</span>
                                    <Input type="text" value={hdb_bki_total_cc_max_overdue} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_cc_max_overdue(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Время жизни абонента конкурента (с момента первого появления до даты заявки)</span>
                                    <Input type="text" value={lifetimeComp} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setlifetimeComp(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Количество дней с последнего оформленного кредитного продукта Кредит</span>
                                    <Input type="text" value={hdb_bki_total_pil_last_days} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_pil_last_days(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Сумма транзакций за 90 дней в категории Электронные деньги</span>
                                    <Input type="text" value={amount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setamount_by_category_90d__summarur_amt__sum__cashflowcategory_name__elektronnye_dengi(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Максимальный кредитовый оборот по накопительным счетам за 12 месяцев</span>
                                    <Input type="text" value={turn_save_cr_max_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setturn_save_cr_max_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Максимальный лимит по активному кредитному продукту Кредит</span>
                                    <Input type="text" value={hdb_bki_active_pil_max_limit} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_active_pil_max_limit(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_accpayment_avg_3m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_accpayment_avg_3m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средние за 6 месяцев траты по группе MCC кодов: Рестораны, фастфуд</span>
                                    <Input type="text" value={avg_6m_restaurants} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_6m_restaurants(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Количество кредитных продуктов Кредит за все время</span>
                                    <Input type="text" value={hdb_bki_total_pil_cnt} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_pil_cnt(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Доля количества транзакций в категории Фаст Фуд от общего количества транзакций за 2 месяца</span>
                                    <Input type="text" value={transaction_category_fastfood_percent_cnt_2m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_fastfood_percent_cnt_2m(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Количество просрочек свыше 90 дней по кредитному продукту Кредит за все время</span>
                                    <Input type="text" value={hdb_bki_total_pil_max_del90} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_total_pil_max_del90(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Признак наличия зарплатного счета у клиента на момент последней активности</span>
                                    <Input type="text" value={accountsalary_out_flag} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setaccountsalary_out_flag(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средневзвешенное среднемесячное количество блокировок любого типа за 6 месяцев</span>
                                    <Input type="text" value={cntBlockWavg6m} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcntBlockWavg6m(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Среднее за 12 месяцев среднемесячных остатков на группе счетов Экспресс счета</span>
                                    <Input type="text" value={express_rur_amt_cm_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setexpress_rur_amt_cm_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Разница средней суммы на Кредитных счетах за текущий месяц на начало и конец 2х-месячного периода</span>
                                    <Input type="text" value={loanacc_rur_amt_cm_avg_inc_v2} onChange={e => setloanacc_rur_amt_cm_avg_inc_v2(e.target.value)} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Количество дней с оформления последнего кредитного продукта</span>
                                    <Input type="text" value={hdb_bki_last_product_days} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_last_product_days(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_days_multiple_job_cnt_5y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_days_multiple_job_cnt_5y(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_accpayment_month_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_accpayment_month_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Среднее за 3 месяца среднемесячных остатков на группе счетов Текущие счета кредитов</span>
                                    <Input type="text" value={cred_dda_rur_amt_3m_avg} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setcred_dda_rur_amt_3m_avg(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средние за 3 месяца траты по всем группам MCC кодов</span>
                                    <Input type="text" value={avg_3m_all} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_3m_all(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Максимальная ПСК по активным кредитным продуктам в других банках</span>
                                    <Input type="text" value={hdb_other_active_max_psk} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_other_active_max_psk(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>БКИ: Суммарная задолженность по крединым продуктам Ипотека в других банках</span>
                                    <Input type="text" value={hdb_bki_other_active_ip_outstanding} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_other_active_ip_outstanding(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Общая сумма просрочки за весь период нахождения в банке</span>
                                    <Input type="text" value={total_sum} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settotal_sum(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Данные цифрового профиля</span>
                                    <Input type="text" value={dp_ils_uniq_companies_1y} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setdp_ils_uniq_companies_1y(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Средние за 6 месяцев траты по группе MCC кодов: Турагентства</span>
                                    <Input type="text" value={avg_6m_travel} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_6m_travel(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средние за 6 месяцев траты по группе MCC кодов: Платежи в бюджет</span>
                                    <Input type="text" value={avg_6m_government_services} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setavg_6m_government_services(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>БКИ: Максимальная текущая просрочка по активному кредитному продукту Кредитная карта</span>
                                    <Input type="text" value={hdb_bki_active_cc_max_overdue} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                sethdb_bki_active_cc_max_overdue(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Средняя сумма средств клиента на группе счетов Собственные средства за 2 месяца до даты расчета</span>
                                    <Input type="text" value={total_rur_amt_cm_avg_period_days_ago_v2} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settotal_rur_amt_cm_avg_period_days_ago_v2(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Внешние данные</span>
                                    <Input type="text" value={label_Above_1M_share_r1} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setlabel_Above_1M_share_r1(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Количество транзакций в категории Супермаркеты за 15 дней</span>
                                    <Input type="text" value={transaction_category_supermarket_sum_cnt_d15} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                settransaction_category_supermarket_sum_cnt_d15(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>Максимальный баланс за последний месяц по всем фабрикам</span>
                                    <Input type="text" value={max_balance_rur_amt_1m_af} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setmax_balance_rur_amt_1m_af(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>id клиента</span>
                                    <Input type="text" value={id} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setid(val);
                                            }
                                    }} min={0} />
                                </Col>
                                <Col span={12}>
                                    <span>вес</span>
                                    <Input type="text" value={w} onChange={e => {
                                        const val = e.target.value;
                                            if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                                                setw(val);
                                            }
                                    }} min={0} />
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <span>Внешние данные</span>
                                    <Input value={first_salary_income} onChange={e => setfirst_salary_income(e.target.value)}/>
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Row gutter={16} align="middle">
                                <Col span={8}></Col>
                                <Col span={8}></Col>
                                <Col span={8}>
                                    <Button type="primary" block style={{ backgroundColor: '#008d07ff', marginLeft: 'auto' }} onClick={handleAsk}>
                                        Рассчёт
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Space>
                </Card>
            </Spin>
        </div>
    );
}

export default Human;