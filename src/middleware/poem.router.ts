import express from "express";
import { poemRequestValidator } from "./validation.middleware";
import { askForPoem } from "../openai/openai.request";

export const poemRouter = express.Router();

poemRouter.get("/", (req, res) => {
  res.send("Send created poems");
});

/** Create new poems */
poemRouter.post("/", poemRequestValidator, async (req, res, next) => {
  try {
    console.log("asking for poem");
    const poemResult: PoemResponse = await askForPoem(
      req.body.poemWords ? req.body.poemWords : undefined
    );
    res.send(poemResult.content);
  } catch (error) {
    next(error);
  }
});
