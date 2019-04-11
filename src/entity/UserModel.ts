import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommentModel } from './CommentModel'

@Entity({
  name:'Blog_User'
})
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  nickName: string
  @Column()
  account: string
  @Column()
  pwd: string

  @OneToMany(type => CommentModel, comment => comment.user)
  comments?: CommentModel[]
}