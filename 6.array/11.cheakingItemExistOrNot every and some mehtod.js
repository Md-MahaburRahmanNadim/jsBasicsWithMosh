const checkAllExistOrNot = [1, 4, 5, 6];

const allArePositive = checkAllExistOrNot.every(value => value >= 0);
console.log(allArePositive);

// if condition is false then it stop the searching and show the (false)  in that moment
const withNegetive = [2, 3, -3, 5, 4, 5];

const allArePositiveBreak = withNegetive.every(value => value >= 0);
console.log(allArePositiveBreak);

// some = at least one of the item are mathched the condition then it's stop the item searching and show the true result

const altLeastOneConditionMathched = checkAllExistOrNot.some(
  value => value >= 0
);
console.log(altLeastOneConditionMathched);

const allAreNegOneArePositive = [-3, -4, 5, -3, -34];
const atLeast = allAreNegOneArePositive.some(value => value >= 0);
console.log(atLeast);
