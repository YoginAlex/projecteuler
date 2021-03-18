// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const EULER_9_NUMBER = 1000;

export default function euler9() {
  let a: number = 1;
  let b: number = a + 1;
  let c: number = 0;

  while (a < EULER_9_NUMBER) {
    while (b < EULER_9_NUMBER && b > a) {
      c = EULER_9_NUMBER - a - b;

      if (c < b) {
        break;
      }

      if (a * a + b * b === c * c) {
        return a * b * c;
      }

      b += 1;
    }

    a += 1;
    b = a + 1;
  }

  return false;
}

// console.time();
// console.log(euler9());
// console.timeEnd();
