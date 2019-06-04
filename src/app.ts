import handlebars from "handlebars";
import express from "express";
import {Request, Response, Application} from "express";
import Result, {Ok, Err} from "./utils/result";
import Controller from "./controllers/controller";
import Index from "./controllers/index";
import Template from "./utils/template";
import Page404 from "./controllers/page404";

//Load precompiled templates
require("./templates/build.js");

class Router{

    private bind_address: string;
    private port: number;
    private express: Application;

    constructor(port: number, bind_address: string = "0.0.0.0"){
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

    public register_controller(name: string, controller: Controller){
        this.express.get(`/${name}`, controller.get.bind(controller));
        this.express.post(`/${name}/:id`, controller.post.bind(controller));
        this.express.put(`/${name}/:id`, controller.put.bind(controller));
    }

    public run(){
        this.express.listen(this.port, this.bind_address);
    }

}

let app: Router = new Router(80);
app.register_static("/styles", "styles");
app.register_controller("/", new Index());
app.register_controller("*", new Page404());
app.run();
