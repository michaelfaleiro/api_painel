import { model, Schema, Document } from "mongoose";

interface IEnvio {
  pedido: string;
  transportadora: string;
  status: string;
  coleta: string;
}
