import { menu } from './menu.js';

const Language = document.querySelector('.nav_language');

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


Language.addEventListener('click', (e) => {
  e.preventDefault();
  agribusines.textContent = "AGRIBUSINESS";


  agroText.textContent = " We have the perfect solution for obtaining better results in your property, in either agricultur, livestock or even crop and livestock integration. the perfect combination of technology and farming.";

  equipment.textContent = "EQUIPMENT CERTIFICATION";

  equipmentText.textContent = "Register and automatic completion of equipment certification system. The creation of certificates in a few clicks.  This system can be enjoyed by digital, commercial and industrial scales certification companies.";

  energyTitle.textContent = "SOLAR ENERGY";

  energyText.textContent = "Complete solution for managing companies involved in the installation and sale of solar energy equipment. Our technology encompasses lead generation, generation of personalized sales proposals, sales tracking by salesperson, project progress status, equipment installation, and customer satisfaction.";

  financialTitle.textContent = "TREASURY FINANCIAL";

  financialText.textContent = "";

  moreInfoP1.textContent = "Want to know more about how to use these technologies?";

  moreInfoP2.textContent = "insert your email and we will contact you.";

  input.placeholder = "Insert your e-mail";

  button.textContent = "I want to try";

  cadsTitle.textContent = "What our customers say";

  cardText1.textContent = "When we got to know the intellectual framework of 2Day, we had no doubt, so we quickly closed the deal to develop one of our main products, CONTROLE+. We handed over our knowledge to 2Day with the certainty that we would have a decisive and reliable product in the future, our product would be conclusive and reliable.";

  cardText2.textContent = "Choosing 2Day was essential for our business, as all the documentation was organized in such a way that any contracted developer can receive the documentation extremely quickly and start programming.";

  cardText3.textContent = "When Soltech was searching for a partner to develop our platform, choosing 2Day was essential. From the structuring to the launch of the platform, everything was elaborated with great competence. They are indispensable partners for our solution.";

  menu();

});