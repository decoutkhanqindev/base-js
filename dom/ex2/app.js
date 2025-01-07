const username = document.getElementById('username')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const registerButton = document.getElementById('registerBtn')
const registrationForm = document.getElementById('registrationForm')

// Add a label to each of the input fields: username, password, confirm password
const usernameLabel = document.createElement('label')
usernameLabel.textContent = 'Username:'
username.insertAdjacentHTML('beforebegin', usernameLabel.textContent + '<br>')

const passwordLabel = document.createElement('label')
passwordLabel.textContent = 'Password:'
password.insertAdjacentHTML('beforebegin', passwordLabel.textContent + '<br>')

const confirmPasswordLabel = document.createElement('label')
confirmPasswordLabel.textContent = 'Confirm Password:'
confirmPassword.insertAdjacentHTML('beforebegin', confirmPasswordLabel.textContent + '<br>')

// Add a required validation to each input that shows an error message next to
// the entry if it does not have any text entered.
const checkInput = (event) => {
  const errorElement = Array.from(event.target.parentNode.querySelectorAll("span"))
  if (event.target.value === "" && !errorElement.length) {
    event.target.insertAdjacentHTML("afterend", '<span class="text-danger">Required</span')
  }
  if (errorElement && event.target.value !== "") {
    errorElement.forEach((elem) => elem.remove())
  }
}

username.addEventListener('blur', checkInput)
password.addEventListener('blur', checkInput)
confirmPassword.addEventListener('blur', checkInput)

// Add a further validation to check if the user input in the password and confirm
// password inputs match.  Show an error message if they do not.
confirmPassword.addEventListener('blur', (event) => {
  const errorElement = Array.from(event.target.parentNode.querySelectorAll("span"))
  if (event.target.value !== password.value) {
    if (!errorElement.length) {
      event.target.insertAdjacentHTML("afterend", '<span class="text-danger">Passwords do not match</span')
    }
  } else {
    errorElement.forEach((elem) => elem.remove())
  }
})

// Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.
// Once they have, the registration button should then be enabled.
registerButton.setAttribute('disabled', 'disabled')
registrationForm.addEventListener('change', (event) => {
  const formIsFilled = Array.from(document.querySelectorAll("input")).every(input => input.value != "")
  if (formIsFilled) {
    registerButton.removeAttribute('disabled')
  } else {
    registerButton.setAttribute('disabled', 'disabled')
  }
})

// When the user clicks the ‘Register’ button, a message should be displayed informing them of
// a successful user registration.
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const alert = document.createElement('div')
  alert.classList.add('alert', 'alert-success')
  alert.innerText = "User registrated successfully"
  
  registrationForm.prepend(alert)
})
