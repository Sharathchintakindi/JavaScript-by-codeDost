// forms events (Submit Form)
let form1 = document.querySelector(".sign-in-form");
console.log(form1);
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form1.userName.value,form1.lastName.value);
});
