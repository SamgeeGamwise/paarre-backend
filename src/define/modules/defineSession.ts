import express from "express";
import session from "express-session";

export default function defineCors(app: express.Application) {
    app.use(session({ secret: "The Ultimate Secret!", resave: true, saveUninitialized: true })); // session secret
}
