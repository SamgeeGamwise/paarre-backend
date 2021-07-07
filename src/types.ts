import { Sequelize } from "sequelize/types";
import Accounts from "./database/Accounts";
import Interests from "./database/Interests";
import Profiles from "./database/Profiles";
import Users from "./database/Users";

export interface IDB {
    Users: typeof Users;
    Profiles: typeof Profiles;
    Accounts: typeof Accounts;
    Interests: typeof Interests;
    sequelize: Sequelize;
    Sequelize: typeof Sequelize;
}

export interface IIndexable {
    [key: string]: any;
}
