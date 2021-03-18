// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

export default function euler4() {
  let result = 0;
  let i = 999;

  do {
    let j = 999;

    do {
      const tmp = i * j;
      const tmpString = String(tmp);
      const tmpReverseString = tmpString.split("").reverse().join("");

      if (tmpString === tmpReverseString && tmp > result) {
        result = tmp;
      }

      j -= 1;
    } while (j > 99);

    i -= 1;
  } while (i > 99);

  return result;
}

// console.time();
// console.log(euler4());
// console.timeEnd();
