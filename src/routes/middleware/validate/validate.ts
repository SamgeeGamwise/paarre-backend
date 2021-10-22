import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"
import { errJson } from "../../../controllers/transformer"
import StatusCode from "../../../controllers/transformer/StatusCodes"

export const validate = (req: Request, res: Response, next: NextFunction) => {
    if (validationResult(req).isEmpty()) { return next() }
    console.log(req.body)
    const err = validationResult(req).array()[0]
    const message = `${err.param}: ${err.msg}`

    errJson(res, StatusCode.Unable, message)
}
