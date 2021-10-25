import { DataTypes, Model } from "sequelize"
import sequelize from "./_connect"

class UserInterest extends Model {

}

UserInterest.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    profile_id: { type: DataTypes.INTEGER, references: "profile" },
    interest_id: { type: DataTypes.INTEGER, references: "interest" },
    updated_at: { type: DataTypes.DATE, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false },
    deleted_at: { type: DataTypes.DATE, allowNull: false },
}, {
    modelName: "UserInterest",
    tableName: "user_interest",
    freezeTableName: true,
    underscored: true,
    paranoid: true,
    initialAutoIncrement: "1000",
    sequelize,
})

export default UserInterest
