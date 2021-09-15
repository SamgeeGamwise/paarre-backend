import { Response } from "express";
import Sequelize from "sequelize";
import generateHash from "../database/passport/hash";
import { errMessage, resJson, resMessage } from "./transformer";

import Accounts from "../database/Accounts";
import Interests from "../database/Interests";
import Profiles from "../database/Profiles";
import Users from "../database/Users";
import Account from "../models/Account";

export default class AccountController {

   public static async get(req: any, res: Response) {
      const id: number = req.user;
      const account: Account = await Account.getById(id) as Account;

      if (!account) {
         res.status(404).json(errMessage("Could not find account!"));
      } else {
         res.status(200).json(resJson(account));
      }
   }

   public static async getAll(req: any, res: Response) {
      const id: number = req.user;
      const accounts = await Account.getAll(id);
      if (accounts.length === 0) {
         res.status(404).json(errMessage("No Valid Accounts Found"));
      } else {
         res.status(200).json(resJson(accounts));
      }
   }

   public static async updateUsers(req: any, res: Response) {
      const id: number = req.user;
      const { user1, user2, email } = req.body;

      const existingAccount: Accounts | null = await Account.getByEmail(email);
      if (existingAccount && existingAccount.id !== id) {
         res.status(201).json(errMessage("Email already in use!"));
      } else {
         Accounts.update({ email }, { where: { id } });
         Users.update(
            { firstName: user1.firstName, lastName: user1.lastName },
            { where: { id: user1.id, accountId: id } },
         );
         Users.update(
            { firstName: user2.firstName, lastName: user2.lastName },
            { where: { id: user2.id, accountId: id } },
         );
         res.status(200).json(resMessage("Users Updated!"));
      }
   }

   public static async updateProfile(req: any, res: Response) {
      const id: number = req.user;
      const details = req.body.details;
      const profile: Profiles | null = await Profiles.findOne({ where: { accountId: id } });
      if (!profile) {
         res.status(404).json(resMessage("Could not find linked account!"));
      } else {
         await profile.update({ details });
         res.status(200).json(resMessage("Profile Updated!"));
      }
   }

   public static async updateInterests(req: any, res: Response) {
      const id: number = req.user;
      const interests = req.body.interests;
      const profile: Profiles | null = await Profiles.findOne({ where: { accountId: id } });
      if (!profile) {
         res.status(404).json(resMessage("Could not find linked account!"));
      } else {
         const currentInterests: Interests[] = await Interests.findAll({ where: { profileId: profile.id } });

         const addInterests = [...interests].filter((interest: Interests) => {
            return currentInterests.indexOf(interest) === -1;
         });
         const removeInterests = currentInterests.filter((interest: Interests) => {
            return interests.indexOf(interest) === -1;
         });
         const removeNames = removeInterests.map((interest: Interests) => {
            return interest.name;
         });
         addInterests.forEach((interest: Interests) => {
            interest.profileId = profile.id;
         });
         const Op = Sequelize.Op;
         await Interests.destroy({ where: { name: { [Op.in]: removeNames }, profileId: profile.id } });
         await Interests.bulkCreate(addInterests);
         res.status(200).json(resMessage("Interests Updated!"));
      }
   }

   public static async updatePassword(req: any, res: Response) {
      const id: number = req.user;
      const { password }: { password: string } = req.body;

      Accounts.update({ password: generateHash(password) }, { where: { id } });
      res.status(200).json(resMessage("Password Updated!"));
   }
}
