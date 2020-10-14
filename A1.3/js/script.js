 /*====Using the JS events, functions and HTML===*/

 // Using this input in HTML for the name
 /* <input required type="text" minlength="3" maxlength="20" id="name" name="name" placeholder="Name"></input> */



 // const $sendBtn = document.getElementById("btnRequest");
 // const $email = document.getElementById('email');
 // const $name = document.querySelector('#name');


 // function validateEmail() {
 //     alert(`The Email is Not a Valid email address `);
 // }

 // function validateName() {
 //     alert(`The Name is Not Valid`);
 // }

 // function validateOk() {
 //     alert(`Thank you ${$name.value} you will receive an email in ${$email.value}`);
 // }


 // $email.addEventListener("invalid", validateEmail);
 // $name.addEventListener("invalid", validateName);
 // $sendBtn.addEventListener("submit", validateOk);



 /*======Using Function, if and Else, JavaScript events,
                         Regular Expression =======*/

 //     Using this input for the name in the HTML
 /* <input required type="text" id="name" name="name" placeholder="Name"> */


 const $sendBtn = document.getElementById("btnRequest");
 const $email = document.getElementById('email');
 const $name = document.querySelector('#name');


 function validateOk() {
     if ($name.value.length < 3 || $name.value.length > 20) {
         alert('The name should be between 3 and 20 characters ')
     } else if ($name.value.match(/[0-9]/g)) {
         alert('The name Should not contain numbers');
     } else if ($name.value.match(/[!@#$%&*',.]/g)) {
         alert('The name Should not contain special Characters');
     } else if (!$email.value.match(/@/g)) {
         alert('The email must contain the symbol @');
     } else if (!$email.value.match(/.COM/gi)) {
         alert('The email must contain .com');
     } else {
         alert(`Thank you ${$name.value} you will receive an email in ${$email.value}`);
     }
 }

 $sendBtn.addEventListener("click", validateOk);