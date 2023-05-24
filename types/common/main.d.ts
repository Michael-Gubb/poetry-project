/** Poem response */
type PoemResponse = { role: "assistant"; content: string };

/** Possible Chat Completion Models
 * {@link https://platform.openai.com/docs/api-reference/chat/create#chat/create-model}
 */
const ChatCompletionModels = [
  "gpt-4",
  "gpt-4-0314",
  "gpt-4-32k",
  "gpt-4-32k-0314",
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-0301",
] as const;

type ChatCompletionModel = (typeof ChatCompletionModels)[number];

const ChatCompletionMessageRoles = ["system", "user", "assistant"] as const;
type ChatCompletionMessageRole = (typeof ChatCompletionMessageRoles)[number];

/** Request body parameters for the Chat Completion API. Creates a model response for the given chat conversation.
 * {@link https://platform.openai.com/docs/api-reference/chat/create}
 */
type ChatCompletionParams = {
  /** OpenAI model to use */
  model: ChatCompletionModel;
  /** A list of messages describing the conversation so far. */
  messages: Array<{
    /** The role of the author of this message */
    role: ChatCompletionMessageRole;
    /** The contents of the message. */
    content: string;
    /** The name of the author of this message. May contain a-z, A-Z, 0-9, and underscores, with a maximum length of 64 characters. */
    name?: string;
  }>;
  /** Defaults to 1 */
  temperature?: number;
  top_p?: number;
  /** How many chat completion choices to generate for each input message. */
  n?: number;
  stream?: boolean;
  /** Up to 4 sequences where the API will stop generating further tokens. */
  stop?: string | string[];
  /** The maximum number of tokens to generate in the chat completion. Defaults to inf */
  max_tokens?: number;
  /** Number between -2.0 and 2.0. */
  presence_penalty?: number;
  /** Number between -2.0 and 2.0. */
  frequency_penalty?: number;
  /** Modify the likelihood of specified tokens appearing in the completion. */
  logit_bias?: object;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. */
  user?: string;
};

const ImageSizes = ["256x256", "512x512", "1024x1024"] as const;
type ImageSize = (typeof ImageSizes)[number];

/** Request body parameters for the Create Image API.
 * Creates an image given a prompt.
 * {@link https://platform.openai.com/docs/api-reference/images/create}
 */
type CreateImageParams = {
  /** A text description of the desired image(s). The maximum length is 1000 characters. */
  prompt: string;
  /** The number of images to generate. Must be between 1 and 10.
   *  Default is 1.
   * */
  n?: number;
  /**
   * The size of the generated images. Defaults to 1024x1024.
   */
  size?: ImageSize;
  /** The format in which the generated images are returned. Defaults to url. */
  response_format?: "url" | "b64_json";
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. */
  user?: string;
};
