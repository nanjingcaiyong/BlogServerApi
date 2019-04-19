import { PersonalController } from "./controller/PersonalController";
import { ArticleController } from "./controller/ArticleController";
import { ArticleTypeController } from "./controller/ArticleTypeController";
import { HotLabelsController } from './controller/HotLabelsController'
const ArticleRoutes = [
  {
    method: "get",
    route: "/users",
    controller: PersonalController,
    action: "all"
  },
  {
    method: "post",
    route: "/users/add",
    controller: PersonalController,
    action: "save"
  },
  {
    method: "post",
    route: "/article/add",
    controller: ArticleController,
    action: "save"
  }
];

const ArticleTypeRoutes = [
  {
    method: "post",
    route: "/articleType/add",
    controller: ArticleTypeController,
    action: "save"
  },
  {
    method: "get",
    route: "/articleType/all",
    controller: ArticleTypeController,
    action: "all"
  }
];

const HotLabelsRoutes = [
  {
    method: "post",
    route: "/hotLabels/add",
    controller: HotLabelsController,
    action: "save"
  },{
    method: "get",
    route: "/hotLabels/all",
    controller: HotLabelsController,
    action: "all"
  }
];

export default [].concat(ArticleRoutes, ArticleTypeRoutes,HotLabelsRoutes);
