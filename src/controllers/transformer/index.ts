import { Response } from "express"

export function resJson(res: Response, code: number, payload: any) {
    res.status(code).json({ success: true, data: payload })
}
export function errJson(res: Response, code: number, payload: any) {
    res.status(code).json({ success: false, error: payload })
}
