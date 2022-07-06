const createCircle = {
  radius: 34,
  draw() {
    console.log("create the circle");
  },
};

for (key in createCircle) console.log(createCircle[key]);
for (key in createCircle) console.log(key);

// by using for of loop we can enumerating the object because they are not itterable.To itterate the object by using for of loop we have to make the object as a array then itterate it

for (array of Object.keys(createCircle)) {
  console.log(
    `it return a array from an object ${console.log(Object.keys(createCircle))}`
  );
  console.log(array);
}

console.log("");
console.log(Object.entries(createCircle)); // we can see that we get key and value as a peyer in an array

for ([key, value] of Object.entries(createCircle)) {
  console.log(key, value);
}

// to cheak a property exist in an object we use in operator
if ("radius" in createCircle) console.log("yes");
