import { Request, Response, NextFunction } from "express";

export function anyCheck(req: Request, res: Response, next: NextFunction) {
  const value: string = "this";
  const value2: string = "this";
  value === value2 ? next() : res.json({ error: "error anyCheck" });
}

export function anyCheckTwo(req: Request, res: Response, next: NextFunction) {
  const value: string = "this";
  const value2: string = "this";
  value === value2 ? next() : res.json({ error: "error anyCheck" });
}

export function CheckCreate(req: Request, res: Response, next: NextFunction) {
  req.body.text && typeof req.body.text === "string"
    ? next()
    : res.status(404).send({ error: "ERROR" });
}

export function CheckUpdate(req: Request, res: Response, next: NextFunction) {
  req.body.id &&
  req.body.text &&
  typeof req.body.id === "number" &&
  typeof req.body.text === "string"
    ? next()
    : res.status(404).send({ error: "ERROR" });
}

export function CheckDelete(req: Request, res: Response, next: NextFunction) {
  req.body.id && typeof req.body.id === "number"
    ? next()
    : res.status(404).send({ error: "ERROR" });
}
