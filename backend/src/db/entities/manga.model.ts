import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
// import { IManga } from "./interfaces";

@Entity()
export class Manga extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  daysToChapt!: number
}