"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var chalk = require("chalk");
var common_1 = require("./common");
var fileData = "\nimport React, { Component } from 'react';\nimport './[FileName].scss';\n\ninterface I[ComponentName]Props {\n\n}\ninterface I[ComponentName]State {\n\n}\n\nexport default class [ComponentName] extends Component<I[ComponentName]Props, I[ComponentName]State> {\nstate = {}\n\nrender() {\n    return (\n        <div>\n            \n        </div>\n    )\n}\n}\n";
exports.createComponent = function (componentName) {
    var fileName = common_1.getName(componentName, common_1.NamingConvention.CamelCase);
    var className = common_1.getName(componentName, common_1.NamingConvention.PascalCase);
    var indexData = "import " + className + " from './" + fileName + "';\nexport default " + className + ";";
    var dirPath = "./src/components/" + componentName;
    fs_1.mkdir(dirPath, { recursive: true }, function (err) {
        if (err) {
        }
        else {
            fs_1.writeFile(dirPath + "/index.tsx", indexData, function (err) {
                if (err) {
                }
                else {
                    console.log(chalk.cyan('Created:') + " " + dirPath + "/index.tsx");
                }
            });
            fs_1.writeFile(dirPath + "/" + fileName + ".tsx", "" + fileData.replace(/\[ComponentName\]/g, className).replace(/\[FileName\]/g, fileName), function (err) {
                if (err) {
                }
                else {
                    console.log(chalk.cyan('Created:') + " " + dirPath + "/" + fileName + ".tsx");
                }
            });
            fs_1.writeFile(dirPath + "/" + fileName + ".scss", "", function (err) {
                if (err) {
                }
                else {
                    console.log(chalk.cyan('Created:') + " " + dirPath + "/" + fileName + ".scss");
                }
            });
        }
    });
};
