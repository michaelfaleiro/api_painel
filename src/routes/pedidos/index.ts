import { Router } from "express";

import { RemessaController } from "../../controllers/remessa";

const route = Router();

route.get("/remessas", RemessaController.getAll);
route.get("/remessa/:id", RemessaController.findone);
route.post("/remessa", RemessaController.create);
route.delete("/remessa/:id", RemessaController.destroy);

export { route };
