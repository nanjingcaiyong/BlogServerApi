import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import { UserModel } from './UserModel';
import { ArticleModel } from './ArticleModel';
import { ReplyModel } from './ReplyModel';
import { BaseModel } from './BaseModel';
import { LikeModel } from './LikeModel';
@Entity({
  name:'Blog_Comment'
})
export class CommentModel extends BaseModel{
  //评论内容
  @Column()
  content: string
  
  //评论者
  @ManyToOne(type => UserModel, user => user.comments)
  @JoinColumn()
  user: Promise<UserModel>

  @ManyToOne(type=>ArticleModel,article=>article.comments)
  @JoinColumn()
  article:Promise<ArticleModel>

  @OneToMany(type=>ReplyModel,reply=>reply.comment)
  replys:Promise<ArticleModel[]>

  @OneToMany(type=>LikeModel,like=>like.comment)
  likes:Promise<LikeModel[]>
}