import { createConnection } from "typeorm";
import { Sample } from "../app/entity/Sample";
import { config, DIALECT } from "../config";

export const Connection =
  process.env.NODE_ENV === "production"
    ? createConnection({
        type: DIALECT,
        url: config.DATABASE.URL,
        entities: ["app/entity/**/*{.js,.ts}"],
        extra: { ssl: true },
        synchronize: true,
        logging: false
      })
    : createConnection({
        type: DIALECT,
        url: config.DATABASE.URL,
        database: config.DATABASE.DB,
        host: config.DATABASE.SERVER,
        username: config.DATABASE.USER_DB,
        password: config.DATABASE.PASSWORD,
        port: config.DATABASE.PORT_DB,
        entities: ["app/entity/**/*{.js,.ts}"],
        cli: {
          entitiesDir: "app/entity",
          migrationsDir: "app/migration",
          subscribersDir: "app/subscriber"
        },
        synchronize: true,
        logging: false
      });
