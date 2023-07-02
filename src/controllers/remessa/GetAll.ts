import { Request, Response } from "express";
import { TRemessa } from "../../schemas/remessa.schema";
import { findService } from "../../services/remessa";
import { unknown } from "zod";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const remessas = await findService();
    return res.status(200).json(remessas);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
