import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./TooltipsHandler.js";
import * as T from "./TooltipsHandler.js";
import * as f from "./TooltipsManager.js";
import * as g from "./cv.js";

function main() {
    var y, b, m, E, w, x, R, B, M, S, v, P, V;
    o._RF.push({}, "6159bXc0N1LuoIftIdsCxqM", "DataViewItemVip", void 0);
    const {
        ccclass: D,
        property: F
    } = l;
    let _ = t("DataViewItemVipType", function(t) {
        return t[t.VPIP = 0] = "VPIP", t[t.PFR = 1] = "PFR", t[t.ETF = 2] = "ETF", t[t.THREE_BET = 3] = "THREE_BET", t[t.C_BET = 4] = "C_BET", t[t.AF = 5] = "AF", t[t.WSF = 6] = "WSF", t[t.WTSD = 7] = "WTSD", t[t.WSD = 8] = "WSD", t[t.PIP = 9] = "PIP", t
    }({}));
    t("default", (y = F(n), b = F(s), m = F(a), E = F(r), w = F({
        type: p(T)
    }), D((B = i((R = class extends h {
        constructor(...t) {
            super(...t), e(this, "txt", B, this), e(this, "processBar", M, this), e(this, "tooltipBtn", S, this), e(this, "tooltipText", v, this), e(this, "tooltipType", P, this), e(this, "tooltipMaxWidth", V, this), this.rate = 0, this.dataRun = 0, this.data = 0, this.isVip = !0, this.itemType = void 0
        }
        start() {
            this.tooltipBtn && g.appConfig.isLandscapeLayout && (this.tooltipBtn.on(a.EventType.MOUSE_ENTER, this.onMouseOverToolTipLandscape, this), this.tooltipBtn.on(a.EventType.MOUSE_LEAVE, this.hideToolTip, this))
        }
        init(t, i, e) {
            this.itemType = e, this.isVip = t, this.rate = i, this.dataRun = 0, this.data = g.numFix.roundWithNaNHandling(g.StringTools.clientGoldByServer(i), 2), this.initTxt()
        }
        initTxt() {
            switch (this.itemType) {
                case _.AF:
                    this.txt.string = this.isVip ? "" + this.rate / 100 : "-";
                    break;
                default:
                    this.txt.string = this.isVip ? `${Math.min(this.rate,100)}%` : "-"
            }
        }
        reset() {
            this.data = 0, this.dataRun = 0, this.processBar.progress = this.dataRun
        }
        update(t) {
            this.processBar.progress = this.dataRun, this.dataRun += .005, this.dataRun = Math.min(this.dataRun, this.data)
        }
        onMouseOverToolTipLandscape(t) {
            this.onMouseOverToolTip(t, this.tooltipText)
        }
        onMouseOverToolTip(t, i) {
            let e = t.target;
            const o = g.config.getStringData(i);
            this.showToolTip(e, o, this.tooltipType)
        }
        showToolTip(t, i, e) {
            this.hideToolTip();
            let o = t.getComponent(u),
                n = o.contentSize,
                s = o.anchorPoint,
                a = new c(n.width * (.5 - s.x), n.height * (0 - s.y)),
                r = o.convertToWorldSpaceAR(a);
            f.showToolTips(r, "", i, new c(c.ZERO), e, this.tooltipMaxWidth, d.Default, t), g.appConfig.isLandscapeLayout || g.MessageCenter.send("dataview_tooltip_shown")
        }
        hideToolTip() {
            f.hideAllTooltips()
        }
    }).prototype, "txt", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = i(R.prototype, "processBar", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = i(R.prototype, "tooltipBtn", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(R.prototype, "tooltipText", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), P = i(R.prototype, "tooltipType", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return T.PointerUpMiddle
        }
    }), V = i(R.prototype, "tooltipMaxWidth", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 500
        }
    }), x = R)) || x));
    o._RF.pop()
}