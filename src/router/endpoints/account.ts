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
    "/", // Route
    isLoggedIn, // Check for Session
    (req: Request, res: Response, next: NextFunction) => {
        console.log("Action: GET Account | IP: ", req.ip); // Logs
        AccountController.get(req, res); // Controller
    });

// POST
router.post(
    "/register", // Route
    vRegister, // Check request data
    validate, // If invalid data
    (req: Request, res: Response) => {
        console.log("Action: POST Register | IP: ", req.ip); // Logs
        AccountController.register(req, res); // Controller
    });

router.post(
    "/logout", // Route
    async (req: Request, res: Response) => {
        console.log("Action: POST Logout | IP: ", req.ip); // Logs
        AccountController.logout(req, res); // Controller
    });

router.post(
    "/login", // Route
    vLogin, // Check request data
    validate, // If invalid data
    passport.authenticate("local"), // Passport check
    async (req: Request, res: Response) => {
        console.log("Action: POST Login | IP: ", req.ip); // Logs
        AccountController.login(req, res); // Controller
    });

export default router;
