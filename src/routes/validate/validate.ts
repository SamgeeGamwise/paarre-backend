import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { errMessage } from "../../controllers/transformer";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    if (validationResult(req).isEmpty()) { return next(); }
    console.log(req.body);
    const err = validationResult(req).array()[0];
    const message = `${err.param}: ${err.msg}`;

    return res.status(422).json(errMessage(message));
};
