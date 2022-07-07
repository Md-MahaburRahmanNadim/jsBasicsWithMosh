/* create a manul version of the include method or raw code of the include method
 */

const arr = [1, 3, 6, 7, 9];

function includes(array, searchElement) {
  return array.some(matched => searchElement === matched);
}

const res = includes(arr, -9);
console.log(res);

// not using any kind of built in method

function include(array, searchElement) {
  for (value of array) if (value === searchElement) return true;
  return false;
}

console.log(include(arr, 3));
console.log(include(arr, 0));
