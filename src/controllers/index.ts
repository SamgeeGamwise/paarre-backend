import { Request, Response } from "express"
import Interest from "../database/models/Interest"
import { resJson } from "./transformer"
import StatusCode from "./transformer/StatusCodes"

async function test(req: Request, res: Response) {
    resJson(res, StatusCode.OK, "API is working!")
}

// async function getInterests(res: Response) {
//     const interests = await Interest.getAll()
//     resJson(res, StatusCode.OK, interests)
// }

export {
    test,
    // getInterests,
}
