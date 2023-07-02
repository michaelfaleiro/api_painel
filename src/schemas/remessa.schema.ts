import { z } from "zod";

export const RemessaSchema = z.object({
  id: z.string().optional(),
  numeroPedido: z.number().int().positive(),
  numeroNfe: z.number().int().positive(),
  dataPedido: z.string().datetime(),
  nomeCliente: z.string().nonempty(),
  emailCliente: z.string().email(),
});

export type TRemessa = z.infer<typeof RemessaSchema>;
