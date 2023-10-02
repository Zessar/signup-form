const form = document.getElementById('form');

const inputs = {
  first: {
    regex: /^[a-zA-Z]+$/,
    errorMsg: 'Please enter a valid first name',
    ErrorMsg: 'First Name cannot be empty'
  },
  last: {
    regex: /^[a-zA-Z]+$/,
    errorMsg: 'Please enter a valid last name',
    ErrorMsg: 'Last Name cannot be empty'
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMsg: 'Please enter a valid email address',
    ErrorMsg: 'Looks like this not an email'
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
    errorMsg: 'Please enter a valid password',
    ErrorMsg: 'Password cannot be empty'
  }
};

function showError(inputElement, errorMsg) {
    const errorElement = inputElement.parentElement.querySelector('.error__msg-p');
    const errorLogos = inputElement.parentElement.querySelector('.error__logo');
    errorElement.textContent = errorMsg;
    inputElement.classList.add('error-input');
    errorElement.classList.add('show');
    errorLogos.classList.add('show');
  }
  
  function hideError(inputElement) {
    const errorElement = inputElement.parentElement.querySelector('.error__msg-p');
    const errorLogos = inputElement.parentElement.querySelector('.error__logo');
    inputElement.classList.remove('error-input');
    errorElement.classList.remove('show');
    errorLogos.classList.remove('show');
  }

function validateInput(input) {
  const inputElement = document.getElementById(input);
  const value = inputElement.value.trim();
  const regex = inputs[input].regex;

  if (value === '') {
    showError(inputElement, inputs[input].ErrorMsg);
  } else if (!regex.test(value)) {
    showError(inputElement, inputs[input].errorMsg);
  } else {
    hideError(inputElement);
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  for (const input in inputs) {
    validateInput(input);
  }
});

for (const input in inputs) {
  const inputElement = document.getElementById(input);
  inputElement.addEventListener('input', function() {
    hideError(inputElement);
  });
}