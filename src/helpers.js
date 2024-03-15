const answersNoYes = ['no', 'yes'];

const getRandomInt = (max = 100) => Math.floor(Math.random() * max);

const getQuestionForEvenPrime = (check) => {
  const question = getRandomInt() + 1;
  const correctAnswer = answersNoYes[Number(check(question))];
  return [question, correctAnswer];
};

export { getRandomInt, getQuestionForEvenPrime };
