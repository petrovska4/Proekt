let name = localStorage.getItem('name') || "Tijana";
let flag = localStorage.getItem('flag') || "false";
let email = localStorage.getItem('email') || "tijanapetrovska@gmail.com";
let password = localStorage.getItem('password') || "1234";

function showDialog() {
  document.getElementById("signInDialog").showModal();
}
function showRegisterDialog() {
  document.getElementById("registerDialog").showModal();
}
function closeDialog() {
  document.getElementById("signInDialog").close();
}
function closeRegisterDialog() {
  document.getElementById("registerDialog").close();
  showDialog();
}

document.addEventListener("DOMContentLoaded", function() {

  var signInForm = document.getElementById('signInForm');
  var registerForm = document.getElementById('registerForm');

  if( flag === "true" ) {
    document.getElementById('user').innerText = "Welcome " + name;
  }
  
  function loginRegister() {
    var popup = document.getElementById("loginPopup");
    popup.classList.toggle("show");
  }  
  
  function submit() {
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;
    if( localStorage.getItem('email') === emailInput && localStorage.getItem('password') === passwordInput ) {
      closeDialog();
      document.getElementById('user').innerText = "Welcome " + localStorage.getItem('name');
      localStorage.setItem('flag', "true");
    } else {
      alert("Wrong email or password!");
    }
  }

  function register() {
    var emailInput = document.getElementById('emailRegister').value;
    var passwordInput = document.getElementById('passwordRegister').value;
    var name = document.getElementById('name').value;
    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);
    localStorage.setItem('name', name);
    closeRegisterDialog();
  }
  
  document.getElementById('login/register').addEventListener('click', loginRegister);
  signInForm.addEventListener('click', submit);
  registerForm.addEventListener('click', register);
  document.getElementById('register').addEventListener('click', showRegisterDialog);
});