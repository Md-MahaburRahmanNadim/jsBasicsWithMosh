const arr = [1, 3, 4, 5, "a", "b"];
const arr1 = [1, 3, 4, 5, "a", "b", 34, 23];

// combine by using concat
const combined = arr.concat(arr1);
console.log(combined);
// combine by using slice operator

const slicing = arr.slice(2, 5);
console.log(slicing);
const slicingRest = arr.slice(5);
console.log(slicingRest);
const copyHole = arr.slice();
console.log(copyHole);

// now lets coping array or concat array more elegent way or vusial way by using spred operator

// concat by using spread
const cocatSpread = [...arr, "hasan", 2, 3, 4, ...arr1, "nadim"];
console.log(cocatSpread);

// copy hole array
const copy = [...cocatSpread];
console.log(copy);
