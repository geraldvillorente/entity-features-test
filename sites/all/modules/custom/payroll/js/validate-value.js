/**
 * @file
 * A JQuery script that validates the payroll value in fields.
 * Authored by: Gerald Z. Villorente @2014
 */

(function ($) {

  Drupal.behaviors.payroll_validate = {
    attach: function (context, settings) {
      // Salary.
      $('#edit-field-salary-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // ACA/Pera.
      $('#edit-field-aca-pera-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // TOTAL (SALARY & ACA/PERA).
      $('#edit-field-total-salary-aca-pera-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // MEDICARE (GOVERNMENT SHARE).
      $('#edit-field-medicare-government-share-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // MEDICARE (PERSONAL SHARE).
      $('#edit-field-medicare-personal-share-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // 25 PESO COOP.
      $('#edit-field-25-peso-coop-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // AB LOAN.
      $('#edit-field-ab-loan-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // AB PREMIUM.
      $('#edit-field-ab-premium-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // PAG-IBIG LOAN.
      $('#edit-field-pag-ibig-loan-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // PAG-IBIG PREM (GOVERNMENT SHARE).
      $('#edit-field-pag-ibig-premium-governmen-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // PAG-IBIG PREM (PERSONAL SHARE.
      $('#edit-field-pag-ibig-premium-personal-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // POLICY LOAN.
      $('#edit-field-policy-loan-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // CONSOL LOAN.
      $('#edit-field-consol-loan-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // CITY SAVINGS.
      $('#edit-field-city-savings-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // SUNLIFE.
      $('#edit-field-sunlife-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // CALAMITY LOAN.
      $('#edit-field-calamity-loan-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // PAG-IBIG CALAMITY.
      $('#edit-field-pag-ibig-calamity-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // HELP.
      $('#edit-field-help-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // HUMID E-CARD.
      $('#edit-field-humid-e-card-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // EDUC_ASST.
      $('#edit-field-educ-asst-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // W/HOLDING TAX.
      $('#edit-field-w-holding-tax-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // LIBACAO COOP.
      $('#edit-field-libacao-coop-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // FORTUNE.
      $('#edit-field-fortune-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // EC.
      $('#edit-field-ec-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // ANCF ASSO..
      $('#edit-field-ancf-asso-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // ADDT'L PREM.
      $('#edit-field-addt-l-prem-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // ABSENCES W/OUT PAY/UNDERTIME.
      $('#edit-field-absences-w-out-pay-underti-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

       //TOTAL DEDUCTIONS.
      $('#edit-field-total-deductions-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

       //TOTAL AMOUNT EARNED THIS MONTH.
      $('#edit-field-total-amount-earned-this-m-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // NUMBER OF DAYS ABSENT.
      $('#edit-field-number-of-days-absent-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });


      // NUMBER OF LATE HOURS.
      $('#edit-field-number-of-late-hours-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // MINUTES LATE.
      $('#edit-field-minutes-late-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // TOTAL NO. OF ABSENT.
      $('#edit-field-total-no-of-absent-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // TOTAL AMOUNT EARNED THIS PERIOD.
      $('#edit-field-total-amount-earned-this-p-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // GSIS PREM (GOVERNMENT SHARE).
      $('#edit-field-gsis-prem-government-share-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });

      // GSIS PREM (PERSONAL SHARE).
      $('#edit-field-gsis-prem-personal-share-und-0-value', context).bind("change paste keyup", function() {
        if (!isNaN($(this).val() / 1) == false) {
          alert('Value must be numbers.');
        }
      });
    }
  }
})(jQuery);
