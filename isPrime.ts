export default function isPrime(number: number) {
  const sqrt = Math.sqrt(number);

  for(let i = 2; i <= sqrt; i++) {
    if(number % i === 0) return false;
  }

  return number !== 1 && number !== 0;
}
