import { DataTypes, Model } from "sequelize"
import sequelize from "./_connect"
import { getData } from "./_util"
import InterestCategory from "./InterestCategory"

class Interest extends Model {
    public category!: InterestCategory | string
    public name!: string

    public static async getAll(): Promise<Interest[]> {
        const interests = await getData(Interest.findAll({
            attributes: ["id", "name"],
            include: [{
                model: InterestCategory,
                as: "interest_category",
                attributes: [["name", "category"]],
            }],
            raw: true,
        }))
        interests.map(
            (interest: any) =>
                delete Object.assign(interest, {
                    ["category"]: interest["interest_category.category"],
                })["interest_category.category"])

        return interests
    }
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
