import {PersonalController} from "./controller/PersonalController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: PersonalController,
    action: "all"
}];