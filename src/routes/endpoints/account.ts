// Imports
import { NextFunction, Request, Response } from "express";
import express from "express";
import AccountController from "../../controllers/AccountController";
import isLoggedIn from "../validate/isLoggedIn";

const router = express.Router();

// GET
router.get(
    "/",
    (req: Request, res: Response, next: NextFunction) => {
        console.log("Action: GET Account | IP: ", req.ip);
        AccountController.get(req, res);
    });

router.get(
    "/all",
    (req: Request, res: Response, next: NextFunction) => {
        console.log("Action: GET All | IP: ", req.ip);
        AccountController.getAll(req, res);
    });

// PUT
router.put(
    "/users",
    async (req: Request, res: Response) => {
        console.log("Action: PUT Users | IP: ", req.ip);
        AccountController.updateUsers(req, res);
    });

router.put(
    "/profile",
    async (req: Request, res: Response) => {
        console.log("Action: PUT Profile | IP: ", req.ip);
        AccountController.updateProfile(req, res);
    });

router.put(
    "/interests",
    async (req: Request, res: Response) => {
        console.log("Action: PUT Interests | IP: ", req.ip);
        AccountController.updateInterests(req, res);
    });

router.put(
    "/password",
    async (req: Request, res: Response) => {
        console.log("Action: PUT Password | IP: ", req.ip);
        AccountController.updatePassword(req, res);
    });

export default router;
