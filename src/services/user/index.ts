import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { TUser } from "../../schemas/auth.schema";

export const createUserService = async (body: TUser, passwordHash: string) => {
  const data = await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: passwordHash,
    },
  });
  return data;
};

export const findAllUsersService = async () => {
  const data = await prisma.user.findMany();
  return data;
};

export const findByIdService = async (id: string) => {
  const data = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });
  return data;
};
