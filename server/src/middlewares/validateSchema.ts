import { NextFunction, Request, Response } from "express";
import { Schema } from "zod";

export const validateSchema =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (err) {
      return res.status(400).send(err);
    }
  };
