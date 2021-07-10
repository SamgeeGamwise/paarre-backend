// Imports
import { NextFunction, Request, Response } from "express";
import express from "express";
import AccountController from "../../controllers/AccountController";
import isLoggedIn from "../validate/isLoggedIn";

const router = express.Router();

// GET
router.get(
    "/", // Route
    isLoggedIn, // Check for Session
    (req: Request, res: Response, next: NextFunction) => {
        console.log("Action: GET Account | IP: ", req.ip); // Logs
        AccountController.get(req, res); // Controller
    });

// PUT
router.put(
    "/users", // Route
    async (req: Request, res: Response) => {
        console.log("Action: POST Login | IP: ", req.ip); // Logs
        console.log(req.body);
        AccountController.get(req, res); // Controller
    });

export default router;
