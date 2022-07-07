const numbers = [1, 2, 3, 4];

// let add -2 on after 3 by using slice method. that mean when we add item in a position we have to give 1 more to that index than it's put in right position

// wrong position numbers.splice(2,0,-2)
// right position numbers.splice(3,0,-2);
// console.log(numbers);

// const output = move(numbers, 1, -1);
// const outpu = move(numbers, 3, 1);
// console.log(outpu);

/* my dump solution */
function moveDump(array, index, offset) {
  if (index === 0) {
    console.log(array);
    const addElement = array.shift();
    array.splice(offset, 0, addElement);
    return array;
  }
  if (index === array.length - 1) {
    console.log(array);
    const addElement = array.pop();
    array.splice(offset, 0, addElement);
    return array;
  }
  if (!(index === array.length - 1 || index === 0)) {
    const addElement = array.splice(index, 1).join("");
    console.log(addElement);
    array.splice(offset, 0, addElement);
    return array;
  }
}

console.log(moveDump(numbers, 3, 0));

// smart solution come from for only smartly understainding the problem

/**
 *
 * @param {array} array
 * @param {index of your given array} index
 * @param {the position you what to move your indexes item} offset
 *
 * 1st step to move one thing to anoter is remove it first and store it some where.Becuase at end you have to put it the right palce
 * 2nd place the remove item in the right place
 */
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0)
    return console.error("inviled offset");

  const output = [...numbers];
  const addElement = output.splice(index, 1)[0];
  output.splice(position, 0, addElement);

  return output;
}

console.log(move(numbers, 2, 1));
