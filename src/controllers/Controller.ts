import { Request, Response } from "express"
import Interest from "../models/Interest"
import { resJson, resList, resMessage } from "./transformer"

export default class Controller {

    public static async test(req: Request, res: Response) {
        res.status(200).json(resMessage("API is working!"))
    }

    public static async getInterests(res: Response) {
        console.log("getInterests")
        let interests: any
        try {
            interests = await Interest.getAll()
        } catch (error) {
            console.log("Interests")
            console.log(error)
            res.status(404).json(resJson(error))
        }
        res.status(200).json(resList(interests))
    }
}
