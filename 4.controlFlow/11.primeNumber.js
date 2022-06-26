function showPrimeNumber(limit) {
  for (number = 2; number < limit; number++) {
    let isPrime = true;
    for (factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

function showPrimeNumberWithSeperateFunction(limit) {
  for (number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}
