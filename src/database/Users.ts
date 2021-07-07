import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Users extends Model { }

Users.init({
  FirstName: DataTypes.STRING,
  LastName: DataTypes.STRING,
}, {
  modelName: "Users",
  sequelize,
});

export default Users;
