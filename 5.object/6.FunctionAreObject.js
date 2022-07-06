"use strick";
function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw the circle");
  };
}

/* function is an object because if we write like this than we get some built in method and property(CreateCircle.)*/

/* when we wright a constractor functoin behind the seen an built in function pearce this function like below */

// const CreateCircle2 = new Function(
//   "radius",
//   `
// {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw the circle");
//   }
// `
// );
// now we can call this function like before function calling
// const circle = CreateCircle2(56);

const another = new CreateCircle(2);

// we can change the value of this by using call and applied method

CreateCircle.call(12, 34);
