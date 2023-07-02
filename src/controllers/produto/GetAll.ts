import { Request, Response } from "express";
import { TProduto } from "../../schemas/produto.schema";

export const getAll = async (
  req: Request,
  res: Response<TProduto[]>
): Promise<Response> => {
  try {
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
