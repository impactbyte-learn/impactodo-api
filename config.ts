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
  DB: env.DB || "impactodo",
  USER_DB: env.USER_DB || "mhaidarh",
  PASSWORD: env.PASSWORD || "justpassword",
  PORT_DB: Number(env.PORT_DB) || 5432,
  SERVER: env.SERVER || "localhost"
};

export const config = {
  DATABASE: env.NODE_ENV === "production" ? PRODUCTION : LOCAL,
  SECRET: "makeimpactwithyourcode",
  PORT_APP: 3000
};
