/*const language = document.querySelector('.nav_language'); 

const aboutUs = document.querySelector('.about');
const services = document.querySelector('.services');
const career = document.querySelector('.career');
const contact = document.querySelector('.contact');
const apointment = document.querySelector('.apointment');
const lang = document.querySelector('.nav_language');


language.addEventListener('click', (e) => {
  e.preventDefault();

    aboutUs.textContent = "About us";
   
    services.textContent = "Services";
   
    career.textContent = "Career";
   
    contact.textContent = "Contact"; 
    
    apointment.textContent = "Schedule meeting";

    lang.innerText = "EN";

});*/

export function menu() {
  const aboutUs = document.querySelector('.about');
  const services = document.querySelector('.services');
  const career = document.querySelector('.career');
  const contact = document.querySelector('.contact');
  const apointment = document.querySelector('.apointment');
  const lang = document.querySelector('.nav_language');
  
    aboutUs.textContent = "About us";
   
    services.textContent = "Services";
   
    career.textContent = "Career";
   
    contact.textContent = "Contact"; 
    
    apointment.textContent = "Schedule meeting";

    lang.innerText = "EN";
}
