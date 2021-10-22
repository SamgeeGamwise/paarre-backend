import to from "await-to-js"
import { DataTypes, Model } from "sequelize"
import sequelize from "./connect"

class User extends Model {

  public static async new(firstName: string, lastName: string, accountId: number): Promise<User | null> {
    const [err, user] = await to<User | null>(User.create({
      firstName,
      lastName,
      accountId,
    }))

    if (err || !user) {
      return null
    } else {
      return user
    }
  }

  public static async getByAccountId(id: number): Promise<User[] | null> {
    const [err, users] = await to<User[]>(User.findAll({
      where: { accountId: id },
      attributes: ["id", "firstName", "lastName"],
    }))

    if (err || !users) {
      return null
    } else {
      return users
    }
  }
  public firstName!: string
  public lastName!: string
  public email!: string
  public password!: string
}

User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  accountId: DataTypes.INTEGER,
}, {
  modelName: "User",
  sequelize,
})

export default User
