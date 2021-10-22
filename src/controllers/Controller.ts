import { Request, Response } from "express"
import Interest from "../database/models/Interest"
import { resJson } from "./transformer"
import StatusCode from "./transformer/StatusCodes"

const controller = {
    test: async (req: Request, res: Response) => {
        resJson(res, StatusCode.OK, "API is working!")
    },
    getInterests: async (res: Response) => {
        const interests = await Interest.getAll()
        resJson(res, StatusCode.OK, interests)
    },
}

export default controller
