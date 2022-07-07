const arr = [1, 3, 5, "a", "b", 1, 6, 3, "3"];

/*
arr.indexOf(findingElement,fromWhereStartTheFindings) */

console.log(arr.indexOf(1));
console.log(arr.indexOf(1, 3));
console.log(arr.lastIndexOf(3));
console.log(arr.indexOf(3, 4)); // if we supplied the second perameter then it's equvilant to lastIndexOf slightly

// let's cheak something in array or not
console.log(arr.indexOf(1) !== -1); // that mean it's exist. it a old way to find something in have or not

console.log(arr.includes("a"));

// if a item is not there in an array then it's reutn -1
console.log(arr.indexOf(123));
console.log(arr.includes(123));
