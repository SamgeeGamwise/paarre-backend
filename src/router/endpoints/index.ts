import express from "express"
import { Request, Response } from "express"
import Controller from "../../controllers/Controller"

const router = express.Router()

// GET
router.get("/",
    (req: Request, res: Response) => {
        console.log("Action: GET Test | IP: ", req.ip)
        Controller.test(req, res)
    })

router.get("/interests",
    (req: Request, res: Response) => {
        console.log("Action: GET Interests | IP: ", req.ip)
        Controller.getInterests(res)
    })

export default router
