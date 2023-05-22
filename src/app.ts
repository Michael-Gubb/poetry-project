import * as dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import express from "express";
import { getTime } from "./repository/getTime";
import { testrouter } from "./testtable/testtable.router";
import * as cronJobs from "./cron/cron.controller";

export const app = express();

cronJobs.resumeCronJobs();

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.post("/cron", (req, res) => {
  if (req.body.message === "start") {
    cronJobs.resumeTestCronJobs();
    res.send("Resuming test cronjobs");
  } else if (req.body.message === "stop") {
    cronJobs.pauseTestCronJobs();
    res.send("Pausing test cronjobs");
  } else {
    res.send("Please enter correct command");
  }
});

app.use("/test", testrouter);

app.get("/", async (req, res) => {
  const time = await getTime();
  res.send(`Hello, World! The time from the DB is ${time}`);
});

app.get("/healthcheck", (req, res) => {
  res.send(`Server running`);
});
