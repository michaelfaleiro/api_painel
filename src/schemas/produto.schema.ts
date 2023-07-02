import { z } from "zod";
import mongoose from "mongoose";

export const ProdutoSchema = z.object({
  id: z.string().optional(),
  sku: z.string().nonempty(),
  nomeProduto: z.string().nonempty(),
  quantidade: z.number().int(),
  remessa: z.custom<mongoose.Types.ObjectId>(),
});

export type TProduto = z.infer<typeof ProdutoSchema>;
