import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import Profiles from "./Profiles";
import Users from "./Users";

class Accounts extends Model {
  public id!: number;
  public isAdmin!: boolean;
  public email!: string;
  public password!: string;
  public user1!: Users;
  public user2!: Users;
  public profile!: Profiles;
  public lastLogin!: Date;
  public updatedAt!: Date;
  public createdAt!: Date;
}

Accounts.init({
  isAdmin: DataTypes.BOOLEAN,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  lastLogin: DataTypes.DATE,
}, {
  modelName: "Accounts",
  sequelize,
});

export default Accounts;
