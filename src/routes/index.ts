import express from "express"
import account from "./endpoints/account"
import authenticate from "./endpoints/authenticate"
import root from "./endpoints/index"
import isLoggedIn from "./middleware/isLoggedIn"

export default function router(app: express.Application) {
   app.use("/api", root)
   app.use("/api/auth", authenticate)
   app.use("/api/account", isLoggedIn, account)
}
