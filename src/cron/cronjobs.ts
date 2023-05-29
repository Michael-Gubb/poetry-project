import { Cron, CronOptions } from "croner";
import { postTestData } from "../testtable/testtable.repository";
import { getPoemTopics } from "../utils/poem.utils";
import { askForPoem } from "../openai/openai.request";
import { postPoem } from "../poem/poem.repository";

const cronOptions: CronOptions = { timezone: `Pacific/Auckland`, paused: true };

const everyHour = `0 * * * *`;
const everyMinute = "* * * * *";

/** Creates a new row in testtable every hour */
export const postDataWithCron = new Cron(everyHour, cronOptions, async () => {
  const poemTopics = getPoemTopics();
  const poemResponse = await askForPoem(poemTopics);
  await postTestData(poemResponse.content);
});

/** Logs a message every minute */
export const testCronJob = new Cron(everyMinute, cronOptions, async () => {
  console.log(`Test cronjob at time:${new Date().toString()}`);
});

/** Generates a new poem and posts to poem table every hour*/
export const openAIRequest = new Cron(everyHour, cronOptions, async () => {
  const poemTopics = getPoemTopics();
  const poemResponse = await askForPoem(poemTopics);
  await postPoem(poemResponse.content, poemTopics);
});
