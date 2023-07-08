import express from "express";
import cors from "cors";
import morgan from "morgan";

require("dotenv").config();

import { route } from "./routes/remessa";
import { routeProduto } from "./routes/produto";
import { routeUser } from "./routes/user";
import { routeAuth } from "./routes/auth";
import { authMiddleware } from "./middlewares/auth.middleware";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", route);
app.use("/api", routeProduto);
app.use("/api", routeUser);
app.use("/api", routeAuth);
