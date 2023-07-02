import mongoose, { model, Schema } from "mongoose";
import { TProduto } from "../../schemas/produto.schema";

const ProdutoSchema = new Schema({
  sku: {
    type: String,
    required: true,
  },
  nomeProduto: {
    type: String,
    required: true,
  },
  quantidadeProduto: {
    type: Number,
    required: true,
  },
  remessa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Remessa",
    required: true,
  },
});

export default model<TProduto>("Produto", ProdutoSchema);
