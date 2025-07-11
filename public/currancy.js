$(document).ready(function() {
    // قائمة العملات + رموز الدول
    const currencies = [
  { name: "UAE Dirham", code: "AED", country: "AE" },
  { name: "Afghan Afghani", code: "AFN", country: "AF" },
  { name: "Albanian Lek", code: "ALL", country: "AL" },
  { name: "Netherlands Antillian Guilder", code: "ANG", country: "CW" },
  { name: "Angolan Kwanza", code: "AOA", country: "AO" },
  { name: "Argentine Peso", code: "ARS", country: "AR" },
  { name: "Australian Dollar", code: "AUD", country: "AU" },
  { name: "Azerbaijani Manat", code: "AZN", country: "AZ" },
  { name: "Bosnia and Herzegovina Mark", code: "BAM", country: "BA" },
  { name: "Bangladeshi Taka", code: "BDT", country: "BD" },
  { name: "Bulgarian Lev", code: "BGN", country: "BG" },
  { name: "Bahraini Dinar", code: "BHD", country: "BH" },
  { name: "Brazilian Real", code: "BRL", country: "BR" },
  { name: "Canadian Dollar", code: "CAD", country: "CA" },
  { name: "Swiss Franc", code: "CHF", country: "CH" },
  { name: "Chilean Peso", code: "CLP", country: "CL" },
  { name: "Chinese Renminbi", code: "CNY", country: "CN" },
  { name: "Egyptian Pound", code: "EGP", country: "EG" },
  { name: "Euro", code: "EUR", country: "EU" },
  { name: "Pound Sterling", code: "GBP", country: "GB" },
  { name: "Georgian Lari", code: "GEL", country: "GE" },
  { name: "Hong Kong Dollar", code: "HKD", country: "HK" },
  { name: "Hungarian Forint", code: "HUF", country: "HU" },
  { name: "Indonesian Rupiah", code: "IDR", country: "ID" },
  { name: "Indian Rupee", code: "INR", country: "IN" },
  { name: "Iraqi Dinar", code: "IQD", country: "IQ" },
  { name: "Iranian Rial", code: "IRR", country: "IR" },
  { name: "Japanese Yen", code: "JPY", country: "JP" },
  { name: "Kuwaiti Dinar", code: "KWD", country: "KW" },
  { name: "South Korean Won", code: "KRW", country: "KR" },
  { name: "Mexican Peso", code: "MXN", country: "MX" },
  { name: "Malaysian Ringgit", code: "MYR", country: "MY" },
  { name: "Nigerian Naira", code: "NGN", country: "NG" },
  { name: "Norwegian Krone", code: "NOK", country: "NO" },
  { name: "New Zealand Dollar", code: "NZD", country: "NZ" },
  { name: "Omani Rial", code: "OMR", country: "OM" },
  { name: "Pakistani Rupee", code: "PKR", country: "PK" },
  { name: "Philippine Peso", code: "PHP", country: "PH" },
  { name: "Polish Złoty", code: "PLN", country: "PL" },
  { name: "Qatari Riyal", code: "QAR", country: "QA" },
  { name: "Romanian Leu", code: "RON", country: "RO" },
  { name: "Russian Ruble", code: "RUB", country: "RU" },
  { name: "Saudi Riyal", code: "SAR", country: "SA" },
  { name: "Swedish Krona", code: "SEK", country: "SE" },
  { name: "Singapore Dollar", code: "SGD", country: "SG" },
  { name: "Syrian Pound", code: "SYP", country: "SY" },
  { name: "Thai Baht", code: "THB", country: "TH" },
  { name: "Turkish Lira", code: "TRY", country: "TR" },
  { name: "United States Dollar", code: "USD", country: "US" },
  { name: "Vietnamese Đồng", code: "VND", country: "VN" },
  { name: "South African Rand", code: "ZAR", country: "ZA" },
  { name: "Yemeni Rial", code: "YER", country: "YE" }
];
   
    // توليد القائمة تلقائيًا
    let currencySelect1 = $("#currency1");
    let currencySelect2 = $("#currency2")
    currencies.forEach(currency => {
        currencySelect1.append(
            `<option value="${currency.code}" data-flag="https://flagcdn.com/w40/${currency.country.toLowerCase()}.png">
                ${currency.code} - ${currency.name}
            </option>`
        );

        currencySelect2.append(
            `<option value="${currency.code}" data-flag="https://flagcdn.com/w40/${currency.country.toLowerCase()}.png">
                ${currency.code} - ${currency.name}
            </option>`
        );
    });

    // دالة لتنسيق الـ dropdown مع الأعلام
    function formatCurrency(currency) {
        if (!currency.id) return currency.text;
        var flagUrl = $(currency.element).data('flag');
        return $('<span><img src="' + flagUrl + '" class="flag-icon" /> ' + currency.text + '</span>');
    }

    // تطبيق Select2 على القائمة
    $('#currency1').select2({
        templateResult: formatCurrency,
        templateSelection: formatCurrency,
        dropdownAutoWidth: true,
        width: '200px',
    });

    $('#currency2').select2({
        templateResult: formatCurrency,
        templateSelection: formatCurrency,
        dropdownAutoWidth: true,
        width: '200px',
    });
});

document.getElementById('exchangeBtn').addEventListener('click', convertCurrency);
  
function convertCurrency()
{
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurr = document.getElementById('currency1').value;
    var toCurr = document.getElementById('currency2').value;
    var text = `${amount} ${fromCurr} is`;
    var button = document.getElementById('exchangeBtn');
     
    if (isNaN(amount) || amount <= 0)

        alert("Please Enter a correct value");
    else {
      
      button.classList.add("loading");
      
      const apiUrl = `http://localhost:5000/exchange/${fromCurr}`;// /${toCurr}

      fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        if (!data[fromCurr] || !data[toCurr]) {
            alert("Invalid currency selection");
            return;
        }
        const exchangeRate = data[toCurr];
            const result = (amount * exchangeRate).toFixed(2);
            document.getElementById('result').textContent = `${text} ${result} ${toCurr}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            alert('Error fetching exchange rates.');
        }).finally(() => {
            button.classList.remove("loading"); // ✅ إزالة التأثير بعد انتهاء العملية
        });
      
    }

    
}