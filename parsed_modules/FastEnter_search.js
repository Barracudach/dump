import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as a from "./DesignSystemButtonBase.js";
import * as c from "./cv.js";

function main() {
    var u, l, h, p, f, d;
    n._RF.push({}, "365e1GBXwNABLTpWx0ztAFB", "FastEnter_search", void 0);
    const {
        ccclass: g,
        property: B
    } = s;
    t("default", (u = B(i), l = B(a), g((f = e((p = class extends o {
        constructor(...t) {
            super(...t), r(this, "searchBox", f, this), r(this, "searchBtn", d, this), this.editingReturnCb = null
        }
        start() {}
        onEditingReturn() {
            var t;
            null == (t = this.editingReturnCb) || t.call(this)
        }
        onTextChanged() {
            let t = this.searchBox.string;
            t = c.StringTools.earseNoNumber(t), this.searchBox.string = t
        }
    }).prototype, "searchBox", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = e(p.prototype, "searchBtn", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = p)) || h));
    n._RF.pop()
}