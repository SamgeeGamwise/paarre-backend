import express from "express"
import accountsRouter from "./endpoints/account"
import authenticateRouter from "./endpoints/authenticate"
import rootRouter from "./endpoints/index"
import isLoggedIn from "./middleware/isLoggedIn"

export default function router(app: express.Application) {
   app.use("/api", rootRouter)
   app.use("/api/account", isLoggedIn, accountsRouter)
   app.use("/api/auth", authenticateRouter)
}
