import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { CommentModel } from './CommentModel'
import { UserModel } from './UserModel'

@Entity({
  name:'Blog_Reply'
})
export class ReplyModel {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  content:string

  @ManyToOne(type=>CommentModel,)
  comment
}