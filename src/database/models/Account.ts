
import to from "await-to-js"
import { DataTypes, Model } from "sequelize"
import { Op } from "sequelize"
import models from "./"
import sequelize from "./_connect"
import { getData } from "./_util"
import Interest from "./Interest"
import Profile from "./Profile"
import User from "./User"

class Account extends Model {
  public createdAt?: Date
  public email!: string
  public id!: number
  public isAdmin!: boolean
  public lastLogin?: Date
  public password?: string
  public profile!: Profile
  public updatedAt?: Date
  public user1!: User
  public user2!: User

  public static async getById(id: number): Promise<Account> {
    const account: Account = await getData(models.Account.findByPk(id, {
      attributes: ["id", ["is_admin", "isAdmin"], "email"],
      include: [{
        model: models.User,
        as: "users",
        attributes: [["first_name", "firstName"], ["last_name", "lastName"]],
      }, {
        model: models.Profile,
        as: "profile",
        attributes: ["details"],
        include: [{
          model: models.Interest,
          as: "interests",
          attributes: ["name"],
          through: {
            attributes: [],
          },
          include: [{
            model: models.InterestCategory,
            as: "category",
            attributes: ["name"],
          }],
        }],
      },
      ],
      nest: true,
    }))

    account.profile.interests.map((interest: Interest) => interest.category = interest.category)

    return account
  }

  public static async getByEmail(email: string): Promise<Account> {
    const account: Account = await getData(Account.findOne({
      where: { email },
      attributes: ["id", ["is_admin", "isAdmin"], "email"],
      include: [{
        model: models.User,
        as: "users",
        attributes: [["first_name", "firstName"], ["last_name", "lastName"]],
      }, {
        model: models.Profile,
        as: "profile",
        attributes: ["details"],
        include: [{
          model: models.Interest,
          as: "interests",
          attributes: ["name"],
          through: {
            attributes: [],
          },
          include: [{
            model: models.InterestCategory,
            as: "category",
            attributes: ["name"],
          }],
        }],
      },
      ],
      nest: true,
    }))

    account.profile.interests.map((interest: Interest) => interest.category = interest.category)

    return account
  }

  public static async checkByEmail(email: string): Promise<boolean> {
    const [err, account] = await to<Account | null>(Account.findOne({
      where: { email },
      attributes: ["id"],
    }))

    if (err) {
      throw err
    } else {
      return !account
    }
  }

  public static async getAll(id: number): Promise<Account[]> {
    const accounts: Account[] = await getData(Account.findAll({
      where: { id: { [Op.not]: id } },
      attributes: ["id", "is_admin", "email"],
      include: [{
        model: models.User,
        as: "user",
        attributes: ["first_name", "last_name"],
      }, {
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
          include: [{
            model: models.InterestCategory,
            as: "interest_category",
            attributes: ["name"],
          }],
        }],
      },
      ],
      nest: true,
    }))

    return accounts
  }

  public static async lastLoggedIn(id: number): Promise<number | null> {
    const account: [number, Account[]] = await getData((Account.update({
      lastLogin: new Date(),
    }, {
      where: { id },
    })))

    return account[0]
  }

  public static async new(isAdmin: boolean, email: string, password: string): Promise<Account | null> {
    return await getData((Account.create({
      isAdmin,
      email,
      password,
      lastLogin: Date.now(),
    })))
  }

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
