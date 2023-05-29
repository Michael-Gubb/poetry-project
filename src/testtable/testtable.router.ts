import express from "express";
import { getTestData, postTestData } from "./testtable.repository";

export const testrouter = express.Router();

testrouter.get("/", async (req, res, next) => {
  try {
    const response = await getTestData();

    return res.json(response);
  } catch (err) {
    next(err);
  }
});

testrouter.post("/", async (req, res, next) => {
  try {
    const dataToPost = new Date();
    const response = await postTestData(dataToPost.toString());
    return res.json(response);
  } catch (err) {
    next(err);
  }
});
