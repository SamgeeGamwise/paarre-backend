import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { errMessage } from "../controllers/transformer";

export const vLogin = [
   body("email").isEmail().trim(),
   body("password").isLength({ min: 5, max: 50 }).trim(),
];

export const vRegister = [
   body("firstName1").trim().isLength({ min: 2, max: 50 }),
   body("lastName1").trim().isLength({ min: 2, max: 50 }),
   body("firstName2").trim().isLength({ min: 2, max: 50 }),
   body("lastName2").trim().isLength({ min: 2, max: 50 }),
   body("email").isEmail().normalizeEmail(),
];

export const validate = (req: Request, res: Response, next: NextFunction) => {
   if (validationResult(req).isEmpty()) { return next(); }
   console.log(req.body);
   const err = validationResult(req).array()[0];
   const message = `${err.param}: ${err.msg}`;

   return res.status(422).json(errMessage(message));
};
