import express, { Request, Response, NextFunction } from "express";
import { ZodError, z } from "zod";

const poemBodySchema = z.array(z.string());

const poemRequestSchema = z.object({
  body: z.object({
    poemWords: poemBodySchema,
  }),
});

type PoemBody = z.infer<typeof poemBodySchema>;
type PoemRequest = z.infer<typeof poemRequestSchema>;

/**
 * Checks to see if poem body includes poemWords:string[]
 * @param req
 * @param res
 * @param next
 */
export const poemRequestValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await poemRequestSchema.parseAsync({
      body: req.body,
    });
    next();
  } catch (err) {
    res.send("bad poem request");
  }
};
