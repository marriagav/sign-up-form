let pwd1 = "";
let pwd2 = "";

class Error {
  constructor(input, errorMessage, errorKey) {
    this.input = input;
    this.errorMessage = errorMessage;
    this.errorKey = errorKey;
  }
  showErrorMessage() {
    let elem = document.querySelector(".errorMessage");
    console.log(elem);
    if (elem) {
      return;
    }
    let error = document.createElement("p");
    error.className = "errorMessage";
    error.textContent = this.errorMessage;
    let container = document.querySelector("fieldset");
    container.appendChild(error);
  }
}

function searchForErrors() {
  console.log(this);
  if (this.name == "pwd") {
    pwd1 = this;
  } else if (this.name == "confirm_pwd") {
    pwd2 = this;
  }
  passwordMatch(pwd1, pwd2);
}

function passwordMatch(pwd1, pwd2) {
  console.log(pwd1.value, pwd2.value);
  if (pwd1.value == undefined || pwd2.value == undefined) {
    return;
  }
  if (pwd1.value !== pwd2.value) {
    console.log("Passwords do not match");
    let error = new Error(pwd2, "*Passwords do not match", "password");
    error.showErrorMessage();
  } else {
    let error = document.querySelector(".errorMessage");
    error.remove();
  }
}

var h = document.querySelector(".form").offsetHeight - 20 + "px";
document.querySelector(".form").style.height = h;

const inputSections = document.querySelectorAll("input");

inputSections.forEach((input) =>
  input.addEventListener("input", searchForErrors)
);
