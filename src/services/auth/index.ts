import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const loginService = async (username: string) => {
  const data = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  return data;
};

export const generateToken = (id: string) => {
  const token = jwt.sign({ id: id }, process.env.SECRET_JWT, {
    expiresIn: 86400,
  });
  return token;
};
