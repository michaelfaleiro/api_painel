import { Router } from "express";
import { ProdutoController } from "../../controllers/produto";

const routeProduto = Router();

routeProduto.post("/produto", ProdutoController.create);
routeProduto.get("/produtos/", ProdutoController.getAll);

export { routeProduto };
