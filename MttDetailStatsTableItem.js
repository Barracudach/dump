import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./ThemeSystem.js";
import * as o from "./ColorSystemType.js";
import * as u from "./ColorsystemLobbyV2.js";
import * as b from "./cv.js";
import * as c from "./FormatParser.js";
import * as h from "./LobbyTools.js";
import * as p from "./MttHallDetailTablePlayerComp.js";
import * as d from "./MttHallDetailExpandTab.js";

function main() {
    var y, m, g, f, S, L, C, T, _, P, w, D, k, v, M, z, H, I;
    a._RF.push({}, "bb2dcpnrHhC6LUBSwVgmCda", "MttDetailStatsTableItem", void 0);
    const {
        ccclass: B,
        property: F
    } = n;
    t("default", (y = F(i), m = F(i), g = F(i), f = F(i), S = F(r), L = F(r), C = F(s), T = F(p), B((w = e((P = class extends d {
        constructor(...t) {
            super(...t), l(this, "tableNumLabel", w, this), l(this, "playerCountLabel", D, this), l(this, "smallestStackLabel", k, this), l(this, "largestStackLabel", v, this), l(this, "rightArrow", M, this), l(this, "line", z, this), l(this, "bg", H, this), l(this, "tablePlayerComp", I, this), this._data = null, this._onTouchCallback = null
        }
        get tableId() {
            var t;
            return (null == (t = this._data) ? void 0 : t.tableId) || 0
        }
        get isSelected() {
            var t;
            return !(null == (t = this._data) || !t.isSelected)
        }
        start() {
            this.node.on(r.EventType.TOUCH_END, this.onTouch, this)
        }
        registerOnTouchCallback(t) {
            this._onTouchCallback = t
        }
        onHide() {
            super.onHide(), this.setSelected(!1)
        }
        onTouch() {
            var t;
            h.playSoundClick(), this.setSelected(!this.isSelected), null == (t = this._onTouchCallback) || t.call(this, this)
        }
        render(t, e) {
            this._data = t, this.tableNumLabel.string = (t.tableId % 1e3).toString(), this.playerCountLabel.string = t.playerCount.toString(), this.smallestStackLabel.string = c.ThousandPointFormat(c.DisplayGold(t.minCoins)), this.largestStackLabel.string = c.ThousandPointFormat(c.DisplayGold(t.maxCoins)), this.showBg(), this.isShowing() && (t.isSelected && t.tablePlayerList ? this.renderTablePlayer() : this.hideImmediately()), this.showSeparateLine(e > 0)
        }
        showBg() {
            this.bg && (b.appConfig.isLandscapeLayout ? this.bg.setColorScheme(o.LobbyV2, this.isSelected ? u.MttDetailLandscape_surface_tertiary : u.MttDetailLandscape_surface_secondary) : this.bg.setColorScheme(o.LobbyV2, this.isSelected ? u.MttDetail_Item_Bg : u.MttDetail_Item_Bg2))
        }
        setSelected(t) {
            this._data.isSelected = t, this.showBg()
        }
        updateTablePlayer(t) {
            this._data.tablePlayerList = t, this.renderTablePlayer()
        }
        renderTablePlayer() {
            this.tablePlayerComp && this.tablePlayerComp.render(this._data.tablePlayerList)
        }
        showSeparateLine(t) {
            this.line && (this.line.active = t)
        }
    }).prototype, "tableNumLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(P.prototype, "playerCountLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(P.prototype, "smallestStackLabel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(P.prototype, "largestStackLabel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(P.prototype, "rightArrow", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(P.prototype, "line", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(P.prototype, "bg", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(P.prototype, "tablePlayerComp", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = P)) || _));
    a._RF.pop()
}