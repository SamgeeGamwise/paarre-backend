import to from "await-to-js"
import { Response } from "express"
import Sequelize from "sequelize"
import { errJson, resJson } from "./transformer"
import StatusCode from "./transformer/StatusCodes"

import Accounts from "../database/models/Account"
import Account from "../database/models/Account"
import Interests from "../database/models/Interest"
import generateHash from "../database/models/passport/hash"
import Profiles from "../database/models/Profile"
import Users from "../database/models/User"

async function get(req: any, res: Response) {
   const id: number = req.user
   const [err, account] = await to<Account | null>(Account.getById(id))

   if (err || !account) {
      errJson(res, StatusCode.NotFound, "Could not find account!")
   } else {
      resJson(res, StatusCode.OK, account)
   }
}

async function getAll(req: any, res: Response) {
   const id: number = req.user
   const [err, accounts] = await to<Account[] | null>(Account.getAll(id))

   if (err || !accounts) {
      errJson(res, StatusCode.NotFound, "No Valid Accounts Found")
   } else {
      resJson(res, StatusCode.OK, accounts)
   }
}

async function updateUsers(req: any, res: Response) {
   const id: number = req.user
   const { user1, user2, email } = req.body

   const [err, existingAccount] = await to<Accounts | null>(Account.getByEmail(email))
   if (err) {
      errJson(res, StatusCode.Issue, "Something went wrong.")
   } else if (existingAccount && existingAccount.id !== id) {
      errJson(res, StatusCode.AlreadyExists, "Email already in use!")
   } else {
      Accounts.update({ email }, { where: { id } })

      Users.update({
         firstName: user1.firstName,
         lastName: user1.lastName,
      }, {
         where: { id: user1.id, accountId: id },
      })

      Users.update({
         firstName: user2.firstName,
         lastName: user2.lastName,
      }, {
         where: { id: user2.id, accountId: id },
      })
      resJson(res, StatusCode.OK, "Users Updated!")
   }
}
async function updateProfile(req: any, res: Response) {
   const id: number = req.user
   const details = req.body.details
   const [err, profile] = await to<Profiles | null>(Profiles.findOne({ where: { accountId: id } }))

   if (err || !profile) {
      errJson(res, StatusCode.NotFound, "Could not find linked account!")
   } else {
      await profile.update({ details })
      resJson(res, StatusCode.OK, "Profile Updated!")
   }
}
async function updateInterests(req: any, res: Response) {
   const id: number = req.user
   const interests = req.body.interests
   const [err, profile] = await to<Profiles | null>(Profiles.findOne({ where: { accountId: id } }))

   if (err || !profile) {
      errJson(res, StatusCode.NotFound, "Could not find linked account!")
   } else {
      const [err, currentInterests] = await to<Interests[]>(Interests.findAll({ where: { profileId: profile.id } }))

      if (err || !currentInterests) {
         errJson(res, StatusCode.Issue, "Problem updating interests!")
      } else {
         const addInterests = [...interests].filter(
            (interest: Interests) => currentInterests.indexOf(interest) === -1)

         const removeInterests = currentInterests.filter(
            (interest: Interests) => interests.indexOf(interest) === -1)

         const removeNames = removeInterests.map(
            (interest: Interests) => interest.name)

         addInterests.forEach((interest: Interests) => {
            interest.profileId = profile.id
         })

         await Interests.destroy({ where: { name: { [Sequelize.Op.in]: removeNames }, profileId: profile.id } })
         await Interests.bulkCreate(addInterests)

         resJson(res, StatusCode.OK, "Interests Updated!")
      }
   }
}
async function updatePassword(req: any, res: Response) {
   const id: number = req.user
   const { password }: { password: string } = req.body

   await Accounts.update({ password: generateHash(password) }, { where: { id } })
   resJson(res, StatusCode.OK, "Password Updated!")
}

export {
   get,
   getAll,
   updateUsers,
   updateProfile,
   updateInterests,
   updatePassword,
}
