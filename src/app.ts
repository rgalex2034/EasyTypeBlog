import handlebars from "handlebars";
import express from "express";
import {Application} from "express";
import Result from "./utils/result";
import Controller from "./controllers/controller";
import Index from "./controllers/index";
import Template from "./utils/template";
import Config from "./utils/config";
import ErrorPage from "./controllers/error_page";

//Load precompiled templates
require("./templates/build.js");

class Router{

    private bind_address: string;
    private port: number;
    private express: Application;

    constructor(port: number, bind_address: string){
        this.bind_address = bind_address;
        this.port = port;
        this.express = express();
        this.init_handlebars();
    }

    private init_handlebars(){
        /**
         * Register helper function to parse inner templates through templates
         */
        handlebars.registerHelper("parse", function(filename, context) {
            let html_result: Result<string, string> = Template.parse(filename, context || this);

            if(html_result.is_err()){
                let err: string = html_result.handle();
                console.error(err);
            }

            return html_result.unwrap_or("");
        });
    }

    public register_static(path: string, directory: string){
        this.express.use(path, express.static(directory));
    }

    public register_controller(path: string, controller: Controller){
        if(!path.endsWith("/")) path += "/";
        this.express.get(`${path}`, controller.get.bind(controller));
        this.express.post(`${path}:id`, controller.post.bind(controller));
        this.express.put(`${path}:id`, controller.put.bind(controller));
    }

    public run(){
        this.express.listen(this.port, this.bind_address);
    }

}

let conf: Config = Config.getConfig();

let bind_address: string = conf.getValue("127.0.0.1", "server", "bind_address");
let port: number = conf.getValue(80, "server", "port");

let app: Router = new Router(port, bind_address);
app.register_static("/styles", "styles");
app.register_controller("/", new Index());
app.register_controller("*", new ErrorPage(404, "Not found"));
app.run();
