function sumPrimes(num) {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  for (let divisor = 2; divisor < num; divisor++) {
    arr = arr.filter(
      integer => (integer % divisor > 0 || integer == divisor) && integer > 1
    );
  }
  return arr.reduce((a, b) => a + b);
}

console.log(sumPrimes(977));
