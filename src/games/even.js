import { answersNoYes, getRandomInt } from "../helpers.js";
import index from "../index.js";

const even = (random_int) => {
  return answersNoYes[Number(random_int % 2 === 0)];
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
