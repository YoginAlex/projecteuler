// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const EULER_9_NUMBER = 1000;

export default class Euler9 {
  a: number = 1;
  b: number = this.a + 1;
  c: number = 0;

  getResult = () => {
    while (this.a < EULER_9_NUMBER) {
      while (this.b < EULER_9_NUMBER && this.b > this.a) {
        this.c = EULER_9_NUMBER - this.a - this.b;

        if (this.c < this.b) {
          break;
        }

        if (this.a * this.a + this.b * this.b === this.c * this.c) {
          return this.a * this.b * this.c;
        }

        this.b += 1;
      }

      this.a += 1;
      this.b = this.a + 1;
    }

    return false;
  }
}

// console.time();
// console.log(new Euler9().getResult());
// console.timeEnd();
