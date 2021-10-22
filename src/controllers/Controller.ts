import { Request, Response } from "express"
import Interest from "../database/models/Interest"
import { resList, resMessage } from "./transformer"

const controller = {
    test: async (req: Request, res: Response) => {
        res.status(200).json(resMessage("API is working!"))
    },
    getInterests: async (res: Response) => {
        const interests = await Interest.getAll()
        res.status(200).json(resList(interests))
    },
}

export default controller
