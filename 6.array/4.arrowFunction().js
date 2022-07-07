/* arrow function syntax
 function nameFn(a,b,c){
  sdfoif jdf
 }

 but in arrow
 const nameOfTheFn = a=> console.log(sdfj doj)
 const nameOfTheFn = (b,c,a)=>{
   console.log(sdfj doj)
   
} 
*/
const courses = [
  { id: 1, Name: "a" },
  { id: 2, Name: "b" },
  { id: 3, Name: "c" },
  { id: 4, Name: "d" },
  { id: 5, Name: "e" },
  { id: 2, Name: "b" },
];

const course = courses.find(function (course) {
  return course.Name === "e";
});

const courseInArrowFn = courses.find(course => course.Name === "e");
console.log(courseInArrowFn);
