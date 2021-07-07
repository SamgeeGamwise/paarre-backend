import { NextFunction, Request, Response } from "express";

export default function isLoggedIn(req: Request, res: Response, next: NextFunction) {

    if (req.isAuthenticated()) {
        console.log("isAuthenticated!");
        return next();
    } else {
        console.log("isNotAuthenticated!");
        res.status(401).json({ success: false, error: "You are not logged in!" });
    }
}
