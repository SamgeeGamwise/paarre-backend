import express from "express";
import { NextFunction, Request, Response } from "express";
import { resMessage } from "../../transformer";
const router = express.Router();

// GET
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(resMessage("API is working!"));
});

export default router;
