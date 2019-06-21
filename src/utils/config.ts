import fs from "fs";

class Config{

    private static instace: Config;

    private files: string[];
    private options: object;

    static getConfig(): Config {
        if(Config.instace) return Config.instace;
        return Config.instace = new Config("/etc/easyblog.conf.json", "easyblog.conf.json");
    }

    constructor(...files: string[]){
        this.files = files;
        this.options = {};

        for(let file of files){
            try {
                let content: string = fs.readFileSync(file).toString();
                var file_options = JSON.parse(content);
                Object.assign(this.options, file_options);
            } catch (error) {
                console.error(`Cannot read config file ${file}`);
            }
        }

    }

    getValue<T>( def: T, ...keys: string[]): T{
        let node: any = this.options;
        for(let key of keys){
            if(!(node instanceof Object) || node[key] == undefined) return def;
            node = node[key];
        }
        return node;
    }

}

export default Config;
