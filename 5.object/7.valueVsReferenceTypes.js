/* primitives are copied by their value and store different mamory location for each variable which is decleard (whether it copied or not). Therefore those variable are independent variable. If one of the copied variable changed other are not changed*/

let x = 10;
let y = x;

x = 100;
console.log(x);
console.log(y);

let a = { value: 10 };
let b = a;
a.value = 40;
console.log(a);
console.log(b);

// for function same thing occured
function testingValue(x) {
  x++;
}
console.log(x + `  100`);
function objTesting(a) {
  a.value++;
}
objTesting(a);
console.log(a);
