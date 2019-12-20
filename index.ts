#!/usr/bin/env node

// 3rd party imports
var argv = require('minimist')(process.argv.slice(2), {
    string: 'component', alias: { c: 'component', m: 'model' }
});
import clear = require('clear');

// Local imports
import ref from './lib/reference';

clear();

Object.keys(argv).map((arg: string) => {
    switch (arg) {
        case "component":
            ref.createComponent(argv.c);
            break;
        case "model":
            ref.createModel(argv.m);
        default:
            break;
    }
});