import SequelizeStore from "connect-session-sequelize";
import express from "express";
import session from "express-session";
import { Sequelize } from "sequelize";
import * as config from "../../database/config/config.json";
import { IIndexable } from "../../types";
const env: string = process.env.NODE_ENV || "development";

let envConfig: IIndexable = config;
const sequelizeStore = SequelizeStore(session.Store);
envConfig = envConfig[env];

export default function defineSession(app: express.Application) {
    const sequelize = new Sequelize(envConfig.database, envConfig.username, envConfig.password, {
        database: "paarre",
        dialect: "mysql",
        storage: "./session.mysql",
    });

    app.use(session({
        secret: "The Ultimate Secret!",
        store: new sequelizeStore({
            db: sequelize,
        }),
        resave: true,
        saveUninitialized: true,
    }));
}
