import BaseRepository  from './BaseRepository';
import {ArticleTypeModel} from '../entity/ArticleTypeModel'

export default class  ArticleTypeRepository extends BaseRepository<ArticleTypeModel>{
  constructor(){
    super(ArticleTypeModel);
  }
}