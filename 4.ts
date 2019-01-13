
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


export default class Euler4 {
  result = 0;
  i = 999;

  getResult() {
    do {
      let j = 999;

      do {
        const tmp = this.i * j;
        const tmpString = String(tmp);
        const tmpReverseString = tmpString.split('').reverse().join('');

        if (tmpString === tmpReverseString && tmp > this.result) {
          this.result = tmp;
        }

        j -= 1;
      } while (j > 99);

      this.i -= 1;
    } while (this.i > 99);

    return this.result;
  }
}

// console.time();
// console.log(new Euler4().getResult());
// console.timeEnd();
