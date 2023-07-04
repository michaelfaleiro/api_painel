import { Router } from "express";

import { RemessaSchema } from "../../schemas/remessa.schema";
import { RemessaController } from "../../controllers/remessa";
import { schemaValidation } from "../../middlewares/remessavalidation";

const route = Router();

route.get("/remessas", RemessaController.getAll);
route.get("/remessa/:id", RemessaController.findone);
route.post(
  "/remessa",
  schemaValidation(RemessaSchema),
  RemessaController.create
);
route.put(
  "/remessa/:id",
  schemaValidation(RemessaSchema),
  RemessaController.update
);
route.delete("/remessa/:id", RemessaController.destroy);

export { route };
