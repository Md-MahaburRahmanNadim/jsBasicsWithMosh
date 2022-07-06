const now = new Date();
console.log(now);
/* REMEMBER that in js mounth is start at 0 = january and 11 = Dec */

const newDate = new Date();
const date1 = new Date("May 11 2018 09:00");
console.log(date1);
const date2 = new Date(2018, 4, 11, 9);
console.log(now.getDate());
console.log(now.getMonth());

// set some date
now.setFullYear(2018);
console.log(now);

// some date string method
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // it's most useable format in now a days as a developer by using this date we have to talk with backend

/*
https://www.udacity.com/blog/2021/05/managing-dates-with-javascript-date-formats.html#
*/
