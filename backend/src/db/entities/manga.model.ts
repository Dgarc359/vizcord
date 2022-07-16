import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IManga } from "./interfaces";

@Entity()
export class Manga implements IManga {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  days_to_chapt!: number
}