import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({
  name:'Blog_Personal'
})
export class PersonalModel {
  @PrimaryGeneratedColumn()
  Id: number;
  //性别
  @Column()
  Name: string;
  //年龄
  @Column()
  Age: number;
  //性别
  @Column()
  Gender: boolean;
  // 学历
  @Column()
  Education: string;
  //职业
  @Column()
  Occupation: string;
  //就职公司
  @Column()
  Company: string;
  //居住地
  @Column()
  Centered: string;
}
