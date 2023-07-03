const language = document.querySelector('.nav_language'); 

const part1Title = document.querySelector('.career_part1_title');
const part1Subtitle = document.querySelector('.carreira_part1_subtitle');
const part1Text = document.querySelector('.carreira_part1_text');

const part2Title = document.querySelector('.career_title_part2');
const part2Subtitle = document.querySelector('.carreira_part2_subtitle');
const part2Text = document.querySelector('.carreira_part2_text');

const part3Title = document.querySelector('.career_title_part3');
const part3Text = document.querySelector('.carreira_part3_text');

const button = document.querySelector('button');

language.addEventListener('click', (e) => {
  e.preventDefault();
  
  part1Title.textContent = "Come grow with us";

  part1Subtitle.textContent = "Be a part of our successful team.";

  part1Text.textContent = "We believe that the construction of a diversity culture is fundamental. Hence, we invest in making our workplace a personal and professional growth environment as well as instigate diversity, equity and inclusion in our organization.";

  part2Title.textContent = "Our headquarters in Alegrete";

  part2Subtitle.textContent = "Come and visit our headquarters in the Technological Park of Unipampa/Alegrete and see what our company and city have to offer.";

  part2Text.textContent = "Alegrete is a small city in RS/Brazil, with a welcoming community and rich culture full of traditions. Alegrete is a developing city that offers a complete infrastructure for people who desire to work and grow professionally. We possess a modern and comfortable structure as well as a pleasant and inspiring workplace.";

  part3Title.textContent = "Became a highly \n successful professional";

  part3Text.textContent = "Become a member of our team, send your resume and come be a part of our future.";

  button.textContent = "Send your resume";

});