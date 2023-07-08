import { Request, Response } from "express";
import { findByIdService } from "../../services/user";
import { TUser } from "../../schemas/auth.schema";

export const FindOne = async (req: Request<{}, {}, TUser>, res: Response) => {
  try {
    const { username } = req.body;
    const user = await findByIdService(username);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    return res.status(200).json({
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
