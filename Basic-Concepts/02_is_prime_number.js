/*
Write a function that checks if a number is prime.

A number is a Prime number if number is divded by 1 and it self only

E.g. 17

17 % 1 == 0 and 17 % 17 == 0

E.g. 27
27 % 3 == 0 (not a prime number)

Base conditions
1 is not a prime 
2 is a prime 
num % 2 == 0 is not a prime

*/

let isPrimeNumber = (num) => {
  let isPrime = true;
  if (num <= 1) isPrime = false;
  else if (num == 2) isPrime = true;
  else if (num % 2 == 0) isPrime = false;
  else {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
      isPrime = true;
    }
  }
  return isPrime ? `${num} is a prime number` : `${num} is not a prime number`;
};

console.log(isPrimeNumber(17));
console.log(isPrimeNumber(599));
