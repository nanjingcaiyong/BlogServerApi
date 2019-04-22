import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { CommentModel } from "./CommentModel";
import { BaseModel } from './BaseModel'
@Entity({
  name: "Blog_Reply"
})
export class ReplyModel extends BaseModel{

  @Column()
  content: string;

  @ManyToOne(type => CommentModel, comment => comment.replys)
  @JoinColumn()
  comment;
}
