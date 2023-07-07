let form = document.querySelector("form");
let errorImg = document.querySelector(".error-image");
let errorMsg = document.querySelector(".error-message");
let emailInput = document.querySelector(".email-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateEmail(emailInput.value)) {
    errorImg.style.display = "none";
    errorMsg.style.display = "none";
    alert("success");
  } else {
    errorImg.style.display = "block";
    errorMsg.style.display = "block";
  }
});

emailInput.addEventListener("keypress", function () {
  errorImg.style.display = "none";
  errorMsg.style.display = "none";
});

const validateEmail = function (email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
