import * as n from "./cc.js";

function main() {
    t({
        exists: function(t) {
            return null != t
        },
        isFunction: function(t) {
            return "function" == typeof t
        },
        isNumber: function(t) {
            return "number" == typeof t
        },
        isPlainObject: function(t) {
            return "object" === Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
        },
        isString: function(t) {
            return "string" == typeof t
        }
    }), n._RF.push({}, "b1a74bo+YNBWJLuQ51rbsSG", "helpers", void 0), n._RF.pop()
}