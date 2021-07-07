import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Profiles extends Model { }

Profiles.init({
  Details: DataTypes.STRING,
}, {
  modelName: "Profiles",
  sequelize,
});

export default Profiles;
