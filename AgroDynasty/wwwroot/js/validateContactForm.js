const emptyField = "Заполните это поле";

function validateForm() {
    let isValid = true;

    if (!validateName()) {
        isValid = false;
    }
    if (!validatePhone()) {
        isValid = false;
    }
    if (!validateEmail()) {
        isValid = false;
    }

    return isValid;
}

function validateName() {
    let letters = /^[A-Za-zА-Яа-я\s]+$/;
    let name = document.getElementById("name");
    let message = document.getElementById("name-invalid");
    name.value = name.value.trim();

    if (name.value === "" || /^\s*$/.test(name.value)) {
        makeInvalid(name, message, emptyField);
        return false;
    }
    if (!name.value.match(letters)) {
        makeInvalid(name, message, "Допустимы только буквы");
        return false;
    }
 
    makeValid(name);
    return true;
}

function validatePhone() {
    let pattern = /^\+?[0-9]+$/;
    let phone = document.getElementById("phone-inp");
    let phoneParent = phone.parentElement;
    let message = document.getElementById("phone-invalid");

    if (phone.value === "") {
        makeInvalid(phoneParent, message, emptyField);

        return false;
    }
    if (!phone.value.match(pattern)) {
        makeInvalid(phoneParent, message, "Допустимы только цифры");
        return false;
    }

    makeValid(phoneParent);
    return true;
}

function validateEmail() {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email");
    let message = document.getElementById("email-invalid");

    if (email.value === "") {
        makeInvalid(email, message, emptyField);
        return false;
    }
    if (!email.value.match(pattern)) {
        makeInvalid(email, message, "Неверный формат");
        return false;
    }

    makeValid(email);
    return true;
}

function makeInvalid(elem, message, msg) {
    elem.classList.remove("is-valid");
    elem.classList.add("is-invalid");
    message.innerText = msg;
}

function makeValid(elem) {
    elem.classList.remove("is-invalid");
    elem.classList.add("is-valid");
}