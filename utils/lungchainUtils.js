import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

//Process text with Langchain OpenAI by passing the valid prompt template
export async function processTextWithLangchain(text) {
  // Prompt text for openAI
  const promptTemplate = PromptTemplate.fromTemplate(`
  Extract the following information from the text in this below format:
  key: [value]
  key should be name, dob, or some required information and value is the information

  extract these type of data from {text}
  `);
  const chain = promptTemplate.pipe(model);

  const result = await chain.invoke({ text });

  // Split the input string by newline and create an array of key-value pairs
  const getKeyValue = (inputString) => {
    const keyValuePairs = inputString.split("\n").map((line) => {
      const [key, value] = line.split(":").map((item) => item.trim());
      return { key, value };
    });
    return keyValuePairs;
  };

  const formatedData = getKeyValue(result.lc_kwargs.content);

  return formatedData;
}
