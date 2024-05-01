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

// function getData(dataId){
//   setTimeout(()=>{
//     console.log("data",dataId);
//   },2000);
// }

// function getData(dataId){
//   setTimeout(()=>{
//     console.log("data",dataId);
//   },3000);

// }
// getData(1);

// function getData(dataId,getNextData){
//   setTimeout(()=>{
//     console.log("data",dataId);
//     if(getNextData){
//       getNextData();
//     }
//   },5000);
// }

// getData(2,()=>{
//   getData(3);
// }); //Firstly 2 printed in console and then 3 prints

// Will get the data by 3 second Delay with name,lastname,age,place

// function getData(name,Lastname){
//   setTimeout(()=>{
//     console.log(name);
//     if(Lastname){
//       Lastname();
//     }
//   },3000);
// }

// getData("Sharath",()=>{
//   getData("Chintakindi",()=>{
//     getData(25,()=>{
//       getData("Janagaon");
//     });
//   });
// });

// Promises

// let promise = new Promise((resolve,reject) =>{
//   console.log("Iam a promise");
//   resolve("error");
// })

// function getData(dataId,getNextData){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data",dataId);
//       resolve("sucess");
//       if(getNextData){
//         getNextData();
//       }
//     },5000);
//   })
// }

// function getData(dataId, newData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("sucess");
//       reject("error Occured");
//       if (newData) {
//         newData();
//       }
//     }, 5000);
//   });
// }

// Promise Then and catch methods

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("iam promise");
//     resolve("Success");
//     // reject(" Network error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise Ful filled",res);
// });

// promise.catch((err) => {
//   console.log("error occured",err);
// });

// promise chaining

// function asyncFunction() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Sum Data1");
//       resolve("Success");
//     }, 3000);
//   });
// }
// console.log("Fetching data1");

// let p1 = asyncFunction();
// p1.then((res) => {
//   console.log(res);
// });

function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sucess");
      resolve("Sucess");
    }, 5000);
  });
}

function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sucess");
      resolve("Sucess");
    }, 5000);
  });
}

console.log("fetching data1");

let p1 = asyncFun1();
p1.then((res) => {
  console.log(res);
  console.log("fetching data2");
  let p2 = asyncFun2();
  p2.then((res) => {
    console.log(res);
  });
});
