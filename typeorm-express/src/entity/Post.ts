import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Category } from "./Category";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() title: string;

  @Column("text") text: string;

  @ManyToMany(type => Category, {
    cascadeInsert: true
  })
  @JoinTable()
  categories: Category[];
}
