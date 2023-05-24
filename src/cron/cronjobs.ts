import { Cron, CronOptions } from "croner";
import { postTestData } from "../testtable/testtable.repository";

const cronOptions: CronOptions = { timezone: `Pacific/Auckland` };

const everyHour = `0 * * * *`;
const everyMinute = "* * * * *";

/** Creates a new row in testtable every hour */
export const postDataWithCron = new Cron(everyHour, cronOptions, async () => {
  const testData = `Cronjob at time:${new Date().toString()}`;
  const response = await postTestData(testData);
  return response;
});

/** Logs a message every minute */
export const testCronJob = new Cron(everyMinute, cronOptions, async () => {
  console.log(`Test cronjob at time:${new Date().toString()}`);
});

export const openAIRequest = new Cron(everyHour, cronOptions, async () => {});
