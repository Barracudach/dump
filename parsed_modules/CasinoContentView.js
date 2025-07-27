import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";

function main() {
    var c, f, p, b, d, h;
    i._RF.push({}, "06ddbhHxspEKrHLhYIQ/3QW", "CasinoContentView", void 0);
    const {
        ccclass: m,
        property: w
    } = o;
    e("default", (c = w(n), f = w(n), m((d = t((b = class extends a {
        constructor(...e) {
            super(...e), r(this, "prefabWebView", d, this), r(this, "prefabLeftItem", h, this)
        }
        recreateWebView(e) {
            if (!this.prefabWebView || !this.prefabLeftItem) return console.error("[CasinoContentView] this.prefabWebView & this.prefabLeftItem should not null for landscape mode..."), null;
            const t = s(this.prefabLeftItem),
                r = s(this.prefabWebView);
            return e.addChild(t, u.Enum.ZORDER_TYPE.ZORDER_0), e.addChild(r, u.Enum.ZORDER_TYPE.ZORDER_0), r.getComponent(l)
        }
    }).prototype, "prefabWebView", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = t(b.prototype, "prefabLeftItem", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = b)) || p));
    i._RF.pop()
}