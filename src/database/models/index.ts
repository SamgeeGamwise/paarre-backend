import { Sequelize } from "sequelize"
import sequelize from "./_connect"

import Account from "./Account"
import Interest from "./Interest"
import InterestCategory from "./InterestCategory"
import Profile from "./Profile"
import User from "./User"
import UserInterest from "./UserInterest"

import { ModelsType } from "../../types"

const models: ModelsType = {
    sequelize,
    Sequelize,
    Account,
    Profile,
    User,
    InterestCategory,
    Interest,
    UserInterest,
}

// Has
models.InterestCategory.hasMany(models.Interest, {
    as: "interest",
    foreignKey: "category_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
models.Account.hasOne(models.Profile, {
    as: "profile",
    foreignKey: "account_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
models.Account.hasMany(models.User, {
    as: "user",
    foreignKey: "account_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

// Belongs To
models.Interest.belongsTo(models.InterestCategory, {
    as: "interest_category",
    foreignKey: "category_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
models.Interest.belongsToMany(models.Profile, {
    through: "user_interest",
    as: "profile",
    foreignKey: "profile_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
models.Profile.belongsToMany(models.Interest, {
    through: "user_interest",
    as: "interest",
    foreignKey: "interest_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
models.Profile.belongsTo(models.Account, {
    as: "account",
    foreignKey: "account_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
models.User.belongsTo(models.Account, {
    as: "account",
    foreignKey: "account_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

export default models
