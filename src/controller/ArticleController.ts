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
    let res: ArticleModel[] | any[] = await this.articleRepository.getAll(),
      length = res.length || 0;
    while (length--) {
      let articleTypes = await res[length].articleTypes;
      let hotLabels = await res[length].hotLabels;
      res[length].articleTypes = articleTypes.map(t => t.title);
      res[length].hotLabels = hotLabels.map(t => t.title);
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
    const articleTypeList = await this.articleTypeRepository.getMutil(types);
    const hotLabelsList = await this.hotLabelsRepository.getMutil(labels);
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
    if (await this.articleRepository.addOne(article)) {
      return this.JsonBackResult(ResultStatus.Success);
    }
    return this.JsonBackResult(ResultStatus.Fail);
  }
  async delete(ctx, next) {
    const { id } = ctx.request.body;
    console.log('id',id);
    const article = await this.articleRepository.getOne(id);
    console.log('articles', article)
    if (await this.articleRepository.deleteOne(article)) {
      return this.JsonBackResult(ResultStatus.Success);
    }
    return this.JsonBackResult(ResultStatus.Fail);
  }
}


