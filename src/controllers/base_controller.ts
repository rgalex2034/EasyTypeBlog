import Controller from "./controller";
import {Request, Response} from "express"
import ErrorPage from "./error_page";

class BaseController implements Controller{
    
    get(req: Request, res: Response) {
        ErrorPage.sendError(res, 501, "Not implemented");
    }
    
    post(req: Request, res: Response) {
        ErrorPage.sendError(res, 405, "Method Not Allowed");
    }

    put(req: Request, res: Response) {
        ErrorPage.sendError(res, 405, "Method Not Allowed");
    }

}

export default BaseController;
