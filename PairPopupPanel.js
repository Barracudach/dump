import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./Tools.js";
import * as u from "./PairItem.js";

function main() {
    var c, p, f, y, P, d, h, b;
    n._RF.push({}, "99518iLSoxKTJoaK/Z1nNQq", "PairPopupPanel", void 0);
    const {
        ccclass: m,
        property: k
    } = o;
    let g = t("pairType", function(t) {
        return t[t.title = 0] = "title", t[t.key = 1] = "key", t
    }({}));
    t("default", (c = k(r), p = k(r), f = k(r), m((d = e((P = class extends a {
        constructor(...t) {
            super(...t), i(this, "titlePair", d, this), i(this, "keyPair", h, this), i(this, "content", b, this)
        }
        onEnable() {
            s.forceUpdateLayout(this.node, !0)
        }
        addPair(t, e, i) {
            let n = this.keyPair;
            i === g.title ? n = this.titlePair : i === g.key && (n = this.keyPair);
            let r = l(n);
            r.getComponent(u).setPairText(t, e), r.active = !0, r.parent = this.content, s.forceUpdateLayout(this.node, !0)
        }
        removeAllPairs() {
            this.content.removeAllChildren(), s.forceUpdateLayout(this.node, !0)
        }
    }).prototype, "titlePair", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = e(P.prototype, "keyPair", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(P.prototype, "content", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = P)) || y));
    n._RF.pop()
}