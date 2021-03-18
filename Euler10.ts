// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

import isPrime from "./isPrime";

const EULER_10_NUMBER = 2000000;

export default function euler10() {
  let result = 5; // 2 + 3
  let counter = 5;

  while (counter < EULER_10_NUMBER) {
    if (isPrime(counter)) {
      result += counter;
    }

    counter += 2;

    if (counter < EULER_10_NUMBER && isPrime(counter)) {
      result += counter;
    }

    counter += 4;
  }

  return result;
}

// console.time();
// console.log(euler10());
// console.timeEnd();
