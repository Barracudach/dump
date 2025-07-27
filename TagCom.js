import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";

function main() {
    var a, s, l, u, c, p, g, b, f, h;
    r._RF.push({}, "28ddfjuj8RB06FdC7atr71g", "TagCom", void 0);
    const {
        ccclass: d,
        property: T
    } = n;
    t("TagCom", (a = T({
        tooltip: "自定义数字型索引"
    }), s = T({
        tooltip: "自定义数字型标签"
    }), l = T({
        tooltip: "自定义布尔型标签"
    }), u = T({
        tooltip: "自定义字符型标签"
    }), d((g = e((p = class extends o {
        constructor(...t) {
            super(...t), i(this, "nIdx", g, this), i(this, "nTag", b, this), i(this, "bTag", f, this), i(this, "sTag", h, this)
        }
        onLoad() {}
        start() {}
        reset() {
            this.nIdx = 0, this.nTag = 0, this.sTag = "", this.bTag = !1
        }
    }).prototype, "nIdx", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), b = e(p.prototype, "nTag", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), f = e(p.prototype, "bTag", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), h = e(p.prototype, "sTag", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), c = p)) || c));
    r._RF.pop()
}