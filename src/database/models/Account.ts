import { DataTypes, Model } from "sequelize"
import { Op } from "sequelize"
import sequelize from "./connect"
import Profile from "./Profile"
import User from "./User"

class Account extends Model {

  public static async getById(id: number) {
    const dbAccount: Account | null = await Account.findByPk(id, { attributes: ["id", "isAdmin", "email"] })
    if (!dbAccount) { return null }
    const users: User[] = await User.getByAccountId(dbAccount.id)
    if (users.length !== 2) { return null }
    const user1 = users[0]
    const user2 = users[1]
    const profile = await Profile.getByAccountId(dbAccount.id)
    if (profile === null) { return null }
    const account: any = dbAccount.toJSON()
    account.user1 = user1
    account.user2 = user2
    account.profile = profile
    delete account.password
    delete account.lastLogin
    delete account.createdAt
    delete account.updatedAt
    return account
  }

  public static async getAll(id: number) {
    const dbAccounts: Account[] = await Account.findAll({ where: { id: { [Op.not]: id } }, attributes: ["id"] })
    const accounts: any[] = []
    for (const dbAccount of dbAccounts) {
      const users: User[] = await User.getByAccountId(dbAccount.id)
      console.log("users")
      console.log(users)

      if (users.length !== 2) { return [] }
      const user1 = users[0]
      const user2 = users[1]
      const profile = await Profile.getByAccountId(dbAccount.id)

      console.log("profile")
      console.log(profile)

      if (profile === null) { return [] }
      const account: any = dbAccount.toJSON()
      account.user1 = user1
      account.user2 = user2
      account.profile = profile
      console.log(account)

      accounts.push(account)
    }
    console.log(accounts)

    return accounts
  }

  public static async getByEmail(email: string): Promise<Account | null> {
    const account: Account | null = await Account.findOne({ where: { email }, attributes: ["id", "isAdmin", "email", "password"] })
    return account
  }

  public static async new(isAdmin: boolean, email: string, password: string): Promise<Account | null> {
    const newAccount = await Account.create({
      isAdmin,
      email,
      password,
      lastLogin: Date.now(),
    })
    return newAccount
  }

  public static async lastLoggedIn(id: number) {
    return await Account.update({ lastLogin: new Date() }, { where: { id } })
  }
  public id!: number
  public isAdmin!: boolean
  public email!: string
  public password!: string
  public user1!: User
  public user2!: User
  public profile!: Profile
  public lastLogin!: Date
  public updatedAt!: Date
  public createdAt!: Date
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
