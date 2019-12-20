"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NamingConvention;
(function (NamingConvention) {
    NamingConvention[NamingConvention["CamelCase"] = 0] = "CamelCase";
    NamingConvention[NamingConvention["PascalCase"] = 1] = "PascalCase";
})(NamingConvention = exports.NamingConvention || (exports.NamingConvention = {}));
var regex = /-/g;
var getCamelCaseName = function (componentName) {
    var nameArray = componentName.split(regex);
    var newArray = nameArray.map(function (word, idx) {
        if (idx === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.substring(1);
    });
    return newArray.join('');
};
var getPascalCaseName = function (componentName) {
    var nameArray = componentName.split(regex);
    var newArray = nameArray.map(function (word, idx) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });
    return newArray.join('');
};
exports.getName = function (componentName, type) {
    switch (type) {
        case NamingConvention.CamelCase:
            return getCamelCaseName(componentName);
            break;
        case NamingConvention.PascalCase:
            return getPascalCaseName(componentName);
            break;
        default:
            return getCamelCaseName(componentName);
            break;
    }
};
