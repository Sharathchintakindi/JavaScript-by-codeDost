// Date and Time

// Date Object always carry both "date" and "time"

// Using Date method

let currentDate = new Date();
console.log(currentDate);

// Using timeStamp(integer number represnt in "ms" from 1-1-1970)

let currentTime = new Date(35077);
console.log(currentTime);

// To get time in "ms"

let newTime = new Date().getTime();
console.log(newTime);

// Methods of Date are:

// getDate()	Returns the day of the month (from 1-31)
// getDay()	Returns the day of the week (from 0-6)
// getFullYear()	Returns the year
// getHours()	Returns the hour (from 0-23)
// getMilliseconds()	Returns the milliseconds (from 0-999)
// getMinutes()	Returns the minutes (from 0-59)
// getMonth()	Returns the month (from 0-11)
// getSeconds()	Returns the seconds (from 0-59)
// getTime() Returns the number of milliseconds since midnight Jan 1 1970, and a specified date