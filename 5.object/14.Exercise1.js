/* create an object which hold (street,city,zipCode and then create a function showAddress which ittreate all the value an key of the address object)
 */
const address = {
  street: "shatpika",
  city: "narsingdi",
  zipCode: 1620,
};

function showAddress(add) {
  for (key in add) console.log(key, add[key]);
}

showAddress(address);
