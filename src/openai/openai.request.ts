import { Configuration, OpenAIApi } from "openai";
import { createPoemPrompt } from "../utils/poem.utils";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Sends request to text-davinci-003 with default options
 * @param {string} [prompt] Text to send to openAI, default is 'Hello world'
 * @returns
 */
export async function helloWorld(prompt: string = "Hello world") {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
  });
  return completion.data.choices[0].text as string;
}

/**
 * Sends request to gpt-3.5-turbo for poem, using input array
 * @param [poemTopics] Array of 3 strings used in poem
 * @returns Message from chatgpt, array of strings with newlines
 */
export async function askForPoem(
  poemTopics: string[] = ["Dogs", "Cats", "Fruit"],
  poemGenre: string = "poem"
) {
  const modelUsed = "gpt-3.5-turbo";
  /** Fills array with Dogs,Cats,Fruits if less than 3 inputs are provided */
  const poemPromptParts = [
    poemTopics[0] || "Dogs",
    poemTopics[1] || "Cats",
    poemTopics[2] || "Fruit",
  ];
  /** Prompt to be sent to chat completion */
  const poemPrompt = createPoemPrompt(poemPromptParts, poemGenre);
  const chatCompletionParams: ChatCompletionParams = {
    model: modelUsed,
    messages: [{ role: "user", content: poemPrompt }],
  };
  const completion = await openai.createChatCompletion(chatCompletionParams);
  const response = completion.data.choices[0].message;
  return { message: response, model: modelUsed } as PoemResponse;
}

/**
 * Generates image from OpenAI API
 * @param imagePrompt
 * @returns
 */
export async function askForImage(imagePrompt: string = "cute cat") {
  const imageParams: CreateImageParams = { prompt: imagePrompt };
  const completion = await openai.createImage(imageParams);
  return completion.data;
}
