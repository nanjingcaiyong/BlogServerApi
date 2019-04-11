import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ArticleModel } from './ArticleModel'

@Entity()
export class ArticleTypeModel {
  @PrimaryGeneratedColumn()
  id: number
  //类型名称
  @Column()
  title: string
  //子类型名称
  @Column()
  sId: number
  //一对多
  @OneToMany(type => ArticleModel, article => article.articalType)
  articles: ArticleModel[]
}
