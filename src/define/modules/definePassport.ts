import express from "express";
import passport from "passport";
import initiatePassport from "../../database/passport";

export default function definePassport(app: express.Application) {
    app.use(passport.initialize());
    app.use(passport.session());
    initiatePassport();
}
