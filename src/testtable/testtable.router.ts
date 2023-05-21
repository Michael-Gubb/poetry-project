import express from "express";
import { getTestData } from "./testtable.repository";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const response = await getTestData();

    return res.json(response);
  } catch (err) {
    next(err);
  }
});
