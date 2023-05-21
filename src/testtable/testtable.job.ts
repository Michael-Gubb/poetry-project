import { CronJob } from "cron";
import { postTestData } from "./testtable.repository";

export const postDataWithCron = new CronJob(`0 * * * *`, async () => {
  const testData = `Cronjob at time:${new Date().toString}`;
  await postTestData(testData);
});
