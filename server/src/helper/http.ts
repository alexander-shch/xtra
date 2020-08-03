import { Response } from 'express';

export function SuccessfulResponse<T extends object>(res: Response, data: T): Response {
    return res.status(200).json(data)
}

export function BadRequest(res: Response, message: any = ''): Response {
    return res.status(400).json({
        error: message || "Your request can't be processed, please check the request data"
    })
}

export function ServerError(res: Response, message: any = ''): Response {
    return res.status(500).json({
        error: message || "Some server error occurred"
    })
}