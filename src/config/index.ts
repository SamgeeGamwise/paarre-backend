import express from "express"
import router from "../routes"
import configCors from "./middleware/cors"
import configExpress from "./middleware/express"
import configPassport from "./middleware/passport"
import configPath from "./middleware/path"
import configSession from "./middleware/session"

export default function config(app: express.Application) {
   configPath(app)
   configExpress(app)
   configCors(app)
   configSession(app)
   configPassport(app)
   router(app)
}
