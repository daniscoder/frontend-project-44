import readlineSync from 'readline-sync';

export default (gameQuestion, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);

  const maxRounds = 3;
  let num = 0;
  while (num < maxRounds) {
    const [question, correctAnswer] = getQuestion();
    console.log(`Question: ${question}`);

    const answer = String(readlineSync.question('Your answer: '));
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
    console.log('Correct!');
    num += 1;
  }
  return `${num === maxRounds ? 'Congratulations' : "Let's try again"}, ${name}!`;
};
