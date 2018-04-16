import { getCustomRepository } from "typeorm";
import { Todo } from "../entity/Todo";
import { SampleRepository } from "../repository/SampleRepository";

export class SampleService {
  private SampleRepository: SampleRepository;

  constructor() {
    this.SampleRepository = getCustomRepository(SampleRepository);
  }

  public FindByText(text: string): Promise<Todo[]> {
    return Todo.FindByText(text);
  }

  public BulkCreate(Todos: Todo[]): Promise<Todo[]> {
    return this.SampleRepository.BulkCreate(Todos);
  }
}
