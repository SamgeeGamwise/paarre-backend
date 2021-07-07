import express from "express";
import rootRouter from "./endpoints/index";
import usersRouter from "./endpoints/user";

export default function defineRouter(app: express.Application) {
   app.use("/api", rootRouter);
   app.use("/api/user", usersRouter);
}
