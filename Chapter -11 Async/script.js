// Asynchronous JavaScript

// console.log(1);
// console.log(1);

// setTimeout(() => {
//   console.log("Async method");
// },5000);

// console.log(1);
// console.log(1);


// Making HTTP Request (example)

let request = new XMLHttpRequest();
  console.log(request,request.readyState);
  request.addEventListener('readystatechange',()=>{
    console.log(request,request.readyState);
  })

  request.open("Get","https://jsonplaceholder.typicode.com/todos");

  request.send();