document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = savedLang;
    }

    if (savedLang !== 'en') {
        applyTranslations(savedLang);
    }

    document.documentElement.classList.remove('translating');
    document.body.style.transition = "opacity 0.05s ease-in";
    document.body.style.opacity = "1";
    document.body.style.visibility = "visible";
});

function updateLanguage(selectedLang) {
    localStorage.setItem('preferredLang', selectedLang);
    location.reload(); 
}

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