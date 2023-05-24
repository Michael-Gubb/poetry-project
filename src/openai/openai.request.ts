const { Configuration, OpenAIApi } = require("openai");

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
  console.log(prompt);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
  });
  console.log(completion.data.choices[0].text);
  return completion.data.choices[0].text as string;
}

/**
 * Sends request to gpt-3.5-turbo for poem about 3 inputs
 * @param [poemInputs] Array of 3 strings
 * @returns
 */
export async function askForPoem(
  poemInputs: string[] = ["Dogs", "Cats", "Fruit"]
) {
  console.log(poemInputs);
  const poemPromptStrings = [
    poemInputs[0] || "Dogs",
    poemInputs[1] || "Cats",
    poemInputs[2] || "Fruit",
  ];
  const poemPrompt = `Write a poem about ${poemPromptStrings[0]},${poemPromptStrings[1]} and ${poemPromptStrings[2]}`;
  console.log(poemPrompt);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: poemPrompt }],
  });
  console.log(completion.data.choices[0].message);
  return completion.data.choices[0].message as string;
}
