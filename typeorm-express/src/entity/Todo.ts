import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn() id: number;

  @Column() text: string;
}
