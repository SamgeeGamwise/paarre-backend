import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Interests extends Model { }

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
