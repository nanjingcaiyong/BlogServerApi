import "reflect-metadata";
import { createConnection } from "typeorm";
const bodyParser = require("koa-bodyparser");
const Koa = require("koa");
const Router = require("koa-router");
import { PersonalModel } from "./entity/PersonalModel";
import { Routes } from "./router";
import { ArticleTypeModel } from "./entity/ArticleTypeModel";
import { ArticleModel } from "./entity/ArticleModel";


const app = new Koa();
const router = new Router();

createConnection().then(async connection => {
  Routes.forEach(route => {
    router[route.method](route.route,async (ctx, next) => {
      const result = await new route.controller()[route.action](ctx, next);
      ctx.type = 'json';
      ctx.body= result;
    });

  });
  app.use(router.routes()).use(router.allowedMethods())
  app.listen(3000);

  // let articleTypeModel = new ArticleTypeModel();
  // articleTypeModel.title = '个人博文';
  // articleTypeModel.sId = 0;

  // let article = new ArticleModel();
  // article.title = 'css的实例文章';
  // article.view = 123;
  // article.content = '手动阀手动阀发达省份的';
 
  
  // let articleTypeRepository = connection.getRepository(ArticleTypeModel);
  // articleTypeRepository.save(articleTypeModel);
  // console.log('写入成功')

}).catch(err=>console.log(err));
