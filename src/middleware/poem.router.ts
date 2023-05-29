import express from "express";
import { poemRequestValidator } from "./validation.middleware";
import { transformPoemsToCamelCase } from "../utils/poem.utils";
import { askForPoem } from "../openai/openai.request";
import { getPoems } from "../poem/poem.repository";

export const poemRouter = express.Router();

poemRouter.get("/", async (req, res, next) => {
  try {
    const poems = await getPoems();
    res.send({ poems: transformPoemsToCamelCase(poems) });
  } catch (error) {
    next(error);
  }
});

/** Create new poems */
poemRouter.post("/", poemRequestValidator, async (req, res, next) => {
  try {
    const poemResult: PoemResponse = await askForPoem(
      req.body.poemWords ? req.body.poemWords : undefined
    );
    res.send(poemResult.content);
  } catch (error) {
    next(error);
  }
});
