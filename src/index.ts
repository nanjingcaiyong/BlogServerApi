import "reflect-metadata";
import { createConnection } from "typeorm";
import { PersonalModel } from  './entity/PersonalModel';
const bodyParser = require("koa-bodyparser");
const Koa = require("koa");
const Router = require("koa-router");
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
    app.use(bodyParser())
    app.use(router.routes()).use(router.allowedMethods());
    app.listen(3000);
    // let repository = connection.getRepository(PersonalModel);
    // console.log(await repository.findOneOrFail());
  })
  .catch(err => console.log(err));