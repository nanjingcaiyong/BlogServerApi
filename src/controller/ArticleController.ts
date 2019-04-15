import { getRepository } from "typeorm";
import { ArticleModel } from "./../entity/ArticleModel";

export class ArticleController {
  private articleRepository = getRepository(ArticleModel);

  async all(ctx, next) {
    return await this.articleRepository.find();
  }

  async save(ctx,next){
    console.log(ctx.request.body);
    return await this.articleRepository.save(ctx.request.body);
  }
}
