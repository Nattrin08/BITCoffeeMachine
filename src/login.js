sessionStorage.setItem("userSave", "user");
sessionStorage.setItem("passSave", "pass");

function checkLogin(event) {
  event.preventDefault();
  var userStorage = sessionStorage.getItem("userSave");
  console.log(userStorage);
  var passStorage = sessionStorage.getItem("passSave");
  console.log(passStorage)
  var loginName = document.getElementById("userName");
  var loginpass = document.getElementById("userPassword");
  if (loginName.value === userStorage && loginpass.value === passStorage) {
    alert("Correcto");
  } else {
    alert("Incorrecto");
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