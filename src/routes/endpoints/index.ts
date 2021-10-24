import express from "express"
import { Request, Response } from "express"
import {
    // getInterests,
    test,
} from "../../controllers"

const router = express.Router()

// GET
router.get("/",
    (req: Request, res: Response) => {
        console.log("Action: GET Test | IP: ", req.ip)
        test(req, res)
    })

// router.get("/interests",
//     (req: Request, res: Response) => {
//         console.log("Action: GET Interests | IP: ", req.ip)
//         getInterests(res)
//     })

export default router
