import * as Todo from "./controller/Todo";
import * as Post from "./controller/Post";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/todos",
    method: "get",
    action: Todo.get
  },
  {
    path: "/todos/:id",
    method: "get",
    action: Todo.getById
  },
  {
    path: "/todos",
    method: "post",
    action: Todo.save
  },
  {
    path: "/posts",
    method: "get",
    action: Post.get
  },
  {
    path: "/posts/:id",
    method: "get",
    action: Post.getById
  },
  {
    path: "/posts",
    method: "post",
    action: Post.save
  }
];
