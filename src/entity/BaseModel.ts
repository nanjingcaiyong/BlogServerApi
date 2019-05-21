import {
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
export class BaseModel {
  constructor(){
    if(new.target === BaseModel){
      throw new Error('基类只能用于继承，不能实例化')
    }
  }
  //主键
  @PrimaryGeneratedColumn()
  id: number;
  //创建时间
  @Column('datetime')
  //创建时间
  buildTime:Date
  @Column('datetime')
  //更新时间
  updateTime:Date
  //状态(删除:0,存在:1)
  @Column()
  status:number
}
