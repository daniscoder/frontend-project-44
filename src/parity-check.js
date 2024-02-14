import readlineSync from "readline-sync";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const max_answers = 3;
  const max_random_int = 100;
  const answers = ["no", "yes"];
  let answers_num = 0;

  while (answers_num < max_answers) {
    const random_int = getRandomInt(max_random_int);
    console.log(`Question: ${random_int}`);
    const answer = readlineSync.question("Your answer: ");
    const even_number = Number(random_int % 2 === 0);
    if (answers.indexOf(answer) === even_number) {
      console.log("Correct!");
      answers_num += 1;
    } else {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${answers[Number(even_number)]}".`,
      );
      break;
    }
  }
  console.log(
    `${answers_num === max_answers ? "Congratulations" : "Let's try again"}, ${name}!`,
  );
};
