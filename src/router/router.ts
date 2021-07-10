import express from "express";
import authenticateRouter from "./endpoints/authenticate";
import accountsRouter from "./endpoints/account";
import rootRouter from "./endpoints/index";

export default function defineRouter(app: express.Application) {
   app.use("/api", rootRouter);
   app.use("/api/account", accountsRouter);
   app.use("/api/auth", authenticateRouter);
}
