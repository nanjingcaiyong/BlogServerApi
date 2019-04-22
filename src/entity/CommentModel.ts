import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import { UserModel } from './UserModel';
import { ArticleModel } from './ArticleModel';
import { ReplyModel } from './ReplyModel';
import { BaseModel } from './BaseModel';
@Entity({
  name:'Blog_Comment'
})
export class CommentModel extends BaseModel{

  @Column()
  content: string

  @ManyToOne(type => UserModel, user => user.comments)
  @JoinColumn()
  user: UserModel

  @ManyToOne(type=>ArticleModel,article=>article.comments)
  @JoinColumn()
  article:ArticleModel

  @OneToMany(type=>ReplyModel,reply=>reply.comment)
  replys:ArticleModel[]
}