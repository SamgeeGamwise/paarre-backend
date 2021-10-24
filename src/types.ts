import { Sequelize } from "sequelize/types"
import Account from "./database/models/Account"
import Interest from "./database/models/Interest"
import InterestCategory from "./database/models/InterestCategory"
import Profile from "./database/models/Profile"
import User from "./database/models/User"
import UserInterest from "./database/models/UserInterest"

export interface ModelsType {
    User: typeof User
    Profile: typeof Profile
    Account: typeof Account
    InterestCategory: typeof InterestCategory,
    Interest: typeof Interest,
    UserInterest: typeof UserInterest,
    sequelize: Sequelize
    Sequelize: typeof Sequelize
}

export interface IIndexable {
    [key: string]: any
}
