import * as express from "express";
import * as SampleMiddleware from "../middlewares/SampleMiddleware";
import { SampleController } from "../controllers/SampleController";

export const SampleRoute: express.Router = express
  .Router()
  .get("/", SampleController.All)
  .get("/:id", SampleController.Find)
  .post("/", [SampleMiddleware.CheckCreate], SampleController.Create)
  .put("/", [SampleMiddleware.CheckUpdate], SampleController.Update)
  .delete("/", [SampleMiddleware.CheckDelete], SampleController.Delete);
