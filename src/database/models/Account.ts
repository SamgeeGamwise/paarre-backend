import to from "await-to-js"
import { DataTypes, Model } from "sequelize"
import { Op } from "sequelize"
import sequelize from "./connect"
import Profile from "./Profile"
import User from "./User"

class Account extends Model {

  public static async getById(id: number): Promise<Account | null> {
    const [err, account] = await to<Account | null>(
      Account.findByPk(id, { raw: true, attributes: ["id", "isAdmin", "email"] }),
    )

    if (err || !account) {
      return null
    } else {

      const [err, users] = await to<User[] | null>(User.getByAccountId(account.id))

      if (err || !users || users.length !== 2) {
        return null
      } else {

        const [err, profile] = await to<Profile | null>(Profile.getByAccountId(account.id))
        if (err || !profile) {
          return null
        } else {
          const user1 = users[0]
          const user2 = users[1]
          account.user1 = user1
          account.user2 = user2
          account.profile = profile
          delete account.password
          delete account.lastLogin
          delete account.createdAt
          delete account.updatedAt
          return account
        }
      }
    }
  }

  public static async getAll(id: number): Promise<Account[] | null> {
    const [err, accounts] = await to<Account[]>(
      Account.findAll({ where: { id: { [Op.not]: id } }, raw: true, attributes: ["id"] }),
    )

    if (err || !accounts) {
      return null
    } else {
      for (const account of accounts) {
        const [err, users] = await to<User[] | null>(User.getByAccountId(account.id))

        if (err || !users || users.length !== 2) {
          return null
        } else {
          const user1 = users[0]
          const user2 = users[1]
          const [err, profile] = await to<Profile | null>(Profile.getByAccountId(account.id))

          if (err || !profile) {
            return null
          } else {
            account.user1 = user1
            account.user2 = user2
            account.profile = profile
          }
        }
      }

      return accounts
    }
  }

  public static async getByEmail(email: string): Promise<Account | null> {
    const [err, account] = await to<Account | null>(
      Account.findOne({ where: { email }, attributes: ["id", "isAdmin", "email", "password"] }),
    )

    if (err || !account) {
      return null
    } else {
      return account
    }
  }

  public static async new(isAdmin: boolean, email: string, password: string): Promise<Account | null> {
    const [err, account] = await to<Account | null>(Account.create({
      isAdmin,
      email,
      password,
      lastLogin: Date.now(),
    }))

    if (err || !account) {
      return null
    } else {
      return account
    }
  }

  public static async lastLoggedIn(id: number): Promise<number | null> {
    const [err, account] = await to<[number, Account[]]>(Account.update({ lastLogin: new Date() }, { where: { id } }))

    if (err || !account || account[0] === 0) {
      return null
    } else {
      return account[0]
    }
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
}

Account.init({
  isAdmin: DataTypes.BOOLEAN,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  lastLogin: DataTypes.DATE,
}, {
  modelName: "Accounts",
  sequelize,
})

export default Account
