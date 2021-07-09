import bcrypt from "bcrypt-nodejs";
import passport from "passport";
import LocalStrategy from "passport-local";
import Account from "../../models/Account";
import Accounts from "../Accounts";

const localStrategy = LocalStrategy.Strategy;

export default async function initiatePassport() {
    passport.use("local", new localStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
    }, async (req, email: string, password: string, done) => {

        const account: Accounts | null = await Accounts.findOne({ where: { email } });

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
        const account: Accounts | null = await Account.getById(userAccount.id);
        if (account) {
            done(null, userAccount.id);
        } else {
            done("Error!", null);
        }
    });
}
