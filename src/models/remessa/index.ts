import { model, Schema, Document } from "mongoose";
import { TRemessa } from "../../schemas/remessa.schema";

const RemessaSchema = new Schema(
  {
    numeroPedido: {
      type: Number,
      required: true,
    },
    dataPedido: {
      type: Date,
      required: true,
    },
    numeroNfe: {
      type: Number,
      required: true,
    },
    nomeCliente: {
      type: String,
      required: true,
    },
    emailCliente: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<TRemessa>("Remessa", RemessaSchema);
