import Remessa from "../../models/remessa";
import { TRemessa } from "../../schemas/remessa.schema";

export const createService = async (body: TRemessa) => {
  await Remessa.create(body);
};

export const findService = async () => {
  const data = await Remessa.find();
  return data;
};

export const findByIdService = async (id: string) => {
  const data = await Remessa.findById(id);
  return data;
};

export const updateService = async (id: string, body: TRemessa) => {
  const data = await Remessa.findByIdAndUpdate({ _id: id }, body);
  return data;
};

export const destroyService = async (id: string) => {
  await Remessa.findByIdAndDelete(id);
};
