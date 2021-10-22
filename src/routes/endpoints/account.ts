// Imports
import { NextFunction, Request, Response } from "express"
import express from "express"
import accountController from "../../controllers/accountController"
import isLoggedIn from "../middleware/isLoggedIn"

const router = express.Router()

// GET
router.get(
    "/",
    (req: Request, res: Response, next: NextFunction) => {
        console.log("Action: GET Account | IP: ", req.ip)
        accountController.get(req, res)
    })

router.get(
    "/all",
    (req: Request, res: Response, next: NextFunction) => {
        console.log("Action: GET All | IP: ", req.ip)
        accountController.getAll(req, res)
    })

// PUT
router.put(
    "/users",
    async (req: Request, res: Response) => {
        console.log("Action: PUT Users | IP: ", req.ip)
        accountController.updateUsers(req, res)
    })

router.put(
    "/profile",
    async (req: Request, res: Response) => {
        console.log("Action: PUT Profile | IP: ", req.ip)
        accountController.updateProfile(req, res)
    })

router.put(
    "/interests",
    async (req: Request, res: Response) => {
        console.log("Action: PUT Interests | IP: ", req.ip)
        accountController.updateInterests(req, res)
    })

router.put(
    "/password",
    async (req: Request, res: Response) => {
        console.log("Action: PUT Password | IP: ", req.ip)
        accountController.updatePassword(req, res)
    })

export default router
