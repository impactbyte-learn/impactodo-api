import { Request, Response } from "express";

export class RootController {
  public static async Get(req: Request, res: Response) {
    res.status(200).send({
      message: `Access these routes instead`,
      routes: [`/todos`, `/posts`]
    });
  }
}
