import { menu, menuBR } from './menu.js';
import { setLang } from "../global/variable.js";

const language = document.querySelector('.nav_language');
const languageMobile = document.querySelector('.mobile_language');

const title = document.querySelector('.contact_title');
const subtitle = document.querySelector('.contact_subtitle');
const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');
const checkmark1 = document.querySelector('.ckeckbox_text1');
const checkmark2 = document.querySelector('.checkbox_text2');
const button = document.querySelector('button');

const footerAdress = document.querySelector(".footer_adress");


if (language.textContent.toLowerCase() == "en") {
  menu();
  contact();
} else if (language.textContent.toLowerCase() == "pt-br") {
  menuBR();
  contactBR();
}

language.addEventListener('click', (e) => {
  e.preventDefault();
  toggle();
});

languageMobile.addEventListener('click', (e) => {
  e.preventDefault();
  toggle();
});

function toggle() {
  if (language.textContent.toLowerCase() == "en") {
    contactBR();
    menuBR();
    localStorage.setItem("lang", "PT-BR");
  } else if (language.textContent.toLowerCase() == "pt-br") {
    contact();
    menu();
    localStorage.setItem("lang", "EN");
  }
}

function contact() {
  title.textContent = "Want to Innovate with us? Become our business partner!";

  subtitle.textContent = "Fill up this form and send us your message.";

  name.placeholder = "Name";

  phone.placeholder = "Phone";

  message.placeholder = "Message";

  checkmark1.textContent = "I agree to receive messages via this email";

  checkmark2.textContent = "I agree to receive messages through this phone number";

  button.textContent = "SEND";

  footerAdress.textContent = "Avenue Tiarajú, 1406 - Pampatec, Sala 35 - Alegrete/RS - 97546-550 - Brazil"

}

function contactBR() {
  title.textContent = "Quer ser nosso parceiro? Vem inovar com a gente!";

  subtitle.textContent = "Preencha o formulário e deixe a sua mensagem.";

  name.placeholder = "Nome";

  phone.placeholder = "Telefone";

  message.placeholder = "Mensagem";

  checkmark1.textContent = "Eu concordo em receber mensagens através deste e-mail.";

  checkmark2.textContent = "Eu concordo em receber mensagens pelo meu número de telefone.";

  button.textContent = "Enviar";

  footerAdress.textContent = "Avenida Tiarajú, 1406 - Pampatec, Sala 35 - Alegrete/RS - 97546-550 - Brasil"

}