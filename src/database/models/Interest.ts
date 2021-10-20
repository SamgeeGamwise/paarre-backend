import { DataTypes, Model } from "sequelize"
import sequelize from "./connect"

class Interest extends Model {

    public static async getAll(): Promise<object[]> {
        const dbInterests = await Interest.findAll({
            where: { profileId: 1 },
            attributes: ["name", "category", "type"],
        })
        const interests = dbInterests.map((interest) => {
            return interest.toJSON()
        })
        return interests
    }

    public static async getAllByProfile(id: number) {
        const dbInterests = await Interest.findAll({
            where: { profileId: id },
            attributes: ["name", "category", "type"],
        })
        const interests = dbInterests.map((interest) => {
            return interest.toJSON()
        })
        return interests
    }
    public name!: string
    public category!: string
    public type!: string
    public profileId!: number
}

Interest.init({
    profileId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
}, {
    modelName: "Interests",
    sequelize,
})

export default Interest
