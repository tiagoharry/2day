const ButtonLanguage = document.querySelector('.nav_language');

const aboutUs = document.querySelector('.about');
const services = document.querySelector('.services');
const career = document.querySelector('.career');
const contact = document.querySelector('.contact');
const apointment = document.querySelector('.apointment');

ButtonLanguage.addEventListener('click', (e) => {
  e.preventDefault();

  
  aboutUs.textContent = "About us";
 
  services.textContent = "Services";
 
  career.textContent = "Career";
 
  contact.textContent = "Contact"; 
  
  apointment.textContent = "Schedule meeting";
});

