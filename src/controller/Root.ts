import { Request, Response } from "express";

export async function get(req: Request, res: Response) {
  res.status(200).send({
    message: `Access these routes instead`,
    routes: [`/todos`, `/posts`]
  });
}
