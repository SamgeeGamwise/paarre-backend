import express from "express";
import { NextFunction, Request, Response } from "express";
const router = express.Router();

// GET
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ status: "success", data: [] });
});

export default router;
