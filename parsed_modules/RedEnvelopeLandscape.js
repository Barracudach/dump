import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./ColorSystemType.js";
import * as d from "./ColorSystemTypeOther.js";
import * as p from "./RedEnvelope.js";
import * as u from "./cv.js";
import * as h from "./BottomMenuHandler.js";

function main() {
    var g, m, b, f, T, y, z, C, M, x, k, B;
    n._RF.push({}, "e5800IT+hBJvrgsjeRMRHvM", "RedEnvelopeLandscape", void 0);
    const {
        ccclass: v,
        property: w
    } = r, _ = 1134;
    e("default", (g = w(a), m = w(a), b = w(a), f = w(o), T = w(o), v((C = t((z = class extends p {
        constructor(...e) {
            super(...e), i(this, "panel", C, this), i(this, "panelMaximizeBackground", M, this), i(this, "panelMinimizeBackground", x, this), i(this, "leaderboardToggle", k, this), i(this, "whatIsGiftFestToggle", B, this), this._currentExpandType = void 0, this._leaderboadOriginHeight = 0
        }
        onLoad() {
            super.onLoad(), this.expand(h.Minimize), this._leaderboadOriginHeight = this.leaderboardListView.content.parent.getComponent(s).height
        }
        onEnable() {
            this.leaderboardToggle.isChecked = !0, this.whatIsGiftFestToggle.isChecked = !1, this.onBtnLeaderboardClicked(), this.leaderboardListView.scrollToTop()
        }
        expand(e) {
            this._currentExpandType = e;
            let t = _,
                i = this._leaderboadOriginHeight;
            switch (e) {
                case h.Minimize:
                case h.Normal:
                    t = _, this.panelMaximizeBackground.active = !0, this.panelMinimizeBackground.active = !1;
                    break;
                case h.Maximize:
                    t = 1338, this.panelMaximizeBackground.active = !1, this.panelMinimizeBackground.active = !0, i += 204
            }
            this.panel.getComponent(s).setContentSize(l(this.panel.getContentSize().width, t)), this.leaderboardListView.content.parent.getComponent(s).height = i, u.resMgr.adaptWidget(this.panel, !0, !1)
        }
        updateMainTabsTextThemeColor() {
            for (let e in this.mainTabs_textsThemeSystem) {
                let t = this.toggleItemsList[e].isChecked ? d.WhiteCreamy_100 : d.ToggleKnobNormal;
                this.mainTabs_textsThemeSystem[e].setColorScheme(c.Other, t)
            }
        }
        onExpandClicked() {
            switch (this._currentExpandType) {
                case h.Minimize:
                case h.Normal:
                    this.expand(h.Maximize);
                    break;
                case h.Maximize:
                    this.expand(h.Minimize)
            }
        }
        onCloseClicked() {
            u.AudioMgr.playButtonSound("close.mp3"), this.expand(h.Minimize), this.node.active = !1
        }
        onBtnLeaderboardClicked() {
            super.onBtnLeaderboardClicked()
        }
        onBtnGiftFestClicked() {
            super.onBtnGiftFestClicked()
        }
    }).prototype, "panel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(z.prototype, "panelMaximizeBackground", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(z.prototype, "panelMinimizeBackground", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(z.prototype, "leaderboardToggle", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(z.prototype, "whatIsGiftFestToggle", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = z)) || y));
    n._RF.pop()
}