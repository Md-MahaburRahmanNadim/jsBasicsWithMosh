// factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw a circle");
    },
  };
}

// constractor function
function DrawFunction(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("Create a circle");
    });
}

// calling constractor function
const circle1 = new DrawFunction(2);
console.log(circle1);
const circle2 = new DrawFunction(5);
console.log(circle2);
