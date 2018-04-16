import * as express from "express";
import { ProtectedController } from "../controllers/ProtectedController";

export const ProtectedRoute: express.Router = express
  .Router()
  .get("/", ProtectedController.Index);
