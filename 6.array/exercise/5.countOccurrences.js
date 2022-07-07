const numbers = [3, 5, 6, 23, 45, 6, 2, 4, 5, 6, 2, 22, 43, 3, 2, 2, 3, 6];

function countOccurrences(array, searcElement) {
  let count = 0;
  for (value of array) {
    if (value === searcElement) count += 1;
  }
  return count;
}

console.log(countOccurrences(numbers, 4));
console.log(countOccurrences(numbers, 2));

// let do it by using reduce method

function countOccurrencesByReduce(array, searcElement) {
  let count = 0;
  array.reduce((accumulator, items) => {
    console.log(items);

    if (items === searcElement) count += 1;
  }, 0); // if we don't give 2nd argument then item is start from 2nd item is not start form 1st item becuase 1st item is captured by accumulator mind it
  return count;
}
console.log(countOccurrencesByReduce(numbers, 3));

// mosh solution

function countOccurrencesByReduceMosh(array, searcElement) {
  return array.reduce((accumulator, item) => {
    const count = searcElement === item ? 1 : 0;
    return accumulator + count;
  }, 0);
}

console.log(countOccurrencesByReduceMosh(numbers, 2));
