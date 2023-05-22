import { postDataWithCron, testCronJob } from "./cronjobs";

/** Starts/resumes main cron jobs*/
export function resumeCronJobs() {
  postDataWithCron.resume();
}

/** Pauses main cron jobs*/
export function pauseCronJobs() {
  postDataWithCron.pause();
}

/** Starts/resumes test cron jobs*/
export function resumeTestCronJobs() {
  testCronJob.resume();
}

/** Pauses test cron jobs*/
export function pauseTestCronJobs() {
  testCronJob.pause();
}
