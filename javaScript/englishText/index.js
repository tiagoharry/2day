import { menu } from './menu.js';

const language = document.querySelector('.nav_language');
const languageMobile = document.querySelector('.mobile_language');

const principalTitle = document.querySelector('.principal_title');
const principalButton = document.querySelector('.btn_icon_home');
const principalText = document.querySelector('.principal_text');

const mentoriaTitle = document.querySelector('.mentoria_h2');
const mentoriaSubtitle = document.querySelector('.mentoria_paragrathBold');
const mentoriaText = document.querySelector('.mentoria_paragraph');

const missionTitle = document.querySelector('.mission_title');
const missionText = document.querySelector('.mission_text');
const visionTitle = document.querySelector('.vision_title');
const visionText = document.querySelector('.vision_text');

const valuesTitle = document.querySelector('.valores_title');

const weDoTitle = document.querySelector('.queFazemos_title');
const starTupText = document.querySelector('.starTup_text');
const outText = document.querySelector('.out_text');

const indexFinalText = document.querySelector('.indexFinal_text');
const indexFinalButton = document.querySelector('.OqueNosFazemos_btn');

language.addEventListener('click', () => {
  
  index();
  ourValuesList();
  menu();
});

languageMobile.addEventListener('click', () => {
  
  index();
  ourValuesList();
  menu();
});

function index() {
  principalTitle.textContent = "We work in the digital transformation of business/enterprises and startups.";

  principalText.textContent = "We have teams specialized in the development of information technology products according to the necessities of each player.";

  principalButton.textContent = "I want to know more";

  mentoriaTitle.textContent = "Get to know a bit more about our history";

  mentoriaSubtitle.textContent = "We idealized a company focused on the people, either contributors or business partners.";

  mentoriaText.textContent = "We were born from the dream of transforming  analogic business through technological innovations. We are a team of IT people who seek to nurture and develop new ideas and businesses through the development of innovative IT products.";

  missionTitle.textContent = "Our mission";

  missionText.textContent = "Our mission is to empower businesses with cutting-edge technological solutions that optimize operations, enhance customer experiences, and foster growth in the digital era.";

  visionTitle.textContent = "Our vision";

  visionText.textContent = "Our goal is to be a leading technology company, acting as an extension of our clients IT departments. We strive to offer competitive prices and unwavering  commitment to our clients and business partners.";

  valuesTitle.textContent = "Our Values";

  weDoTitle.textContent = "What do we do?";

  starTupText.textContent = "We work as an idea incubator and partner for startups, dedicating a specialized team with adapted methodologies to develop innovative digital products.";

  outText.textContent = "We take care of your company's IT in order for you to have exclusive dedication on your core business.";

  indexFinalText.textContent = "Explore our exceptional products and discover why we are the number one choice of those seeking for quality, efficiency and long lasting  results.";

  indexFinalButton.textContent = "I want to meet right now";
}

function ourValuesList() {
   const list1 = document.querySelector('.list1');
   list1.textContent = "client satisfaction";
   const list2 = document.querySelector('.list2');
   list2.textContent = "Appreciation of collaborators";
   const list3 = document.querySelector('.list3');
   list3.textContent = "Focus in the results";
   const list4 = document.querySelector('.list4');
   list4.textContent = "Function as a member of the company: Together our brand?? is stronger";
   const list5= document.querySelector('.list5');
   list5.textContent = "Be business partners with our clients";
   const list6 = document.querySelector('.list6');
   list6.textContent = "Commitment with our clients - Your success is our sucess";
   const list7 = document.querySelector('.list7');
   list7.textContent = "Ethic and transparency";
   const list8 = document.querySelector('.list8');
   list8.textContent = "High cost/benefit";
   const list9 = document.querySelector('.list9');
   list9.textContent = "Search for high impact technologic challenge";
   const list10 = document.querySelector('.list10');
   list10.textContent = "respect, development and recognition";
   const list11 = document.querySelector('.list11');
   list11.textContent = "free speech";
}