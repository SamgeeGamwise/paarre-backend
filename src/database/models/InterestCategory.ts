import { DataTypes, Model } from "sequelize"
import sequelize from "./_connect"
import { getData } from "./_util"

class InterestCategory extends Model {
    public name!: string

    public static async getAll(): Promise<InterestCategory[] | null> {
        return await getData(InterestCategory.findAll({
            attributes: ["name"],
            raw: true,
        }))
    }
}

InterestCategory.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    updated_at: { type: DataTypes.DATE, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false },
    deleted_at: { type: DataTypes.DATE, allowNull: false },
}, {
    modelName: "InterestCategory",
    tableName: "interest_category",
    freezeTableName: true,
    underscored: true,
    paranoid: true,
    initialAutoIncrement: "1000",
    sequelize,
})

export default InterestCategory
