import { EntityRepository, Repository } from "typeorm";

import { Todo } from "../entity/Todo";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  public BulkCreate(Samples: Todo[]): Promise<any> {
    return this.manager
      .createQueryBuilder()
      .insert()
      .into(Todo)
      .values(Samples)
      .execute();
  }
}
