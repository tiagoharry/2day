import { menu, menuBR } from "./menu.js";
import { setLang } from "../global/variable.js";

const language = document.querySelector(".nav_language");
const languageMobile = document.querySelector(".mobile_language");

const principalTitle = document.querySelector(".principal_title");
const principalButton = document.querySelector(".btn_icon_home");
const principalText = document.querySelector(".principal_text");

const mentoriaTitle = document.querySelector(".mentoria_h2");
const mentoriaSubtitle = document.querySelector(".mentoria_paragrathBold");
const mentoriaText = document.querySelector(".mentoria_paragraph");

const missionTitle = document.querySelector(".mission_title");
const missionText = document.querySelector(".mission_text");
const visionTitle = document.querySelector(".vision_title");
const visionText = document.querySelector(".vision_text");

const valuesTitle = document.querySelector(".valores_title");

const weDoTitle = document.querySelector(".queFazemos_title");
const starTupText = document.querySelector(".starTup_text");
const outText = document.querySelector(".out_text");

const indexFinalText = document.querySelector(".indexFinal_text");
const indexFinalButton = document.querySelector(".OqueNosFazemos_btn");

if (language.textContent.toLowerCase() == "en") {
  menu();
  index();
} else if (language.textContent.toLowerCase() == "pt-br") {
  menuBR();
  indexBR();
}

language.addEventListener("click", (e) => {
  e.preventDefault();

  toggle();
});

languageMobile.addEventListener("click", () => {
  toggle();
});

function toggle() {
  if (language.textContent.toLowerCase() == "en") {
    indexBR();
    ourValuesListBR();
    menuBR();
    localStorage.setItem("lang", "PT-BR");
  } else if (language.textContent.toLowerCase() == "pt-br") {
    index();
    ourValuesList();
    menu();
    localStorage.setItem("lang", "EN");
  }
}

function index() {
  principalTitle.textContent =
    "We work in the digital transformation of business/enterprises and startups.";

  principalText.textContent =
    "We have teams specialized in the development of information technology products according to the necessities of each player.";

  principalButton.textContent = "I want to know more";

  mentoriaTitle.textContent = "Get to know a bit more about our history";

  mentoriaSubtitle.textContent =
    "We idealized a company focused on the people, either contributors or business partners.";

  mentoriaText.textContent =
    "We were born from the dream of transforming  analogic business through technological innovations. We are a team of IT people who seek to nurture and develop new ideas and businesses through the development of innovative IT products.";

  missionTitle.textContent = "Our mission";

  missionText.textContent =
    "Our mission is to empower businesses with cutting-edge technological solutions that optimize operations, enhance customer experiences, and foster growth in the digital era.";

  visionTitle.textContent = "Our vision";

  visionText.textContent =
    "Our goal is to be a leading technology company, acting as an extension of our clients IT departments. We strive to offer competitive prices and unwavering  commitment to our clients and business partners.";

  valuesTitle.textContent = "Our Values";

  weDoTitle.textContent = "What do we do?";

  starTupText.textContent =
    "We work as an idea incubator and partner for startups, dedicating a specialized team with adapted methodologies to develop innovative digital products.";

  outText.textContent =
    "We take care of your company's IT in order for you to have exclusive dedication on your core business.";

  indexFinalText.textContent =
    "Explore our exceptional products and discover why we are the number one choice of those seeking for quality, efficiency and long lasting  results.";

  indexFinalButton.textContent = "I want to meet right now";
}

function indexBR() {
  principalTitle.textContent =
    "Trabalhamos na transformação digital das empresas e startups!";

  principalText.textContent =
    "Somos especializados no desenvolvimento personalizado da tecnologia da informação,formada por times de know-how no negócio de cada player.";

  principalButton.textContent = " QUERO SABER MAIS";

  mentoriaTitle.textContent = "Conheça um pouco sobre \n a nossa história.";

  mentoriaSubtitle.textContent =
    " Idealizamos uma empresa focada nas pessoas, sejam elas colaboradores ou parceiros.";

  mentoriaText.textContent =
    " Nascemos do sonho de transformar a região do Pampa Gaúcho por meio do desenvolvimento tecnológico apoiados por talentos nascidos na região. Formamos um time de pessoas que buscam apoiar e desenvolver ideias e negócios através da transformação digital.";

  missionTitle.textContent = "Nossa Missão:";

  missionText.textContent =
    "Desenvolver a transformação digital das empresas e startups, com inovação, excelência em qualidade, transparência e segurança.";

  visionTitle.textContent = "Nossa Visão:";

  visionText.textContent =
    "Ser referência como empresas de tecnologia, atuando como extensão de TI dos nossos clientes com preços competitivos, comprometimento com os clientes e parceiros.";

  valuesTitle.textContent = "Nossos Valores:";

  weDoTitle.textContent = "O que nós fazemos?";

  starTupText.textContent = "Trabalhamos como incubadora de ideias e parceiros de Startups, dedicamos um time especializado e com metodologias adaptadas para desenvolver produtos digitais inovadores.";

  outText.textContent =
    "Cuidamos da TI da sua empresa para que você tenha dedicação exclusiva no seu negócio. Um time é dedicado exclusivamente para desenvolver as demandas de tecnologia.";

  indexFinalText.textContent =
    " Conheça nossos produtos excepcionais e descubra por que somos a escolha número um para aqueles que buscam qualidade, eficiência e resultados duradouros.";

  indexFinalButton.textContent = "Quero Conhecer Agora Mesmo";
}

function ourValuesList() {
  const list1 = document.querySelector(".list1");
  list1.textContent = "Client satisfaction";
  const list2 = document.querySelector(".list2");
  list2.textContent = "Appreciation of collaborators";
  const list3 = document.querySelector(".list3");
  list3.textContent = "Focus in the results";
  const list4 = document.querySelector(".list4");
  list4.textContent =
    "Function as a member of the company: Together our brand?? is stronger";
  const list5 = document.querySelector(".list5");
  list5.textContent = "Be business partners with our clients";
  const list6 = document.querySelector(".list6");
  list6.textContent =
    "Commitment with our clients - Your success is our sucess";
  const list7 = document.querySelector(".list7");
  list7.textContent = "Ethic and transparency";
  const list8 = document.querySelector(".list8");
  list8.textContent = "High cost/benefit";
  const list9 = document.querySelector(".list9");
  list9.textContent = "Search for high impact technologic challenge";
  const list10 = document.querySelector(".list10");
  list10.textContent = "Respect, development and recognition";
  const list11 = document.querySelector(".list11");
  list11.textContent = "Free speech";
}

function ourValuesListBR() {
  const list1 = document.querySelector(".list1");
  list1.textContent = "Satisfação do cliente";
  const list2 = document.querySelector(".list2");
  list2.textContent = "Valorização dos colaboradores";
  const list3 = document.querySelector(".list3");
  list3.textContent = "Foco nos resultados";
  const list4 = document.querySelector(".list4");
  list4.textContent =
    "Atuar como parte integrante da empresa: juntos nossa marca é mais forte!";
  const list5 = document.querySelector(".list5");
  list5.textContent = "Ser parceiro e sócio dos nossos clientes";
  const list6 = document.querySelector(".list6");
  list6.textContent =
    "Comprometimento com o cliente";
  const list7 = document.querySelector(".list7");
  list7.textContent = "Ética e transparência";
  const list8 = document.querySelector(".list8");
  list8.textContent = "Custos baixos e benefício compensatório";
  const list9 = document.querySelector(".list9");
  list9.textContent = "Busca por desafios tecnológicos de impacto";
  const list10 = document.querySelector(".list10");
  list10.textContent = "Respeito, desenvolvimento e reconhecimento";
  const list11 = document.querySelector(".list11");
  list11.textContent = "Simplicidade e liberdade de expressão";
}
