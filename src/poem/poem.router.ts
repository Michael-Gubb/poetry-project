import express from "express";
import { poemRequestValidator } from "../middleware/validation.middleware";
import {
  getAllPoemTopics,
  getPoemTopics,
  transformPoemsToCamelCase,
} from "../utils/poem.utils";
import { askForPoem } from "../openai/openai.request";
import { getPoems } from "./poem.repository";

/** Currently has GET "/", "/poemtopics", "/poemtopics/random" */
export const poemRouter = express.Router();

poemRouter.get("/", async (req, res, next) => {
  try {
    const poems = await getPoems();
    res.send({ poems: transformPoemsToCamelCase(poems) });
  } catch (error) {
    next(error);
  }
});

/** Create new poems DISABLED FOR NOW */
/*
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
*/

poemRouter.get("/poemtopics/random", (req, res) => {
  const poemTopics = getPoemTopics();
  res.json({ topics: poemTopics });
});

poemRouter.get("/poemtopics", (req, res) => {
  const poemTopics = getAllPoemTopics();
  res.json({ topics: poemTopics });
});
