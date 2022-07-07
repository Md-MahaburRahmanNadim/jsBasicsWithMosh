let arr = [1, 34, "a", "c", 234, 32, "Nadim"];

// but if we referancing new object then the garbag collector are not clean it like below. but solution er pora jodi hoy ta hola empty hobe

let newArr = arr;
// solution 1.It's work when it's not referancing another object or variable
// arr = []; // it's couse the grabage collected problem.It's not the solution.It also cause the other solution are not work

// sol 2 by zeroing the length of the array
arr.length = 0; //it's like solution 1 this is the best solution

// sol 2 by using splice method
arr.splice(0, arr.length);

// sol 4 by using while loop but it worst case
while (arr.length > 0) {
  arr.pop();
  // arr.length--;
}

console.log(newArr);
console.log(arr);
