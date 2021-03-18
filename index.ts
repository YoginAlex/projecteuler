import euler1 from './euler1';
import euler2 from './euler2';
import euler3 from './euler3';
import euler4 from './euler4';
import euler5 from './euler5';
import euler6 from './euler6';
import euler7 from './euler7';
import euler8 from './euler8';
import euler9 from './euler9';
import euler10 from './euler10';
import euler11 from './euler11';
import euler12 from './euler12';
import euler13 from './euler13';
import euler14 from './euler14';

const propblems = [
  euler1,
  euler2,
  euler3,
  euler4,
  euler5,
  euler6,
  euler7,
  euler8,
  euler9,
  euler10,
  euler11,
  euler12,
  euler13,
  euler14,
];


propblems.forEach((problem) => {
  const problemName = problem.name;

  console.time(problemName);
  console.log(`${problemName} answer is `, problem());
  console.timeEnd(problemName);
  console.log();
});
