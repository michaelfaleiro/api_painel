import { Request, Response } from "express";
import { destroyProdutoService, findOneProduto } from "../../services/produto";

export const destroy = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const produto = await findOneProduto(id);
    if (!produto) {
      return res.status(404).json({ message: "Produto not found" });
    }
    await destroyProdutoService(produto.id);
    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
