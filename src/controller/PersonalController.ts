import { getRepository } from "typeorm";
import { PersonalModel } from "./../entity/PersonalModel";

import { request, response, NextFunction } from "koa-router";

export class PersonalController {
  private userRepository = getRepository(PersonalModel);

  async all(ctx, next) {
    return await this.userRepository.find();
  }
  async one(request, response, next) {
    return await this.userRepository.findOne(request.params.id);
  }

  async save(request, response, next) {
    return await this.userRepository.save(request.body);
  }

  async remove(request, response, next) {
    let userToRemove = await this.userRepository.findOne(request.params.id);
    await this.userRepository.remove(userToRemove);
  }
}
