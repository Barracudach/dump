import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as r from "./ThemeSystem.js";
import * as u from "./ColorSystemType.js";
import * as a from "./i18nText.js";

function main() {
    var l, c, p, m, h, C, f, y;
    o._RF.push({}, "51085WvP7hNForiOsuMV6jh", "KycStatusView", void 0);
    const {
        ccclass: T,
        property: b
    } = s;
    t("StatusType", function(t) {
        return t[t.DOCUMENT = 0] = "DOCUMENT", t[t.KYC = 1] = "KYC", t
    }({})), t("default", (l = b(r), c = b(r), p = b(a), T((C = e((h = class extends i {
        constructor(...t) {
            super(...t), n(this, "statusTextThemeComponent", C, this), n(this, "statusBGComponent", f, this), n(this, "statusI18nComponent", y, this)
        }
        setStatusView(t, e, n) {
            var o;
            null == (o = this.statusI18nComponent) || o.setKey(t, !0), this.statusTextThemeComponent.setColorScheme(u.Other, e), this.statusBGComponent.setColorScheme(u.Other, n)
        }
    }).prototype, "statusTextThemeComponent", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(h.prototype, "statusBGComponent", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(h.prototype, "statusI18nComponent", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = h)) || m));
    o._RF.pop()
}