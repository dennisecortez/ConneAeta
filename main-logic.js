document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    
    // 1. Sync ang dropdown
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = savedLang;
    }

    // 2. I-apply ang translations
    if (savedLang !== 'en') {
        applyTranslations(savedLang);
    }

    // 3. ETO ANG FIX: Ipakita na ang page dahil tapos na ang translation
    document.documentElement.classList.remove('translating');
    // Optional: Dagdagan ng konting transition sa CSS para smooth
    document.body.style.transition = "opacity 0.05s ease-in";
    document.body.style.opacity = "1";
    document.body.style.visibility = "visible";
});

// 2. ITO ANG TATAWAGIN NG DROPDOWN PAG NAG-CLICK ANG USER
function updateLanguage(selectedLang) {
    localStorage.setItem('preferredLang', selectedLang);
    
    // Pilitin ang lahat ng tabs/pages na mag-reload o mag-update
    // Ang reload ay pinakamadaling paraan para mag-sync ang lahat ng pages
    location.reload(); 
}

// 3. ANG HELPER FUNCTION PARA SA TRANSLATION
function applyTranslations(lang) {
    if (typeof langData !== 'undefined' && langData[lang]) {
        const data = langData[lang];
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (data[key]) {
                element.innerHTML = data[key];
            }
        });
    }
}