import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cv.js";
import * as u from "./ResponsibleGamingData.js";
import * as m from "./ResponsibleGamingData.js";
import * as f from "./Enum.js";

function main() {
    var y, d, h, w, T, b;
    o._RF.push({}, "c530feyBetFOJz4mx4ewrLG", "RGView", void 0);
    const {
        ccclass: D,
        property: E
    } = a;
    e("RGView", (y = E({
        type: n(f)
    }), d = E({
        type: r,
        visible: function() {
            return this.state == f.LossLimit || this.state == f.WagerLimit
        }
    }), D((T = t((w = class extends s {
        constructor(...e) {
            super(...e), i(this, "state", T, this), i(this, "responsibleGamingPolicyPage", b, this), this.rgView = null
        }
        init(e) {
            this.rgView = e
        }
        goBack(e = !0) {
            this.rgView ? this.rgView.goBack(e) : (e && p.AudioMgr.playButtonSound("close.mp3"), p.config.NEEDS_LANDSCAPE() ? this.node.removeFromParent() : p.action.showAction(this.node, p.action.eMoveActionDir.EMAD_TO_RIGHT, p.action.eMoveActionType.EMAT_FADE_OUT))
        }
        openPage(e) {
            let t = p.Enum.GlobalPageName[e];
            if (void 0 !== t) {
                let e = this.rgView ? this.rgView.node : l.getScene().children[0];
                switch (t) {
                    case p.Enum.GlobalPageName.ResponsibleGamingPolicy:
                        p.action.showPrefabUnique(this.responsibleGamingPolicyPage, p.action.eMoveActionDir.EMAD_TO_LEFT, p.action.eMoveActionType.EMAT_FADE_IN, e, this.node.getComponent(c).priority + 1)
                }
            } else g("[RGView] => openPage() Warning: Page type with name `" + e + "` doesn't exist in `Enum.GlobalPageName`!")
        }
        showServerError(e, t, i) {
            let o = p.config.getStringData("ErrorUnknown", !1, "Unknown error occured");
            if (i && (null != i.code && (o = p.config.getStringData("serverErrorCode" + i.code, !1, i.description || o)), null != i.payload && "object" == typeof i.payload && i.payload[e] && i.payload[e].length > 0)) {
                let n = "";
                for (let o in i.payload[e]) {
                    let r = i.payload[e][o],
                        a = null;
                    if (r.description && (a = r.description), r.period) {
                        let i = r.period.toLowerCase();
                        e == u.GameTime && (i = m.GameTime.toLowerCase());
                        let o = e + " " + r.period;
                        for (let e = 0, n = t.length; e < n; e++)
                            if (t[e].schemaKey.toLowerCase() == i && t[e].nameI18nKey) {
                                o = p.config.getStringData(t[e].nameI18nKey, !1, o), r.coolOffTillDate && (a = p.config.getStringData("ResponsibleGaming_IncreaseLimit_error", !1, a), a = p.StringTools.formatC(a, o, p.StringTools.formatDateTimeByCountry(new Date(r.coolOffTillDate).getTime(), !0, !0)));
                                break
                            }
                    }
                    null != a && (n += "" == n ? a : "\n" + a)
                }
                "" != n && (o = n)
            }
            p.popUp.showMsg({
                txt: o,
                msgType: p.Enum.ToastType.ToastTypeWarning
            })
        }
    }).prototype, "state", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return f.Menu
        }
    }), b = t(w.prototype, "responsibleGamingPolicyPage", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = w)) || h));
    o._RF.pop()
}