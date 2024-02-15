import readlineSync from "readline-sync";

export default (name, getQuestion) => {
  const max_rounds = 3;
  let num = 0;

  while (num < max_rounds) {
    const [question, correctAnswer] = getQuestion();
    console.log(`Question: ${question}`);

    const answer = String(readlineSync.question("Your answer: "));
    if (answer !== correctAnswer) {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`,
      );
      break;
    }
    console.log("Correct!");
    num += 1;
  }
  return `${num === max_rounds ? "Congratulations" : "Let's try again"}, ${name}!`;
};
