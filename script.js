const translations = {
    en: {
        title: "Loan Application",
        description: "Fill in your details below.",
        name: "Your Name",
        nic: "NIC Number",
        address: "Address",
        district: "Select District",
        bankBranch: "Bank Branch",
        loanScheme: "Select Loan Scheme",
        loanNo: "Loan Number",
        victim: "Are you a victim?",
        remarks: "Remarks"
    },
    si: {
        title: "ණය අයදුම්පත",
        description: "කරුණාකර ඔබගේ විස්තර ඇතුළත් කරන්න.",
        name: "ඔබගේ නම",
        nic: "ජාතික හැඳුනුම්පත",
        address: "ලිපිනය",
        district: "දිස්ත්‍රික්කය තෝරන්න",
        bankBranch: "බැංකු ශාඛාව",
        loanScheme: "ණය යෝජනා ක්‍රමය තෝරන්න",
        loanNo: "ණය අංකය",
        victim: "ඔබට හානි වියද?",
        remarks: "සටහන්"
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang); // Store selection in session
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
    document.getElementById("name").placeholder = translations[lang].name;
    document.getElementById("nic").placeholder = translations[lang].nic;
    document.getElementById("address").placeholder = translations[lang].address;
    document.getElementById("district").options[0].text = translations[lang].district;
    document.getElementById("bankBranch").placeholder = translations[lang].bankBranch;
    document.getElementById("loanScheme").options[0].text = translations[lang].loanScheme;
    document.getElementById("loanNo").placeholder = translations[lang].loanNo;
    document.getElementById("victim").options[0].text = translations[lang].victim;
    document.getElementById("remarks").placeholder = translations[lang].remarks;
}

// Load saved language
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
});

// Google reCAPTCHA Integration
document.getElementById("survey-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission until reCAPTCHA is verified

    grecaptcha.ready(function () {
        grecaptcha.execute("6LfU4v8qAAAAAKKY3IjtE-uppX-oH_Ev_CMp0dKr", { action: "submit" }).then(function (token) {
            document.getElementById("recaptchaResponse").value = token;
            document.getElementById("survey-form").submit(); // Submit form after getting reCAPTCHA token
        });
    });
});
