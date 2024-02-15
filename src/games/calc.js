import { operations, getRandomInt } from "../helpers.js";
import index from "../index.js";

const applyOperation = (a, b, operation) => {
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
  return [`${a} ${operation} ${b}`, String(applyOperation(a, b, operation))];
};

export default () => {
  console.log(index("What is the result of the expression?", getQuestion));
};
