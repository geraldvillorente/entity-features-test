/**
 * @file
 * A JQuery script that control the payroll calculations.
 * Authored by: Gerald Z. Villorente @2014
 */

(function ($) {

  Drupal.behaviors.payroll = {
    attach: function (context, settings) {
      // Aca/Pera default value.
      var aca_pera_default_value = 2000;
      // Set the default value to the field aca_pera.
      var aca_pera = $('#edit-field-aca-pera-und-0-value', context).attr('value', aca_pera_default_value);
      // Get the default value of aca_pera field.
      var get_aca_pera_val = $('#edit-field-aca-pera-und-0-value', context).val();

      // Disable some fields to restrict users in modifying the value manually.
      // Temporarily disabled this locking due to missing value during hook_node_save.
      //$('#edit-field-total-salary-aca-pera-und-0-value, #edit-field-gsis-prem-government-share-und-0-value, #edit-field-gsis-prem-personal-share-und-0-value, #edit-field-total-deductions-und-0-value, #edit-field-total-amount-earned-this-m-und-0-value, #edit-field-total-amount-earned-this-p-und-0-value, #edit-field-total-no-of-absent-und-0-value, #edit-field-absences-w-out-pay-underti-und-0-value').attr("disabled", true);

      // Detect any changes to the value and recalculate the sum of aca_pera and salary.
      $('#edit-field-aca-pera-und-0-value', context).bind("change paste keyup", function() {
        var salary = $('#edit-field-salary-und-0-value').val();
        var get_aca_pera_val = $(this).val();
        var sum_salary_aca_pera = (salary*100 + get_aca_pera_val*100) / 100;
        $('#edit-field-total-salary-aca-pera-und-0-value').attr('value', sum_salary_aca_pera);

        // Get GSIS prem gov share.
        var gsis_prem_gov_share = sum_salary_aca_pera * 0.12;
        $('#edit-field-gsis-prem-government-share-und-0-value').attr('value', gsis_prem_gov_share);

        // Personal share.
        var gsis_prem_personal_share = sum_salary_aca_pera * 0.09;
        $('#edit-field-gsis-prem-personal-share-und-0-value').attr('value', gsis_prem_personal_share);
      });

      // Detect any changes to the value and recalculate the sum of aca_pera and salary.
      $('#edit-field-salary-und-0-value', context).bind("change paste keyup", function() {
        var salary = $('#edit-field-salary-und-0-value').val();

        var sum_salary_aca_pera = (salary*100 + get_aca_pera_val*100) / 100;
        $('#edit-field-total-salary-aca-pera-und-0-value').attr('value', sum_salary_aca_pera);

        // Get GSIS prem gov share.
        var gsis_prem_gov_share = sum_salary_aca_pera * 0.12;
        $('#edit-field-gsis-prem-government-share-und-0-value').attr('value', gsis_prem_gov_share);

        // Personal share.
        var gsis_prem_personal_share = sum_salary_aca_pera * 0.09;
        $('#edit-field-gsis-prem-personal-share-und-0-value').attr('value', gsis_prem_personal_share);
      });

      // Calculate the absenses w/out pay/undertime.
      $('#node_employee_form_group_absenses_undertime input[type=text], #node_faculty_form_group_absenses_undertime input[type=text]', context).bind("change paste keyup", function() {
        var salary = $('#edit-field-total-salary-aca-pera-und-0-value').val();
        var days_absent = $('#edit-field-number-of-days-absent-und-0-value').val();
        if (isNaN(days_absent)) {
          var days_absent = 0;
        }
        var hours_late = parseInt($('#edit-field-number-of-late-hours-und-0-value').val());
        if (isNaN(hours_late)) {
          var hours_late = 0;
        }
        var minutes_late = parseInt($('#edit-field-minutes-late-und-0-value').val());
        if (isNaN(minutes_late)) {
          var minutes_late = 0;
        }

        // 8 hours    = 1;
        // 4 hours    = 0.5;
        // 2 hours    = 0.25;
        // 1 hour     = 0.125;
        // 1 minute   = 0.002083333;

        // Golden formula.
        var total_late_hours = hours_late / 8;
        var total_minutes_late = 0.002083333 * minutes_late;
        var total_num_absent = total_minutes_late + total_late_hours + days_absent;
        // Set the total number of absent.
        $('#edit-field-total-no-of-absent-und-0-value').attr('value', total_num_absent);

        var absenses_without_pay_undertime = (salary / 30) * total_num_absent;
        var absenses_without_pay_undertime = absenses_without_pay_undertime.toFixed(2);
        $('#edit-field-absences-w-out-pay-underti-und-0-value').attr('value', absenses_without_pay_undertime);
      });

      // Calculate deductions.
      $('#node_employee_form_group_deductions input[type=text], #node_employee_form_group_field_addl_ded input[type=text], #node_faculty_form_group_deductions input[type=text], #node_faculty_form_group_field_addl_ded input[type=text]', context).bind("change paste keyup", function() {
        // List of deductions.
        var gsis_pgov_ded = $('#edit-field-gsis-prem-government-share-und-0-value').val();
        if (isNaN(gsis_pgov_ded)) {
          var gsis_pgov_ded = 0;
        }
        var gsis_pper_ded = $('#edit-field-gsis-prem-personal-share-und-0-value').val();
        if (isNaN(gsis_pper_ded)) {
          var gsis_pper_ded = 0;
        }
        var med_gov_ded = $('#edit-field-medicare-government-share-und-0-value').val();
        if (isNaN(med_gov_ded)) {
          var med_gov_ded = 0;
        }
        var med_per_ded = $('#edit-field-medicare-personal-share-und-0-value').val();
        if (isNaN(med_per_ded)) {
          var med_per_ded = 0;
        }
        var tf_peso_ded = $('#edit-field-25-peso-coop-und-0-value').val();
        if (isNaN(tf_peso_ded)) {
          var tf_peso_ded = 0;
        }
        var ab_loan_ded = $('#edit-field-ab-loan-und-0-value').val();
        if (isNaN(ab_loan_ded)) {
          var ab_loan_ded = 0;
        }
        var ab_prem_ded = $('#edit-field-ab-premium-und-0-value').val();
        if (isNaN(ab_prem_ded)) {
          var ab_prem_ded = 0;
        }
        var pagibig_loan_ded = $('#edit-field-pag-ibig-loan-und-0-value').val();
        if (isNaN(pagibig_loan_ded)) {
          var pagibig_loan_ded = 0;
        }
        var pagibig_pgov_ded = $('#edit-field-pag-ibig-premium-governmen-und-0-value').val();
        if (isNaN(pagibig_pgov_ded)) {
          var pagibig_pgov_ded = 0;
        }
        var pagibig_pper_ded = $('#edit-field-pag-ibig-premium-personal-und-0-value').val();
        if (isNaN(pagibig_pper_ded)) {
          var pagibig_pper_ded = 0;
        }
        var policy_loan_ded = $('#edit-field-policy-loan-und-0-value').val();
        if (isNaN(policy_loan_ded)) {
          var policy_loan_ded = 0;
        }
        var consol_loan_ded = $('#edit-field-consol-loan-und-0-value').val();
        if (isNaN(consol_loan_ded)) {
          var consol_loan_ded = 0;
        }
        var city_savings_ded = $('#edit-field-city-savings-und-0-value').val();
        if (isNaN(city_savings_ded)) {
          var city_savings_ded = 0;
        }
        var sunlife_ded = $('#edit-field-sunlife-und-0-value').val();
        if (isNaN(sunlife_ded)) {
          var sunlife_ded = 0;
        }
        var calamity_loan_ded = $('#edit-field-calamity-loan-und-0-value').val();
        if (isNaN(calamity_loan_ded)) {
          var calamity_loan_ded = 0;
        }
        var pagibig_calam_ded = $('#edit-field-pag-ibig-calamity-und-0-value').val();
        if (isNaN(pagibig_calam_ded)) {
          var pagibig_calam_ded = 0;
        }
        var help_ded = $('#edit-field-help-und-0-value').val();
        if (isNaN(help_ded)) {
          var help_ded = 0;
        }
        var humid_ecard_ded = $('#edit-field-humid-e-card-und-0-value').val();
        if (isNaN(humid_ecard_ded)) {
          var humid_ecard_ded = 0;
        }
        var educ_assist_ded = $('#edit-field-educ-asst-und-0-value').val();
        if (isNaN(educ_assist_ded)) {
          var educ_assist_ded = 0;
        }
        var wh_tax_ded = $('#edit-field-w-holding-tax-und-0-value').val();
        if (isNaN(wh_tax_ded)) {
          var wh_tax_ded = 0;
        }
        var libacao_coop_ded = parseInt($('#edit-field-libacao-coop-und-0-value').val());
        if (isNaN(libacao_coop_ded)) {
          var libacao_coop_ded = 0;
        }
        var fortune_ded = $('#edit-field-fortune-und-0-value').val();
        if (isNaN(fortune_ded)) {
          var fortune_ded = 0;
        }
        var ec_ded = $('#edit-field-ec-und-0-value').val();
        if (isNaN(ec_ded)) {
          var ec_ded = 0;
        }
        var ancf_asso_ded = $('#edit-field-ancf-asso-und-0-value').val();
        if (isNaN(ancf_asso_ded)) {
          var ancf_asso_ded = 0;
        }
        var add_prem_ded = $('#edit-field-addt-l-prem-und-0-value').val();
        if (isNaN(add_prem_ded)) {
          var add_prem_ded = 0;
        }
        var absenses_under_ded = $('#edit-field-absences-w-out-pay-underti-und-0-value').val();
        if (isNaN(absenses_under_ded)) {
          var absenses_under_ded = 0;
        }
        var additional_ded = $('#edit-field-addt-l-deductions-und').val();
        if (isNaN(additional_ded)) {
          var additional_ded = 0;
        }

        var bangus_price = $('#edit-bangus-textfield').val();
        if (isNaN(bangus_price)) {
          var bangus_price = 0;
        }
        var sugpo_price = $('#edit-sugpo-textfield').val();
        if (isNaN(sugpo_price)) {
          var sugpo_price = 0;
        }
        var tshirt_price = $('#edit-tshirt-textfield').val();
        if (isNaN(tshirt_price)) {
          var tshirt_price = 0;
        }
        var misc_price = $('#edit-misc-textfield').val();
        if (isNaN(misc_price)) {
          var misc_price = 0;
        }

        // Get current value.
        var total_current_deductions = $('#edit-field-total-deductions-und-0-value').val();
        if (isNaN(total_current_deductions)) {
          var total_current_deductions = 0;
        }

        var total_add_deductions = (gsis_pgov_ded*100 + gsis_pper_ded*100 + med_gov_ded*100 + med_per_ded*100 + tf_peso_ded*100 + ab_loan_ded*100 + ab_prem_ded*100 + pagibig_loan_ded*100 + pagibig_pgov_ded*100 + pagibig_pper_ded*100 + policy_loan_ded*100 + consol_loan_ded*100 + city_savings_ded*100 + sunlife_ded*100 + calamity_loan_ded*100 + pagibig_calam_ded*100 + help_ded*100 + humid_ecard_ded*100 + educ_assist_ded*100 + wh_tax_ded*100 + libacao_coop_ded*100 + fortune_ded*100 + ec_ded*100 + ancf_asso_ded*100 + add_prem_ded*100 + absenses_under_ded*100 + bangus_price*100 + sugpo_price*100 + tshirt_price*100 + misc_price*100) / 100;
        var total_add_deductions = total_add_deductions.toFixed(2);
        // Set the total deductions in the field.
        $('#edit-field-total-deductions-und-0-value').attr('value', total_add_deductions);

        var salary_aca_pera_current = $('#edit-field-total-salary-aca-pera-und-0-value').val();
        var total_earned_month = (salary_aca_pera_current*100 - total_add_deductions*100) / 100;
        var total_earned_month = total_earned_month.toFixed(2);
        $('#edit-field-total-amount-earned-this-m-und-0-value').attr('value', total_earned_month);

        var earned_this_period = (total_earned_month*100 / 2) / 100;
        var earned_this_period = earned_this_period.toFixed(2);
        $('#edit-field-total-amount-earned-this-p-und-0-value').attr('value', earned_this_period);
      });
    }
  }
})(jQuery);
