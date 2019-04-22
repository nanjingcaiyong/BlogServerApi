import ArticleRepository from './../repository/ArticleRepository';
import ArticleTypeRepository from './../repository/ArticleTypeRepository';
import HotLabelsRepository from './../repository/HotLabelsRepository';
import { ArticleModel } from './../entity/ArticleModel'
import { BaseController } from './BaseController';
import { ResultStatus } from './../utils/ResultStatus';

export class ArticleController extends BaseController {
  private articleRepository = new ArticleRepository();
  private articleTypeRepository = new ArticleTypeRepository();
  private hotLabelsRepository = new HotLabelsRepository();

  async all(ctx, next) {
    return await this.articleRepository.get(ctx.request.body);
  }
  async save(ctx, next) {
    const { title, author, isRecommend, view, labels, types,content } = ctx.request.body;
    const articleTypeList = await this.articleTypeRepository.get(types);
    const hotLabelsList = await this.hotLabelsRepository.get(labels);
    const article = new ArticleModel();
    article.hotLabels = hotLabelsList;
    article.articleTypes = articleTypeList;
    article.author = author;
    article.content = content;
    article.isRecommend = isRecommend;
    article.status = 0;
    article.title = title;
    article.view = view;
    article.no = 1;
    article.buildTime = new Date();
    article.updateTime = new Date();
    if(this.articleRepository.add(article)){
      return this.JsonBackResult(ResultStatus.Success,{name:'sa'});
    }
  }
}
