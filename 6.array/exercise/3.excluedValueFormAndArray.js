/*
exclued value from an array  here we also get the array as a exclued value */

const arr = [1, 3, 3, 3, 3, 8, 8, 6, 6, 6, 7, 9];

/* my solution so sad
function except(array, excludedArrOrPri) {
  if (typeof excludedArrOrPri !== "object") {
    const emtP = [];
    for (item of array) {
      if (item !== excludedArrOrPri) emtP.push(item);
    }
    return emtP;
  } else {
    const emtR = [];
    for (item of array) {
      for (exNum of excludedArrOrPri) {
        console.log(exNum, item);
        if (item !== exNum) {
          if (item === item) emtR.push(item);
        }
      }
    }
    return emtR;
  }
}

const output = except(arr, [1, 0]);
console.log(output);

*/

// mosh solution

function except(array, excludedArrOrPri) {
  if (typeof excludedArrOrPri !== "object") {
    const emtP = [];
    for (item of array) {
      if (item !== excludedArrOrPri) emtP.push(item);
    }
    return emtP;
  } else {
    const emtR = [];
    for (item of array) {
      if (!excludedArrOrPri.includes(item)) {
        emtR.push(item);
      }
    }
    return emtR;
  }
}
console.log(except(arr, [3, 8, 6]));
console.log(except(arr, 3));
