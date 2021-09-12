function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validateEmail() {
    const input = document.getElementById("email");
    const value = input.value;
    const emailValid = emailIsValid(value);
    if (emailValid == false) {
        document.getElementById("warningIconEmail").style.display = "block";
        document.getElementById("EWarning").style.display = "block";
        document.getElementById("email").style.border = "1px solid #FF7979";
    } else {
        document.getElementById("warningIconEmail").style.display = "none";
        document.getElementById("EWarning").style.display = "none";
        document.getElementById("email").style.border = "1px solid #5E54A4";
    }
}

function validateEmptyFirstName() {
    const input = document.getElementById("firstName");
    if (input.value.length == 0) {
        document.getElementById("warningIconFirstName").style.display = "block";
        document.getElementById("FNWarning").style.display = "block";
        document.getElementById("firstName").style.border = "1px solid #FF7979";
    } else {
        document.getElementById("warningIconFirstName").style.display = "none";
        document.getElementById("FNWarning").style.display = "none";
        document.getElementById("firstName").style.border = "1px solid #5E54A4";
    }
}

function validateEmptyLastName() {
    const input = document.getElementById("lastName");
    if (input.value.length == 0) {
        document.getElementById("warningIconLastName").style.display = "block";
        document.getElementById("LNWarning").style.display = "block";
        document.getElementById("lastName").style.border = "1px solid #FF7979";
    } else {
        document.getElementById("warningIconLastName").style.display = "none";
        document.getElementById("LNWarning").style.display = "none";
        document.getElementById("lastName").style.border = "1px solid #5E54A4";
    }
}

function validateEmptyPassword() {
    const input = document.getElementById("password");
    if (input.value.length == 0) {
        document.getElementById("warningIconPassword").style.display = "block";
        document.getElementById("PWarning").style.display = "block";
        document.getElementById("password").style.border = "1px solid #FF7979";
    } else {
        document.getElementById("warningIconPassword").style.display = "none";
        document.getElementById("PWarning").style.display = "none";
        document.getElementById("password").style.border = "1px solid #5E54A4";
    }
}