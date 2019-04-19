import "reflect-metadata";
import { createConnection } from "typeorm";
const bodyParser = require("koa-bodyparser");
const Koa = require("koa");
const Router = require("koa-router");
import Routes  from "./router";
import { ArticleModel } from './entity/ArticleModel';
import { HotLabelsModel } from "./entity/HotLabelsModel";
import { getRepository } from 'typeorm'

const app = new Koa();
const router = new Router();

createConnection()
  .then(async connection => {
    Routes.forEach(route => {
      router[route.method](route.route, async (ctx, next) => {
        console.log(ctx.request.body)
        const result = await new route.controller()[route.action](ctx, next);
        ctx.type = "json";
        ctx.body = result;
      });
    });
    app.use(bodyParser())
    app.use(router.routes()).use(router.allowedMethods());
    app.listen(3000);

    // let hotLabelsModel1 = new HotLabelsModel();
    // hotLabelsModel1.title = 'sdf';
    // hotLabelsModel1.view = 23;
    // await connection.manager.save(hotLabelsModel1);

    // let hotLabelsModel2 = new HotLabelsModel();
    // hotLabelsModel2.title = 'sdf';
    // hotLabelsModel2.view = 23;
    // await connection.manager.save(hotLabelsModel2);

    // let articleModel = new ArticleModel();
    // articleModel.author='sa';
    // articleModel.content="撒旦法师打发收费的";
    // articleModel.status = 1;
    // articleModel.title= 'sdf';
    // articleModel.view = 23;
    // articleModel.hotLabels = [hotLabelsModel1, hotLabelsModel2];
    // await connection.manager.save(articleModel);

    // console.log('写入成功')
    // console.log( await   connection.getRepository(HotLabelsModel).find(
    //   {
    //     relations:['articles'],
    //   }
    // ))
  })
  .catch(err => console.log(err));