import { Cron, CronOptions } from "croner";
import { postTestData } from "../testtable/testtable.repository";

const cronOptions: CronOptions = { timezone: `Pacific/Auckland` };

/** Creates a new row in testtable every hour */
export const postDataWithCron = new Cron(`0 * * * *`, cronOptions, async () => {
  const testData = `Cronjob at time:${new Date().toString()}`;
  const response = await postTestData(testData);
  return response;
});

/** Logs a message every minute */
export const testCronJob = new Cron("* * * * *", cronOptions, async () => {
  console.log(`Test cronjob at time:${new Date().toString()}`);
});
