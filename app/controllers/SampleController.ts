import * as express from "express";

import { Sample } from "../entity/Sample";
import { SampleService } from "../services/SampleService";

export class SampleController {
  public static async All(req: express.Request, res: express.Response) {
    const SampleList = await Sample.find();

    res.send(SampleList);
  }

  public static async Find(req: express.Request, res: express.Response) {
    const id: number = req.params.id;
    const sample = await Sample.findOneById(id);

    sample
      ? res.status(200).send(sample)
      : res.status(404).send({ text: "NOT FOUND" });
  }

  public static async Create(req: express.Request, res: express.Response) {
    const text: string = req.body.text;
    const sample = new Sample();

    sample.text = text;

    try {
      const Result = await Sample.save(sample);
      res.status(200).send(Result);
    } catch (ex) {
      res.status(404).send({ text: "ERROR" });
    }
  }

  public static async Update(req: express.Request, res: express.Response) {
    const sample = new Sample();
    sample.id = req.body.id;
    sample.text = req.body.id;

    try {
      const Result = await Sample.save(sample);
      Result
        ? res.status(200).send()
        : res.status(404).send({ text: "NOT FOUND" });
    } catch (ex) {
      res.status(404).send({ text: "ERROR" });
    }
  }

  public static async Delete(req: express.Request, res: express.Response) {
    const id: number = req.body.id;

    try {
      await Sample.removeById(id);
      res.status(204).send();
    } catch (ex) {
      res.status(404).send({ text: "ERROR" });
    }
  }
}
