// working with array (simple methods)

// let letters = ["a", "b", "c", "d"];
// console.log(typeof letters);

//Reverse (mutate the original array)

// console.log(letters.reverse());

// concat

// let num = [1, 2, 3, 4, 5, 6];
// console.log(num);
// console.log(typeof num);
// let num1 = num.concat(letters);
// console.log(num1);
// console.log(typeof num1);

// join

// let num2 = [1, 2, 3, 4, 5, 6];
// let num3 = num2.join("-");
// console.log(num3);
// console.log(typeof num3);

// slice: It will extract the part of the array
// Array.slice(startIndex,lastIndex(excluded));

// let neArray = num.slice(1);
// console.log(neArray);

// Splice method
// used to add new elements into the Array
// Array.splice(index,deleteValue, valueToBeAdded);
// Return deleted items in the form of array

// let newArray = num.splice(0, 1, 2);
// console.log(newArray);

// Map Method

// Create new array from original array by applying
// transformation function

// let salaries = [20, 10, 15, 30, 25];

// let newSalaries = salaries.map((element) => {
//   let incrementatedSalary = element / 2;
//   return incrementatedSalary + element;
// });

// console.log("after increment: ", newSalaries);

// Filter PaymentMethodChangeEvent(used to perform filtartion on array)

// let cars = ["BMW", "Lambo", "benz", "Audi"];
// let filteredArray = cars.filter((element) => {
//   if (element == "BMW" || element == "benz") {
//     return element;
//   }
// });

// console.log(filteredArray);
// console.log(cars);

// Reduce method

// Run reducer function for each array element
// Array.reduce(function(total,currentvalue),intialValue)
//it returns single value

// let array = [1,2,3,4,5,6,7,8,9,10];
// let sum = array.reduce(function(total,currentValue){
// return total + currentValue;
// },0);

// console.log(sum);

// Find Method
// It return the "first " element we are looking for..
// let students = [
//   { id: 1, name: "Sharath" },
//   { id: 2, name: "Chintakindi" },
// ];

// let result = students.find((student) => {
//   return student.id === 2;
// });

// console.log(result);

// let ageNum = [12, 21, 22, 34, 55];

// let ageResult = ageNum.findIndex((age) => {
//   return age > 20 ;
// });

// console.log(ageResult);
