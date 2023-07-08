import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { findByIdService } from "../services/user";
import { TUser } from "../schemas/auth.schema";

dotenv.config();

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(403).json({ message: "Invalid authorization" });
    }
    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.send(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.send(401);
    }
    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded: TUser) => {
      if (error) {
        return res.status(401).send({ message: "Token not valid" });
      }

      const user = await findByIdService(decoded.id);

      if (!user || !user.id) {
        return res.status(401).send({ message: "Token not valid" });
      }

      var userId = user.id;
      return next();
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
