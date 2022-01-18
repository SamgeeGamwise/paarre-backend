import SequelizeStore from "connect-session-sequelize"
import express from "express"
import session from "express-session"
import sequelize from "../../database/models/_connect"
const sequelizeStore = SequelizeStore(session.Store)

export default function configSession(app: express.Application) {
    app.use(session({
        secret: "The Ultimate Secret!",
        store: new sequelizeStore({
            db: sequelize,
        }),
        resave: false,
        saveUninitialized: false,
        cookie: { httpOnly: false, secure: false },
    }))
}
