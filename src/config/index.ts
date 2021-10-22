import express from "express"
import router from "../routes"
import configCors from "./modules/_cors"
import configExpress from "./modules/_express"
import configPassport from "./modules/_passport"
import configPath from "./modules/_path"
import configSession from "./modules/_session"

export default function config(app: express.Application) {
   configPath(app)
   configExpress(app)
   configCors(app)
   configSession(app)
   configPassport(app)
   router(app)
}
