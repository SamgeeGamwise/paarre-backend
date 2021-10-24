import to from "await-to-js"
import { DataTypes, Model } from "sequelize"
import sequelize from "./_connect"

class User extends Model {
  public firstName!: string
  public lastName!: string
  public email!: string
  public password!: string

  // public static async new(firstName: string, lastName: string, accountId: number): Promise<User | null> {
  //   const [err, user] = await to<User | null>(User.create({
  //     firstName,
  //     lastName,
  //     accountId,
  //   }))

  //   if (err || !user) {
  //     return null
  //   } else {
  //     return user
  //   }
  // }

  // public static async getByAccountId(id: number): Promise<User[] | null> {
  //   const [err, users] = await to<User[]>(User.findAll({
  //     where: { accountId: id },
  //     attributes: ["id", "firstName", "lastName"],
  //   }))

  //   if (err || !users) {
  //     return null
  //   } else {
  //     return users
  //   }
  // }
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
