import * as express from "express";
import * as cronJobs from "./cron.controller";

export const cronRouter = express.Router();

cronRouter.post("/", (req, res) => {
  if (req.body.message === "start test") {
    cronJobs.resumeTestCronJobs();
    res.send({ message: "Resuming test cronjobs" });
  } else if (req.body.message === "stop test") {
    cronJobs.pauseTestCronJobs();
    res.send({ message: "Pausing test cronjobs" });
  } else if (req.body.message === "start main") {
    cronJobs.resumeCronJobs();
    res.send({ message: "Resuming main cronjobs" });
  } else if (req.body.message === "stop main") {
    cronJobs.pauseCronJobs();
    res.send({ message: "Pausing main cronjobs" });
  } else {
    res.send({ message: "Please enter correct command" });
  }
});
