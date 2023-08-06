import { menu, menuBR } from './menu.js';
import { setLang } from "../global/variable.js";

const language = document.querySelector('.nav_language');
const languageMobile = document.querySelector('.mobile_language');

const part1Title = document.querySelector(".career_part1_title");
const part1Subtitle = document.querySelector(".carreira_part1_subtitle");
const part1Text = document.querySelector(".carreira_part1_text");

const part2Title = document.querySelector(".career_title_part2");
const part2Subtitle = document.querySelector(".carreira_part2_subtitle");
const part2Text = document.querySelector(".carreira_part2_text");

const part3Title = document.querySelector(".career_title_part3");
const part3Text = document.querySelector(".carreira_part3_text");

const button = document.querySelector(".send_resume");

const footerAdress = document.querySelector(".footer_adress");

if (language.textContent.toLowerCase() == "en") {
  menu();
  career();
} else if (language.textContent.toLowerCase() == "pt-br") {
  menuBR();
  careerBR();
}

language.addEventListener('click', (e) => {
  e.preventDefault();
  
 toggle();
});

languageMobile.addEventListener('click', () => {
  toggle();
});

function toggle() {
  if (language.textContent.toLowerCase() == "en") {  
    careerBR();
    menuBR();
    localStorage.setItem("lang", "PT-BR");
  } else if (language.textContent.toLowerCase() == "pt-br") {
    career();
    menu();
    localStorage.setItem("lang", "EN");
  }
}

function career() {
  part1Title.textContent = "Come grow with us";

  part1Subtitle.textContent = "Be a part of our successful team.";

  part1Text.textContent =
    "We believe that the construction of a diversity culture is fundamental. Hence, we invest in making our workplace a personal and professional growth environment as well as instigate diversity, equity and inclusion in our organization.";

  part2Title.textContent = "Our headquarters in Alegrete";

  part2Subtitle.textContent =
    "Come and visit our headquarters in the Technological Park of Unipampa/Alegrete and see what our company and city have to offer.";

  part2Text.textContent =
    "Alegrete is a small city in RS/Brazil, with a welcoming community and rich culture full of traditions. Alegrete is a developing city that offers a complete infrastructure for people who desire to work and grow professionally. We possess a modern and comfortable structure as well as a pleasant and inspiring workplace.";

  part3Title.textContent = "Became a highly \n successful professional";

  part3Text.textContent =
    "Become a member of our team, send your resume and come be a part of our future.";

  button.textContent = "Send your resume";

  footerAdress.textContent = "Avenue Tiarajú, 1406 - Pampatec, Sala 35 - Alegrete/RS - 97546-550 - Brazil"

}

function careerBR() {
  part1Title.textContent = "Venha crescer conosco";

  part1Subtitle.textContent = "Faça parte da nossa equipe de sucesso.";

  part1Text.textContent =
    "Acreditamos que a construção de uma cultura de diversidade é fundamental, por isso investimos para que nossos espaços de trabalho sejam locais de crescimento profissional e pessoal. Para isso investimos na diversidade, na equidade e na inclusão, em nossos espaço de trabalho.";

  part2Title.textContent = "Conheça a nossa sede em Alegrete-RS";

  part2Subtitle.textContent =
    "Venha conhecer a nossa sede em Alegrete e descubra o que essa cidade tem a oferecer.";

  part2Text.textContent =
    "Alegrete é uma cidade do interior do Rio Grande do Sul, possui uma população acolhedora e uma cultura rica em tradições gaúchas. Alegrete é uma cidade em crescimento e oferece uma infraestrutura completa para quem deseja trabalhar e crescer profissionalmente. Possuimos uma estrutura moderna e confortável, oferecemos um ambiente de trabalho agradável e inspirador para os nossos colaboradores.";

  part3Title.textContent = "Se torne um grande \n profissional de sucesso";

  part3Text.textContent =
    "Não perca a oportunidade de fazer carreira na nossa empresa, envie seu currículo e venha fazer parte da nossa equipe.";

  button.textContent = "Enviar Currículo";

  footerAdress.textContent = "Avenida Tiarajú, 1406 - Pampatec, Sala 35 - Alegrete/RS - 97546-550 - Brasil"

}
