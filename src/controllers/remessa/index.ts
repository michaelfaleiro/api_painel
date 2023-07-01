import * as create from "./Create";
import * as destroy from "./Destroy";
import * as findone from "./FindOne";
import * as getall from "./GetAll";
import * as update from "./Update";

export const RemessaController = {
  ...create,
  ...destroy,
  ...findone,
  ...getall,
  ...update,
};
