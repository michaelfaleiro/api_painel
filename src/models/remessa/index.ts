import { model, Schema, Document } from "mongoose";

export interface IRemessa extends Document {
  id: string;
  numeroPedido: number;
  dataPedido: Date;
  numeroNfe: number;
  nomeCliente: string;
  emailCliente: string;
}

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

export default model<IRemessa>("Remessa", RemessaSchema);
