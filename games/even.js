import getRandomInt from "../src/get-random-int.js";
import index from "../src/index.js";

const answers = ["no", "yes"];

const even = (random_int) => {
  return answers[Number(random_int % 2 === 0)];
};

const getQuestion = () => {
  const random_int = getRandomInt() + 1;
  return [random_int, even(random_int)];
};

export default () => {
  console.log(
    index(
      'Answer "yes" if the number is even, otherwise answer "no".',
      getQuestion,
    ),
  );
};
