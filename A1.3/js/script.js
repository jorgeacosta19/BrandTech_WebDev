const $email = document.getElementById('email');
const $name = document.querySelector('#name');

function validateEmail() {
    alert('The Email is Not Valid ');
}

function validateName() {
    alert('The Name is Not Valid');
}

$email.addEventListener("invalid", validateEmail);
$name.addEventListener("invalid", validateName);