import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Interests extends Model { }

Interests.init({
    ProfileId: DataTypes.INTEGER,
    Category: DataTypes.STRING,
    Name: DataTypes.STRING,
    Type: DataTypes.STRING,
}, {
    modelName: "Interests",
    sequelize,
});

export default Interests;
