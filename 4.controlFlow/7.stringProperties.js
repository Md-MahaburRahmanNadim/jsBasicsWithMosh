/* get all string property of an object
 */

function showProperties(obj) {
  for (key in obj) {
    if (typeof obj[key] === "string") {
      console.log(`${key} : ${obj[key]}`);
    }
  }
}
