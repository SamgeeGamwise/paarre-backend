import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import Interests from "./Interests";

class Profiles extends Model {
  public id!: number;
  public accountId!: number;
  public details!: string;
  public interests!: Interests[];
  public updatedAt!: Date;
  public createdAt!: Date;
}

Profiles.init({
  accountId: DataTypes.INTEGER,
  details: DataTypes.STRING,
}, {
  modelName: "Profiles",
  sequelize,
});

export default Profiles;
