// premitive string
let str = "   My Name is Nadim ";
// when we use (.)dot notation after the premitive stirng the js engine treat this like an object string for that reson we see those kind of property like object string
console.log(str.length);

// to check this word are exist or not in given string where we applied this method
console.log(str.includes("Is"));
console.log(str.includes("is"));

console.log(str.startsWith("my"));
console.log(str.startsWith("My"));

console.log(str.endsWith("im"));
console.log(str.endsWith("Nadim"));
console.log(str.endsWith("nadim"));

// all the method and property show here are not change the main string structre it's just return new string if we need those string then we have to save those thing in a varaible
console.log(str.split(" "));

// by using index number it slice the string and give us a slice of the stirng
console.log(str.slice(2, 5));

// if we have extra space before and after then by using trim operator we can cut it off
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// it's give us first indexOf  'a'
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
console.log(str.replace("Nadim", "Md. Mahabur Rahman Nadim"));

const conString = str.concat(str, str.slice(2, 11));
console.log(conString);
// object string
let objStr = new String("Object string");

// escape notation

console.log("My name is \n Md. Mahabur Rahman Nadim");
