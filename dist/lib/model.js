"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Node imports
var fs_1 = require("fs");
// 3rd party imports
var chalk = require("chalk");
// Local imports
var common_1 = require("./common");
var modelTemplate = "\nimport mongoose, { Document, Schema } from \"mongoose\";\n\nexport interface I[Model] extends Document {\n  name: string;\n}\n\nconst [Model]Schema: Schema = new Schema({\n  name: { type: String, required: true }\n});\n\nexport default mongoose.model<I[Model]>(\"[Model]\", [Model]Schema);\n";
exports.createModel = function (modelName) {
    var dir = './src/models';
    var pascalName = common_1.getName(modelName, common_1.NamingConvention.PascalCase);
    var camelName = common_1.getName(modelName, common_1.NamingConvention.CamelCase);
    var filePath = dir + "/" + camelName + ".model.ts";
    fs_1.mkdir("" + dir, function (err) {
        if (err) {
        }
        else {
            fs_1.writeFile(filePath, modelTemplate.replace(/\[Model\]/g, pascalName), function (err) {
                if (err) {
                }
                else {
                    console.log(chalk.cyan('Created:') + " " + filePath);
                }
            });
        }
    });
};
