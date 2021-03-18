// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares
// of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares
// of the first one hundred natural numbers and the square of the sum.

const EULER_6_COUNTER = 100;

export default function euler6(counter = EULER_6_COUNTER) {
  const getSumOfCounterSquares = (): number => {
    let result: number = 0;

    for (let index = 1; index <= counter; index += 1) {
      result += index * index;
    }

    return result;
  }

  const getSquareOfCounterSum = (): number => {
    let result: number = 0;

    for (let index = 1; index <= counter; index += 1) {
      result += index;
    }

    return result * result;
  }

  return getSquareOfCounterSum() - getSumOfCounterSquares();
}

// console.time();
// console.log(euler6(EULER_6_COUNTER));
// console.timeEnd();
