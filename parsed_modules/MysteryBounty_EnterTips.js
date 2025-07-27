import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./cc.js";
import * as E from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as a from "./cc.js";
import * as l from "./Translator.js";

function main() {
    var o, R, p, u, y, P, c, N, _, S;
    e._RF.push({}, "12566z0Jj9A1Kd8cHjgQFrT", "MysteryBounty_EnterTips", void 0);
    const {
        ccclass: h,
        property: M
    } = a;
    t("default", (o = M(n), R = M(s), p = M(s), u = M(s), h((c = r((P = class extends E {
        constructor(...t) {
            super(...t), i(this, "bg", c, this), i(this, "tip1", N, this), i(this, "tip2", _, this), i(this, "tip3", S, this)
        }
        showMysteryBountyEnterTips(t, r, i) {
            t && t.enterMysteryParam && (t.enterMysteryParam.circlePlayerCount ? (this.tip1.string = T.formatStr(l("MB.ENTERTIPS_ENTER_PLAYER_COUNT"), t.enterMysteryParam.circlePlayerCount), this.tip2.string = T.formatStr(l("MB.ENTERTIPS_CURRENT_PLAYER_COUNT"), t.curPlayer, t.allPlayer), this.tip3.string = T.formatStr(l("MB.ENTERTIPS.CURRENT_REWARD"), i)) : t.enterMysteryParam.leftPlayerCount ? (this.tip1.string = T.formatStr(l("MB.ENTERTIPS_ENTER_PLAYER_COUNT"), t.enterMysteryParam.leftPlayerCount), this.tip2.string = T.formatStr(l("MB.ENTERTIPS_CURRENT_PLAYER_COUNT"), t.curPlayer, t.allPlayer), this.tip3.string = T.formatStr(l("MB.ENTERTIPS.CURRENT_REWARD"), i)) : t.enterMysteryParam.blindLevel ? (this.tip1.string = T.formatStr(l("MB.ENTERTIPS_ENTER_BLIND_LEVEL"), t.enterMysteryParam.blindLevel), this.tip2.string = T.formatStr(l("MB.ENTERTIPS_CURRENT_BLIND_LEVEL"), t.curBlindLevel), this.tip3.string = T.formatStr(l("MB.ENTERTIPS.CURRENT_REWARD"), i)) : (this.tip1.string = l("MB.ENTERTIPS.TIPS_ONE"), this.tip2.string = l("MB.ENTERTIPS.TIPS_TOW"), this.tip3.string = T.formatStr(l("MB.ENTERTIPS.CURRENT_REWARD"), i)), r > t.curBlindLevel && (this.tip1.string = l("MB.ENTERTIPS.TIPS_ONE"), this.tip2.string = l("MB.ENTERTIPS.TIPS_TOW"), this.tip3.string = T.formatStr(l("MB.ENTERTIPS.CURRENT_REWARD"), i)), t.enterMysteryParam.day2 && (this.tip1.string = l("MB.ENTERTIPS.TIPS_DAY_TOW"), this.tip2.string = "", this.tip3.string = l("MB.ENTERTIPS.TIPS_EMPTY_BOUNTY")), this.node.active = !0)
        }
        hideMysteryBountyEnterTips() {
            this.node.active = !1
        }
    }).prototype, "bg", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = r(P.prototype, "tip1", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = r(P.prototype, "tip2", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = r(P.prototype, "tip3", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = P)) || y));
    e._RF.pop()
}