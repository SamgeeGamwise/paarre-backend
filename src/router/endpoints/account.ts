// Imports
import { NextFunction, Request, Response } from "express";
import express from "express";
import passport from "passport";
import AccountController from "../../controllers/AccountController";
import isLoggedIn from "../isLoggedIn";
import { validate, vLogin, vRegister } from "../validator";

const router = express.Router();

// GET
router.get(
    "/",
    isLoggedIn,
    (req: Request, res: Response, next: NextFunction) => AccountController.get(req, res),
);

// POST
router.post(
    "/register",
    vRegister,
    validate,
    (req: Request, res: Response) => AccountController.register(req, res),
);

router.post(
    "/logout",
    async (req: Request, res: Response) => AccountController.logout(req, res),
);

router.post(
    "/login",
    vLogin,
    validate,
    passport.authenticate("local"),
    async (req: Request, res: Response) => AccountController.login(req, res),
);

export default router;
