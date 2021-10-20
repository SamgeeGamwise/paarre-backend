import { Sequelize } from "sequelize"
import sequelize from "./connect"

import Account from "./Account"
import Interest from "./Interest"
import Profile from "./Profile"
import User from "./User"

import { IDB } from "../../types"

const db: IDB = {
    sequelize,
    Sequelize,
    User,
    Profile,
    Account,
    Interest,
}

db.Profile.hasMany(db.Interest, { onDelete: "CASCADE", onUpdate: "CASCADE" })
db.Account.hasOne(db.Profile, { onDelete: "CASCADE", onUpdate: "CASCADE" })
db.Account.hasMany(db.User, { onDelete: "CASCADE", onUpdate: "CASCADE" })

db.Interest.belongsTo(db.Profile, { onDelete: "CASCADE", onUpdate: "CASCADE" })
db.Profile.belongsTo(db.Account, { onDelete: "CASCADE", onUpdate: "CASCADE" })
db.User.belongsTo(db.Account, { onDelete: "CASCADE", onUpdate: "CASCADE" })

export default db
