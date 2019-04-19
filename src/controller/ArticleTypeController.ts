import { ArticleTypeModel } from "./../entity/ArticleTypeModel";
import { getRepository } from "typeorm";

export class ArticleTypeController{
  private repository = getRepository(ArticleTypeModel);

  async save(ctx,next){
    await this.repository.save(ctx.request.body)
  }
  async all(ctx,next){
    console.log(ctx);
    return await this.repository.find();
  }
}