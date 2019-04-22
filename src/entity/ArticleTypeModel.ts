import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { ArticleModel } from './ArticleModel'
import { BaseModel } from './BaseModel';
@Entity({
  name:'Blog_ArticleType'
})
export class ArticleTypeModel extends BaseModel {
  //类型名称
  @Column()
  title: string
  //子类型名称
  @Column()
  fId: number
  //一对多
  @ManyToMany(type => ArticleModel, article => article.articleTypes)
  articles: ArticleModel[]
}
