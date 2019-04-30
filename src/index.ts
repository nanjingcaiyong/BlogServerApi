import "reflect-metadata";
import { createConnection } from "typeorm";
import { PersonalModel } from  './entity/PersonalModel';
// const bodyParser = require("koa-bodyparser");
const koaBody = require('koa-body');
const Koa = require("koa");
const Router = require("koa-router");
const cors = require('koa2-cors');
import Routes  from "./router";


const app = new Koa();
const router = new Router();

createConnection()
  .then(async connection => {
    Routes.forEach(route => {
      router[route.method](route.route, async (ctx, next) => {
        const result = await new route.controller()[route.action](ctx, next);
        ctx.type = "json";
        ctx.body = result;
      });
    });
    // app.use(bodyParser())
    app.use(koaBody({
      multipart: true,
      formidable: {
        maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
      }
    }));
    app.use(router.routes()).use(router.allowedMethods());
    app.use(async (ctx, next)=> {
      ctx.set('Access-Control-Allow-Origin', '*');
      ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
      ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
      if (ctx.method == 'OPTIONS') {
        ctx.body = 200; 
      } else {
        await next();
      }
    });
    app.listen(3000);
    // let repository = connection.getRepository(PersonalModel);
    // console.log(await repository.findOneOrFail());
  })
  .catch(err => console.log(err));