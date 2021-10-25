import { DataTypes, Model } from "sequelize"
import sequelize from "./_connect"
import { getData } from "./_util"
import Interest from "./Interest"

class Profile extends Model {
  public accountId!: number
  public createdAt!: Date
  public details!: string
  public id?: number
  public interests!: Interest[]
  public updatedAt!: Date

  public static async new(id: number): Promise<Profile | null> {
    const profile: Profile = await getData(Profile.create({ account_id: id, details: "" }))
    return profile
  }
}

Profile.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  account_id: { type: DataTypes.INTEGER, references: "account" },
  details: { type: DataTypes.STRING, allowNull: false },
  updated_at: { type: DataTypes.DATE, allowNull: false },
  created_at: { type: DataTypes.DATE, allowNull: false },
  deleted_at: { type: DataTypes.DATE, allowNull: false },
}, {
  modelName: "Profile",
  tableName: "profile",
  freezeTableName: true,
  underscored: true,
  paranoid: true,
  initialAutoIncrement: "1000",
  sequelize,
})

export default Profile
