// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.
// What is the 10 001st prime number?
import isPrime from './isPrime';

const EULER_7_NUMBER = 10001;

export default function euler7(n: number = EULER_7_NUMBER) {
  let arrayOfPrimes: number[] = [];

  const fillArrayOfPrimes = (): void => {
    let i = 2;
    arrayOfPrimes.push(i);

    do {
      if (isPrime(i)) {
        arrayOfPrimes.push(i);
      }

      i += 1;
    } while (!Boolean(arrayOfPrimes[n]));
  }

  fillArrayOfPrimes();

  return arrayOfPrimes[n];
}

// console.time();
// console.log(euler7());
// console.timeEnd();
