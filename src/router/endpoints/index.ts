import express from "express";
import { Request, Response } from "express";
import Controller from "../../controllers/Controller";

const router = express.Router();

// GET
router.get("/", (req: Request, res: Response) => Controller.test(req, res));
router.get("/interests", (req: Request, res: Response) => Controller.getInterests(res));

export default router;
