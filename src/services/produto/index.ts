import { PrismaClient } from "@prisma/client";
import { TProduto } from "../../schemas/produto.schema";

const prisma = new PrismaClient();

export const createService = async (body: TProduto, remessaid: string) => {
  await prisma.produto.create({
    data: {
      nomeProduto: body.nomeProduto,
      quantidade: body.quantidade,
      sku: body.sku,
      remessaId: remessaid,
    },
  });
};

export const findAllService = async () => {
  const data = await prisma.produto.findMany();
  return data;
};

export const findOneProduto = async (id: string) => {
  const data = await prisma.produto.findFirst({
    where: {
      id: id,
    },
  });
  return data;
};

export const destroyProdutoService = async (id: string) => {
  const data = await prisma.produto.delete({
    where: {
      id: id,
    },
  });
};
