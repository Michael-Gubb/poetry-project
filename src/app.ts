import * as dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import path from "path";
import { poemRouter } from "./poem/poem.router";
import { adminRouter } from "./admin/admin.router";

import appSetup from "./app.setup";

export const app = express();
app.use(cors());

appSetup();

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.use("/admin", adminRouter);
app.use("/api/poems", poemRouter);
app.get("/api/healthcheck", (req, res) => {
  res.send(`Server running`);
});

app.get("/", (req, res) => {
  res.redirect("/index.html");
});
app.use("/", express.static(path.join(__dirname, "client")));
