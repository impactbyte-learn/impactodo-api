import { Request, Response } from "express";
import { JWTService } from "../services/JWTService";

export class JWTController {
  public static async Index(req: Request, res: Response) {
    const payload = req.body.payload;
    const token = await JWTService.signToken(payload);

    res.send(token);
  }
}
