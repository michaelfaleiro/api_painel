import { Request, Response } from "express";
import { TProduto } from "../../schemas/produto.schema";
import { createService } from "../../services/produto";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (req: Request<{}, {}, TProduto>, res: Response) => {
  try {
    const produto = await createService(req.body);

    res.status(201).send({ produto });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
