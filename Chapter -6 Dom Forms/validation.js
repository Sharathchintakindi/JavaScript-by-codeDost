// regular expression (regEx)

// It is apatter of characters used to do pattern matching
// or we can say for "data validation"

// Implementation of password validation

// length at Least =8
// At least contain one uppercase letter
// At least contain one lowrcase letter
// At least contain one number letter

let form = document.querySelector(".Validation-form");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let passwordPattern =
  "^(?=^.{8,11}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
console.log(form);
// console.log(passwordPattern);

// Form Validation

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(" value submitted");

  let passwordValue = password.value;
  console.log(passwordValue);

  let result = passwordValue.match(passwordPattern);
  if (result == true) {
    console.log("strong passwrod");
  } else {
    console.log("try again");
  }
});
