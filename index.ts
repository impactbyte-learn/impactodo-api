import "reflect-metadata";

import * as cors from "cors";
import * as morgan from "morgan";
import * as express from "express";
import * as bodyParser from "body-parser";

import { createConnection } from "typeorm";
import { Request, Response } from "express";

import { AppRoutes } from "./routes";

const PORT = process.env.PORT || 3000;

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(async connection => {
    // create express app
    const app = express();
    app.use(cors());
    app.use(morgan("combined"));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach(route => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch(err => next(err));
        }
      );
    });

    // run app
    app.listen(PORT, () => {
      console.log(`Impact Todo API is listening on :${PORT}`);
    });
  })
  .catch(error => console.log(`TypeORM connection error: ${error}`));
