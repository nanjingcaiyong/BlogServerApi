import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommentModel } from './CommentModel'
import { BaseModel } from './BaseModel'
@Entity({
  name:'Blog_User'
})
export class UserModel extends BaseModel{
  @Column()
  nickName: string
  @Column()
  account: string
  @Column()
  pwd: string

  @OneToMany(type => CommentModel, comment => comment.user)
  comments: CommentModel[]
}