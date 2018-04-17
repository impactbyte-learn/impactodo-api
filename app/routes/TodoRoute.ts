import * as express from "express";
import * as SampleMiddleware from "../middlewares/SampleMiddleware";
import { TodoController } from "../controllers/TodoController";

export const TodoRoute: express.Router = express
  .Router()
  .get("/", TodoController.Get)
  .get("/:id", TodoController.GetById)
  .post("/", TodoController.Create)
  .put("/:id", TodoController.UpdateById)
  .delete("/", TodoController.Destroy)
  .delete("/:id", TodoController.DestroyById);
