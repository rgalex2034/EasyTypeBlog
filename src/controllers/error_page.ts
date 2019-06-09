import Controller from "./controller";
import {Request, Response, Application} from "express";
import Template from "../utils/template";

export default class ErrorPage implements Controller{

    private code: number;
    private message: string;

    constructor(code: number, message: string){
        this.code = code;
        this.message = message;
    }

    get(req: Request, res: Response) {
        ErrorPage.sendError(res, this.code, this.message);
    }

    post(req: Request, res: Response) {
        ErrorPage.sendError(res, this.code, this.message);
    }

    put(req: Request, res: Response) {
        ErrorPage.sendError(res, this.code, this.message);
    }

    static sendError(res: Response, code: number, message: string){
        res.statusCode = code;
        let content: string = Template.parse("error.html", {code, message}).unwrap_or("404 - Not found");
        res.send(content);
    }

    static send404(res: Response){
        ErrorPage.sendError(res, 404, "Not found");
    }

}
