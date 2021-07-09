import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Users extends Model { }

Users.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
}, {
  modelName: "Users",
  sequelize,
});

export default Users;
