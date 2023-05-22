import { postDataWithCron, testCronJob } from "./cronjobs";

export function resumeCronJobs() {
  postDataWithCron.resume();
}

export function pauseCronJobs() {
  postDataWithCron.pause();
}

export function resumeTestCronJobs() {
  testCronJob.resume();
}

export function pauseTestCronJobs() {
  testCronJob.pause();
}
