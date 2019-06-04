import { Request, Response } from "express";

export default interface Controller{
    get(req: Request, res: Response);
    post(req: Request, res: Response);
    put(req: Request, res: Response);
}
