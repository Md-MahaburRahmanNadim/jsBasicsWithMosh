const numbers = [1, 3, -4, 3, -10];

// let's find the sum of this number by using tredisonal method or old method

let sum = 0;

for (number of numbers) {
  sum += number;
}
console.log(sum);

// let's find it by using by using morder reduce method

// explation of each steps
/*
const  numbers = [1,3,-4,3,-10];

st-1: a=0,c= 1 after ex of callback functoin 1
st-2: a=1,c=3 => 4
st-3: a=4,c=-4 => 0
st-4: a=0,c=3 => 3
st-5: a=3,c=-10 => -7

** if we don't supplied the 2nd argument of this function then the initial value in become first item of the array for that reason 1 ex is reduce
st-2: a=1,c=3 => 4
st-3: a=4,c=-4 => 0
st-4: a=0,c=3 => 3
st-5: a=3,c=-10 => -7

*/
const sumReduce = numbers.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  0
);
console.log(sumReduce); // same result alhumdullah
