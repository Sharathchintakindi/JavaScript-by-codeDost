// Functions

// It is a simply piece of code which we can use in our pragram many times
// Its just like a variable holding some piece of code

// function f(){
//   console.log("hello World");
// }

// f();

// let cars = function (name, speed = "320km/hr") {
//   console.log(`${name} is really fast in road ${speed}`);
// };

// cars("Ferrari");

// let ageCalculation = function (birthYear, currentYear = 2024) {
//   let age = currentYear - birthYear;
//   return age;
// };

// console.log(ageCalculation(1996));

// Arrow Function
// let Mobile = name => `welcome ${name} to the party`;
// console.log(Mobile("sharath"));

// let mobile = name => `welcome to the ${name}`;
// console.log(mobile("world"));

// passing function as an arugument(higher oredr function Example)

// let upperCase = function (str) {
//   return str.toUpperCase();
// };

// let lowerCase = function (str) {
//   return str.toLowerCase();
// };

// let transform = function (fun, str) {
//   return fun(str);
// };

// console.log(transform(lowerCase,"hello"));

// function returning Functions

// let invitation = function(name){
//   return function(msg){
//     console.log( `${name} well ${msg}`);
//   }
// }
// invitation("sharath")("hello");

// let comp = invitation("good");
// comp("----");

// IIFE(Immediately invoked function expression)
// executed once

// (function(){
//   console.log("hello world");
// })
// ();

// (function(){
//   console.log(" world");
// })
// ();

// setTimeout and setInterval

// setTimeout -> run function "once" after "interval" of time
//setInterval -> run function repeatedly, Starting after the interval of time, then repeating

//setTimeout(func/code,delay,arg1,argu2,....)

// function greeting() {
//   console.log(" welcome to the world ");
// }
// setTimeout(greeting, 2000);

// setTimeout(function greetin(){
//   console.log("hello world");
// },2000);

// function Invitation(num1,num2){
//   console.log(num1 * num2);
// }
// setInterval(Invitation,2000,2,5);
// h();
// let h =  greet=>()=>{
//   console.log("hello welcome");
// }
