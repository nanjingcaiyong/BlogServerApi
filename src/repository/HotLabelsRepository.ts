import BaseRepository  from './BaseRepository';
import {HotLabelsModel} from '../entity/HotLabelsModel'

export default class  HotLabelsRepository extends BaseRepository<HotLabelsModel>{
  constructor(){
    super(HotLabelsModel);
  }
}