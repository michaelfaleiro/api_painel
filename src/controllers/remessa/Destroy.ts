import { Request, Response } from "express";
import { destroyService, findByIdService } from "../../services/remessa";

export const destroy = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const remessa = await findByIdService(id);
    if (!remessa) {
      return res.status(404).send({
        message: "Id not found",
      });
    }
    await destroyService(id);
    return res.status(200).send({
      message: "Remessa is deleted",
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
