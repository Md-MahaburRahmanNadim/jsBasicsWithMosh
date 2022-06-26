/* rule of this exercise
Divisibleby 3 it's show the massage the fizz
divisible by 5 = buzz
divisible  by both 3 and 5 = fizzbuzz
not divisible by 3 or 5 => input number
not a number = not a number (if we input except number or anything then we get this message not a number)
*/
// my solution
function fizzBuzz(input) {
  if (typeof input !== "number") {
    console.log(`Not a number ${input}`);
  } else if ((input % 3 === 0) & (input % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (input % 3 === 0) {
    console.log("Fizz");
  } else if (input % 5 === 0) {
    console.log("Buzz");
  } else if (!((input % 3 === 0) & (input % 5 === 0))) {
    console.log(input);
  }
}

// mosh solution
function fizzbuzzMosh(input) {
  if (typeof input !== "number") return NaN;
  if ((input % 3 === 0) & (input % 5 === 0)) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  else return input;
}
