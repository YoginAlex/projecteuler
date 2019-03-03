import Euler1 from './Euler1';
import Euler2 from './Euler2';
import Euler3 from './Euler3';
import Euler4 from './Euler4';
import Euler5 from './Euler5';
import Euler6 from './Euler6';
import Euler7 from './Euler7';
import Euler8 from './Euler8';
import Euler9 from './Euler9';
import Euler10 from './Euler10';
import Euler11 from './Euler11';
import Euler12 from './Euler12';
import Euler13 from './Euler13';

const propblems = [
  Euler1,
  Euler2,
  Euler3,
  Euler4,
  Euler5,
  Euler6,
  Euler7,
  Euler8,
  Euler9,
  Euler10,
  Euler11,
  Euler12,
  Euler13,
];


propblems.forEach((problem) => {
  const problemClassName = problem.name;

  console.time(problemClassName);
  console.log(`${problemClassName} answer is`, new problem().getResult());
  console.timeEnd(problemClassName);
  console.log();
});
