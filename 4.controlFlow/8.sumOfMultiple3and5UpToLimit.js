/* find sum of multiple 3 an 5 up to limit
 */
function sum(limit) {
  let sum = 0;
  for (i = 0; limit >= i; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      // console.log(i); this help a lot to debug code in a specific line
      sum += i;
    }
  }
  return sum;
}
