import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as s from "./cc.js";
import * as r from "./MessageTuple.js";

function main() {
    var a, u, c, o, p, b;
    n._RF.push({}, "8d81eg4vrFHqpmfI0UOKe5e", "MessageTupleType2", void 0);
    const {
        ccclass: g,
        property: f
    } = i;
    e("MessageTupleType2", (a = f(s), u = f(s), g((p = t((o = class extends r {
        constructor(...e) {
            super(...e), l(this, "textLabel", p, this), l(this, "buttonLabel", b, this), this.callBack = null
        }
        setContent(e, t) {
            this.textLabel.string = e || "", this.buttonLabel.string = t || ""
        }
        setButtonCallback(e) {
            this.callBack = e
        }
        onButtonClick() {
            this.callBack()
        }
    }).prototype, "textLabel", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = t(o.prototype, "buttonLabel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = o)) || c));
    n._RF.pop()
}