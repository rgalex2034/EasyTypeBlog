import BaseController from "./base_controller";
import {Request, Response, Application} from "express";
import ErrorPage from "./error_page";
import Template from "../utils/template";

export default class Index extends BaseController{

    get(req: Request, res: Response) {
        res.send(Template.parse("index.html").unwrap_or("Template not found"));
    }

}
