import BaseController from "./base_controller";
import {Request, Response} from "express";
import Template from "../utils/template";

export default class About extends BaseController{

    get(req: Request, res: Response) {
        res.send(Template.parse("about.html").unwrap_or("Template not found"));
    }

}
