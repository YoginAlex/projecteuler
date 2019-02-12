// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

import isPrime from './isPrime';

const EULER_3 = 600851475143;

export default class Euler3 {
  enteredNumber = EULER_3;
  enteredSqrt = Math.sqrt(EULER_3);
  answers: number[] = [];

  getResult() {
    for (let i = 1; i < this.enteredSqrt; i += 1) {
      if (this.enteredNumber % i === 0 && isPrime(i)) {
        this.answers.push(i);
      }
    }

    return this.answers.pop();
  }
}

// console.time();
// console.log(new Euler3().getResult());
// console.timeEnd();
