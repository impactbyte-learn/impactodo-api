import * as express from "express";
import * as jwt from "express-jwt";

import { config } from "../config";

import { anyCheck, anyCheckTwo } from "../app/middlewares/SampleMiddleware";

import { RootRoute } from "../app/routes/RootRoute";
import { JWTRoute } from "../app/routes/JWTRoute";
import { ProtectedRoute } from "../app/routes/ProtectedRoute";
import { SampleRoute } from "../app/routes/SampleRoute";
import { TodoRoute } from "../app/routes/TodoRoute";

interface IROUTER {
  path: string;
  middleware: any[];
  handler: express.Router;
}

export const ROUTER: IROUTER[] = [
  {
    handler: RootRoute,
    middleware: [anyCheck, anyCheckTwo],
    path: "/"
  },
  {
    handler: JWTRoute,
    middleware: [],
    path: "/jwt"
  },
  {
    handler: ProtectedRoute,
    middleware: [jwt({ secret: config.SECRET })],
    path: "/protected"
  },
  {
    handler: SampleRoute,
    middleware: [],
    path: "/sample"
  },
  {
    handler: TodoRoute,
    middleware: [],
    path: "/todos"
  }
];
