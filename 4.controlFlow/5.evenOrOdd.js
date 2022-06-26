function showOddAndEvenNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    i % 2 === 0 ? console.log(`Even ${i}`) : console.log(`Odd ${i}`);
  }
}
