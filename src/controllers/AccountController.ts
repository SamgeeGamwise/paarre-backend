import bcrypt from "bcrypt-nodejs";
import { Request, Response } from "express";
import Accounts from "../database/Accounts";
import generateHash from "../database/passport/hash";
import Account from "../models/Account";
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

   public static async login(req: Request, res: Response) {
      const { email, password } = req.body;
      const account: Accounts | null = await Account.getByEmail(email);

      if (!account) {
         res.status(401).json(errMessage("Invalid Email!"));
      } else {
         bcrypt.compare(password, account.password, (err, matches) => {
            if (matches) {
               account.update({ lastLogin: new Date() });
               res.status(200).json(resJson(account));
            } else {
               res.status(401).json(errMessage("Invalid Password!"));
            }
         });
      }
   }

   public static async register(req: Request, res: Response) {
      const { firstName, lastName, email, password } = req.body;

      try {
         const account: Account | null = await Account.getByEmail(email) as Account;
         if (account) {
            res.status(201).json(errMessage("Email already in use!"));
         } else {
            const hashPassword = generateHash(password);
            const newAccount = await Account.create(false, email, hashPassword);
            await User.create(firstName, lastName, newAccount.id);
            res.status(200).json(resJson(newAccount));
         }
      } catch (error) {
         res.status(404).json(errMessage(error));
      }
   }

   public static async logout(req: Request, res: Response) {
      if (req.session) {
         req.session.destroy((err) => {
            if (err) {
               res.status(500).json(errMessage(err));
            } else {
               res.status(200).json(resMessage("You have successfully logged out!"));
            }
         });
      } else {
         res.status(404).json(errMessage("Session not found!"));
      }
   }
}
