"use strick";
/* let's make a something which draw circle
 */
let circle = 20;
const x = 4;
const y = 7;
/* if we have a variable and function which are highly related each other. Then we put those related things in a object */
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
drawCircle.parameter();
drawCircle.draw();
