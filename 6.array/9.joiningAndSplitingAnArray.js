/* joining array by using join() method
spliting an array by using split() method*/

const arr = [23, "a", "c", 23, 5, 7, "f"];

// joining by using (-) all of the item of this array.  the output of this method is string
const joinHipen = arr.join("-");
console.log(joinHipen);

// let's see that join method are work in string
const str = "My name is Md. Mahabur Rahman Nadim";

// drectly we can't do it but by converting this string into an array we can join it by using(-) hipen which is called the url slug

const strToArraySplit = str.split(" ");
console.log(strToArraySplit);

// let's convert it into a url slug like thing by using join method

const urlSlug = strToArraySplit.join("-");
console.log(urlSlug);

console.log();
console.log();
console.log();
console.log();
console.log();
console.dir(urlSlug);
console.error("this is huge error");
console.warn();
console.warn();
console.warn();
console.info();
