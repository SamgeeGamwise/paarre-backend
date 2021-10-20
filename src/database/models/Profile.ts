import { DataTypes, Model } from "sequelize"
import sequelize from "./connect"
import Interest from "./Interest"

class Profile extends Model {

  public static async new(id: number): Promise<Profile | null> {
    const newProfile = await Profile.create({ accountId: id, details: "" })
    return newProfile
  }

  public static async getByAccountId(id: number) {
    const dbProfile = await Profile.findOne({ where: { accountId: id }, attributes: ["id", "details"] })
    if (dbProfile !== null) {
      const interests = await Interest.getAllByProfile(dbProfile.id)
      const profile: any = dbProfile.toJSON()
      profile.interests = interests

      delete profile.id
      return profile
    } else {
      return null
    }
  }
  public id!: number
  public accountId!: number
  public details!: string
  public interests!: Interest[]
  public updatedAt!: Date
  public createdAt!: Date
}

Profile.init({
  accountId: DataTypes.INTEGER,
  details: DataTypes.TEXT,
}, {
  modelName: "Profile",
  sequelize,
})

export default Profile
