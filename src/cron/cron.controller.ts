import { testCronJob, openAIRequest } from "./cronjobs";

/** Starts/resumes main cron jobs*/
export function resumeCronJobs() {
  openAIRequest.resume();
}

/** Pauses main cron jobs*/
export function pauseCronJobs() {
  openAIRequest.pause();
}

/** Starts/resumes test cron jobs*/
export function resumeTestCronJobs() {
  testCronJob.resume();
}

/** Pauses test cron jobs*/
export function pauseTestCronJobs() {
  testCronJob.pause();
}
