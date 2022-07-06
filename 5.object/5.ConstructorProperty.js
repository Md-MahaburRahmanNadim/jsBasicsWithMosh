"use strick";
// factory function
function createCircle() {
  return {
    radius: 1,
    draw() {
      console.log("draw");
    },
  };
}
const user1 = createCircle();
// by using this constructor property we find the function by which made of this user1 object

console.log(user1.constructor);

// constructor function
function DrawCircle() {
  this.radius = 5;
  this.draw = () => console.log("draw this function");
}

const user2 = new DrawCircle();
console.log(user2.constructor);

/* new Number()   1,2,4,5,...
new String()   '',"",``
new Boolian()  true,false
*/

const number = 12;
const string = "nadim";
const boolian = true;
const n = null;
const und = undefined;
console.log(`number ${number.constructor}`);
console.log(`string ${string.constructor}`);
console.log(`boolian ${boolian.constructor}`);
// console.log(`null ${n.constructor}`); they are not object null and undefined
// console.log(`undefined ${und.constructor}`);
