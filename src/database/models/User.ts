import { DataTypes, Model } from "sequelize"
import sequelize from "./connect"

class User extends Model {

  public static async new(firstName: string, lastName: string, accountId: number): Promise<User | null> {
    const users: User | null = await User.create({
      firstName,
      lastName,
      accountId,
    })

    return users
  }

  public static async getByAccountId(id: number) {
    const dbUsers: User[] = await User.findAll({
      where: { accountId: id },
      attributes: ["id", "firstName", "lastName"],
    })
    const users: any[] = dbUsers.map((user) => {
      return user.toJSON()
    })
    return users
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
