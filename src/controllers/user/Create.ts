import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUserService } from "../../services/user";

export const Create = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await createUserService(req.body, passwordHash);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};
