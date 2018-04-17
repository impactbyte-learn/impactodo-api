import { Request, Response } from "express";

import { Todo } from "../entity/Todo";

export class TodoController {
  public static async Get(req: Request, res: Response) {
    const todos = await Todo.find();

    res.status(200).send({ data: todos });
  }

  public static async GetById(req: Request, res: Response) {
    const id: number = req.params.id;
    const todo = await Todo.findOneById(id);

    todo
      ? res.status(200).send({ data: todo })
      : res.status(404).send({ message: "NOT FOUND" });
  }

  public static async Create(req: Request, res: Response) {
    const text: string = req.body.text;
    const todo = new Todo();

    todo.text = text;

    try {
      const newTodo = await Todo.save(todo);
      res.status(201).send({ message: `New todo created`, data: newTodo });
    } catch (error) {
      res.status(404).send({ message: "ERROR" });
    }
  }

  public static async UpdateById(req: Request, res: Response) {
    const todo = new Todo();

    todo.id = Number(req.params.id);
    todo.text = req.body.text;

    console.log({ todo });

    try {
      const newTodo = await Todo.save(todo);
      newTodo
        ? res.status(200).send({
            message: `Todo with ${todo.id} updated`,
            data: todo
          })
        : res.status(404).send({ message: "NOT FOUND" });
    } catch (error) {
      res.status(404).send({ message: "ERROR ON UPDATE" });
    }
  }

  public static async Destroy(req: Request, res: Response) {
    await Todo.clear();

    res.status(204).send({ message: `All todos deleted` });
  }

  public static async DestroyById(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
      Todo.removeById(id);
      res.status(204).send({ message: `Todo with ${id} deleted` });
    } catch (error) {
      res.status(404).send({ message: "ERROR" });
    }
  }
}
