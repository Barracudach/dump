import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./HallPokerComp.js";
import * as p from "./LobbyHelper.js";
import * as b from "./NodeVisibleSync.js";
import * as d from "./ConfigEnablerNode.js";
import * as h from "./cv.js";
import * as m from "./ThemeSystem.js";
import * as f from "./ColorSystemType.js";
import * as g from "./ColorsystemLobbyV2.js";

function main() {
    var v, y, C, w, S, B, N, O, P, k, L, V, D, H;
    i._RF.push({}, "09f71OV0ZBKaa5EKarJUnUr", "HallPokerCompLandscape", void 0);
    const {
        ccclass: M,
        property: _
    } = a;
    e("default", (v = _(o), y = _(o), C = _(r), w = _(o), S = _(o), B = _(o), M((P = t((O = class extends u {
        constructor(...e) {
            super(...e), n(this, "rightPanelContainer", P, this), n(this, "lineRightPanelContainer", k, this), n(this, "prefabMttGameOverview", L, this), n(this, "pageBannerDynamic", V, this), n(this, "pageBannerStatic", D, this), n(this, "background", H, this), this.mttOverviewNode = null
        }
        setSelectedTabButton(e) {
            this.tabButtons.forEach(((t, n) => {
                p.setDesignBtnState(t, n == e)
            }))
        }
        showLandscapeRightPanelLine(e) {
            this.lineRightPanelContainer.active = e
        }
        getMttGameOverviewNode() {
            if (!l(this.mttOverviewNode)) {
                this.mttOverviewNode = s(this.prefabMttGameOverview), this.rightPanelContainer.addChild(this.mttOverviewNode), this.mttOverviewNode.active = !1;
                const e = this.panelMttRoomListItem.addComponent(b);
                e.syncOnHideOnly = !0, e.addSyncNode(this.mttOverviewNode)
            }
            return this.mttOverviewNode
        }
        showBanner(e) {
            if (l(this.banner)) {
                const t = this.banner.getComponent(d);
                l(t) ? t.shouldActive = e : this.banner.active = e
            }
        }
        setupTabButton(e, t) {
            var n;
            if (!t) return;
            t.name = e;
            const i = null == (n = t.getChildByName("bg")) ? void 0 : n.getComponent(c);
            if (i) {
                const t = `textures/pokerType/bg_${e}`;
                h.resMgr.loadSprite(t, [i])
            }
        }
        updateBackgroundColor(e) {
            "mtt" == e ? this.background.getComponent(m).setColorScheme(f.LobbyV2, g.HallPokerView_Bg_Desktop) : this.background.getComponent(m).setColorScheme(f.LobbyV2, g.HallMttDetail_Background)
        }
    }).prototype, "rightPanelContainer", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), k = t(O.prototype, "lineRightPanelContainer", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), L = t(O.prototype, "prefabMttGameOverview", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(O.prototype, "pageBannerDynamic", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(O.prototype, "pageBannerStatic", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(O.prototype, "background", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = O)) || N));
    i._RF.pop()
}