import { Sequelize } from "sequelize"
import { IIndexable } from "../../types"
import config from "../config/config"
let sequelize: Sequelize

if (process.env.CLEARDB_DATABASE_URL) {
    sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
        dialect: "mysql",
        protocol: "mysql",
        dialectOptions: {
            ssl: true,
        },
    })
} else {
    const env: string = process.env.NODE_ENV || "development"

    let envConfig: IIndexable = config
    envConfig = envConfig[env]

    sequelize = new Sequelize(envConfig.database, envConfig.username, envConfig.password, envConfig)
}

export default sequelize
