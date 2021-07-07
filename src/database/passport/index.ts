import bCrypt from "bcrypt-nodejs";
import passport from "passport";
import LocalStrategy from "passport-local";
import db from "../db";

const localStrategy = LocalStrategy.Strategy;
const generateHash = (password: string) => bCrypt.hashSync(password, bCrypt.genSaltSync(8));

export default function initiatePassport() {
    passport.use("local-signup", new localStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
    }, (req, email: string, password: string, done) => {
        db.Accounts.findOne({
            where: {
                email,
            },
        }).then((user) => {
            if (user) {
                return done(null, false, {
                    message: "That email is already taken",
                });
            } else {
                db.Accounts.create({
                    IsAdmin: true,
                    Email: email,
                    Password: generateHash(password),
                    LastLogin: Date.now(),
                }).then((newUser) => {
                    if (!newUser) { done(null, false); }
                    if (newUser) { done(null, newUser); }
                });
            }
        });
    },
    ));
}
