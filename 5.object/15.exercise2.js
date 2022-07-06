/* create an address object by the help of factory and constractor function */

// factory fn
const addFact = function (street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
};
console.log(addFact(234, 45, 345));

// constractor fn
const AddConst = function (street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
};

const newAddConstractor = new AddConst(23, 45, 654);
console.log(newAddConstractor);
