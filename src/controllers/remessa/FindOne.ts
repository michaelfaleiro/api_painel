import { Request, Response } from "express";
import { findByIdService } from "../../services/remessa";

export const findone = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const remessa = await findByIdService(id);
    if (!remessa) {
      return res.status(404).send({
        message: "Register is not found!",
      });
    }
    return res.status(200).json({
      remessa,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
