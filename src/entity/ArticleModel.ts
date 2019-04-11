import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from "typeorm";
import { ArticleTypeModel } from './ArticleTypeModel';
import { HotLabelsModel } from './HotLabelsModel';
import { CommentModel } from './CommentModel'

@Entity()
export class ArticleModel {
  @PrimaryGeneratedColumn()
  id: number
  //标题
  @Column()
  title: string
  //内容
  @Column()
  content: string
  //浏览量
  @Column()
  view: number

  //多对一,一篇文章对应一个类别,一个类别对应多篇文章
  @ManyToOne(type => ArticleTypeModel, articalType => articalType.articles)
  articalType: ArticleTypeModel
  //多对多,一篇文章对应多个标签,一个标签也对应多篇文章
  @ManyToMany(type => HotLabelsModel, hotLabel => hotLabel.articles)
  hotLabels: HotLabelsModel[]

  @OneToMany(type => CommentModel, comment => comment.article)
  comments: CommentModel[]
}