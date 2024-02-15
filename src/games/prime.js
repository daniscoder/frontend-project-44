import { answersNoYes, getRandomInt } from "../helpers.js";
import index from "../index.js";

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getQuestion = () => {
  const num = getRandomInt() + 1;
  return [num, answersNoYes[Number(isPrime(num))]];
};

export default () => {
  console.log(
    index(
      'Answer "yes" if given number is prime. Otherwise answer "no".',
      getQuestion,
    ),
  );
};
