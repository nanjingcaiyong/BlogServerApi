import BaseRepository  from './BaseRepository';
import {ArticleModel} from './../entity/ArticleModel'

export default class  ArticleRepository extends BaseRepository<ArticleModel>{
  constructor(){
    super(ArticleModel);
  }
}