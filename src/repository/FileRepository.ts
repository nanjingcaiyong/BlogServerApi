import BaseRepository  from './BaseRepository';
import {FileModel} from './../entity/FileModel'

export default class  FileRepository extends BaseRepository<FileModel>{
  constructor(){
    super(FileModel);
  }
}