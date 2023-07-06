var lang = "PT-BR";

const getLang = () => {
  return lang;
};

var langLocal = localStorage.getItem("lang");

if (langLocal == undefined) {
  localStorage.setItem("lang", getLang());
}

const setLang = (lang) => {
  this.lang = lang;
};

const langP = document.querySelector(".nav_language");

langP.textContent = langLocal;

export { getLang, setLang };
