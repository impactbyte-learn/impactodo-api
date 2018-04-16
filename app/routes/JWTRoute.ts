import * as express from "express";
import { JWTController } from "../controllers/JWTController";

export const JWTRoute: express.Router = express
  .Router()
  .get("/", JWTController.Get)
  .post("/", JWTController.CreateToken);
