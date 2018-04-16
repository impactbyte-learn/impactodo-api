# Impact Todo API

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

1.  First clone this repository.
2.  Download all dependencies.
    npm install
3.  Edit the file `./config.ts` with your own settings:

```js
const LOCAL = {
  SERVER: "127.0.0.1",
  PORT_DB: 3306,
  DB: "test",
  USER_DB: "root",
  PASSWORD: "",
  DIALECT: "mysql"
};

const PRODUCTION = {
  SERVER: process.env.SERVER || "localhost",
  DB: process.env.DB || "prod",
  PORT_DB: process.env.PORT_DB || 3306,
  USER_DB: process.env.USER_DB || "root",
  PASSWORD: process.env.PASSWORD || "",
  DIALECT: process.env.DIALECT || "mysql"
};

export const config = {
  SECRET: "yourappsecrethere",
  PORT_APP: 3000,
  DATABASE: process.env.NODE_ENV === "PRODUCTION" ? PRODUCTION : LOCAL
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
