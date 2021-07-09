import bcrypt from "bcrypt-nodejs";
import passport from "passport";
import LocalStrategy from "passport-local";
import Accounts from "../Accounts";
import db from "../db";
import generateHash from "./hash";

const localStrategy = LocalStrategy.Strategy;

export default async function initiatePassport() {
    passport.use("local", new localStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
    }, async (req, email: string, password: string, done) => {

        const account: Accounts | null = await Accounts.findOne({ where: { email } });
        console.log(account);

        if (!account) {
            return done(null, false, { message: "Incorrect email." });
        }
        bcrypt.compare(password, account.password, (err, res) => {
            if (!res) {
                return done(null, false, { message: "Incorrect password." });
            }
            return done(null, account);
        });

    }));

    passport.serializeUser((id, done) => {
        done(null, id);
    });

    passport.deserializeUser(async (userAccount: Accounts, done) => {
        const account: Accounts | null = await db.Accounts.findByPk(userAccount.id);
        if (account) {
            done(null, userAccount.id);
        } else {
            done("Error!", null);
        }
    });
}
