import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { ArticleModel } from './ArticleModel';
import { BaseModel } from './BaseModel';
@Entity({
  name: 'Blog_HotLabels'
})
export class HotLabelsModel extends BaseModel{
  //名称
  @Column({
    length: 50
  })
  title: string;
  //浏览量
  @Column()
  view:number

  @ManyToMany(type => ArticleModel, article => article.hotLabels)
  articles:Promise<ArticleModel[]>
}
