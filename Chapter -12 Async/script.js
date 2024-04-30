// console.log("one");
// console.log("two");
// console.log("three");

// function hello(){
//   console.log("hello world");
// }

// setTimeout(hello,3000);

// async
// It will print the four hello then print the hello it will not wait

// console.log("hello");
// console.log("hello");

// setTimeout(()=>{
//   console.log("hello world");
// },4000);

// console.log("hello");
// console.log("hello");

// Callback: a callback is a function passed as an arugument to another function

// function app(a, b){
//   console.log(a/b);
// }

// function app1(a, b, appCallback){
//   appCallback(a, b);
// }

// app1(4,8,app);

// function calculator(a,b, summCallback){
//   summCallback(a,b);
// }

// calculator(2,4, (a,b) => {
//   console.log(a+b);
// });

// const hello = ()=>{
//   console.log("Hello World");
// }

// setTimeout(hello,4000);

// callback hell: Nested callbacks stacked below one another forming a pyramid structure (pyramid of DOOm)

// This style of programming becomes difficult to understand & manage

// let age = 12;
// if (age >= 10) {
//   if (age >= 15) {
//     console.log("aged");
//   } else {
//     console.log("not aged");
//   }
// } else {
//   console.log("Minor");
// }


// for(let i=0;i<5;i++){
//   for (let j=0;j<5;j++){
//     console.log(j);
//   }
// }

function getData(dataId){
  setTimeout(()=>{
    console.log("data",dataId);
  },2000);
}
