// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.


// const EULER_14_LIMIT = 1000000;
export default function euler14(limit = 13) {
  // const cache = [];
  let longestLoop = 1;

  for(let i = 2; i <= limit; i++) {
    let j = i;
    let loopCount = 0;

    do {
      loopCount++;
      const odd = j % 2 > 0;
      if (odd) {
        j = 3*j + 1;
      }
      else {
        j = j / 2;
      }
    } while (j > 1)

    if (loopCount > longestLoop)  longestLoop = loopCount;
  }


  return longestLoop;
}

console.time();
console.log(euler14());
console.timeEnd();
