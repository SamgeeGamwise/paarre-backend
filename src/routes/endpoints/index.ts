import express from "express"
import { Request, Response } from "express"
import controller from "../../controllers/controller"

const router = express.Router()

// GET
router.get("/",
    (req: Request, res: Response) => {
        console.log("Action: GET Test | IP: ", req.ip)
        controller.test(req, res)
    })

router.get("/interests",
    (req: Request, res: Response) => {
        console.log("Action: GET Interests | IP: ", req.ip)
        controller.getInterests(res)
    })

export default router
