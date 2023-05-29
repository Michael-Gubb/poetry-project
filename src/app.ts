import * as dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import express from "express";
import { getTime } from "./repository/time";
import { testrouter } from "./testtable/testtable.router";
import { poemRouter } from "./middleware/poem.router";
import { getPoemTopics, getAllPoemTopics } from "./utils/poem.utils";
import * as cronJobs from "./cron/cron.controller";
import appSetup from "./app.setup";

export const app = express();

appSetup();

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

app.use("/poem", poemRouter);

app.get("/", async (req, res) => {
  const time = await getTime();
  res.send(`Hello, World! The time from the DB is ${time}`);
});

app.get("/healthcheck", (req, res) => {
  res.send(`Server running`);
});

app.get("/poemtopics", (req, res) => {
  const poemTopics = getPoemTopics();
  res.json({ topics: poemTopics });
});

app.get("/allpoemtopics", (req, res) => {
  const poemTopics = getAllPoemTopics();
  res.json({ topics: poemTopics });
});
