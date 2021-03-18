// The four adjacent digits in the 1000-digit number that have
// the greatest product are 9 × 9 × 8 × 9 = 5832.
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.
// What is the value of this product?

const EULER_8_NUMBER =
  "73167176531330624919225119674426574742355349194934969835203127745063" +
  "26239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874" +
  "715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622" +
  "298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796" +
  "086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545" +
  "4059475224352584907711670556013604839586446706324415722155397536978179778461740649551492908625" +
  "6932197846862248283972241375657056057490261407972968652414535100474821663704844031998900088952" +
  "4345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294" +
  "7654568284891288314260769004224219022671055626321111109370544217506941658960408071984038509624" +
  "5544436298123098787992724428490918884580156166097919133875499200524063689912560717606058861164" +
  "6710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

const EULER_8_LEN = 13;

export default function euler8(number: string = EULER_8_NUMBER) {
  let greatestProduct: number = 0;

  const findGreatest = () => {
    const numberLength = number.length;

    for (let index = 0; index <= numberLength - EULER_8_LEN; index += 1) {
      let result = 1;

      for (let i = index; i < index + EULER_8_LEN; i += 1) {
        result *= Number(number[i]);
      }

      if (result > greatestProduct) {
        greatestProduct = result;
      }
    }
  };

  findGreatest();

  return greatestProduct;
}

// console.time();
// console.log(euler8());
// console.timeEnd();
