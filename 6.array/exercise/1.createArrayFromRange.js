// create a function which take min,max as a perameter and create a array which contain item between all integer number min and max value

function arrayFromRange(min, max) {
  let emArr = [];
  for (min; min <= max; min++) {
    emArr.push(min);
  }
  return emArr;
}

console.log(arrayFromRange(-10, -4));
// if we supplied max value below then min vlaue then we get an empty array
console.log(arrayFromRange(3, -1));
