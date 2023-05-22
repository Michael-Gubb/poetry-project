import { Cron, CronOptions } from "croner";
import { postTestData } from "./testtable.repository";

const cronOptions: CronOptions = { timezone: `Pacific/Auckland` };

export const postDataWithCron = new Cron(`0 * * * *`, cronOptions, async () => {
  const testData = `Cronjob at time:${new Date().toString()}`;
  const response = await postTestData(testData);
  return response;
});
