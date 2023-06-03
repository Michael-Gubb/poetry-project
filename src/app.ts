import * as dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { testrouter } from "./testtable/testtable.router";
import { poemRouter } from "./poem/poem.router";
import * as cronJobs from "./cron/cron.controller";
import appSetup from "./app.setup";

export const app = express();
app.use(cors());

appSetup();

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.post("/api/cron", (req, res) => {
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

app.use("/api/test", testrouter);

app.use("/api/poems", poemRouter);

app.get("/api/healthcheck", (req, res) => {
  res.send(`Server running`);
});
