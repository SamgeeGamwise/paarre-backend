import bcrypt from "bcrypt-nodejs";
import { Request, Response } from "express";
import Accounts from "../database/Accounts";
import Interests from "../database/Interests";
import generateHash from "../database/passport/hash";
import Account from "../models/Account";
import Profile from "../models/Profile";
import User from "../models/User";
import { errMessage, resJson, resMessage } from "./transformer";

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
}
