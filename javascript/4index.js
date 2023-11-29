let selectButton = document.querySelector("button");
selectButton.addEventListener("click", function alerting() {
  alert("Hooray!");
});

//Challenge 2
let form = document.querySelector("#password-form");
form.addEventListener("click", function dont(event) {
  event.preventDefault();
  let superp = document.querySelector("#password-input");
  if (superp.value) {
    alert(`🤣 Your super secret password is ${superp.value}`);
  }
});

//Challenge 3
let form2 = document.querySelector("#signup-form");
form2.addEventListener("click", function dont2(event) {
  event.preventDefault();
  let uEmail = document.querySelector("#email-input");
  let uUser = document.querySelector("#username-input");

  if (uEmail.value && uUser.value) {
    alert(`Your email ${uEmail.value}@${uUser.value}`);
  }
});
