import * as Root from "./src/controller/Root";
import * as Todo from "./src/controller/Todo";
import * as Post from "./src/controller/Post";
import * as User from "./src/controller/User";

/**
 * All application routes.
 */
export const AppRoutes = [
  // ROOT
  { path: "/", method: "get", action: Root.get },

  // TODOS
  { path: "/todos", method: "get", action: Todo.get },
  { path: "/todos/:id", method: "get", action: Todo.getById },
  { path: "/todos", method: "post", action: Todo.save },
  { path: "/todos", method: "delete", action: Todo.destroy },
  { path: "/todos/:id", method: "delete", action: Todo.destroyById },
  { path: "/todos/:id", method: "put", action: Todo.updateById },

  // POSTS
  { path: "/posts", method: "get", action: Post.get },
  { path: "/posts/:id", method: "get", action: Post.getById },
  { path: "/posts", method: "post", action: Post.save },

  // USERS
  { path: "/users", method: "get", action: User.get },
  { path: "/users/:id", method: "get", action: User.getById },
  { path: "/users", method: "post", action: User.save },
  { path: "/users", method: "delete", action: User.destroy },
  { path: "/users/:id", method: "delete", action: User.destroyById },
  { path: "/users/:id", method: "put", action: User.updateById }
];
