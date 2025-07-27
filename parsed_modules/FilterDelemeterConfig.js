import * as t from "./cc.js";
import * as r from "./cc.js";

function main() {
    var i;
    r._RF.push({}, "5c9b9lKgDBB9Kr2BUN9IoTC", "FilterDelemeterConfig", void 0);
    const {
        ccclass: o,
        property: c
    } = t;
    e("FilterDelemeterConfig", o(i = class {
        constructor(...e) {
            this.ui = {
                microUpper: "~ 30",
                lowLower: "31",
                lowUpper: "200",
                midLower: "201",
                midUpper: "500",
                highLower: "501+"
            }, this.val = {
                microUpper: 30,
                lowUpper: 200,
                midUpper: 500
            }, this.set(...e)
        }
        set(...e) {
            Object.assign(this, ...e)
        }
    }) || i);
    r._RF.pop()
}