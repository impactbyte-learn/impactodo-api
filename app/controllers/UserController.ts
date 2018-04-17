import { Request, Response } from "express";
import { User } from "../entity/User";

export async function get(req: Request, res: Response) {
  const users = await User.find();

  res.status(200).send({
    data: users
  });
}

export async function getById(req: Request, res: Response) {
  const user = await User.findOneById(req.params.id);

  if (!user) {
    res.status(404);
    res.end();
    return;
  }

  res.status(200).send({
    data: user
  });
}

export async function register(req: Request, res: Response) {
  const email: string = req.body.email;
  const username: string = req.body.username;
  const password: string = req.body.password;
  const name: string = req.body.name;

  const body = {
    email,
    username,
    name,
    password
  };

  const user = User.create(body);

  await User.save(user);

  const token = "...";

  res.status(201).send({
    message: `New user created`,
    data: user,
    token
  });
}

export async function login(req: Request, res: Response) {
  const email: string = req.body.email;
  const password: string = req.body.password;

  const body = {
    email,
    password
  };

  const token = "...";

  res.status(200).send({
    message: `You are logged in`,
    token
  });
}

export async function updateById(req: Request, res: Response) {
  const id: number = req.params.id;
  const email: string = req.body.email;

  await User.updateById(id, { email });

  res.status(200).send({
    message: `User with ${id} updated`,
    data: { email }
  });
}

export async function destroy(req: Request, res: Response) {
  await User.clear();

  res.status(204).send({
    message: `All users deleted`
  });
}

export async function destroyById(req: Request, res: Response) {
  const id: number = req.params.id;

  await User.removeById(id);

  res.status(204).send({
    message: `User with ${id} deleted`
  });
}
