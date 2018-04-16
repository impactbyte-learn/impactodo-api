import { env } from "process";

export const DIALECT = "postgres";

const LOCAL = {
  URL: process.env.DATABASE_URL,
  DB: "impactodo",
  USER_DB: "mhaidarh",
  PASSWORD: "justpassword",
  PORT_DB: 5432,
  SERVER: "localhost"
};

const PRODUCTION = {
  URL: process.env.DATABASE_URL,
  DB: env.DB,
  USER_DB: env.USER_DB,
  PASSWORD: env.PASSWORD,
  PORT_DB: Number(env.PORT_DB),
  SERVER: env.SERVER
};

export const config = {
  DATABASE: env.NODE_ENV === "production" ? PRODUCTION : LOCAL,
  SECRET: "makeimpactwithyourcode",
  PORT_APP: 3000
};
