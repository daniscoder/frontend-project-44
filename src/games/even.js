import { answersNoYes, getRandomInt } from '../helpers.js';
import gameLogic from '../game-logic.js';

const getQuestion = () => {
  const randomInt = getRandomInt() + 1;
  return [randomInt, answersNoYes[Number(randomInt % 2 === 0)]];
};

export default () => {
  console.log(gameLogic('Answer "yes" if the number is even, otherwise answer "no".', getQuestion));
};
