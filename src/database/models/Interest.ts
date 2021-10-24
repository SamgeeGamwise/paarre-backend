import { DataTypes, Model } from "sequelize"
import sequelize from "./_connect"
import { getData } from "./_util"
import InterestCategory from "./InterestCategory"

class Interest extends Model {
    public category!: InterestCategory
    public name!: string

    // public static async getAll(): Promise<Interest[]> {
    //     return await getData(Interest.findAll({
    //         attributes: ["name", "category", "type"],
    //         include: [{
    //             model: InterestCategory,
    //             attributes: [['name', 'category']]
    //         },],
    //         raw: true,
    //     }))
    // }
}

Interest.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_id: { type: DataTypes.INTEGER, references: "interest_category" },
    name: { type: DataTypes.STRING, allowNull: false },
    updated_at: { type: DataTypes.DATE, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false },
    deleted_at: { type: DataTypes.DATE, allowNull: false },
}, {
    modelName: "Interest",
    tableName: "interest",
    freezeTableName: true,
    underscored: true,
    paranoid: true,
    initialAutoIncrement: "1000",
    sequelize,
})

export default Interest
