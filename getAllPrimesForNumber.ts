// Eratosthenes algorithm to find all primes under n
const getAllPrimesForNumber = (forNumber: number): number[] => {
  const upperLimit = Math.sqrt(forNumber);
  const array: Boolean[] = [];
  // Make an array from 2 to (n - 1)

  for (let counter = 0; counter < forNumber; counter += 1) {
    array[counter] = true;
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let firstIterator = 2; firstIterator <= upperLimit; firstIterator += 1) {
    if (array[firstIterator]) {
      for (
        let secondIterator = firstIterator * firstIterator;
        secondIterator < forNumber;
        secondIterator += firstIterator
      ) {
        array[secondIterator] = false;
      }
    }
  }

  return array
    .filter(element => element === true)
    .map((_, index) => index);
};

export default getAllPrimesForNumber;
