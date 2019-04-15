import {PersonalController} from "./controller/PersonalController";
import { ArticleController } from "./controller/ArticleController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: PersonalController,
    action: "all"
},{
    method: "post",
    route: "/users/add",
    controller: PersonalController,
    action: "save"
},{
    method: "post",
    route: "/article/add",
    controller: ArticleController,
    action: "save"
}];