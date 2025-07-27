import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./mttconfig.js";
import * as u from "./Pb.js";
import * as m from "./NodePage.js";
import * as p from "./FormatParser.js";
import * as b from "./EventCustom.js";

function main() {
    var g, _, I, P, f, N, T, E, M, G, w, D, d, O, A, R, y, k, C, L, S, H, z, v;
    o._RF.push({}, "5a135gYuyxK37+uwfeF4zIf", "HistoryTuplePrefab", void 0);
    const {
        ccclass: U,
        property: B
    } = s;
    e("HistoryTuplePrefab", (g = B([a]), _ = B(a), I = B(n), P = B(n), f = B(n), N = B(n), T = B(n), E = B(n), M = B([a]), G = B(n), w = B(n), U((O = t((d = class extends r {
        constructor(...e) {
            super(...e), i(this, "gameIcon", O, this), i(this, "quickTag", A, this), i(this, "gameName", R, this), i(this, "pplNum", y, this), i(this, "basePotNum", k, this), i(this, "coinNum", C, this), i(this, "dateLabel", L, this), i(this, "benefitLabel", S, this), i(this, "benefitSign", H, this), i(this, "gameProp", z, this), i(this, "gameRank", v, this), this._tupleId = 0, this._tupleData = null
        }
        setInfo(e, t, i) {
            this._tupleData = e, this._tupleId = t, this.gameName.string = this._tupleData.Name;
            let o, a, n, s = this._tupleData.EndTime;
            [o, a, n] = this.handleTimeLabel(s), this.dateLabel.string = `${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()} ${o}:${a}`, this.coinNum.string = m.getFeeLabel(this._tupleData.TotalFee);
            let r = e.PrizeMoney + e.JackPot;
            switch (this.showBenefitSign(r > 0 ? 1 : r < 0 ? 0 : 1e3), this.handleToolAndMoney(i), this.showQuickTag(this._tupleData.TypeId === u.commonProto.GAME_CATEGORY.MTT && this._tupleData.PlayOnJoint > 0), this._tupleData.TypeId) {
                case u.commonProto.GAME_CATEGORY.GEN_PP:
                    this.choosePPLorBasePot(!1), this.showRank(!1), this.showGameIcon(h.GAME_ICON_ID.PINE_NORMAL);
                    break;
                case u.commonProto.GAME_CATEGORY.LOOP_PP:
                    this.choosePPLorBasePot(!1), this.showRank(!1), this.showGameIcon(h.GAME_ICON_ID.PINE_ROLL);
                    break;
                case u.commonProto.GAME_CATEGORY.MTT:
                    this.choosePPLorBasePot(!0), this.showRank(!0), this.showMTTIcon(this._tupleData.TournamentMode);
                    break;
                case u.commonProto.GAME_CATEGORY.SNG:
                    this.choosePPLorBasePot(!0), this.showRank(!1), this._tupleData.IsAofSng ? this.showGameIcon(h.GAME_ICON_ID.AOF) : this.showGameIcon(h.GAME_ICON_ID.SNG)
            }
        }
        handleTimeLabel(e) {
            return [e.getHours() < 10 ? "0" + e.getHours() : e.getHours(), e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(), e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds()]
        }
        choosePPLorBasePot(e) {
            this.basePotNum.node.parent.active = !e, this.pplNum.node.parent.active = e, e ? this.pplNum.string = this._tupleData.NumPlayers.toString() : this.basePotNum.string = m.getFeeLabel(this._tupleData.PPBasePot)
        }
        showQuickTag(e) {
            this.quickTag.active = e
        }
        showRank(e) {
            this.gameRank.node.parent.active = e, e && (this.gameRank.string = this._tupleData.Rank.toString())
        }
        showMoney(e, t) {
            this.benefitLabel.node.parent.active = e, e && (this.benefitLabel.node.getComponent(l).color = t > 0 ? (new c).fromHEX(h.SIGN_COLOR.POSITIVE) : t < 0 ? (new c).fromHEX(h.SIGN_COLOR.NEGATIVE) : c.WHITE, this.showBenefitSign(t > 0 ? 1 : t < 0 ? 0 : 1e3), this.benefitLabel.string = p.DisplayGold(Math.abs(t)).toString())
        }
        showBenefitSign(e) {
            for (let t = 0; t < this.benefitSign.length; t++) this.benefitSign[t].active = t === e
        }
        handleToolAndMoney(e) {
            let t = e.filter((e => e.ToolId == this._tupleData.PrizeTool))[0],
                i = this._tupleData.PrizeMoney + this._tupleData.JackPot;
            this.gameProp.node.active = !!t, t ? (this.gameProp.string = t.Name, i -= t.Value, i > 0 ? this.showMoney(!0, i) : this.showMoney(!1)) : this.showMoney(!0, i)
        }
        selectGameIcon(e) {
            for (let t = 0; t < this.gameIcon.length; t++) this.gameIcon[t].active = t === e
        }
        showGameIcon(e) {
            switch (e) {
                case h.GAME_ICON_ID.PINE_NORMAL:
                    this.selectGameIcon(0);
                    break;
                case h.GAME_ICON_ID.PINE_ROLL:
                    this.selectGameIcon(1);
                    break;
                case h.GAME_ICON_ID.PINE_COWBOY:
                    this.selectGameIcon(2);
                    break;
                case h.GAME_ICON_ID.SNG:
                    this.selectGameIcon(3);
                    break;
                case h.GAME_ICON_ID.AOF:
                    this.selectGameIcon(4);
                    break;
                case h.GAME_ICON_ID.MTT:
                    this.selectGameIcon(5);
                    break;
                case h.GAME_ICON_ID.MTT_HUNTER:
                    this.selectGameIcon(6);
                    break;
                case h.GAME_ICON_ID.MTT_SUPER_HUNTER:
                    this.selectGameIcon(7)
            }
        }
        showMTTIcon(e) {
            switch (e) {
                case u.commonProto.TOURNAMENT_MODE.HUNTER:
                    this.showGameIcon(h.GAME_ICON_ID.MTT_HUNTER);
                    break;
                case u.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    this.showGameIcon(h.GAME_ICON_ID.MTT_SUPER_HUNTER);
                    break;
                default:
                    this.showGameIcon(h.GAME_ICON_ID.MTT)
            }
        }
        onTupleClicked(e, t = !1, i = this._tupleData) {
            let o = new b("callHistoryDetail", !0);
            o.setUserData({
                tupleDataId: i.Id,
                skipAnimation: t,
                callback: e
            }), this.node.dispatchEvent(o)
        }
    }).prototype, "gameIcon", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), A = t(d.prototype, "quickTag", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(d.prototype, "gameName", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(d.prototype, "pplNum", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(d.prototype, "basePotNum", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(d.prototype, "coinNum", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(d.prototype, "dateLabel", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(d.prototype, "benefitLabel", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(d.prototype, "benefitSign", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), z = t(d.prototype, "gameProp", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(d.prototype, "gameRank", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = d)) || D));
    o._RF.pop()
}