import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 140 })
  text: string;
}
