const createCircle = {
  radius: 34,
  draw() {
    console.log("create the circle");
  },
  x: 23,
};

// cloing object by using old method(for in loop)
const anotherObj = {}; // fill with value by using for in loop
for (key in createCircle) {
  anotherObj[key] = createCircle[key];
  // anotherObj['radius'] = createCircle[radius]
  //  radius = 34
}
console.log(anotherObj);

// by the help of Object.assign({}/existngObject,listOfObjectThatAreGoingToCoppied)
const objAssign = Object.assign({}, anotherObj, createCircle);
console.log(objAssign);

// by using spread operator
const cloneObjetSpreadOperator = {
  ...createCircle,
  ...anotherObj,
  ...objAssign,
};
console.log(cloneObjetSpreadOperator);
console.log(...Object.keys(cloneObjetSpreadOperator));
