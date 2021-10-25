import { Sequelize } from "sequelize/types"
import Account from "./database/models/Account"
import Interest from "./database/models/Interest"
import InterestCategory from "./database/models/InterestCategory"
import Profile from "./database/models/Profile"
import User from "./database/models/User"
import UserInterest from "./database/models/UserInterest"

export interface ModelsType {
    Account: typeof Account
    Interest: typeof Interest,
    InterestCategory: typeof InterestCategory,
    Profile: typeof Profile
    sequelize: Sequelize
    Sequelize: typeof Sequelize
    User: typeof User
    UserInterest: typeof UserInterest,
}

export interface IIndexable {
    [key: string]: any
}
