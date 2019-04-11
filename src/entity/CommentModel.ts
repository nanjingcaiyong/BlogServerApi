import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserModel } from './UserModel'
import { ArticleModel } from './ArticleModel' 
@Entity()
export class CommentModel{
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  //评论内容
  content: string

  @ManyToOne(type => UserModel, user => user.comments)
  user: UserModel

  @ManyToOne(type=>ArticleModel,article=>article.comments)
  article:ArticleModel
}