import Euler1 from './1';
import Euler2 from './2';
import Euler3 from './3';
import Euler4 from './4';
import Euler5 from './5';
import Euler6 from './6';
import Euler7 from './7';
import Euler8 from './8';
import Euler9 from './9';
import Euler10 from './10';

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
];

propblems.forEach(problem => {
  const problemClassName = problem.name;

  console.time(problemClassName);
  console.log(`${problemClassName} answer is`, new problem().getResult());
  console.timeEnd(problemClassName);
  console.log();
});


