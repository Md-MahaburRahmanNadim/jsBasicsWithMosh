const numbers = [1, 3, -4, -5, -3, 3, 2, 34, 5, 3, 1, 55, 3423, 234];

const positiveNum = numbers.filter(number => number >= 0 && number < 100);
console.log(positiveNum);

// by mapping let's convert this array to an html list items

const html = positiveNum.map(number => `<li> ${number} </li>`);
console.log(html); // arry of string

// method chaining

const pureHtml =
  positiveNum.map(number => `<li> ${number} </li>`).join("") + "\n";
console.log(`<ul> ${pureHtml} </ul>`);
console.log(typeof pureHtml);

// let create an object

const arrOfObject = positiveNum.map(item => {
  return { value: item };
});
console.log(arrOfObject);

// let do the chaining operation on the array of object
const chainingOnTheArrayOfObject = positiveNum
  .map(number => {
    return {
      value: number,
    };
  })
  .filter(item => item.value < 30)
  .map(obj => obj.value)
  .filter(between1_15 => between1_15 > 0 && between1_15 <= 15)
  .sort()
  .map(items => {
    return {
      value: items,
    };
  });
console.log(chainingOnTheArrayOfObject);
