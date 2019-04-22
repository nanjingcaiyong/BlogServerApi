import { Entity,Column,PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BaseModel } from './BaseModel';
@Entity({
  name:'Blog_Like'
})
export class LikeModel extends BaseModel{
  @PrimaryGeneratedColumn()
  id:number
  //对应作品或评论的id
  @Column()
  toId:number
  //用户Id
  @Column()
  userId:number
  //点赞类型(1:作品点赞,2:评论点赞,3:……)
  @Column()
  type:string
  //点赞状态(0:取消赞,1:有效赞)
  @Column()
  status:number
}