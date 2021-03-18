// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

import isPrime from "./isPrime";

const EULER_3_NUMBER = 600851475143;

export default function euler3() {
  let enteredNumber = EULER_3_NUMBER;
  let enteredSqrt = Math.sqrt(EULER_3_NUMBER);
  let answers: number[] = [];

  for (let i = 1; i < enteredSqrt; i += 1) {
    if (enteredNumber % i === 0 && isPrime(i)) {
      answers.push(i);
    }
  }

  return answers.pop();
}

// console.time();
// console.log(euler3());
// console.timeEnd();
