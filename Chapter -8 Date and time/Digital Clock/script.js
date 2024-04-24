// Digital Clock

let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");
let sechand = document.querySelector(".second");

let ticking = function () {
  let currentDate = new Date();
  console.log(currentDate);
  let getHour = currentDate.getHours();
  let getMin = currentDate.getMinutes();
  let getSec = currentDate.getSeconds();

  hourHand.textContent = getHour;
  minHand.textContent = getMin;
  sechand.textContent = getSec;
};

setInterval(ticking,1000);