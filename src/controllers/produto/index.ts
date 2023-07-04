import * as create from "./Create";
import * as getall from "./GetAll";
import * as destroy from "./Destroy";

export const ProdutoController = {
  ...create,
  ...getall,
  ...destroy,
};
