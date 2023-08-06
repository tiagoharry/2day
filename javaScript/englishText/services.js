import { menu, menuBR } from './menu.js';
import { setLang } from "../global/variable.js";

const language = document.querySelector('.nav_language');
const languageMobile = document.querySelector('.mobile_language');

const agribusines = document.querySelector('.agro_title');
const agroText = document.querySelector('.agro_text');
const equipment = document.querySelector('.agro_title2');
const equipmentText = document.querySelector('.agro_text2');

const energyTitle = document.querySelector('.energy_title');
const energyText = document.querySelector('.energy_text');
const financialTitle = document.querySelector('.financial_title');
const financialText = document.querySelector('.fiancial_text');

const moreInfoP1 = document.querySelector('.more_info_p1');
const moreInfoP2 = document.querySelector('.more_info_p2');

const input = document.querySelector('.forms');
const button = document.querySelector('.send');

const cadsTitle = document.querySelector('.cards_title');
const cardText1 = document.querySelector('.card_text1');
const cardText2 = document.querySelector('.card_text2');
const cardText3 = document.querySelector('.card_text3');

const footerAdress = document.querySelector(".footer_adress");


if (language.textContent.toLowerCase() == "en") {
  menu();
  services();
} else if (language.textContent.toLowerCase() == "pt-br") {
  menuBR();
  servicesBR();
}

language.addEventListener('click', (e) => {
  e.preventDefault();
  
 toggle();
});

languageMobile.addEventListener('click', (e) => {
  
  toggle();
});

function toggle() {
  if (language.textContent.toLowerCase() == "en") {  
    servicesBR();
    menuBR();
    localStorage.setItem("lang", "PT-BR");
  } else if (language.textContent.toLowerCase() == "pt-br") {
    services();
    menu();
    localStorage.setItem("lang", "EN");
  }
}

function services() {
  agribusines.textContent = "AGRIBUSINESS";

  agroText.textContent = " We have the perfect solution for obtaining better results in your property, in either agricultur, livestock or even crop and livestock integration. the perfect combination of technology and farming.";

  equipment.textContent = "EQUIPMENT CERTIFICATION";

  equipmentText.textContent = "Register and automatic completion of equipment certification system. The creation of certificates in a few clicks.  This system can be enjoyed by digital, commercial and industrial scales certification companies.";

  energyTitle.textContent = "SOLAR ENERGY";

  energyText.textContent = "Complete solution for managing companies involved in the installation and sale of solar energy equipment. Our technology encompasses lead generation, generation of personalized sales proposals, sales tracking by salesperson, project progress status, equipment installation, and customer satisfaction.";

  financialTitle.textContent = "TREASURY FINANCIAL";

  financialText.textContent = "We work with a platform of energy solar financing. Integrators and clients have a benefits of a automated finance service without having to go to the bank. We bring the banks into your office.";

  moreInfoP1.textContent = "Want to know more about how to use these technologies?";

  moreInfoP2.textContent = "insert your email and we will contact you.";

  input.placeholder = "Insert your e-mail";

  button.textContent = "I want to try";

  cadsTitle.textContent = "What our customers say";

  cardText1.textContent = "When we got to know the intellectual framework of 2Day, we had no doubt, so we quickly closed the deal to develop one of our main products, CONTROLE+. We handed over our knowledge to 2Day with the certainty that we would have a decisive and reliable product in the future, our product would be conclusive and reliable.";

  cardText2.textContent = "Choosing 2Day was essential for our business, as all the documentation was organized in such a way that any contracted developer can receive the documentation extremely quickly and start programming.";

  cardText3.textContent = "When Soltech was searching for a partner to develop our platform, choosing 2Day was essential. From the structuring to the launch of the platform, everything was elaborated with great competence. They are indispensable partners for our solution.";

  footerAdress.textContent = "Avenue Tiarajú, 1406 - Pampatec, Sala 35 - Alegrete/RS - 97546-550 - Brazil"

}

function servicesBR() {
  agribusines.textContent = "AGRONEGÓCIO";

  agroText.textContent = " Sistemas de Gestão e Gerenciamento do Agronegócio. Temos a solução certa para o Produtor Rural obter melhores resultados na sua propriedade, seja na agricultura, pecuária ou integração lavoura e pecuário. A tecnologia a serviço do campo.";

  equipment.textContent = "CERTIFICAÇÃO DE EQUIPAMENTOS";

  equipmentText.textContent = "Sistema de cadastro e preenchimento automático de certificação de equipamentos. A geração de certificados em poucos cliques. Este sistema pode ser usado por empresas de certificação de balanças digitais, comerciais e industriais de todas as marcas, modelos e capacidades.";

  energyTitle.textContent = "ENERGIA SOLAR";

  energyText.textContent = "Solução completa para gestão de integradoras de energia solar. Nossa tecnologia abrange a captação de leads, geração de propostas personalizadas, acompanhamento das vendas por vendedor, status do andamento dos projetos, instalação e satisfação do cliente.";

  financialTitle.textContent = "FINANCEIRO";

  financialText.textContent = "Trabalhamos com uma plataforma de financiamento de projetos de energia solar. As integradoras e clientes se beneficiam de um serviço automatizado de financiamento sem ter que se deslocar até o banco. Levamos os bancos para dentro do seu escritório.";

  moreInfoP1.textContent = "Quer saber mais sobre como utilizar essas ferramentas?";

  moreInfoP2.textContent = "Insira seu e-mail que entraremos em contato";

  input.placeholder = "Insira seu e-mail aqui";

  button.textContent = "Quero Experimentar";

  cadsTitle.textContent = "O que os nossos clientes dizem?";

  cardText1.textContent = "Quando conhecemos a estrutura intelectual da 2Day não tivemos dúvidas, logo fechamos para desenvolver um dos nossos principais produtos, o CONTROLE+. Entregamos o nosso conhecimento à 2Day com a certeza de que, teremos, no futuro, um produto resolutivo e confiável.";

  cardText2.textContent = "A escolha da 2Day foi essencial para o nosso negócio, pois toda documentação ficou organizada de forma que qualquer desenvolvedor contratado possa receber a documentação e começar a programar de forma extremamente rápida.";

  cardText3.textContent = "Quanto a Soltech buscou um parceiro para desenvolver a nossa plataforma a escolha da 2Day foi essencial, desde a estruturação até o lançamento da plataforma tudo foi elaborado com muita competência. São parceiros imprescindíveis para a nossa solução.";

  footerAdress.textContent = "Avenida Tiarajú, 1406 - Pampatec, Sala 35 - Alegrete/RS - 97546-550 - Brasil"

}