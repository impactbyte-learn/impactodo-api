import { createConnection } from "typeorm";
import { Sample } from "../app/entity/Sample";
import { config, DIALECT } from "../config";

export const Connection = createConnection({
  type: DIALECT,
  database: config.DATABASE.DB,
  host: config.DATABASE.SERVER,
  username: config.DATABASE.USER_DB,
  password: config.DATABASE.PASSWORD,
  port: config.DATABASE.PORT_DB,
  synchronize: true,
  logging: false,
  entities: ["app/entity/**/*{.js,.ts}"]
});
