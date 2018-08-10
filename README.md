# Impact Todo API

[![Greenkeeper badge](https://badges.greenkeeper.io/impactbyte-learn/impactodo-api.svg)](https://greenkeeper.io/)

Impact Todo API with:

* Node.js
* Express
* TypeORM
* Typescript
* JWT
* ES2015+
* TSLint
* Mocha
* Chai
* Superagent
* Clustering

---

# What use this?

* **JWT** for protect routes.
* **TypeORM** for ORM.
* **ES2015** with the last of JS like `Promise` and `async`/`await`
* **Mocha & Chai** for test
* **Clustering mode** for load many forks depending of the CPU's units

## Structure

```
/app
	/controllers (Controllers of the app)
	/middlewares (Middlewares for the routes of the app)
	/routes (Routes for Controllers of the app)
	/service (Services for using in any Controller)
	/entity (Models configuration for use)
	/repository (Custom queries)
/config
	/Router.ts (Config file for Routing)
	/Database (DB configuration for use)
	/Server.ts (Server configuration)
config.ts (Config file for the app)
tsconfig.json (File configuration typescript)
tslint.json (File configuration rules typescript)
Index.ts (Main file to start the app)
```

---

# Install

Clone this repository.

Download all dependencies.

```sh
npm install
```

Remember to `start` your database first, such as `mysql` or `postgresql`.

```sh
sudo service mysql start
sudo service postgresql start
```

Then edit the file `./config.ts` with your own settings accordingly:

```js
export const DIALECT = "postgres";

const LOCAL = {
  URL: process.env.DATABASE_URL,
  DB: "impactodo",
  USER_DB: "username",
  PASSWORD: "yourpassword",
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
```

---

# Start App

When execute any of this commands the app start with clustering, creating many cluster apps depending of the numbers of CPU's your computer had.

### Development

In development mode the express app is starter with nodemon for automatic refresh when do changes.

```sh
npm run dev
```

### Test

Run test in development environment

```sh
npm test
```

### Production

Run app in production environment

```sh
npm start
```
