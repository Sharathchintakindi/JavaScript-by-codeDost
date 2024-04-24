// Intro to Objects
// let Cars = {
//   model:"z100",
//   year:2022
// }
// console.log(Cars.year);
// delete Cars.model;
// console.log(Cars.model);

// Cars.model = "X1000";

// console.log(Cars);

// let ageCalcualte = {
//   age : function(birthYear){
//     let age = 2024-birthYear;
//   return age;
//   }
// }

// console.log(`Current age is ${ageCalcualte.age(1996)}`)

// This Keyword

// In each method we have an access of special keyword called "this"

// in Each Keyword represnt the object."calling" the "method" in which it is present

// let Person = {
//   name:"Chintakidi",
//   Age:"27",
//   Education:"B.tech",
//   getDetails: function(){
//     return `My name is ${this.name} and age is ${this.Age} and education details ${this.Education}`;
//   }
// }

// console.log(Person.getDetails());

// forEach method: Its another type of loop which we used to traverse over the array

// let dishes = ["Egg","Chicken"];
// for(let i=0;i<dishes.length;i++){
//   console.log(dishes[i]);
// }

// forEach
// dishes.forEach(function(element){
//   console.log(element);
// }).

// Objects Inside the Array

// let blockList =[{userName:"sharath",reason:"Abusive Content"},{userName:"SS",reason:"copyRight"}];
// console.log(blockList);
// blockList.forEach(function(e){
//   console.log(e.userName);
// })

// Math Object
// Its a built in object in JS

// let num = 10.333;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.trunc(num));

// let age = Math.random();
// console.log(Math.round(age*100));

// Function
//call and apply method
//we can manually set the value of "this" keyword

// let Plane = {
//   airPlane: "Indigo",
//   itaCode: "F167",
//   bookings: [],
//   book: function(flighNum,name){
//     console.log(`${name} has boarded in the ${this.airPlane} with ${flighNum} with the ${this.itaCode}`);
//   }
// };

// Plane.book(5678,"Sharath");

// Call
// const person1 = {
//   firstName: "sharath",
//   lastName: "chintakindi"
// }

// const person2 = {
//   firstName: "chintakindi",
//   lastName: "sharath"
// }

// const person = {
//   fullName: function(city){
//     console.log(`My FullName is ${this.firstName} ${this.lastName} lives in a city called as ${city}`);
//   }
// }

// person.fullName.call(person2,"jangaon");

// // Apply

// person.fullName.apply(person2,["USA, bentonville"]);

// person.fullName.bind(person1);

// passing the value to the refernce Array

// let array = [1, 2, 3, 4, 5, 6, 7];
// console.log("org array : ",array);
// let array1 = array;
// console.log("ref array : ",array1);
// // array1 [8] = 10;
// // console.log("org array : ",array);
// // console.log("ref array : ",array1);

// // spread opeartor

// let array2 = [...array];
// console.log(array2);
// array2[11] = 10;
// console.log(array2);
// console.log("org array : ",array);

// let object = {
//   name: "Sharath",
//   age : 20
// }
// console.log(object);
// for(let key in object){
//   console.log(key);
// }