import readlineSync from "readline-sync";
import cli from "./cli.js";

export default (gameQuestion, getQuestion) => {
  const name = cli();
  console.log(gameQuestion);

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
