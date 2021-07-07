// Imports
import { NextFunction, Request, Response } from "express";
import express from "express";
import UserController from "../../controllers/UserController";
import { validate, vLogin, vRegister } from "../validator";
import passport from "passport";


const router = express.Router();
// GET
router.get("/", (req: Request, res: Response, next: NextFunction) => UserController.get(req, res));
router.get("/auth", (req: Request, res: Response, next: NextFunction) => UserController.checkAuth(req, res));

// POST
router.post("/register",
    vRegister,
    validate,
    (req: Request, res: Response, next: NextFunction) => UserController.register(req, res));

router.post("/login",
    vLogin,
    validate,
    passport.authenticate('local-signup'),
    async (req: Request, res: Response, next: NextFunction) => UserController.login(req, res)
)

export default router;
