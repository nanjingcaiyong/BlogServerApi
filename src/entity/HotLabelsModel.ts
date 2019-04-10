import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name:'Blog_HotLabels'
})
export class HotLabelsModel {
  @PrimaryGeneratedColumn()
  Id: number;
  //标题名称
  @Column({
    length: 50
  })
  Title: string;
}
