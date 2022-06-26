/* create a function which take an input and it's convert this input equvalint to row. Each row have same amount of star at it own possition*/
function showStars(rows) {
  for (row = 1; row <= rows; row++) {
    let pattern = "";
    for (i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
