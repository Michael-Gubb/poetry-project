import { postDataWithCron, testCronJob } from "./cronjobs";

export function resumeCronJobs() {
  postDataWithCron.resume();
  testCronJob.resume();
}

export function pauseCronJobs() {
  postDataWithCron.pause();
  testCronJob.pause();
}

export function resumeTestCronJobs() {
  testCronJob.resume();
}

export function pauseTestCronJobs() {
  testCronJob.pause();
}
