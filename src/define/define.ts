import express from "express";
import defineRouter from "../router/router";
import defineCors from "./modules/defineCors";
import defineExpress from "./modules/defineExpress";
import definePassport from "./modules/definePassport";
import definePath from "./modules/definePath";
import defineSession from "./modules/defineSession";

export default function define(app: express.Application) {
   definePath(app);
   defineExpress(app);
   defineCors(app);
   defineSession(app);
   definePassport(app);
   defineRouter(app);
}
