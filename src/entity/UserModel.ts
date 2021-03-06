import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { CommentModel } from "./CommentModel";
import { BaseModel } from "./BaseModel";
import { LikeModel } from "./LikeModel";
import { ReplyModel } from "./ReplyModel";
import { FileModel } from "./FileModel";
@Entity({
  name: "Blog_User"
})
export class UserModel extends BaseModel {
  //昵称
  @Column()
  nickName: string;
  //账号
  @Column()
  account: string;
  //密码
  @Column()
  pwd: string;

  @OneToMany(type => CommentModel, comment => comment.user)
  comments: Promise<CommentModel[]>;

  @OneToMany(type => LikeModel, like => like.user)
  likes: Promise<LikeModel[]>;

  @OneToMany(type => ReplyModel, reply => reply.user)
  replys: Promise<ReplyModel[]>;

  //用户头像
  @ManyToOne(type => FileModel, file => file.users)
  @JoinColumn()
  head: Promise<FileModel>;
}
