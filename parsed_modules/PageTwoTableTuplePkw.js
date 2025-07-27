import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./mttconfig.js";
import * as u from "./PageTwoTableTuple.js";
import * as h from "./Translator.js";
import * as p from "./FormatParser.js";
import * as y from "./StringTools.js";
import * as g from "./cv.js";
import * as b from "./MttHallTableTwoScript.js";
import * as f from "./CommonTools.js";
import * as d from "./MttItemHelper.js";
import * as m from "./EventCustom.js";
import * as v from "./CurrencyValue.js";

function main() {
    var w, T, P, I, C, S, _, z, D, M, A, B, F, N, R, L, k, E, U, j;
    n._RF.push({}, "9fa36oPfq9CT6mYQAN1oR7T", "PageTwoTableTuplePkw", void 0);
    const {
        ccclass: x,
        property: H
    } = o;
    t("PageTwoTableTuplePkw", (w = H(a), T = H(r), P = H(r), I = H(r), C = H(l), S = H(l), _ = H(a), z = H(s), D = H(r), x((B = e((A = class extends u {
        constructor(...t) {
            super(...t), i(this, "myRecordBg", B, this), i(this, "placing", F, this), i(this, "player", N, this), i(this, "chips", R, this), i(this, "crown", L, this), i(this, "chipIcn", k, this), i(this, "playerIcn", E, this), i(this, "defaultAvatar", U, this), i(this, "bounty", j, this), this.tupleId = 0, this.playerId = 0, this.joinStatus = 0, this._isCelebrity = !1
        }
        showCelebrityDetail() {
            if (cc_mtt.vv.ConsoleLog.log("mtt player table avatar clicked"), this.joinStatus > 0) {
                let t = new m(c.mttPlayerTableEvent, !0);
                t.setUserData(this.playerId), this.node.dispatchEvent(t)
            }
        }
        showBg() {
            this.playerId === cc_mtt.vv.DataManager.userId ? this.myRecordBg.node.active = !0 : this.myRecordBg.node.active = !1
        }
        showCrown(t) {
            this.crown.active = t
        }
        showPlacing(t, e) {
            this.showCrown(this._isCelebrity), this.placing.string = "", t && this.setPlace(e)
        }
        showPlayerIcn(t, e) {
            let i = cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.getAvatarId(e, t), {
                isThumbnails: !0,
                timestamp: t === cc_mtt.vv.DataManager.userId ? Date.now() : null
            });
            cc_mtt.vv.AssetsManager.loadWebImage(this.playerIcn, i, this.defaultAvatar, null, null, 0) || (this.playerIcn.spriteFrame = this.defaultAvatar)
        }
        setInfo(t, e, i, n = 0, a = !1, r = "") {
            this.tupleId = e, this.playerId = t.UserId, this.joinStatus = t.JoinStatus, this._isCelebrity = a, d.getIsBounty(n) ? (this.bounty.node.active = !0, this.bounty.string = b.currentSymbolCurrency + Math.round(100 * t.Bounty) / 100) : this.bounty.node.active = !1, this.showBg(), this.showPlacing(i > 0, t.JoinStatus < 0 ? t.Rank : t.Index), this.showPlayerIcn(t.UserId, t.Avatar), this.player.string = t.PlayerName, this.scheduleOnce((() => {
                this.setPlayerName(t.PlayerName)
            }));
            const l = this.chips.getComponent(v);
            if (l.enabled = !1, t.JoinStatus < 0)
                if (t.Prize > 0) {
                    l.enabled = !0;
                    const e = p.ThousandPointFormat(p.DisplayGold(t.Prize));
                    l.updateVal(e, b.currentCurrency, !1)
                } else this.chips.string = this.getEliminatedString();
            else this.chips.string = y.ScientificNotationWithFormat(p.DisplayGold(t.Coins))
        }
        getEliminatedString() {
            return h("MTT_SIGN_UP.OUT")
        }
        setPlace(t) {
            this.placing.string = t + ""
        }
        setPlayerName(t) {
            let e = g.appConfig.isLandscapeLayout ? 130 : 180;
            0 == this.bounty.node.active && (e = g.appConfig.isLandscapeLayout ? 260 : 390), f.instance.ellipseText(this.player, t, e)
        }
    }).prototype, "myRecordBg", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(A.prototype, "placing", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(A.prototype, "player", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(A.prototype, "chips", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(A.prototype, "crown", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(A.prototype, "chipIcn", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(A.prototype, "playerIcn", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(A.prototype, "defaultAvatar", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(A.prototype, "bounty", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = A)) || M));
    n._RF.pop()
}