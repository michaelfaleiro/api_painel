import mongoose, { model, Schema } from "mongoose";
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
    produto: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produto",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<TRemessa>("Remessa", RemessaSchema);
