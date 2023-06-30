import { Request, Response } from "express";
import Remessa, { IRemessa } from "../../models/remessa/index";

const create = async (
  req: Request<{}, {}, IRemessa>,
  res: Response
): Promise<Response> => {
  try {
    const remessa: IRemessa = await Remessa.create(req.body);
    return res.status(200).json(remessa);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const getAll = async (
  req: Request<{}, {}, IRemessa>,
  res: Response
): Promise<Response> => {
  try {
    const remessas = await Remessa.find();
    return res.status(200).send(remessas);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    let remessa = await Remessa.findByIdAndDelete(id);
    return res.status(200).send({
      message: "Remessa is deleted",
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const RemessaController = { create, getAll, destroy };
