const numbers = [3, 4, -5, 23, 100, 34, 2, 56, -3, 5 - 34, -34, 234];

const filteredNumber = numbers.filter(
  possitive => possitive >= 0 && possitive < 100
);
console.log(filteredNumber);

//  in realy word project we dill with array of object where we have bunch of object from those object we have to filter some object based on some kind of condition. Like this website filter options (https://www.yelp.com/biz/beep-s-burgers-san-francisco)
