import gcd from './gcd';

function lcm(a: number, b: number): number {
  return a * b / gcd(a, b);
}

export default lcm;