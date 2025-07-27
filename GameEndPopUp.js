import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as y from "./GameEndPopUpTuple.js";
import * as E from "./Translator.js";
import * as v from "./Pb.js";
import * as w from "./NodeTools.js";
import * as P from "./TweenControl.js";

function main() {
    var T, z, C, U, k, A, R, I, N, H, D, _, G, L, M, O, S, V, F, B, W, x, j, K, q, J, X, Q, Y, Z, $, ee, te, ie, re, ne;
    r._RF.push({}, "289f51FEtdFa5D5d8xvOWTT", "GameEndPopUp", void 0);
    const {
        ccclass: ae,
        property: oe
    } = p;
    e("GameEndPopUp", (T = oe(n), z = oe(a), C = oe(a), U = oe([n]), k = oe(a), A = oe(o), R = oe(n), I = oe(n), N = oe(n), H = oe(a), D = oe(a), _ = oe(l), G = oe(a), L = oe(a), M = oe([a]), O = oe(s), S = oe(u), ae((B = t((F = class extends c {
        constructor(...e) {
            super(...e), i(this, "popUp", B, this), i(this, "prefabTitle", W, this), i(this, "roomName", x, this), i(this, "cups", j, this), i(this, "rank", K, this), i(this, "avatar", q, this), i(this, "normalHeader", J, this), i(this, "mttHunterHeader", X, this), i(this, "mttSuperHunterHeader", Q, this), i(this, "playerName", Y, this), i(this, "playerId", Z, this), i(this, "gender", $, this), i(this, "profit", ee, this), i(this, "gameDuration", te, this), i(this, "gameEndAbstractLabels", ie, this), i(this, "scrollView", re, this), i(this, "tuple", ne, this), this.callback = void 0
        }
        start() {}
        callGameEndPopUp(e, t) {
            this.updateInfo(e), this.popUpAction(), this.callback = t
        }
        updateCup(e) {
            e > 3 || 0 == e ? this.cups[0].active = !0 : this.cups[e].active = !0
        }
        updateInfo(e) {
            const {
                AssetsManager: t,
                DataManager: i
            } = cc_mtt.vv;
            if (cc_mtt.vv.ConsoleLog.log("updateInfo", e), !e.Review) {
                let r = t.getAvatarUrl(i.avatarId, {
                    isThumbnails: !0,
                    timestamp: Date.now()
                });
                t.loadWebImage(this.avatar, r), this.playerName.string = i.userData.Nickname;
                let n = i.userId;
                cc_mtt.vv.DataManager.webPlatform == v.commonProto.PLATFORM.PKW && (n = i.userData.ForeignId), this.playerId.string = n;
                let a = i.userData.Gender;
                1 == a ? this.gender.isChecked = !0 : 2 == a ? this.gender.isChecked = !1 : this.gender.node.active = !1, e.UserRank > 0 && e.UserRank < 4 ? (this.updateCup(e.UserRank), w.changeNodeColor(this.rank.node, (new b).fromHEX("#E0BC8D"))) : (this.updateCup(0), w.changeNodeColor(this.rank.node, b.WHITE)), this.rank.string = h.formatStr(E("HOLDEM.RANKING"), e.UserRank.toString()), e.UserProfit ? this.profit.string = e.UserProfit : this.profit.string = E("GAME_OVER.OUT_OF_CIRCLE")
            }
            this.prefabTitle.string = 4 == e.gameType ? "MTT" + E("GAME_OVER.GAME_OVER") : "SNG" + E("GAME_OVER.GAME_OVER"), this.roomName.string = e.gameRoom, this.gameDuration.string = e.gameTime, 4 == e.gameType ? this.gameEndAbstractLabels[0].string = e.allPlayerCount + "/" + e.PrizeSize : this.gameEndAbstractLabels[0].string = e.Joined + "/" + e.PrizeSize, this.gameEndAbstractLabels[1].string = Math.round(e.PrizePool).toString(), this.gameEndAbstractLabels[2].string = e.BlindLevel.toString();
            let r = e.gamePlayers.length;
            4 == e.gameType && (r = 3);
            for (let t = 0; t < r; t++) {
                let i = g(this.tuple);
                i.parent = this.scrollView.content;
                let n = e.players[t] && e.players[t].AvatarId ? e.players[t].AvatarId : "";
                i.getComponent(y).updateInfo(e.gamePlayers[t], n), t === r - 1 && (i.getComponent(y).baseline.active = !1)
            }
        }
        popUpAction() {
            this.popUp.setScale(1e-4, 1e-4), w.setNodeOpacity(this.popUp, 0);
            P.scaleAndFade(this.popUp, .3, m(d.ONE), 255, f.quartInOut)
        }
        onReturnHallClicked() {
            this.callback && this.callback instanceof Function && (cc_mtt.vv.ConsoleLog.log("onReturnHallClicked"), this.callback())
        }
    }).prototype, "popUp", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(F.prototype, "prefabTitle", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(F.prototype, "roomName", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(F.prototype, "cups", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), K = t(F.prototype, "rank", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(F.prototype, "avatar", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(F.prototype, "normalHeader", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(F.prototype, "mttHunterHeader", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(F.prototype, "mttSuperHunterHeader", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(F.prototype, "playerName", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(F.prototype, "playerId", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(F.prototype, "gender", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(F.prototype, "profit", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(F.prototype, "gameDuration", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(F.prototype, "gameEndAbstractLabels", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), re = t(F.prototype, "scrollView", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(F.prototype, "tuple", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = F)) || V));
    r._RF.pop()
}