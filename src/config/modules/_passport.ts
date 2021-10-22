import express from "express"
import passport from "passport"
import initiatePassport from "../../database/models/passport"

export default function configPassport(app: express.Application) {
    app.use(passport.initialize())
    app.use(passport.session())
    initiatePassport()
}
