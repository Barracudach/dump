import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";

function main() {
    var s, o, c, u;
    a._RF.push({}, "8c187DrUqdBSaWrzIi+lHKw", "Tag", void 0);
    const {
        ccclass: l,
        property: p
    } = i;
    t("default", l((c = e((o = class extends n {
        constructor(...t) {
            super(...t), r(this, "intTag", c, this), r(this, "mark", u, this), this.data = void 0
        }
        setData(t) {
            this.data = t
        }
        getData() {
            return this.data
        }
        getTag() {
            return this.intTag
        }
        setTag(t) {
            this.intTag = t
        }
        setMark(t) {
            this.mark = t
        }
        getMark() {
            return this.mark
        }
    }).prototype, "intTag", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), u = e(o.prototype, "mark", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), s = o)) || s);
    a._RF.pop()
}