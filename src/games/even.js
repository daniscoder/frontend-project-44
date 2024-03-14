import { answersNoYes, getRandomInt } from '../helpers.js';
import gameLogic from '../game-logic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomInt) => randomInt % 2 === 0;

const getQuestion = () => {
  const question = getRandomInt() + 1;
  const correctAnswer = answersNoYes[Number(isEven(question))];
  return [question, correctAnswer];
};

export default () => {
  console.log(gameLogic(description, getQuestion));
};
