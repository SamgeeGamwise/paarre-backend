import to from "await-to-js"
import { Request, Response } from "express"
import Interest from "../database/models/Interest"
import InterestCategory from "../database/models/InterestCategory"
import { errJson, resJson } from "./transformer"
import StatusCode from "./transformer/StatusCodes"

async function test(req: Request, res: Response) {
    resJson(res, StatusCode.OK, "API is working!")
}

async function getInterests(res: Response) {
    const [err, interests] = await to<Interest[] | null>(Interest.getAll())
    if (err) {
        errJson(res, StatusCode.Issue, "Error returning interests")
    } else {
        resJson(res, StatusCode.OK, interests)
    }
}

async function getCategories(res: Response) {
    const [err, categories] = await to<InterestCategory[] | null>(InterestCategory.getAll())
    if (err) {
        errJson(res, StatusCode.Issue, "Error returning interests")
    } else {
        resJson(res, StatusCode.OK, categories)
    }
}

export {
    test,
    getInterests,
    getCategories,
}
