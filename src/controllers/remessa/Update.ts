import { Request, Response } from "express";
import { TRemessa } from "../../schemas/remessa.schema";
import { findByIdService, updateService } from "../../services/remessa";
import { StatusCodes } from "http-status-codes";

export const update = async (
  req: Request<TRemessa, {}, TRemessa>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const remessa = await findByIdService(id);
    if (!remessa) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send({ message: "Register not found!" });
    }
    await updateService(id, req.body);
    return res
      .status(StatusCodes.OK)
      .send({ message: "Updated successfully!" });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).send(error.message);
  }
};
