import { getRandomInt } from '../helpers.js';
import gameLogic from '../game-logic.js';

const description = 'What number is missing in the progression?';

const getQuestion = () => {
  const progression = [getRandomInt(50)];
  const diff = getRandomInt(20) + 1;
  for (let i = 0; i < 9; i += 1) {
    progression.push(progression[i] + diff);
  }
  const hiddenElemIndex = getRandomInt(progression.length);
  const hiddenElem = progression[hiddenElemIndex];
  progression[hiddenElemIndex] = '..';

  return [progression.join(' '), String(hiddenElem)];
};

export default () => {
  console.log(gameLogic(description, getQuestion));
};
