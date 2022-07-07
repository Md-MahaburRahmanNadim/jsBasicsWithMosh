/* If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction).
compareFunction(a, b) return value 	sort order
> 0 	sort a after b
< 0 	sort a before b
=== 0 	keep original order of a and b

Note: By default, the sort() method sorts the array elements in ascending order with the smallest value first and largest value last.

Arrays of objects can be sorted by comparing the value of one of their properties.
  */

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by using name key

items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignoring upper and lowercase as ascii code utf-16 standard value create a problem
  const nameB = b.name.toUpperCase(); // ignoring upper and lowercase
  if (nameA > nameB) return 1;
  if (nameA < nameB) return -1;
  return 0;
  // nameA > nameB ? 1 : nameA<nameB ? -1 : 0;
});
console.log(items);
// let do it by using value as a premitive

// sort by using value key
items.sort((a, b) => {
  // const nameA = a.value.toUpperCase() // ignoring upper and lowercase as ascii code utf-16 standard value create a problem
  // const nameB = b.valu.toUpperCase(); // ignoring upper and lowercase
  if (a.value > b.value) return 1;
  if (a.value < b.value) return -1;
  return 0;
});
console.log(items);

const primitiveArr = [2, 3, 34322, 435, 234, 8923, 3, 1, 4, 6, 8, 100];
// we  can sort them by using sort method.use callback function is the best option for the larger value and also for the referance data type

primitiveArr.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return a === b;
});
console.log(primitiveArr);

// for referance we can compayer only one key
const refArr = [
  { course: "Node.js", id: 1 },
  { course: "js", id: 2 },
];

// not consedering the case sensintivity
refArr.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});
console.log(refArr);

// consedering case ensintivity
refArr.sort((a, b) => {
  let NameA = a.course.toLowerCase();
  let NameB = b.course.toLowerCase();
  if (NameA > NameB) return 1;
  if (NameA < NameB) return -1;
  return 0;
});

function desendingSort(a, b) {
  return b - a; // desending sort
  // return a-b; assinding sort
}
function assindingSort(a, b) {
  return a - b;
}
// stirng array
const stringArray = ["Blue", "Humpback", "Beluga"];
stringArray.sort();
console.log(stringArray);

// number array
const numberArray = [40, 1, 5, 200];
numberArray.sort();
console.log(numberArray); //not properly sort for solving this we have to use desendingSort function
numberArray.sort(desendingSort);
console.log(numberArray);

numberArray.sort(assindingSort);
console.log(numberArray);

// numericStringArray
const numericStringArray = ["80", "9", "700"];

numericStringArray.sort();
console.log(numericStringArray); // not good result but by defould desending sort

numericStringArray.sort(assindingSort);
console.log(numericStringArray); // ma sha allah good result

// mixed
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
mixedNumericArray.sort();
console.log(mixedNumericArray); // noting sorted but number are sorted according to the assinding order
mixedNumericArray.sort(assindingSort);
console.log(mixedNumericArray);
mixedNumericArray.sort(desendingSort);
console.log(mixedNumericArray);

/*Sorting non-ASCII characters

For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use String.localeCompare. This function can compare those characters so they appear in the right order.

});*/
// const items2 = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
// items.sort(function (a, b) {
//   return a.localeCompare(b);
// });

let mixedCaseAnimals = ["Cat", "dog", "Elephant", "bee", "ant"];

// here you have to consider upper and lowercase
mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});
console.log(mixedCaseAnimals);
