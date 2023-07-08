import { Router } from "express";
import { UserController } from "../../controllers/user";
import { schemaValidation } from "../../middlewares/uservalidation";
import { UserSchema } from "../../schemas/auth.schema";
const routeUser = Router();

routeUser.post("/user", schemaValidation(UserSchema), UserController.Create);
routeUser.get("/users", UserController.GetAll);
routeUser.get("/user", UserController.FindOne);

export { routeUser };
