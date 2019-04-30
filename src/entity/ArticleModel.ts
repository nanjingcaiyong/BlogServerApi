import {
  Entity,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable,
  ManyToOne
} from "typeorm";
import { ArticleTypeModel } from "./ArticleTypeModel";
import { HotLabelsModel } from "./HotLabelsModel";
import { CommentModel } from "./CommentModel";
import { LikeModel } from "./LikeModel";
import { BaseModel } from "./BaseModel";
import { FileModel } from './FileModel';

@Entity({
  name: "Article"
})
export class ArticleModel extends BaseModel {
  //标题
  @Column()
  title: string;
  //作者
  @Column()
  author: string;
  //内容
  @Column()
  content: string;
  //浏览量
  @Column()
  view: number;
  //是否推荐(不推荐:false,推荐:true)
  @Column()
  isRecommend: boolean;
  //序号,用于置顶
  @Column()
  no: number;

  //多对一,一篇文章对应一个类别,一个类别对应多篇文章
  @ManyToMany(type => ArticleTypeModel, articalType => articalType.articles, {
    cascade: true
  })
  @JoinTable()
  articleTypes: Promise<ArticleTypeModel[]>;

  //多对多,一篇文章对应多个标签,一个标签也对应多篇文章
  @ManyToMany(type => HotLabelsModel, hotLabel => hotLabel.articles, {
    cascade: true
  })
  @JoinTable()
  hotLabels: Promise<HotLabelsModel[]>;

  @OneToMany(type => CommentModel, comment => comment.article, {
    cascade: true
  })
  comments: Promise<CommentModel[]>;
  
  @OneToMany(type => LikeModel, like => like.article)
  likes: Promise<LikeModel[]>;

  @ManyToOne(type=>FileModel,file=>file.articles)
  file:Promise<FileModel>
}
