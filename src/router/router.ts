import express from "express";
import accountsRouter from "./endpoints/account";
import authenticateRouter from "./endpoints/authenticate";
import rootRouter from "./endpoints/index";
import isLoggedIn from "./validate/isLoggedIn";

export default function defineRouter(app: express.Application) {
   app.use("/api", rootRouter);
   app.use("/api/account", isLoggedIn, accountsRouter);
   app.use("/api/auth", authenticateRouter);
}
