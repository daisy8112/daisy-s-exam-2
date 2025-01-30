document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector('.signup__input__email');
    const signupButton = document.querySelector('.signup__button');
    const message = document.querySelector('#message');
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    emailInput.addEventListener('input', function() {
      if (emailPattern.test(emailInput.value)) {
        emailInput.style.borderColor = 'rgb(232,240,254)'; 
        emailInput.style.backgroundColor = '#fff'; 
        emailInput.style.color = '#000'; 
        message.style.display = 'none'; 
      } else {
        emailInput.style.borderColor = 'red'; 
        emailInput.style.backgroundColor = '#fff'; 
        emailInput.style.color = 'red'; 
        message.style.display = 'block'; 
      }
    });
  
    signupButton.addEventListener('click', function(event) {
      if (!emailPattern.test(emailInput.value)) {
        event.preventDefault(); 
      }
    });
});
