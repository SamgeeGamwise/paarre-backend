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
    (req: Request, res: Response, next: NextFunction) => {
        console.log("Action: GET Account | IP: ", req.ip);
        AccountController.get(req, res);
    });

// POST
router.post(
    "/register",
    vRegister,
    validate,
    (req: Request, res: Response) => {
        console.log("Action: POST Register | IP: ", req.ip);
        AccountController.register(req, res);
    });

router.post(
    "/logout",
    async (req: Request, res: Response) => {
        console.log("Action: POST Logout | IP: ", req.ip);
        AccountController.logout(req, res);
    });

router.post(
    "/login",
    vLogin,
    validate,
    passport.authenticate("local"),
    async (req: Request, res: Response) => {
        console.log("Action: POST Login | IP: ", req.ip);
        AccountController.login(req, res);
    });

export default router;
