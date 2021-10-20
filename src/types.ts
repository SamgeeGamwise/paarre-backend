import { Sequelize } from "sequelize/types"
import Account from "./database/models/Account"
import Interest from "./database/models/Interest"
import Profile from "./database/models/Profile"
import User from "./database/models/User"

export interface IDB {
    User: typeof User
    Profile: typeof Profile
    Account: typeof Account
    Interest: typeof Interest
    sequelize: Sequelize
    Sequelize: typeof Sequelize
}

export interface IIndexable {
    [key: string]: any
}
