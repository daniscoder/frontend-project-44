import getRandomInt from "../src/get-random-int.js";
import index from "../src/index.js";

const operations = ["+", "-", "*"];

const getCorrectAnswer = (a, b, operation) => {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      return a / b;
  }
};

const getQuestion = () => {
  const [a, b] = [getRandomInt(), getRandomInt()];
  const operation = operations[getRandomInt(operations.length)];
  return [`${a} ${operation} ${b}`, String(getCorrectAnswer(a, b, operation))];
};

export default () => {
  console.log(index('What is the result of the expression?', getQuestion));
};
