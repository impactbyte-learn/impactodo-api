import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Todo } from "../entity/Todo";

export async function get(req: Request, res: Response) {
  const repository = getManager().getRepository(Todo);
  const todos = await repository.find();

  res.send(todos);
}

export async function getById(req: Request, res: Response) {
  const repository = getManager().getRepository(Todo);
  const todo = await repository.findOneById(req.params.id);

  if (!todo) {
    res.status(404);
    res.end();
    return;
  }

  res.send(todo);
}

export async function save(req: Request, res: Response) {
  const repository = getManager().getRepository(Todo);

  console.log(req.body);

  const todo = repository.create(req.body);

  console.log(todo);

  await repository.save(todo);

  res.send(todo);
}
