import { Router } from "express";

import { RemessaController } from "../../controllers/remessa";

const route = Router();

route.get("/remessa", RemessaController.getAll);
route.post("/remessa", RemessaController.create);
route.delete("/remessa/:id", RemessaController.destroy);

export { route };
