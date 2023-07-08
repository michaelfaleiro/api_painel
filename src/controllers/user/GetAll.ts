import { Request, Response } from "express";
import { findAllUsersService } from "../../services/user";

export const GetAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await findAllUsersService();

    return res.status(200).json({
      users: users.map((user) => ({
        username: user.username,
        email: user.email,
      })),
    });
  } catch (error) {}
};
