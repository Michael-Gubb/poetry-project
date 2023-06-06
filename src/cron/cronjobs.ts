import { Cron, CronOptions } from "croner";
import { getPoemTopics, getPoemGenre } from "../utils/poem.utils";
import { askForPoem } from "../openai/openai.request";
import { postPoem } from "../poem/poem.repository";

const cronOptions: CronOptions = { timezone: `Pacific/Auckland`, paused: true };

const everyHour = `0 * * * *`;
const everyMinute = "* * * * *";

/** Logs a message every minute */
export const testCronJob = new Cron(everyMinute, cronOptions, testJob);

/** Generates a new poem and posts to poem table every hour*/
export const hourlyGeneratePoem = new Cron(
  everyHour,
  cronOptions,
  generateAndPostPoem
);

async function generateAndPostPoem() {
  try {
    const poemTopics = getPoemTopics();
    const poemGenre = getPoemGenre();
    const poemResponse = await askForPoem(poemTopics, poemGenre);
    await postPoem(poemResponse.message.content, poemTopics, poemGenre);
  } catch (error) {
    console.error(error);
  }
}

async function testJob() {
  console.log(`Test cronjob at time:${new Date().toString()}`);
}
