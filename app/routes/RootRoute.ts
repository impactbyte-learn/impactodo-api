import * as express from "express";
import * as SampleMiddleware from "../middlewares/SampleMiddleware";
import { RootController } from "../controllers/RootController";

export const RootRoute: express.Router = express
  .Router()
  .get("/", RootController.Get);
