import to from "await-to-js"
import { DataTypes, Model } from "sequelize"
import sequelize from "./_connect"
import Account from "./Account"
import Interest from "./Interest"

class Profile extends Model {
  public id?: number
  public accountId!: number
  public details!: string
  public interests!: Interest[]
  public updatedAt!: Date
  public createdAt!: Date

  // public static async new(id: number): Promise<Profile | null> {
  //   const [err, profile] = await to(Profile.create({ accountId: id, details: "" }))

  //   if (err || !profile) {
  //     return null
  //   } else {
  //     return profile
  //   }
  // }

  // public static async getByAccountId(id: number): Promise<Profile | null> {
  //   const [err, profile] = await to<Profile | null>(Profile.findOne({
  //   where: { accountId: id },
  //   attributes: ["id", "details"],
  //   raw: true
  // }))

  //   if (err || !profile || !profile.id) {
  //     return null
  //   } else {
  //     const [err, interests] = await to<Interest[] | null>(Interest.getAllByProfile(profile.id))
  //     if (err || !interests) {
  //       return null
  //     } else {
  //       profile.interests = interests

  //       delete profile.id
  //       return profile
  //     }
  //   }
  // }
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
