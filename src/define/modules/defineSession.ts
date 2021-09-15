import SequelizeStore from "connect-session-sequelize"
import express from "express"
import session from "express-session"
import * as config from "../../database/config/config.json"
import sequelize from "../../database/index"
import { IIndexable } from "../../types"
const env: string = process.env.NODE_ENV || "development"

let envConfig: IIndexable = config
const sequelizeStore = SequelizeStore(session.Store)
envConfig = envConfig[env]

export default function defineSession(app: express.Application) {
    app.use(session({
        secret: "ac89qn09q3fnadf",
        store: new sequelizeStore({
            db: sequelize,
        }),
        resave: false,
        saveUninitialized: false,
        cookie: { httpOnly: false, secure: false },
    }))
}
