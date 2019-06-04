import handlebars, { TemplateDelegate } from "handlebars";
import Result, {Ok, Err} from "../utils/result";
import fs from "fs";

export default class Template{

    static compile_file(filename: string){
        let content: string = fs.readFileSync(filename).toString();
        let template: TemplateDelegate = handlebars.compile(content);
        return template;
    }

    static parse(template: string, context: object = {}): Result<string, string>{
        if(!handlebars.templates[template]) return new Err("Template " + template + " not found");
        return new Ok(handlebars.templates[template](context));
    }

}
