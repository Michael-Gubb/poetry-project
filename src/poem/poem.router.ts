import express from "express";
import { poemRequestValidator } from "../middleware/validation.middleware";
import {
  getAllPoemTopics,
  getAllPoemGenres,
  getPoemTopics,
  transformPoemsToCamelCase,
} from "../utils/poem.utils";
import { askForPoem } from "../openai/openai.request";
import { getPoems } from "./poem.repository";

/** Currently has GET "/", "/poemtopics", "/poemtopics/random" */
export const poemRouter = express.Router();

const DEFAULT_POEMS_LIMIT = 200;

poemRouter.get("/", async (req, res, next) => {
  try {
    const limitQuery = req.query.limit;
    let limit: number | null;
    if (Array.isArray(limitQuery)) {
      limit = !Number.isNaN(limitQuery[0])
        ? Number(limitQuery[0])
        : DEFAULT_POEMS_LIMIT;
    } else {
      limit = !Number.isNaN(limitQuery)
        ? Number(limitQuery)
        : DEFAULT_POEMS_LIMIT;
    }
    const poems = await getPoems(limit);
    const responseBody: ResponseToGetPoems = {
      poems: transformPoemsToCamelCase(poems),
      topics: getAllPoemTopics(),
      genres: getAllPoemGenres(),
    };
    res.send(responseBody);
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
