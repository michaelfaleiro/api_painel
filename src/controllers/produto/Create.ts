import { Request, Response } from "express";
import { TProduto } from "../../schemas/produto.schema";

export const create = async (req: Request<{}, {}, TProduto>, res: Response) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
