// Imports
import express, { Request, Response } from "express"
import passport from "passport"
import authenticationController from "../../controllers/authenticationController"
import validate, { vLogin, vRegister } from "../middleware/validate/validator"

const router = express.Router()

// POST
router.post(
    "/register",
    vRegister,
    validate,
    (req: Request, res: Response) => {
        console.log("Action: POST Register | IP: ", req.ip)
        authenticationController.register(req, res)
    })

router.post(
    "/login",
    vLogin,
    validate,
    passport.authenticate("local"),
    async (req: Request, res: Response) => {
        console.log("Action: POST Login | IP: ", req.ip)
        authenticationController.login(req, res)
    })

router.delete(
    "/logout", // Route
    async (req: Request, res: Response) => {
        console.log("Action: DELETE Logout | IP: ", req.ip)
        authenticationController.logout(req, res)
    })

export default router
