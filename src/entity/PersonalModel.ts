import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({
  name:'Blog_Personal'
})
export class PersonalModel {
  @PrimaryGeneratedColumn()
  id: number;
  //性别
  @Column()
  name: string;
  //年龄
  @Column()
  age: number;
  //性别
  @Column()
  gender: boolean;
  // 学历
  @Column()
  education: string;
  //职业
  @Column()
  occupation: string;
  //就职公司
  @Column()
  company: string;
  //居住地
  @Column()
  centered: string;
}
