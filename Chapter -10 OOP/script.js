//Object oriented programming

//constructor functiom and the "new" operator

// we can not use arrow function as constructor

//call "constructor" function using "new" keyword

//1. new {Object} created empty initially
//2. "this" ={object}
//3. object linked to prototype
//4. functional automatically return{object}

// let Car = function (color,model) {
//   //properties
//   this.color = color;
//   this.model = model;
// };
// let result =  new Car("Red", 2023);
// let result1 =  new Car("green", 2023);
// let result2 =  new Car("yellow", 2023);
// let result3 =  new Car("blue", 2023);

// console.log(result, result1, result2, result3);
// console.log(result instanceof Car);

// prototypes

// each object created by "constrcutor" function have an access to all "methods" present inside that "constructor" prototypes

let Person = function (first,last,age,eyecolor){
  this.firstName = first;
  this.lasName = last;
  this.age = age;
  this.eyecolor = eyecolor; 
}
Person.prototype.nationality = "English";
console.log(Person.prototype);
console.log(new Person("Sharath","chintakindi",25,"blue"));