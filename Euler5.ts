// 2520 is the smallest number that can be divided by each
// of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

import lcm from "./lcm";

const EULER_5_MAX_NUMBER = 20;

export default function euler5() {
  let result = 1;

  for (let number = 1; number < EULER_5_MAX_NUMBER; number += 1) {
    result = lcm(result, number);
  }

  return result;
}

// console.time();
// console.log(euler5());
// console.timeEnd();
