import {
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
export class BaseModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('datetime')
  buildTime:Date
  @Column('datetime')
  updateTime:Date
}
