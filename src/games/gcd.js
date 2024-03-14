import { getRandomInt } from '../helpers.js';
import gameLogic from '../game-logic.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestion = () => {
  const [a, b] = [getRandomInt(), getRandomInt()];
  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));
  return [question, correctAnswer];
};

export default () => {
  console.log(gameLogic(description, getQuestion));
};
