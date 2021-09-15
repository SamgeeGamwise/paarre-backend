import { Request, Response } from "express";
import Accounts from "../database/Accounts";
import generateHash from "../database/passport/hash";
import Account from "../models/Account";
import Profile from "../models/Profile";
import User from "../models/User";
import { errMessage, resMessage } from "./transformer";

export default class AuthenticationController {

    public static async login(req: Request, res: Response) {
        const account: any = req.user;
        const dbAccount = await Account.lastLoggedIn(account.id);
        dbAccount ?
            res.status(200).json(resMessage("Logged in!")) :
            res.status(500).json(errMessage("Something went wrong..."));
    }

    public static async register(req: Request, res: Response) {
        const { firstName1, lastName1, firstName2, lastName2, email, password } = req.body;

        try {
            const existingAccount: Accounts | null = await Account.getByEmail(email);
            if (existingAccount) {
                res.status(201).json(errMessage("Email already in use!"));
                return;
            }
            const hashPassword = generateHash(password);
            const newAccount = await Account.create(false, email, hashPassword);

            if (newAccount == null) {
                res.status(500).json(errMessage("Could not create Account!"));
                return;
            }

            const newUser1 = await User.create(firstName1, lastName1, newAccount.id);
            const newUser2 = await User.create(firstName2, lastName2, newAccount.id);
            const newProfile = await Profile.create(newAccount.id);

            if (newUser1 == null || newUser2 == null || newProfile == null) {
                newAccount.destroy();
                res.status(500).json(errMessage("Could not create Account!"));
                return;
            }

            res.redirect(307, "login");
        } catch (error) {
            res.status(500).json(errMessage(error));
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
