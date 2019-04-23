import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn } from "typeorm";
import { BaseModel } from "./BaseModel";
import { ArticleModel } from "./ArticleModel";
import { CommentModel } from './CommentModel';
import { ReplyModel } from './ReplyModel';
import { UserModel } from './UserModel'
@Entity({
  name: "Blog_Like"
})
export class LikeModel extends BaseModel {
  //点赞类型(1:作品点赞,2:评论点赞,3:回复点赞)
  @Column()
  type: string;

  @ManyToOne(type=>UserModel,users=>users.likes)
  @JoinColumn()
  user:Promise<UserModel>

  @ManyToOne(type => ArticleModel, article => article.likes)
  @JoinColumn()
  article:Promise<ArticleModel>

  @ManyToOne(type => CommentModel, comment => comment.likes)
  @JoinColumn()
  comment:Promise<CommentModel>

  @ManyToOne(type => ReplyModel, reply => reply.likes)
  @JoinColumn()
  reply:Promise<ReplyModel>
}
