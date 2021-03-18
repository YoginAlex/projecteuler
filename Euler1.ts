// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

export default function euler1() {
  return Array(1000)
    .fill(1)
    .reduce(
      (result, _, index) => (
        (index > 0 && index < 1000) && (index % 3 === 0 || index % 5 === 0)
          ? result + index
          : result),
      0)
}

// console.time();
// console.log(euler1());
// console.timeEnd();
