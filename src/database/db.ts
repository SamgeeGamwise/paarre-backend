import { Sequelize } from "sequelize";
import { IDB } from "../types";
import Accounts from "./Accounts";
import sequelize from "./index";
import Interests from "./Interests";
import Profiles from "./Profiles";
import Users from "./Users";

const db: IDB = {
    sequelize,
    Sequelize,
    Users,
    Profiles,
    Accounts,
    Interests,
};

db.Profiles.hasMany(db.Interests, { onDelete: "CASCADE", onUpdate: "CASCADE" });
db.Accounts.hasOne(db.Profiles, { onDelete: "CASCADE", onUpdate: "CASCADE" });
db.Accounts.hasMany(db.Users, { onDelete: "CASCADE", onUpdate: "CASCADE" });

db.Interests.belongsTo(db.Profiles, { onDelete: "CASCADE", onUpdate: "CASCADE" });
db.Profiles.belongsTo(db.Accounts, { onDelete: "CASCADE", onUpdate: "CASCADE" });
db.Users.belongsTo(db.Accounts, { onDelete: "CASCADE", onUpdate: "CASCADE" });

export default db;
