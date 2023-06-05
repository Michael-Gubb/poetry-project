/**
 * List of poem topics to select 3 topics from
 */
export const allPoemTopics = [
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
] as const;

export const allPoemGenres = [
  "poem",
  "eulogy",
  "sonnet",
  "haiku",
  "limerick",
  "ballad",
  "elegy",
] as const;

type PoemTopic = (typeof allPoemTopics)[number];
type PoemGenre = (typeof allPoemGenres)[number];

/**
 * Utility function to find a random element from an array
 * @param inputArray Array of anything
 * @returns Random element of inputArray
 */
function getRandomElement(inputArray: any[]) {
  return inputArray[Math.floor(Math.random() * inputArray.length)];
}
/**
 * Gets a random poem genre from poem genres defined in utils
 * @returns Random genre
 */
export function getPoemGenre(): string {
  return getRandomElement(allPoemGenres as any);
}

/**
 * Gets 3 random poem topics from the poem topics defined in utils
 * @returns array of 3 unique strings (unless you get really unlucky)
 */
export function getPoemTopics() {
  const poemTopics = new Array(3);
  poemTopics[0] = getRandomElement(allPoemTopics as any);
  poemTopics[1] = getRandomElement(allPoemTopics as any);
  poemTopics[2] = getRandomElement(allPoemTopics as any);
  const MAX_LOOPS = 100;
  let loopCounter = 0;
  while (poemTopics[0] === poemTopics[1] && loopCounter <= MAX_LOOPS) {
    poemTopics[1] = getRandomElement(allPoemTopics as any);
    loopCounter++;
  }
  loopCounter = 0;
  while (
    (poemTopics[0] === poemTopics[2] || poemTopics[1] === poemTopics[2]) &&
    loopCounter <= MAX_LOOPS
  ) {
    poemTopics[2] = getRandomElement(allPoemTopics as any);
    loopCounter++;
  }
  return poemTopics as string[];
}

export function getAllPoemGenres() {
  return allPoemGenres;
}

export function getAllPoemTopics() {
  return allPoemTopics;
}

/**
 * Transforms a poem from DB to API form
 *
 * Ignores poem.hidden and does not transform that
 * @param poem
 * @returns
 */
function transformPoemToCamelCase(poem: Poem) {
  const camelCasePoem: CamelCasePoem = {
    poemId: poem.poem_id,
    poemDate: poem.poem_date,
    poemText: poem.poem_text,
    poemTopics: poem.poem_topics,
    poemGenre: poem.poem_genre,
    poemImg: poem.poem_img,
  };
  return camelCasePoem;
}

/**
 * Transforms an array of poems from DB to API form
 *
 * Ignores poem.hidden and does not transform that
 * @param poems
 * @returns
 */
export function transformPoemsToCamelCase(poems: Poem[]) {
  return poems.map((poem) => transformPoemToCamelCase(poem));
}

/**
 * Generates a poem prompt from 3 topics and genre
 * @param poemPromptParts Array of 3 topics
 * @param poemGenre Defaults to poem
 * @returns
 */
export function createPoemPrompt(
  poemPromptParts: string[],
  poemGenre: string = "poem"
) {
  return `Write a ${poemGenre} about ${poemPromptParts[0]},${poemPromptParts[1]} and ${poemPromptParts[2]}`;
}
