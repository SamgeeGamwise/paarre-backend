import { NextFunction, Request, Response } from "express"
import { errJson } from "../../controllers/transformer"
import StatusCode from "../../controllers/transformer/StatusCodes"

export default function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated()) {
        return next()
    } else {
        errJson(res, StatusCode.Unauthorized, "You are not logged in!")
    }
}
