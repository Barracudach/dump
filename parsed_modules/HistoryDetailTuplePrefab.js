import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./Pb.js";
import * as p from "./mttconfig.js";
import * as f from "./NodePage.js";
import * as m from "./FormatParser.js";

function main() {
    var b, g, y, d, _, v, I, P, w, D, M, E, T, A, N, R, C, O;
    o._RF.push({}, "e70cbDQqLJHEZJ3a0ErJk5a", "HistoryDetailTuplePrefab", void 0);
    const {
        ccclass: G,
        property: S
    } = s;
    t("HistoryDetailTuplePrefab", (b = S([a]), g = S(n), y = S(r), d = S(r), _ = S(r), v = S([a]), I = S(r), P = S(r), G((M = e((D = class extends u {
        constructor(...t) {
            super(...t), i(this, "cupIcon", M, this), i(this, "avatar", E, this), i(this, "playerName", T, this), i(this, "out", A, this), i(this, "bounty", N, this), i(this, "benefitSign", R, this), i(this, "benefit", C, this), i(this, "gameProp", O, this), this._tupleId = 0, this._tupleData = null, this._avatarUrl = "", this._defaultIcon = void 0
        }
        onDestroy() {
            f.releaseImage(this._avatarUrl)
        }
        onLoad() {
            this._defaultIcon = this.avatar.spriteFrame
        }
        start() {}
        showCup(t, e) {
            if (this.cupIcon[0].parent.active = t, t)
                if (e > 0 && e <= 3)
                    for (let t = 0; t < this.cupIcon.length; t++) this.cupIcon[t].active = t === e;
                else {
                    this.cupIcon[0].active = !0, this.cupIcon[0].getComponent(r).string = e.toString();
                    for (let t = 1; t < this.cupIcon.length; t++) this.cupIcon[t].active = !1
                }
        }
        showMoney(t, e) {
            this.benefit.node.parent.active = t, t && (this.benefit.node.getComponent(l).color = e > 0 ? (new h).fromHEX(p.SIGN_COLOR.POSITIVE) : e < 0 ? (new h).fromHEX(p.SIGN_COLOR.NEGATIVE) : new h(h.WHITE), this.showBenefitSign(e > 0 ? 1 : e < 0 ? 0 : 1e3), this.benefit.string = m.DisplayGold(Math.abs(e)).toString())
        }
        showBenefitSign(t) {
            for (let e = 0; e < this.benefitSign.length; e++) this.benefitSign[e].active = e === t
        }
        showPrize(t) {
            if (this._tupleData.PrizeToolId) {
                let e = t.find((t => t.ToolId === this._tupleData.PrizeToolId));
                this.gameProp.node.active = !!e, e ? (this.gameProp.string = e.Name, e.Value < Math.floor(this._tupleData.ResultMoney) ? this.showMoney(!0, this._tupleData.ResultMoney - e.Value) : this.showMoney(!1)) : this.showMoney(!0, this._tupleData.ResultMoney)
            } else this.gameProp.node.active = !1, this.showMoney(!0, this._tupleData.ResultMoney)
        }
        showOut(t) {
            if (t) {
                let e = Math.abs(this._tupleData.JoinStatus);
                this.out.node.parent.active = e > 1 ? t : !t, e > 1 && (this.out.string = (e - 1).toString())
            } else this.out.node.parent.active = t
        }
        showPlayerAttributes(t) {
            const {
                TOURNAMENT_MODE: e
            } = c.commonProto;
            if (t.TypeId === c.commonProto.GAME_CATEGORY.MTT) switch (t.TournamentMode) {
                case e.SUPER_HUNTER:
                    this.bounty.node.active = !0, this.bounty.string = `${f.roundCoins(this._tupleData.Bounty)}`;
                    break;
                case e.HUNTER:
                    this.bounty.node.active = !0, this.bounty.string = `${this._tupleData.Wins}/${f.roundCoins(this._tupleData.Bounty)}`;
                    break;
                default:
                    this.bounty.node.active = !1
            } else this.bounty.node.active = !1
        }
        setInfo(t, e, i, o, a) {
            switch (this._tupleId = e, this._tupleData = t, this.playerName.node.getComponent(l).color = t.UserId === cc_mtt.vv.DataManager.userId ? h.WHITE : (new h).fromHEX("#9B9B9B"), t.UserId === cc_mtt.vv.DataManager.userId ? this.playerName.string = cc_mtt.vv.DataManager.userData.Nickname : this.playerName.string = this._tupleData.Nickname, this.avatar.spriteFrame = this._defaultIcon, this._avatarUrl = cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.getAvatarId(t.Avatar, t.UserId), {
                    isThumbnails: !0,
                    timestamp: t.UserId === cc_mtt.vv.DataManager.userId ? Date.now() : null
                }), this.showPlayerAttributes(i), a > 0 ? this.showMoney(!0, a) : this.showPrize(o), i.TypeId) {
                case c.commonProto.GAME_CATEGORY.GEN_PP:
                case c.commonProto.GAME_CATEGORY.LOOP_PP:
                    this.showCup(!1), this.showOut(!1);
                    break;
                case c.commonProto.GAME_CATEGORY.MTT:
                    this.showCup(!0, this._tupleData.Rank), this.showOut(!0);
                    break;
                case c.commonProto.GAME_CATEGORY.SNG:
                case c.commonProto.GAME_CATEGORY.SNG_AOF:
                    this.showCup(!0, this._tupleData.Rank), this.showOut(!0)
            }
        }
    }).prototype, "cupIcon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), E = e(D.prototype, "avatar", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(D.prototype, "playerName", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(D.prototype, "out", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(D.prototype, "bounty", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(D.prototype, "benefitSign", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), C = e(D.prototype, "benefit", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(D.prototype, "gameProp", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = D)) || w));
    o._RF.pop()
}