const answersNoYes = ["no", "yes"];

const operations = ["+", "-", "*"];

const getRandomInt = (max = 100) => {
  return Math.floor(Math.random() * max);
};

export { answersNoYes, operations, getRandomInt };
