import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";

function main() {
    var o, s, u, c;
    i._RF.push({}, "12751TviP5LJL9I6WuUiotT", "PotSettingBtn", void 0);
    const {
        ccclass: l,
        property: p
    } = a;
    t("default", l((u = e((s = class extends n {
        constructor(...t) {
            super(...t), r(this, "intTag", u, this), r(this, "mark", c, this), this.data = void 0
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
    }), c = e(s.prototype, "mark", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), o = s)) || o);
    i._RF.pop()
}