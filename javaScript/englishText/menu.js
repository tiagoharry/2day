export function menu() {

  const aboutUs = document.querySelector('.about');
  const aboutUsMobile = document.querySelector('.aboutMobile');

  const services = document.querySelector('.services');
  const servicesMobile = document.querySelector('.sevicesMobile');

  const career = document.querySelector('.career');
  const careerMobile = document.querySelector('.careerMobile');

  const contact = document.querySelector('.contact');
  const contactMobile = document.querySelector('.contactMobile');

  const appointment = document.querySelector('.appointment');
  const appointmentMobile = document.querySelector('.appointmentMobile');

  const lang = document.querySelector('.nav_language');
  const langMobile = document.querySelector('.mobile_language');
  
    aboutUs.textContent = "About us";
    aboutUsMobile.textContent = "About us";
   
    services.textContent = "Services";
    servicesMobile.textContent = "Services";
   
    career.textContent = "Career";
    careerMobile.textContent = "Career";
   
    contact.textContent = "Contact"; 
    contactMobile.textContent = "Contact";
    
    appointment.textContent = "Schedule meeting";
    appointmentMobile.textContent = "Schedule meeting";

    lang.innerText = "EN";
    langMobile.innerText = "EN";
}
