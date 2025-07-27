import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./NewReplayerDetailAction.js";
import * as A from "./Translator.js";
import * as T from "./cv.js";
import * as g from "./HandsRecordsManager.js";

function main() {
    var f, b, y, L, P, B, C, m, D, N, v, w, R, M, H, S, E, _, I, z;
    i._RF.push({}, "e886b7HeXJEe7htTpE2+WE/", "NewReplayerDetailColumn", void 0);
    const {
        ccclass: x,
        property: V
    } = r;
    t("NewReplayerDetailColumn", (f = x("NewReplayerDetailColumn"), b = V(l), y = V(a), L = V(o), P = V(a), B = V(o), C = V(o), m = V(a), D = V(o), f(((z = class t extends s {
        constructor(...t) {
            super(...t), n(this, "playerActionPrefab", w, this), n(this, "actionParent", R, this), n(this, "roundTitle", M, this), n(this, "allAnteNode", H, this), n(this, "allAnteValue", S, this), n(this, "totalPot", E, this), n(this, "totalPotBox", _, this), n(this, "blindAnteTitle", I, this), this.roundData = null, this.coinConvertData = null
        }
        setRoundTitleString(t) {
            this.roundTitle && (this.roundTitle.string = t)
        }
        setAllBlindsAnteString(t) {
            this.allAnteValue && (this.allAnteValue.string = t)
        }
        setTotalPotString(t) {
            this.totalPot && (this.totalPot.string = t)
        }
        getHeaderTitle(t) {
            const e = this.getHeaderTitles();
            return t < 0 || t >= e.length ? "" : e[t]
        }
        getHeaderTitles() {
            return T.appConfig.isLandscapeLayout ? t.headerTitlesLandscape : t.headerTitles
        }
        init(t, e, n, i, l) {
            var a;
            e >= 0 && e < this.getHeaderTitles().length && this.setRoundTitleString(this.getHeaderTitle(e) || ""), this.allAnteNode.active = 0 === e;
            const o = null == (a = this.totalPotBox) ? void 0 : a.getComponent(u);
            h(o) && (o.opacity = e > 0 ? 255 : 0), t && n ? (this.roundData = t, this.coinConvertData = i, this.getComponent(u).opacity = 0, this.actionParent.children.forEach((t => {
                l.put(t)
            })), this.actionParent.removeAllChildren(), this.setTotalPot(t.totalPot), this.updateBlindsAllAnte(t), t.newReplayerActions.forEach((t => {
                let e;
                e = l.size() > 0 ? l.get() : c(this.playerActionPrefab), this.actionParent.addChild(e), e.getComponent(p).init(t, n, i)
            })), this.actionParent.getComponent(d).updateLayout(!0), this.getComponent(u).opacity = 255) : this.totalPotBox.active = !1
        }
        switchAnonymousMode(t) {
            this.actionParent.children.forEach((e => {
                const n = e.getComponent(p);
                n && n.switchAnonymousMode(t)
            }))
        }
        updateBlindsAllAnte(t) {
            T.appConfig.isLandscapeLayout ? this.allAnteNode.active && (t.allAnte > 0 ? (this.setBlindAnteTitleString(A("MTT_HALL.TAB.HALL.MTT_BLIND_LIST.COLUMN.ANTE")), this.setAllAnteAndBlinds(t.allAnte)) : (this.setBlindAnteTitleString(A("BlindBetTitle")), this.setAllAnteAndBlinds(t.blinds))) : this.allAnteNode.active && (t.allAnte > 0 ? (this.setBlindAnteTitleString(A("MTT_HALL.TAB.HALL.MTT_BLIND_LIST.COLUMN.BLIND") + " + " + A("MTT_HALL.TAB.HALL.MTT_BLIND_LIST.COLUMN.ANTE")), this.setAllAnteAndBlinds(t.allAnte + t.blinds)) : (this.setBlindAnteTitleString(A("BlindBetTitle")), this.setAllAnteAndBlinds(t.blinds)))
        }
        setBlindAnteTitleString(t) {
            this.blindAnteTitle.string = t
        }
        setTotalPot(t) {
            t = t || 0, this.totalPot.string = g.getInstance().formatMoneyTextWithData(this.coinConvertData, t)
        }
        setAllAnteAndBlinds(t) {
            t = t || 0, this.allAnteValue.string = g.getInstance().formatMoneyTextWithData(this.coinConvertData, t)
        }
        setCoinMode(t) {
            this.roundData && (this.coinConvertData.coinMode = t, this.setTotalPot(this.roundData.totalPot), this.updateBlindsAllAnte(this.roundData), this.actionParent.children.forEach((e => {
                h(e) && e.getComponent(p) && e.getComponent(p).setCoinMode(t)
            })))
        }
        onShownCardsByRevealHand() {
            this.roundData && this.actionParent.children.forEach((t => {
                h(t) && t.getComponent(p) && t.getComponent(p).onShownCardsRevealHand()
            }))
        }
    }).headerTitlesLandscape = ["BLINDS & ANTE", "PRE-FLOP", "FLOP", "TURN", "RIVER"], z.headerTitles = ["Pre-Flop", "Flop", "Turn", "River"], w = e((v = z).prototype, "playerActionPrefab", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(v.prototype, "actionParent", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(v.prototype, "roundTitle", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(v.prototype, "allAnteNode", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(v.prototype, "allAnteValue", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(v.prototype, "totalPot", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(v.prototype, "totalPotBox", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(v.prototype, "blindAnteTitle", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = v)) || N));
    i._RF.pop()
}