import getRandomInt from "../src/get-random-int.js";
import index from "../src/index.js";

const getQuestion = () => {
  const progressionArr = [getRandomInt(50)];
  const diff = getRandomInt(20) + 1;
  for (let i = 0; i < 9; i += 1) {
    progressionArr.push(progressionArr[i] + diff);
  }
  const hiddenElemIndex = getRandomInt(progressionArr.length);
  const hiddenElem = progressionArr[hiddenElemIndex];
  progressionArr[hiddenElemIndex] = "..";

  return [progressionArr.join(" "), String(hiddenElem)];
};

export default () => {
  console.log(index("What number is missing in the progression?", getQuestion));
};
