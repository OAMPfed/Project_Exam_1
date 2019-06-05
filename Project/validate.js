/*let nameId = document.getElementById("nameId");
let emailId = document.getElementById("emailId");
let subjectId = document.getElementById("subjectId")
let textareaId = document.getElementById("textId");
*/

function validateForm() {
    let nameId = document.getElementById("nameId");
    let emailId = document.getElementById("emailId");
    let subjectId = document.getElementById("subjectId");
    let textId = document.getElementById("textId");

    let validateName = /^[a-zA-Z ]+$/;
    let validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let validateSubject = /^[a-zA-Z0-9 ]+$/;


    if (validateName.test(nameId.value) == true) {
        nameId.style.border = "5px solid lightgreen";
    } else {
        nameId.style.border = "5px solid red";
        nameId.value = '';
        nameId.placeholder = "This is not a valid name";
    }
    if (validateEmail.test(emailId.value) == true) {
        emailId.style.border = "5px solid lightgreen";
    } else {
        emailId.style.border = "5px solid red";
        emailId.value = '';
        emailId.placeholder = "This is not a valid E-mail";
    }
    if (validateSubject.test(subjectId.value) == true) {
        subjectId.style.border = "5px solid lightgreen";
    } else {
        subjectId.style.border = "5px solid red";
        subjectId.value = '';
        subjectId.placeholder = "Letters & numbers only";
    }
    if (textId.value == "") {
        textId.style.border = "5px solid red";
        textId.value = '';
        textId.placeholder = "No empty mails, please.";
    } else {
        textId.style.border = "5px solid lightgreen";
    }

    if (validateName.test(nameId.value) == true
        && validateEmail.test(emailId.value) == true
        && validateSubject.test(subjectId.value) == true
        && textId.value !== "") {
        alert("Mission details have been recieved!");
    }
}