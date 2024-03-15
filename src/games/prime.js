import { getQuestionForEvenPrime } from '../helpers.js';
import gameLogic from '../game-logic.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getQuestion = () => getQuestionForEvenPrime(isPrime);

export default () => {
  console.log(gameLogic(description, getQuestion));
};
