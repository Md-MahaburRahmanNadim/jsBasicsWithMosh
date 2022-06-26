/* list of falsy value in js
undefined,null,''(empty string), 0, false, NaN
except those value all are truthy value
*/

// this is my solution and old way writing code
function countTruthy(array) {
  let count = 0;
  for (item of array) {
    // console.log(item);
    item === 0 ||
    item === "" ||
    item === false ||
    item === NaN ||
    item === null ||
    item === undefined
      ? ""
      : (count += 1);
  }
  return count;
}

// cleaver coding
function countTruthyV(array) {
  let count = 0;
  for (value of array) {
    if (value) count += 1;
  }
  return count;
}
// very simple and clean code
