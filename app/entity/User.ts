import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column({ type: "varchar", length: 100 })
  public email: string;

  @Column({ type: "varchar", length: 100 })
  public username: string;

  @Column({ type: "varchar" })
  public password: string;

  @Column({ type: "varchar", length: 100 })
  public name: string;
}
