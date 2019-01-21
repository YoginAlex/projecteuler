// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

import isPrime from './isPrime';

const EULER_10_NUMBER = 2000000;

export default class Euler10 {
  result = 5; // 2 + 3
  counter = 5;

  getResult = () => {
    while (this.counter < EULER_10_NUMBER) {
      if (isPrime(this.counter)) {
        this.result += this.counter;
      }

      this.counter += 2;

      if (this.counter < EULER_10_NUMBER && isPrime(this.counter)) {
        this.result += this.counter;
      }

      this.counter += 4;
    }

    return this.result;
  }
}

// console.time();
// console.log(new Euler10().getResult());
// console.timeEnd();
