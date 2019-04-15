import { getRepository } from "typeorm";
import { PersonalModel } from "./../entity/PersonalModel";

import { request, response, NextFunction } from "koa-router";

export class PersonalController {
  private userRepository = getRepository(PersonalModel);

  async all(ctx, next) {
    return await this.userRepository.find();
  }
  async one(ctx, next) {
    return await this.userRepository.findOne(ctx.request.params.id);
  }

  async save(ctx, next) {
    if(await this.userRepository.save(ctx.request.body)){
      return {status:1};
    }
  }

  async remove(ctx, next) {
    let userToRemove = await this.userRepository.findOne(ctx.request.params.id);
    await this.userRepository.remove(userToRemove);
  }
}
