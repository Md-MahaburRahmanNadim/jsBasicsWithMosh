const marks = [80, 80, 50];
/*
first it's calculate the avarage 

then it's compayer with the below standard value
1-59 : F
60-69 : D
70-79 : C
80 - 89: B
90-100: A
*/
function calculateGrade(marks) {
  let sum = 0;
  let avarage = 0;
  for (value of marks) {
    sum += value;
  }
  avarage = sum / marks.length;
  if (avarage <= 59) return "F";
  if (avarage >= 60 && avarage <= 69) return "D";
  if (avarage >= 70 && avarage <= 79) return "C";
  if (avarage >= 80 && avarage <= 89) return "B";
  if (avarage >= 90 && avarage <= 100) return "A";
}

// lets do this more effeciently with less condition

function calculateAvarage(array) {
  let sum = 0;
  for (value of array) {
    sum += value;
  }
  // console.log(sum);
  return sum / array.length;
}

function calculateGradeEff(array) {
  const avarage = calculateAvarage(array);
  // console.log(avarage);
  if (avarage < 60) return "F";
  if (avarage < 70) return "D";
  if (avarage < 80) return "C";
  if (avarage < 90) return "B";
  // if (avarage <=100) return "A";
  else return "A";
}
