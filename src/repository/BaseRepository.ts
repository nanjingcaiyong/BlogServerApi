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

  async getOne(id:number|string): Promise<T> {
    return await this.repository.findOne()
  }
  async getMutil(ids:number[]):Promise<T[]>{
    return await this.repository.findByIds(ids);
  }

  async getAll(){
    console.log(await this.repository.findOne(2));
    return await this.repository.find();
  }
  async addOne(entity: T): Promise<T> {
    return await this.repository.save(entity);
  }
  async addMutil(entities: T[]): Promise<T[]> {
    return await this.repository.save(entities);
  }

  async deleteMutil(entities: T[]): Promise<T[]> {
    return await this.repository.remove(entities);
  }
  async deleteOne(entity: T) {
    return await this.repository.remove(entity);
  }
}