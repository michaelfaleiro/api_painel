import { TRemessa } from "../../schemas/remessa.schema";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createService = async (body) => {
  await prisma.remessa.create({
    data: body,
  });
};

export const findService = async () => {
  const data = await prisma.remessa.findMany({
    include: {
      produtos: true,
    },
  });
  return data;
};

export const findByIdService = async (id: string) => {
  const data = await prisma.remessa.findUnique({
    where: {
      id: id,
    },
    include: {
      produtos: true,
    },
  });
  return data;
};

export const updateService = async (id: string, body: TRemessa) => {
  const data = await prisma.remessa.update({
    where: {
      id: id,
    },
    data: body,
  });
  return data;
};

export const destroyService = async (id: string) => {
  await prisma.remessa.delete({
    where: {
      id: id,
    },
  });
};
