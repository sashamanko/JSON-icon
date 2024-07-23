"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = require("../utils/classnames");
var icons_json_1 = require("../utils/icons.json");
var Icon = function (_a) {
    var icon = _a.icon, _b = _a.size, size = _b === void 0 ? 24 : _b, className = _a.className, props = __rest(_a, ["icon", "size", "className"]);
    var iconData = icons_json_1.default[icon];
    if (!iconData) {
        console.warn("Icon ".concat(icon, " not found."));
        return null;
    }
    return (<svg key={icon} {...props} fill='none' viewBox={"0 0 24 24"} xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={(0, classnames_1.default)("Icon", className)}>
      <path key={icon} stroke="currentColor" strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' d={iconData}/>
    </svg>);
};
exports.default = Icon;
