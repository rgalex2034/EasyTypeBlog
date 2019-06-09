import Controller from "./controller";
import {Request, Response, Application} from "express";
import ErrorPage from "./error_page";
import Template from "../utils/template";

export default class Index implements Controller{

    get(req: Request, res: Response) {
        res.send(Template.parse("index.html").unwrap_or("Template not found"));
    }

    post(req: Request, res: Response) {
        ErrorPage.send404(res);
    }

    put(req: Request, res: Response) {
        ErrorPage.send404(res);
    }

}
