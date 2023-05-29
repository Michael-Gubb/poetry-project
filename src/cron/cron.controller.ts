import { testCronJob, hourlyGeneratePoem } from "./cronjobs";

/** Starts/resumes main cron jobs*/
export function resumeCronJobs() {
  hourlyGeneratePoem.resume();
}

/** Pauses main cron jobs*/
export function pauseCronJobs() {
  hourlyGeneratePoem.pause();
}

/** Starts/resumes test cron jobs*/
export function resumeTestCronJobs() {
  testCronJob.resume();
}

/** Pauses test cron jobs*/
export function pauseTestCronJobs() {
  testCronJob.pause();
}
