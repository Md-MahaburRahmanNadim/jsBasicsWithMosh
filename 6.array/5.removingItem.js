/* pop/push 
  shift/unshift
  splice(1,3)/splice(1,0,3,4,3)*/
const arr = [1, 3, 5, "a", "b", 1, 6, 3, "3"];

// end pop
// const poperdItem = arr.pop();
// console.log(poperdItem);
// console.log(arr);
// // start shift
// const shiftedItem = arr.shift();
// console.log(arr);
// console.log(shiftedItem);

// // middle splice(2,3) here 2 and 3 no index item are deleted
// const deletedItems = arr.splice(2, 3);
// console.log(deletedItems);
// console.log(arr);

let spliceArr = arr.splice(1, 0, 2, 3, 4, 3);
console.log(spliceArr);
console.log(arr);
