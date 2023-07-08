import bcrypt from "bcrypt";
import { TUser } from "../../schemas/auth.schema";
import { Request, Response } from "express";
import { generateToken, loginService } from "../../services/auth";

export const LoginController = async (
  req: Request<{}, {}, TUser>,
  res: Response
): Promise<Response> => {
  try {
    const { username, password } = req.body;
    const user = await loginService(username);
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).send({ message: "Invalid username or password" });
    }
    const tokenJwt = generateToken((await user).id);
    return res.status(200).json({
      username: username,
      token: tokenJwt,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
