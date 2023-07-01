import { Request, Response } from "express";
import { createService } from "../../services/remessa";
import { TRemessa } from "../../schemas/remessa.schema";

export const create = async (req: Request<{}, {}, TRemessa>, res: Response) => {
  try {
    const remessa = await createService(req.body);

    res.status(201).send({ remessa });
  } catch (error) {
    return res.status(500).json({ message: "Internal error" });
  }
};
