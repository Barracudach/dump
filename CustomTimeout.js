import * as s from "./cc.js";

function main() {
    s._RF.push({}, "1ad83fKwNBEvZERmv2v/dJe", "CustomTimeout", void 0);
    t("CustomTimeout", class {
        constructor(t, s, ...e) {
            this.self = void 0, this.isDone = void 0, this.isDone = !1, this.self = setTimeout((() => {
                t(), this.isDone = !0
            }), s, ...e)
        }
        ClearCustomInterval() {
            this.self && clearInterval(this.self)
        }
    }), s._RF.pop()
}