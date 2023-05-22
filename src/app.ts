import * as dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import express from "express";
import { getTime } from "./repository/getTime";
import { testrouter } from "./testtable/testtable.router";
import { postDataWithCron } from "./testtable/testtable.job";

export const app = express();

postDataWithCron.resume();

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.use("/test", testrouter);

app.get("/", async (req, res) => {
  const time = await getTime();
  res.send(`Hello, World! The time from the DB is ${time}`);
});

app.get("/healthcheck", (req, res) => {
  res.send(`Server running`);
});
