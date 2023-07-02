import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createService = async (body) => {
  await prisma.produto.create({
    data: body,
  });
};

export const findAllService = async () => {
  const data = await prisma.produto.findMany();
  return data;
};
