import { getRepository } from "typeorm";
import { HotLabelsModel } from "./../entity/HotLabelsModel";


export class HotLabelsController {
  private repository = getRepository(HotLabelsModel);

  async save(ctx,next){
    return await this.repository.save(ctx.request.body);
  }
  async all(ctx,next){
    return await this.repository.find();
  }
}