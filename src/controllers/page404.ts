import Controller from "./controller";
import {Request, Response, Application} from "express";
import Template from "../utils/template";

export default class Page404 implements Controller{

    get(req: Request, res: Response) {
        Page404.send404(res);
    }

    post(req: Request, res: Response) {
        Page404.send404(res);
    }

    put(req: Request, res: Response) {
        Page404.send404(res);
    }

    static send404(res: Response){
        res.statusCode = 404;
        let content: string = Template.parse("404.html").unwrap_or("404 - Not found");
        res.send(content);
    }

}
