// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const EULER_14_LIMIT = 1000000;
export default function euler14(limit = EULER_14_LIMIT) {
  let cache: Array<number> = [];
  let longestLoop = 1;
  let result;

  const getLoopCount = (inputNumber: number) => {
    let loopCount = 0;
    let j = inputNumber;

    do {
      loopCount++;
      if (cache[j]) {
        loopCount = loopCount + cache[j];
        cache[inputNumber] = loopCount;
        break;
      }

      const odd = j % 2 > 0;
      if (odd) {
        j = 3 * j + 1;
      } else {
        j = j / 2;
      }
    } while (j > 1);
    cache[j] = loopCount + 1;
    return loopCount + 1;
  };

  for (let i = 1; i <= limit; i++) {
    const loopCount = getLoopCount(i);
    if (loopCount > longestLoop) {
      longestLoop = loopCount;
      result = i;
    }
  }

  return result;
}

console.time();
console.log(euler14());
console.timeEnd();
