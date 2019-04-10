import "reflect-metadata";
import { createConnection } from "typeorm";
const bodyParser = require("koa-bodyparser");
const Koa = require("koa");
const Router = require("koa-router");
import { PersonalModel } from "./entity/PersonalModel";
import { Routes } from "./router";


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
});
