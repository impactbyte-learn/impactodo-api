import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn() id: number;

  @Column() text: string;
}
