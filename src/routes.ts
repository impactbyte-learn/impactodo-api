import * as Root from "./controller/Root";
import * as Todo from "./controller/Todo";
import * as Post from "./controller/Post";

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
  { path: "/users", method: "get", action: Todo.get },
  { path: "/users/:id", method: "get", action: Todo.getById },
  { path: "/users", method: "post", action: Todo.save },
  { path: "/users", method: "delete", action: Todo.destroy },
  { path: "/users/:id", method: "delete", action: Todo.destroyById },
  { path: "/users/:id", method: "put", action: Todo.updateById }
];
