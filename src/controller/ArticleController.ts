import ArticleRepository from "./../repository/ArticleRepository";
import ArticleTypeRepository from "./../repository/ArticleTypeRepository";
import HotLabelsRepository from "./../repository/HotLabelsRepository";
import { ArticleModel } from "./../entity/ArticleModel";
import { BaseController } from "./BaseController";
import { ResultStatus } from "./../utils/ResultStatus";
import FileRepository from "../repository/FileRepository";
import { FileModel } from "../entity/FileModel";
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp');


export class ArticleController extends BaseController {
  private articleRepository = new ArticleRepository();
  private articleTypeRepository = new ArticleTypeRepository();
  private hotLabelsRepository = new HotLabelsRepository();
  private fileRepostitory = new FileRepository();

  async all(ctx, next) {
    let res: ArticleModel[] | any[] = await this.articleRepository.getAll(),
      length = res.length || 0;
    while (length--) {
      let articleTypes = await res[length].articleTypes;
      let hotLabels = await res[length].hotLabels;
      res[length].articleTypes = articleTypes.map(t => t.title);
      res[length].hotLabels = hotLabels.map(t => t.title);
    }
    return res;
  }
  async UploadThumb(ctx, next){
     // 获取上传文件
     console.log(ctx.request.files)
    const file = ctx.request.files.file;   
    if(file){
      const filename = file.name.split('.')[0];
      const ext = file.name.split('.')[1];
      const fileStream = fs.createReadStream(file.path);
      const uploadPath =path.resolve("./src/fileSaves"); // 这是我测试的路径
      //如果存放文件夹不存在则创建
      fs.existsSync(uploadPath) ||  mkdirp.sync(uploadPath);
      const upStream = fs.createWriteStream(`${uploadPath}/${filename}.${ext}`)

        // 可读流通过管道写入可写流
        await fileStream.pipe(upStream); 
        console.log(this.fileRepostitory);
        const fileModel = new FileModel();
        fileModel.buildTime = new Date();
        fileModel.updateTime = new Date();
        fileModel.name = filename;
        fileModel.status = 1;
        await this.fileRepostitory.addOne(fileModel);
        return this.JsonBackResult(ResultStatus.Success);
    }
    return this.JsonBackResult(ResultStatus.Fail);
  }

  async save(ctx, next) {
    const form = ctx.request.body;
    console.log('form',form)
    const articleTypeList = await this.articleTypeRepository.getMutil(form.types);
    const hotLabelsList = await this.hotLabelsRepository.getMutil(form.labels);
    const article = new ArticleModel();
    article.hotLabels = Promise.resolve(hotLabelsList);
    article.articleTypes = Promise.resolve(articleTypeList);
    article.author = form.author;
    article.content = form.content;
    article.isRecommend = form.isRecommend;
    article.status = form.status;
    article.title = form.title;
    article.view = form.view;
    article.no = 1;
    article.buildTime = new Date();
    article.updateTime = new Date();
    if (await this.articleRepository.addOne(article)) {
      return this.JsonBackResult(ResultStatus.Success);
    }
    return this.JsonBackResult(ResultStatus.Fail);
  }
  async delete(ctx, next) {
    const { id } = ctx.request.body;
    const article = await this.articleRepository.getOne(id);
    if (await this.articleRepository.deleteOne(article)) {
      return this.JsonBackResult(ResultStatus.Success);
    }
    return this.JsonBackResult(ResultStatus.Fail);
  }
}


