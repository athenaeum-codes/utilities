#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3rd party imports
var argv = require('minimist')(process.argv.slice(2), {
    string: 'component', alias: { c: 'component', m: 'model' }
});
var clear = require("clear");
// Local imports
var reference_1 = require("./lib/reference");
clear();
Object.keys(argv).map(function (arg) {
    switch (arg) {
        case "component":
            reference_1.default.createComponent(argv.c);
            break;
        case "model":
            reference_1.default.createModel(argv.m);
        default:
            break;
    }
});
