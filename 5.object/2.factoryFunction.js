const drawCircle = {
  radius: 20,
  parameter: function () {
    let x = 10;
    let y = 20;
    console.log(x);
    console.log(y);
  },
  draw: () => console.log("draw"),
};

/* let's imagin we have lot's of user those user want to create there own circle. How can we sarve this service very easyly? 

are this duplicating this example lot's of time or create a factory which produce OBJECT like an factor which create different kind of product*/

/* here 'factory function' come to an action'*/

function circleFactory(radius) {
  return {
    // radius:radius this same as in mordern js in below line of code. if property and value name are same then we put only property name not the value. which is shortend from of object wrighting
    radius,
    draw() {
      console.log("draw");
    },
  };
}
// now when we call this function we can create a brand new functoin or object and also store it in new variable

const user1Draw = circleFactory(3);
console.log(user1Draw);
const user2Draw = circleFactory(1);
console.log(user2Draw);
