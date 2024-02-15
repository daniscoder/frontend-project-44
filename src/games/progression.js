import { getRandomInt } from "../helpers.js";
import index from "../index.js";

const getQuestion = () => {
  const progression = [getRandomInt(50)];
  const diff = getRandomInt(20) + 1;
  for (let i = 0; i < 9; i += 1) {
    progression.push(progression[i] + diff);
  }
  const index = getRandomInt(progression.length);
  const hiddenElem = progression[index];
  progression[index] = "..";

  return [progression.join(" "), String(hiddenElem)];
};

export default () => {
  console.log(index("What number is missing in the progression?", getQuestion));
};
