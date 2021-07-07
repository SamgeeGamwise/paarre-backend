import { Request, Response } from "express";
import Controller from "./Controller";

import Accounts from "../database/Accounts";
import db from "../database/db";

import User from "../models/User";

export default class UserController extends Controller {

   public static async get(req: Request, res: Response) {
      const { id } = req.query;
      console.log(id);
      res.status(200).json(id);
   }

   public static checkAuth(req: Request, res: Response) {
      const { id } = req.query;
      console.log(id);
      res.status(200).json(id);
   }

   public static async login(req: Request, res: Response) {
      const { email, password } = req.body;

      res.status(200).json({ success: true, data: "hi" });
      res.status(404).json({ success: false, error: "Error!" });
   }

   public static async register(req: Request, res: Response) {
      const { firstName, lastName, email, password } = req.body;
      try {
         const newAccount = await db.Accounts.create({ IsAdmin: true });
         db.Users.create({ FirstName: firstName, LastName: lastName, Email: email, AccountId: newAccount.id });
         res.status(200).json({ success: true, data: newAccount });
      } catch (error) {
         res.status(404).json({ success: false, error });
      }
   }
}
