// very bad with lot's of line code
function maxNumber(num1, num2) {
  if (num1 > num2) {
    console.log("The max number is ", num1);
  } else if (num1 < num2) {
    console.log(`The max number is ${num2}`);
  } else {
    console.log(`both are equal ${num1}`);
  }
}
maxNumber(12, 45);
// console.log("nadim");

// let's do the same this with less code by using ternary operator

function max(num1, num2) {
  return num1 > num2
    ? `num1 ${num1} is the bigger then num2 ${num2} `
    : `num2 ${num2} is the bigger then num1 ${num1}`;
}
