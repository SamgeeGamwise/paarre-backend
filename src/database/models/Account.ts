
import { DataTypes, Model } from "sequelize"
import { Op } from "sequelize"
import models from "./"
import sequelize from "./_connect"
import { getData } from "./_util"
import Profile from "./Profile"
import User from "./User"

class Account extends Model {

  public static async getById(id: number): Promise<Account> {
    console.log(id)
    const account: Account = await getData(models.Account.findByPk(id, {
      attributes: ["id", "is_admin", "email"],
      include: [
        {
          model: models.User,
          as: "user",
          attributes: ["first_name", "last_name"],
        },
        {
          model: models.Profile,
          as: "profile",
          attributes: ["details"],
          include: [{
            model: models.Interest,
            as: "interest",
            attributes: ["name"],
            through: {
              attributes: [],
            },
            // include: [{
            //   model: models.InterestCategory,
            //   as: "interest_category",
            //   attributes: ["name"],
            // }],
          }],
        },
      ],
      nest: true,
    }))
    console.log(account)
    // const users: User[] = await getData(User.getByAccountId(account.id))
    // const profile: Profile = await getData(Profile.getByAccountId(account.id))

    // if (users.length !== 2) {
    //   throw "Error with account!"
    // }

    // account.user1 = users[0]
    // account.user2 = users[1]
    // account.profile = profile

    return account
  }
  public id!: number
  public isAdmin!: boolean
  public email!: string
  public password?: string
  public user1!: User
  public user2!: User
  public profile!: Profile
  public lastLogin?: Date
  public updatedAt?: Date
  public createdAt?: Date

  // public static async getAll(id: number): Promise<Account[]> {
  //   const accounts: Account[] = await getData(Account.findAll({
  //   where: { id: { [Op.not]: id } }, attributes: ["id"], raw: true
  // }))

  //   for (const account of accounts) {
  //     const users: User[] = await getData(User.getByAccountId(account.id))
  //     const profile: Profile = await getData(Profile.getByAccountId(account.id))

  //     const user1 = users[0]
  //     const user2 = users[1]

  //     account.user1 = user1
  //     account.user2 = user2
  //     account.profile = profile
  //   }

  //   return accounts
  // }

  // public static async getByEmail(email: string): Promise<Account> {
  //   return await getData(Account.findOne({
  //     where: { email },
  //     attributes: ["id", "isAdmin", "email", "password"]
  //   }))
  // }

  // public static async new(isAdmin: boolean, email: string, password: string): Promise<Account | null> {
  //   return await getData((Account.create({
  //     isAdmin,
  //     email,
  //     password,
  //     lastLogin: Date.now(),
  //   })))
  // }

  // public static async lastLoggedIn(id: number): Promise<number | null> {
  //   const account: [number, Account[]] = await getData((Account.update({
  //  lastLogin: new Date() }, { where: { id }
  // })))

  //   return account[0]
  // }

}

Account.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  is_admin: { type: DataTypes.BOOLEAN, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  last_login: { type: DataTypes.DATE },
  updated_at: { type: DataTypes.DATE, allowNull: false },
  created_at: { type: DataTypes.DATE, allowNull: false },
  deleted_at: { type: DataTypes.DATE, allowNull: false },
}, {
  modelName: "Account",
  tableName: "account",
  freezeTableName: true,
  underscored: true,
  paranoid: true,
  initialAutoIncrement: "1000",
  sequelize,
})

export default Account
