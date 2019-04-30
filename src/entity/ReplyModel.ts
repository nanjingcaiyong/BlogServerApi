import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany
} from "typeorm";
import { CommentModel } from "./CommentModel";
import { BaseModel } from './BaseModel';
import { LikeModel } from './LikeModel'
import { UserModel } from './UserModel'
@Entity({
  name: "Blog_Reply"
})
export class ReplyModel extends BaseModel{
  //回复内容
  @Column()
  content: string;

  @ManyToOne(type => CommentModel, comment => comment.replys)
  @JoinColumn()
  comment:Promise<CommentModel>

  @OneToMany(type=>LikeModel,like=>like.reply)
  likes:Promise<LikeModel[]>

  @ManyToOne(type=>UserModel,user=>user.replys)
  @JoinColumn()
  user:Promise<UserModel>
}
