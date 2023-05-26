const allPoemTopics = [
  "Dogs",
  "Cats",
  "Fish",
  "Fruit",
  "Balls",
  "Bowls",
  "Oranges",
  "Hats",
  "Shoes",
  "Trees",
];
/**
 *
 * @param inputArray
 * @returns
 */
function getRandomElement(inputArray: any[]) {
  return inputArray[Math.floor(Math.random() * inputArray.length)];
}

/**
 * Gets 3 random poem topics
 * @returns
 */
export function getPoemTopics() {
  const poemTopics = new Array(3);
  poemTopics.fill(getRandomElement(allPoemTopics));
  const MAX_LOOPS = 100;
  let loopCounter = 0;
  while (poemTopics[0] === poemTopics[1] && loopCounter <= MAX_LOOPS) {
    poemTopics[1] = getRandomElement(allPoemTopics);
    loopCounter++;
  }
  loopCounter = 0;
  while (
    (poemTopics[0] === poemTopics[2] || poemTopics[1] === poemTopics[2]) &&
    loopCounter <= MAX_LOOPS
  ) {
    poemTopics[2] = getRandomElement(allPoemTopics);
    loopCounter++;
  }
  return poemTopics as string[];
}
