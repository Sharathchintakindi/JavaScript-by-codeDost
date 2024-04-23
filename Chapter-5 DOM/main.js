// console.log(document);

// Dom manipulation
// Query Selector returns first element that matches CSS selector
// querySelectorAll : which returns all the matched elements

// let r = document.querySelector("p");
// console.log(r);
// let querySelectore = document.querySelectorAll("p");
// console.log(querySelectore);
// console.log(document.querySelector("p"));

// console.log(document.querySelector("#heading4"));

// console.log(document.querySelector(".heading5"));

// querySelectore.forEach(element => {
//   console.log(element);
// });

// console.log(document.getElementById("heading4"));
// console.log(document.getElementsByTagName("h4"));
// console.log(document.getElementsByClassName("heading5"));

// Updating and Changing Content

// InnerText
// Ignore the spaces
// retrive the data as a plain Text

// let result = document.querySelector(".content");
// result.innerText += "<p> Hello All </p>";

// console.log(result.innerText);

// InnerHTML
// will not ignore the spaces
// retrive the data with HTML Formats

// console.log(result.innerHTML);

// result.innerHTML += "<p> Hello Sharath </p>";
// result.innerHTML += "<h1> Hello Sharath </h1>";

// Getting  and setting the attribute
// https://www.facebook.com/

// let getting = document.querySelector("a");
// // console.log(getting.getAttribute("href"));
// getting.setAttribute("href","https://www.facebook.com/");
// console.log(getting.getAttribute("href"));

// let img1 = document.querySelector("img");
// // console.log(img1.getAttribute("src"));

// img1.setAttribute("src","https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg");
// console.log(img1.getAttribute("src"));

// let parentElement = document.querySelector("h2");
// console.log(parentElement.parentElement);

// console.log(parentElement.nextElementSibling);

// Events
