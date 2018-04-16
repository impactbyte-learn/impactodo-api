import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("todo")
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column("text") public text: string;
}
