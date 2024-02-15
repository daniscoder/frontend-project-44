import getRandomInt from "../src/get-random-int.js";
import index from "../src/index.js";

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestion = () => {
  const [a, b] = [getRandomInt(), getRandomInt()];
  return [`${a} ${b}`, String(gcd(a, b))];
};

export default () => {
  console.log(
    index("Find the greatest common divisor of given numbers.", getQuestion),
  );
};
