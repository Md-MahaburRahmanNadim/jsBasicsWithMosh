const AddConst = function (street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
};

const address1 = new AddConst("a", "b", "f");
const address2 = new AddConst("a", "b", "f");
// anoter solution
function areEqualAnoter(add1, add2) {
  return (
    add1.street === add2.street &&
    add1.city === add2.city &&
    add1.zipCode === add2.zipCode
  );
}
console.log(areEqualAnoter(address1, address2));

function areEqual(add1, add2) {
  for (key in add1) {
    if (`${key}` in add2 === false) {
      return "not equal";
    }
  }
  return "Equal";
}

console.log(areEqual(address1, address2));

// it false because those are different variable  decleration
function areSame(add1, add2) {
  return add1 === add2;
}

console.log(areSame(address1, address2));

// let's copy one object to address3
const address3 = address2;
// and then now copmayer the equality of this two object which are share same mamory location
function sameMamoryLocation(add1, add2) {
  return add1 === add2;
}
console.log(sameMamoryLocation(address3, address2));
