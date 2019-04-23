import ArticleRepository from "./../repository/ArticleRepository";
import ArticleTypeRepository from "./../repository/ArticleTypeRepository";
import HotLabelsRepository from "./../repository/HotLabelsRepository";
import { ArticleModel } from "./../entity/ArticleModel";
import { BaseController } from "./BaseController";
import { ResultStatus } from "./../utils/ResultStatus";

export class ArticleController extends BaseController {
  private articleRepository = new ArticleRepository();
  private articleTypeRepository = new ArticleTypeRepository();
  private hotLabelsRepository = new HotLabelsRepository();

  async all(ctx, next) {
    let res: ArticleModel[] | any[] = await this.articleRepository.get(),
      length = res.length || 0;
    while(length--){
      let articleTypes = await res[length].articleTypes;
      let hotLabels = await res[length].hotLabels;
      res[length].articleTypes = articleTypes.map(t=>t.title);
      res[length].hotLabels = hotLabels.map(t=>t.title);
    }
    return res;
  }
  async save(ctx, next) {
    const {
      title,
      author,
      isRecommend,
      view,
      labels,
      types,
      content,
      status
    } = ctx.request.body;
    const articleTypeList = await this.articleTypeRepository.get(types);
    const hotLabelsList = await this.hotLabelsRepository.get(labels);
    const article = new ArticleModel();
    article.hotLabels = Promise.resolve(hotLabelsList);
    article.articleTypes = Promise.resolve(articleTypeList);
    article.author = author;
    article.content = content;
    article.isRecommend = isRecommend;
    article.status = status;
    article.title = title;
    article.view = view;
    article.no = 1;
    article.buildTime = new Date();
    article.updateTime = new Date();
    if (this.articleRepository.add(article)) {
      return this.JsonBackResult(ResultStatus.Success, { name: "sa" });
    }
  }
}


[{"id":2,"buildTime":"2019-03-22T05:29:00.000Z","updateTime":"2019-03-22T05:29:00.000Z","status":1,"title":"个人博文","fId":0},{"id":4,"buildTime":"2019-03-22T05:29:00.000Z","updateTime":"2019-03-22T05:29:00.000Z","status":1,"title":"前端","fId":2},{"id":5,"buildTime":"2019-03-22T05:29:00.000Z","updateTime":"2019-03-22T05:29:00.000Z","status":1,"title":".NET","fId":2},{"id":7,"buildTime":"2019-03-22T05:29:00.000Z","updateTime":"2019-03-22T05:29:00.000Z","status":1,"title":"服务器","fId":2},{"id":8,"buildTime":"2019-03-22T05:29:00.000Z","updateTime":"2019-03-22T05:29:00.000Z","status":1,"title":"生活日记","fId":0},{"id":10,"buildTime":"2019-03-22T05:29:00.000Z","updateTime":"2019-03-22T05:29:00.000Z","status":1,"title":"饭后杂谈","fId":0}]