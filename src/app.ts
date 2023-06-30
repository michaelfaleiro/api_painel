import express from "express";
import cors from "cors";
import morgan from "morgan";

require("dotenv").config();
require("./database/index.ts");

import { route } from "./routes/pedidos";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", route);
