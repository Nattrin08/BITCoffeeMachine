sessionStorage.setItem("userSave", "user");
sessionStorage.setItem("passSave", "pass");

const userStorage = sessionStorage.getItem("userSave");
const passStorage = sessionStorage.getItem("passSave");
const loginName = document.getElementById("userName");
const loginPass = document.getElementById("userPassword");
const loginAlert = document.getElementById("loginMessage");
const loginButton = document.getElementById("submitButton");

var loginAttempts = 3;

loginAlert.style.visibility = "hidden";

function checkLogin(event) {
  event.preventDefault();
  
  if (loginName.value === userStorage && loginPass.value === passStorage) {
    // alert("Correcto");
    loginAlert.style.visibility = "visible";
    loginAlert.style.color = "green"
    loginAlert.classList.replace("alert-danger", "alert-success");
    loginAlert.innerHTML = "Usuario y contraseña correctos. Bienvenido"
  } else {
    // alert("Incorrecto");
    loginAttempts--;
    loginAlert.style.visibility = "visible";
    loginAlert.style.color = "red"
    loginAlert.innerHTML = "Usuario y/o contraseña incorrectos.\n Quedan " + loginAttempts + " intentos.";
    loginName.focus();
  }

  if (loginAttempts === 0) {
    loginAlert.innerHTML = "Por seguridad la cuenta se ha bloqueado";
    loginButton.classList.replace("enabled", "disabled");
  }
}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()