import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { ArticleModel } from './ArticleModel';
import { BaseModel } from './BaseModel';
@Entity({
  name: 'Blog_HotLabels'
})
export class HotLabelsModel extends BaseModel{
  //标题名称
  @Column({
    length: 50
  })
  title: string;
  @Column()
  view:number

  @ManyToMany(type => ArticleModel, article => article.hotLabels)
  articles:ArticleModel[]
}
