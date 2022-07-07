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
const course1 = courses.find(function (course) {
  return course.id === 2;
});
// index of the referance type
const courseIndexe = courses.findIndex(function (course) {
  return course.id === 2;
});
console.log(`course index ${courseIndexe}`);
console.log(course1);
console.log(course);
