import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      console.log(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: error.issues });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
