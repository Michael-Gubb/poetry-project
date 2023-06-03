import * as express from "express";
import * as cronJobs from "./cron.controller";

export const cronRouter = express.Router();

cronRouter.post("/", (req, res) => {
  if (req.body.message === "start test") {
    cronJobs.resumeTestCronJobs();
    res.send("Resuming test cronjobs");
  } else if (req.body.message === "stop test") {
    cronJobs.pauseTestCronJobs();
    res.send("Pausing test cronjobs");
  }
  if (req.body.message === "start main") {
    cronJobs.resumeCronJobs();
    res.send("Resuming main cronjobs");
  } else if (req.body.message === "stop main") {
    cronJobs.pauseCronJobs();
    res.send("Pausing main cronjobs");
  } else {
    res.send("Please enter correct command");
  }
});
