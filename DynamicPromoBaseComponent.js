import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cv.js";
import * as l from "./Enum.js";
import * as c from "./Enum.js";
import * as a from "./NativeEvent.js";
import * as p from "./CommonTools.js";

function main() {
    var u, m, d, h;
    r._RF.push({}, "69e9fz8PGBB+pAuZi+AiTgR", "DynamicPromoBaseComponent", void 0);
    const {
        ccclass: f,
        property: P
    } = i;
    e("DynamicPromoBaseComponent", (u = P({
        tooltip: "The URL to be loaded. If url starts with 'http' or 'https' it opens a new browser window.If the url starts with 'wptg' an internal redirect is done."
    }), f((h = t((d = class extends n {
        constructor(...e) {
            super(...e), o(this, "redirectUrl", h, this)
        }
        setRedirectUrl(e) {
            this.redirectUrl = e
        }
        onClickPromo() {
            const e = p.parseURL(this.redirectUrl);
            if ("http:" == e.protocol || "https:" === e.protocol) s.native.openUrl(this.redirectUrl);
            else if (e.protocol == a.getAppSchemaByJurisdiction())
                if (e.hostname == c.open) {
                    const t = e.query[l.SceneOnWPTGApplication];
                    null != t && "" != t ? window.DeeplinkCustomSchemaParseInfo(this.redirectUrl) : this.onFailedClickPromo()
                } else this.onFailedClickPromo()
        }
        onFailedClickPromo() {}
    }).prototype, "redirectUrl", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), m = d)) || m));
    r._RF.pop()
}