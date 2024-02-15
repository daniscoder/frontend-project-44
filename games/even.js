import getRandomInt from "../src/get-random-int.js";
import cli from "../src/cli.js";
import index from "../src/index.js";

const answers = ["no", "yes"];

const getCorrectAnswer = (random_int) => {
  return answers[Number(random_int % 2 === 0)];
};

const getQuestion = () => {
  const random_int = getRandomInt() + 1;
  return [random_int, getCorrectAnswer(random_int)];
};

export default () => {
  const name = cli();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  console.log(index(name, getQuestion));
};
