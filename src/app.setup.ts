import * as cronJobs from "./cron/cron.controller";
import * as setupDb from "./repository/setupdb";
import * as log from "./log/log";

/**
 * Creates poem table then starts cronjobs
 */
export default async function appSetup() {
  log.logSetupStarted();
  await setupDb.createPoemTable();
  cronJobs.resumeCronJobs();
  log.logSetupEnded();
}
