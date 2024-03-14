import { getRandomInt } from '../helpers.js';
import gameLogic from '../game-logic.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const applyOperation = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a / b;
  }
};

const getQuestion = () => {
  const [a, b] = [getRandomInt(), getRandomInt()];
  const operation = operations[getRandomInt(operations.length)];
  const question = `${a} ${operation} ${b}`;
  const correctAnswer = String(applyOperation(a, b, operation));
  return [question, correctAnswer];
};

export default () => {
  console.log(gameLogic(description, getQuestion));
};
