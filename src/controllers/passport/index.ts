import to from "await-to-js"
import bcrypt from "bcrypt-nodejs"
import passport from "passport"
import LocalStrategy from "passport-local"
import Account from "../../database/models/Account"

const localStrategy = LocalStrategy.Strategy

export default async function initiatePassport() {
    passport.use("local", new localStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
    }, async (req, email: string, password: string, done) => {

        const [err, account] = await to<Account | null>(Account.findOne({ where: { email } }))

        if (err || !account) {
            return done(null, false, { message: "Incorrect email." })
        } else {
            bcrypt.compare(password, account.password || "", (err, res) => {
                if (!res) {
                    return done(null, false, { message: "Incorrect password." })
                } else {
                    return done(null, account)
                }
            })
        }
    }))

    passport.serializeUser((id, done) => {
        done(null, id)
    })

    passport.deserializeUser(async (userAccount: Account, done) => {
        const account: Account | null = await Account.getById(userAccount.id)
        if (account) {
            done(null, userAccount.id)
        } else {
            console.log("Error: Could not find user associated with Session")
            done("Error: Could not find user associated with Session", null)
        }
    })
}
