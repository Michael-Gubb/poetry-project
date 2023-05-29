/**
 * List of poem topics to select 3 topics from
 */
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
  "Auckland",
  "Wellington",
  "Whangarei",
  "Clouds",
  "Rain",
  "Sunshine",
  "Lemurs",
  "Capybaras",
  "Spotted Sandpipers",
  "Kiwi",
  "Kea",
  "Automobiles",
  "Rats",
  "Mice",
  "Noodles",
  "Horses",
  "Chickens",
  "Guinea Fowl",
  "Ducks",
  "Geese",
  "New Zealand",
  "Australia",
  "Te Awamutu",
  "Mount Cook",
];
/**
 * Utility function to find a random element from an array
 * @param inputArray Array of anything
 * @returns Random element of inputArray
 */
function getRandomElement(inputArray: any[]) {
  return inputArray[Math.floor(Math.random() * inputArray.length)];
}

/**
 * Gets 3 random poem topics from the poem topics defined in utils
 * @returns array of 3 unique strings (unless you get really unlucky)
 */
export function getPoemTopics() {
  const poemTopics = new Array(3);
  poemTopics[0] = getRandomElement(allPoemTopics);
  poemTopics[1] = getRandomElement(allPoemTopics);
  poemTopics[2] = getRandomElement(allPoemTopics);
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
