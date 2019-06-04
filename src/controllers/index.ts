import Controller from "./controller";
import {Request, Response, Application} from "express";
import Page404 from "./page404";
import Template from "../utils/template";

export default class Index implements Controller{

    get(req: Request, res: Response) {
        res.send(Template.parse("index.html").unwrap_or("Template not found"));
    }

    post(req: Request, res: import("express").Response) {
        Page404.send404(res);
    }

    put(req: Request, res: Response) {
        Page404.send404(res);
    }

}
