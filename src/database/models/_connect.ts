import { Sequelize } from "sequelize"
import { IIndexable } from "../../types"
import config from "../config/config"

let sequelize: Sequelize
const env: string = process.env.NODE_ENV || "development"

let envConfig: IIndexable = config
envConfig = envConfig[env]
console.log(envConfig)

sequelize = new Sequelize(envConfig.database, envConfig.username, envConfig.password, envConfig)

export default sequelize
