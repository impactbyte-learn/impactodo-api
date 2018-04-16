import { Request, Response } from "express";
import { JWTService } from "../services/JWTService";

export class JWTController {
  public static async Get(req: Request, res: Response) {
    res.send({
      message:
        "Create a token by passing a POST request with body.payload to /jwt"
    });
  }

  public static async CreateToken(req: Request, res: Response) {
    const payload = req.body.payload;
    const token = await JWTService.signToken(payload);

    res.send({
      message: `Use this token into header of Authorization: Bearer {{token}}`,
      token
    });
  }
}
