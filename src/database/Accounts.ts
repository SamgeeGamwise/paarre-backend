import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Accounts extends Model {
  public id!: number;
  public IsAdmin!: boolean;
  public Email!: string;
  public Password!: string;
  public LastLogin!: Date;
  public updatedAt!: Date;
  public createdAt!: Date;
}

Accounts.init({
  IsAdmin: DataTypes.BOOLEAN,
  Email: DataTypes.STRING,
  Password: DataTypes.STRING,
  LastLogin: DataTypes.DATE,
}, {
  modelName: "Accounts",
  sequelize,
});

export default Accounts;
