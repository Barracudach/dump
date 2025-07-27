import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./HallMttDetailRenderer.js";
import * as l from "./LobbyTabHeaderComp.js";

function main() {
    var p, u, c, b, h, d, y;
    n._RF.push({}, "e2f40n/HJZGZKNKwGXXX/Zh", "HallMttDetailLandscapeRenderer", void 0);
    const {
        ccclass: g,
        property: f
    } = i;
    e("HallMttDetailLandscapeRenderer", (p = g("HallMttDetailLandscapeRenderer"), u = f(l), c = f(o), p((d = t((h = class extends s {
        constructor(...e) {
            super(...e), a(this, "lobbyTabHeaderComp", d, this), a(this, "pagesNode", y, this)
        }
        getSignUpPopup() {
            return null == this.buyInPopup && (this.buyInPopup = r(this.buyInPopupPrefab), this.buyInPopup.parent = this.node.getParent(), this.buyInPopup.active = !1), this.buyInPopup
        }
        show(e) {
            var t;
            super.show(e), null == (t = this.mvcView) || null == t.onClickButtonDetail || t.onClickButtonDetail(), e.data.needShowLoading && (this.showTab(0), this.showPage(0, !0))
        }
        showTab(e) {
            this.lobbyTabHeaderComp.showTab(e)
        }
        showPage(e, t = !1) {
            for (let t = 0; t < this.pagesNode.length; t++) this.pagesNode[t].active = e == t
        }
        onClickTab(e, t) {
            const a = Number.parseInt(t);
            this.showPage(a)
        }
    }).prototype, "lobbyTabHeaderComp", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(h.prototype, "pagesNode", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), b = h)) || b));
    n._RF.pop()
}