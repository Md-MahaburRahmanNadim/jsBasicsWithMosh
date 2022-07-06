function createCircle() {
  return {
    radius: 1,
  };
}

const user2 = createCircle();
user2.draw = function () {
  console.log("draw");
};
console.log(user2.draw());

function DrawCircle() {
  this.radius = 1;
}
const user1 = new DrawCircle();
user1.x = 10;
// DrawCircle.x = 10;
console.log(user1);
console.log(createCircle());
/* we saw that in the upper postion of this file that the dynimic nature of object are not work with 'factory and constractor function when we going to applied on to the function not the stored object. It's work when we save those function into a variable then it's convert function to an object. that's why we can create or delete some object property and method */

const obj = {
  radius: 5,
};
obj.draw = () => console.log("Nadim");
obj.nameOfTheRadius = "Nadim";
obj.color = "green";
// let's delete some property and method
delete obj.radius;
// boom the radius is gon form this object
console.log(obj);
