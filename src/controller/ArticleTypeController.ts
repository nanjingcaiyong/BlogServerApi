import { ArticleTypeModel } from "./../entity/ArticleTypeModel";
import { getRepository } from "typeorm";

export class ArticleTypeController {
  private repository = getRepository(ArticleTypeModel);
  async save(ctx, next) {
    await this.repository.save(ctx.request.body);
  }
  async all(ctx, next) {
    return await this.repository.find();
  }

  async getNewsByType(ctx, next) {
    const { typeId } = ctx.request.body;
    console.log(typeId);
    return await this.repository.findByIds([1]);
  }
}
