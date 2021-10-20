import { NextFunction, Request, Response } from "express";
import { errMessage } from "../../controllers/transformer";

export default function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json(errMessage("You are not logged in!"));
    }
}
