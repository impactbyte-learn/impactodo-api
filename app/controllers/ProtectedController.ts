import { Request, Response } from "express";

export class ProtectedController {
  public static async Index(req: Request, res: Response) {
    res.send({ message: `SECRET PROTECTED TEXT` });
  }
}
