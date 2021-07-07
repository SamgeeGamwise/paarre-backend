import { NextFunction, Request, Response } from "express";
import Controller from "./Controller";

import bcrypt from "bcrypt-nodejs";
import generateHash from "../database/passport/hash";

import Accounts from "../database/Accounts";
import db from "../database/db";

export default class AccountController extends Controller {

   public static async get(req: any, res: Response) {
      const id: number = req.user;
      const account: Accounts | null = await Accounts.findByPk(id);
      if (!account) {
         res.status(404).json({
            success: false,
            error: "Could not find account!",
         });
      } else {
         res.status(200).json({
            success: true,
            data: account,
         });
      }
   }

   public static async login(req: Request, res: Response) {
      const { email, password } = req.body;
      const account: Accounts | null = await Accounts.findOne({ where: { email } });
      bcrypt.compare(password, account ? account.Password : "", (err, response) => {
         response ? res.status(200).json({ success: true, data: account }) :
            res.status(401).json({ success: false, error: "Invalid Password!" });
      });
   }

   public static async register(req: Request, res: Response) {
      const { firstName, lastName, email, password } = req.body;

      try {
         const account: Accounts | null = await db.Accounts.findOne({ where: { email } });
         if (account) {
            res.status(201).json({ success: false, error: "Email already in use!" });
         } else {
            const hashPassword = generateHash(password);
            const newAccount = await db.Accounts.create({
               IsAdmin: false,
               Email: email,
               Password: hashPassword,
               LastLogin: Date.now(),
            });
            db.Users.create({
               FirstName: firstName,
               LastName: lastName,
               AccountId: newAccount.id,
            });
            res.status(200).json({ success: true, data: newAccount });
         }
      } catch (error) {
         res.status(404).json({ success: false, error });
      }
   }

   public static async logout(req: Request, res: Response) {
      if (req.session) {
         req.session.destroy((err) => {
            if (err) {
               res.status(500).json({ success: false, error: err });
            } else {
               res.status(200).json({ success: true, data: "You have successfully logged out!" });
            }
         });
      } else {
         res.status(404).json({ success: false, error: "Session not found!" });
      }
   }
}
