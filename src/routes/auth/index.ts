import { Router } from "express";
import { LoginController } from "../../controllers/auth";

const routeAuth = Router();

routeAuth.post("/login", LoginController);

export { routeAuth };
