const language = document.querySelector('.nav_language'); 

const title = document.querySelector('.contact_title');
const subtitle = document.querySelector('.contact_subtitle');
const checkmark1 = document.querySelector('#check1');
const checkmark2 = document.querySelector('#check2');
const button = document.querySelector('button');

language.addEventListener('click', (e) => {
  e.preventDefault();

  title.textContent = "Want to Innovate with us? Become our business partner!";

  subtitle.textContent = "Fill up this form and send us your message.";
  
  checkmark1.textContent = "I agree to receive messages via this email";

  checkmark2.textContent = "I agree to receive messages through this phone number";

  button.textContent = "SEND";

});