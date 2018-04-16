import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  username: string;

  @Column() password: string;

  @Column({ length: 100 })
  name: string;
}
