import handlebars from "handlebars";
import express from "express";
import {Request, Response} from "express";
import Result, {Ok, Err} from "./utils/result";

//Load precompiled templates
require("./templates/build.js");

function parse_template(filename: string, context: object): Result<string, string>{
    if(!handlebars.templates[filename]) return new Err("Template " + filename + " not found");
    return new Ok(handlebars.templates[filename](context || this));
}
handlebars.registerHelper("parse", (filename, context) => {
    let html_result: Result<string, string> = parse_template.call(this, filename, context);
    if(html_result.is_err()){
        let err: string = html_result.handle();
        console.error(err);
    }
    return html_result.unwrap_or("");
});

let app = express();

//Static paths content
app.use("/styles", express.static("styles"));

app.get("/", (req: Request, res: Response) => {
    let html: string = parse_template("index.html", {appname: "EasyTypeBlog"}).expect("Unable to load index.");
    res.send(html);
});

console.log("Initialized!");

app.listen(80);
