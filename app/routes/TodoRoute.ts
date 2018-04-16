import * as express from "express";
import * as SampleMiddleware from "../middlewares/SampleMiddleware";
import { TodoController } from "../controllers/TodoController";

export const TodoRoute: express.Router = express
  .Router()
  .get("/", TodoController.Get)
  .get("/:id", TodoController.GetById)
  .post("/", [SampleMiddleware.CheckCreate], TodoController.Create)
  .put("/:id", [SampleMiddleware.CheckUpdate], TodoController.UpdateById)
  .delete("/", [SampleMiddleware.CheckDelete], TodoController.Destroy);
