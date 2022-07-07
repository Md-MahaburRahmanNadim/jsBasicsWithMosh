const arr = [4, 5, 6];
/* const are mutable but not fully reasign able*/

// add element at enn
arr.push(7, 8, 9);

// start
arr.unshift(1, 2);

// middle arr.splice(index,deleteCount,addingElement,........)
arr.splice(2, 0, 3, "a", "b");

// let's spliice  this array into two slice
arr.slice(2, 5);
console.log(arr.slice(2, 6));

console.log(arr);
