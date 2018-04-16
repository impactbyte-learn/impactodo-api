import { Request, Response } from "express";
import { Todo } from "../entity/Todo";

export async function get(req: Request, res: Response) {
  const todos = await Todo.find();

  res.status(200).send({
    data: todos
  });
}

export async function getById(req: Request, res: Response) {
  const todo = await Todo.findOneById(req.params.id);

  if (!todo) {
    res.status(404);
    res.end();
    return;
  }

  res.status(200).send({
    data: todo
  });
}

export async function save(req: Request, res: Response) {
  const text: string = req.body.text;
  const todo = Todo.create({
    text
  });

  await Todo.save(todo);

  res.status(201).send({
    message: `New todo created`,
    data: todo
  });
}

export async function destroy(req: Request, res: Response) {
  await Todo.clear();

  res.status(204).send({
    message: `All todos deleted`
  });
}

export async function destroyById(req: Request, res: Response) {
  const id: number = req.params.id;

  await Todo.removeById(id);

  res.status(204).send({
    message: `Todo with ${id} deleted`
  });
}

export async function updateById(req: Request, res: Response) {
  const id: number = req.params.id;
  const text: string = req.body.text;

  await Todo.updateById(id, { text: text });

  res.status(200).send({
    message: `Todo with ${id} updated`,
    data: { text }
  });
}
