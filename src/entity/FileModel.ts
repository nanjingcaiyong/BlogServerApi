import{
  Entity,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable
} from "typeorm";

import { BaseModel } from "./BaseModel";
import { UserModel } from './UserModel'
import { ArticleModel } from './ArticleModel';

@Entity({
  name: "File"
})
export class FileModel extends BaseModel {
  //文件名
  @Column()
  name: string;

  @OneToMany(type=>UserModel,user=>user.head)
  users:Promise<UserModel[]>

  @OneToMany(type=>ArticleModel,article=>article.file)
  articles:Promise<FileModel[]>
}
