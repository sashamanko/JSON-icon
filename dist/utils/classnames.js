"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classnames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classNames = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (typeof arg === 'string') {
            classNames.push(arg);
        }
        else if (typeof arg === 'object' && arg !== null) {
            for (var key in arg) {
                if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
                    classNames.push(key);
                }
            }
        }
        else if (Array.isArray(arg)) {
            var nestedClassNames = classnames.apply(void 0, arg);
            if (nestedClassNames) {
                classNames.push(nestedClassNames);
            }
        }
    }
    return classNames.join(' ');
}
exports.default = classnames;
