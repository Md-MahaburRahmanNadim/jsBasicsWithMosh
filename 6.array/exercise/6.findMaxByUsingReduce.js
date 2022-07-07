const numbers = [3, 5, 6, 23, 45, 6, 2, 4, 5, 6, 2, 22, 43, 3, 2, 2, 3, 6];

// old way
function getMaxManul(array) {
  let max = 0;
  if (array.length === 0) return undefined;
  for (value of array) {
    if (value > max) max = value;
  }
  return max;
}
const ar = [];
console.log(ar.length);
console.log(getMaxManul([]));
console.log(getMaxManul(numbers));

function getMaxReduce(array) {
  if (array.length === 0) return undefined;
  return array.reduce((max, item) => {
    // if(max < item) return item;
    // return max;
    return max < item ? item : max;
  });
}

console.log(getMaxReduce(numbers));
console.log(getMaxReduce([]));
image.png;
