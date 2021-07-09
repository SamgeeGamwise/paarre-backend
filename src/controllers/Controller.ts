import { Request, Response } from "express";
import db from "../database/db";
import { resList, resMessage } from "./transformer";

export default class Controller {

    public static async test(req: Request, res: Response) {
        res.status(200).json(resMessage("API is working!"));
    }

    public static async getInterests(res: Response) {
        const interests = await db.Interests.findAll({ where: { profileId: 1 } });
        res.status(200).json(resList(interests));
    }
}
