import { Request, Response } from "express";
import { TProduto } from "../../schemas/produto.schema";
import { findAllService } from "../../services/produto";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const produtos = await findAllService();
    console.log(produtos);
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
