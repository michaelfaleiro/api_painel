import { Request, Response } from "express";
import { ZodError } from "zod";
import {
  createService,
  destroyService,
  findByIdService,
  findService,
  updateService,
} from "../../services/remessa";
import { StatusCodes } from "http-status-codes";
import { TRemessa } from "../../schemas/remessa.schema";

const create = async (req: Request, res: Response) => {
  try {
    const remessa = await createService(req.body);

    res.status(201).send({ remessa });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error.issues);
    }
    return res.status(500).json({ message: "Internal error" });
  }
};

const findone = async (req: Request, res: Response): Promise<Response> => {
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

const getAll = async (
  req: Request,
  res: Response<TRemessa[]>
): Promise<Response> => {
  try {
    const remessas = await findService();
    return res.status(200).json(remessas);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const update = async (req: Request, res: Response) => {
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
    if (error instanceof ZodError) {
      return res.status(400).json(error.issues);
    }
    return res.status(StatusCodes.BAD_REQUEST).send(error.message);
  }
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
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

export const RemessaController = { create, getAll, findone, destroy, update };
