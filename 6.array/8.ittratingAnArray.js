/* by using for of loop or forEach mehtod */

const arr = [3, 5, 6, 7, 3, "a", "c"];
for (key of arr) console.log(key);

// by using forEach mehtod

arr.forEach((number, index) => console.log(index, number)); // here we get extra index of the array which are not ablable in the( for of loop)
