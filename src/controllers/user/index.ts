import * as Create from "./Create";
import * as GetAll from "./GetAll";
import * as FindOne from "./FindOne";

export const UserController = {
  ...Create,
  ...GetAll,
  ...FindOne,
};
