// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.
// What is the 10 001st prime number?
import isPrime from './isPrime';

const EULER_7_NUMBER = 10001;

export default class Euler7 {
  number: number;
  arrayOfPrimes: number[] = [];

  constructor(number: number = EULER_7_NUMBER) {
    this.number = number;

    this.fillArrayOfPrimes();
  }

  fillArrayOfPrimes = (): void => {
    let i = 2;
    this.arrayOfPrimes.push(i);

    do {
      if (isPrime(i)) {
        this.arrayOfPrimes.push(i);
      }

      i += 1;
    } while (!Boolean(this.arrayOfPrimes[this.number]));
  }

  getResult = (n: number = EULER_7_NUMBER) => this.arrayOfPrimes[n];
}

// console.time();
// console.log(new Euler7().getResult());
// console.timeEnd();
