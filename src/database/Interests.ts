import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Interests extends Model {
    public name!: string;
    public category!: string;
    public type!: string;
    public profileId!: number;
}

Interests.init({
    profileId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
}, {
    modelName: "Interests",
    sequelize,
});

export default Interests;
