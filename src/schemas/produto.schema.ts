import { z } from "zod";

export const ProdutoSchema = z.object({
  sku: z.string().nonempty(),
  nomeProduto: z.string().nonempty(),
  quantidade: z.number().default(1),
  remessaId: z.string().optional(),
});

export type TProduto = z.infer<typeof ProdutoSchema>;
