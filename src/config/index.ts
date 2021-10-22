import express from "express"
import router from "../routes"
import configCors from "./modules/cors"
import configExpress from "./modules/express"
import configPassport from "./modules/passport"
import configPath from "./modules/path"
import configSession from "./modules/session"

export default function config(app: express.Application) {
   configPath(app)
   configExpress(app)
   configCors(app)
   configSession(app)
   configPassport(app)
   router(app)
}
