import { Router } from "express";
import { ProdutoController } from "../../controllers/produto";

const routeProduto = Router();

routeProduto.post("/produto/:id", ProdutoController.create);
routeProduto.get("/produtos/", ProdutoController.getAll);
routeProduto.delete("/produto/:id", ProdutoController.destroy);

export { routeProduto };
