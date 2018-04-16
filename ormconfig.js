const DIALECT = "postgres";

const LOCAL = {
  type: DIALECT,
  host: "localhost",
  port: 5432,
  username: "mhaidarh",
  password: "justpassword",
  database: "impactodo",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.js"],
  subscribers: ["src/subscriber/*.js"],
  migrations: ["src/migration/*.js"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  }
};

const PRODUCTION = {
  type: DIALECT,
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: ["src/entity/**/*.js"],
  subscribers: ["src/subscriber/*.js"],
  migrations: ["src/migration/*.js"]
};

module.exports = process.env.NODE_ENV === "production" ? PRODUCTION : LOCAL;
