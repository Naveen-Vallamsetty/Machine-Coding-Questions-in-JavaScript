/*
Create a function to find the factorial of a number. 

n! = n * (n-1) * (n-2) * .... * 3 * 2 * 1

Base cases 1! = 1
0! = 1

*/

let factorial = (n) => {
  if (n === 0) return 1;
  else if (n < 0) return "not a valid number";
  else if (n === 1) return 1;
  else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));

/*
Iterative Approach

let factorialIterative = (num) => {
  if (num === 0) return 1;
  else if (num < 0) return "not a valid number";
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorialIterative(4));

*/
