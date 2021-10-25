import { DataTypes, Model } from "sequelize"
import sequelize from "./_connect"
import { getData } from "./_util"

class User extends Model {
  public email!: string
  public firstName!: string
  public lastName!: string
  public password!: string

  public static async new(firstName: string, lastName: string, accountId: number): Promise<User> {
    const user: User = await getData((User.create({
      first_name: firstName,
      last_name: lastName,
      account_id: accountId,
    })))

    return user
  }
}

User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  account_id: { type: DataTypes.INTEGER, references: "account" },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  updated_at: { type: DataTypes.DATE, allowNull: false },
  created_at: { type: DataTypes.DATE, allowNull: false },
  deleted_at: { type: DataTypes.DATE, allowNull: false },
}, {
  modelName: "User",
  tableName: "user",
  freezeTableName: true,
  underscored: true,
  paranoid: true,
  initialAutoIncrement: "1000",
  sequelize,
})

export default User
