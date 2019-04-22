import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany,JoinTable } from "typeorm";
import { ArticleTypeModel } from './ArticleTypeModel';
import { HotLabelsModel } from './HotLabelsModel';
import { CommentModel } from './CommentModel';
import { LikeModel } from './LikeModel';
import { BaseModel } from './BaseModel';

@Entity({
  name:'Blog_Article'
})
export  class ArticleModel extends BaseModel {
  //标题
  @Column()
  title: string
  //作者
  @Column()
  author:string
  //内容
  @Column()
  content: string
  //浏览量
  @Column()
  view: number
  //状态(-1:删除,0:下架,1:上架)
  @Column()
  status:number

  @Column()
  isRecommend:boolean

  @Column()
  no:number

  //多对一,一篇文章对应一个类别,一个类别对应多篇文章
  @ManyToMany(type => ArticleTypeModel, articalType => articalType.articles,{
    cascade: true,
  })
  @JoinTable()
  articleTypes: ArticleTypeModel[]

  //多对多,一篇文章对应多个标签,一个标签也对应多篇文章
  @ManyToMany(type => HotLabelsModel, hotLabel => hotLabel.articles,{
    cascade: true,
  })
  @JoinTable()
  hotLabels: HotLabelsModel[]

  @OneToMany(type => CommentModel, comment => comment.article,{
    cascade: true,
  })
  comments: CommentModel[]

}