import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ArticleModel } from './ArticleModel'

@Entity({
  name:'Blog_ArticleType'
})
export class ArticleTypeModel {
  @PrimaryGeneratedColumn()
  id: number
  //类型名称
  @Column()
  title: string
  //子类型名称
  @Column()
  FId: number
  //一对多
  @OneToMany(type => ArticleModel, article => article.articalType)
  articles?: ArticleModel[]
}
