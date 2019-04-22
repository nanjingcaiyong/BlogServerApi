import { Repository, getRepository, EntityRepository } from 'typeorm';
import { ArticleModel } from './../entity/ArticleModel';
// class BaseRepository<T> extends Repository<T>{
// }
export default class BaseRepository<T> extends Repository<T>{

  constructor(private entity: any) {
    super();
    this.entity = entity;
  }
  private repository = getRepository<T>(this.entity);

  async get(ids = []): Promise<T[]> {
    return await ids.length > 0
      ? this.repository.findByIds(ids)
      : this.repository.find();
  }

  async  add(model: T): Promise<T> {
    return await this.repository.save(model);
  }
}