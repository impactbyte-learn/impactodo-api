import { EntityRepository, Repository } from "typeorm";
import { Sample } from "../entity/Sample";

@EntityRepository(Sample)
export class SampleRepository extends Repository<Sample> {
  public BulkCreate(Samples: Sample[]): Promise<any> {
    return this.manager
      .createQueryBuilder()
      .insert()
      .into(Sample)
      .values(Samples)
      .execute();
  }
}
