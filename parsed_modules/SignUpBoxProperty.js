import * as e from "./cc.js";
import * as i from "./CrashTracing.js";
import * as o from "./CrashTracing.js";
import * as n from "./cv.js";
import * as s from "./mttconfig.js";
import * as r from "./Pb.js";
import * as l from "./FormatParser.js";
import * as a from "./LobbyTools.js";

function main() {
    e._RF.push({}, "bc36bT6+35JtaaKAzBYGxjT", "SignUpBoxProperty", void 0);
    class c {
        constructor(t, e, g, h = s.SIGN_UP_OPTIONS.all, u = null, p = null, f = [], O = "GOLD", y, T = 0, C = 0, d = 0, ...I) {
            if (this.popUpName = "", this.regFee = 0, this.gameId = 0, this.goldOption = !0, this.toolOption = !0, this.targetToolIds = [], this._tools = [], this.showTimer = 0, this.eventName = "", this.startDate = null, this.joinStatus = 0, this.playOnJoint = 0, this.currency = a.GOLDCOIN, this.displayCurrency = a.GOLDCOIN, this.exchangeRate = null, this.startingScore = 0, this.regType = 0, this.popUpName = t, this.regFee = l.DisplayGold(e), this.gameId = g, this.currency = n.appConfig.getWalletConfig().convertStringToCurrencyType(u), this.currency == a.None && (this.currency = a.CNY), this.displayCurrency = n.appConfig.getWalletConfig().convertStringToCurrencyType(O), this.displayCurrency == a.None && (this.displayCurrency = n.appConfig.getWalletConfig().defaultCurrency.type), this.exchangeRate = y, [this.goldOption, this.toolOption, this.targetToolIds] = c.getSignUpOptions(h), o.hasInstance() && (o.getInstance().startSpan(i.BuyIn), o.getInstance().addEventToSpan(i.BuyIn, "start popup", {
                    gameId: g,
                    regFee: e,
                    signUpOption: h,
                    convertCurrency: this.currency,
                    currency: u,
                    invitationCode: p,
                    exchangeRate: y
                })), this.toolOption) {
                this._tools = this.getToolsByGameId(g, e, this.toolOption && this.goldOption, this.targetToolIds, p, f);
                let t = "";
                this.tools.forEach((e => {
                    t += JSON.stringify(e) + ";"
                })), o.hasInstance() && o.getInstance().addEventToSpan(i.BuyIn, "tickets", {
                    filterTicket: t
                }), this._tools = this._tools.sort(((t, e) => {
                    let o = 864e13,
                        i = 864e13;
                    return t.Expiry && (o = t.Expiry.getTime()), e.Expiry && (i = e.Expiry.getTime()), o - i
                })), this._tools = this._tools.sort(((t, e) => {
                    let o = t.Config.ForId.indexOf(p),
                        i = e.Config.ForId.indexOf(p);
                    return o < i ? 1 : o > i ? -1 : 0
                })), f.length > 0 && (this._tools = this._tools.sort(((t, e) => {
                    let o = -1,
                        i = -1;
                    return t.Config.Tag && (o = f.indexOf(t.Config.Tag)), e.Config.Tag && (i = f.indexOf(e.Config.Tag)), i - o
                }))), this.gameId !== r.commonProto.GAME_CATEGORY.MTT && this.gameId !== r.commonProto.GAME_CATEGORY.COW_BOY && (this._tools = this._tools.slice(0, 3))
            } else this._tools = [];
            this.showTimer = T, this.startingScore = C, this.regType = d, this.startDate = I.length > 0 ? I[0] : null, this.eventName = I.length > 1 ? I[1] : "", this.joinStatus = I.length > 2 ? I[2] : 0, this.playOnJoint = I.length > 3 ? I[3] : 0
        }
        get tools() {
            return this._tools
        }
        static getSignUpOptions(t) {
            let e, o, i = [];
            if ((t = t.toLowerCase()).search(s.SIGN_UP_OPTIONS.all) >= 0) e = o = !0;
            else if (e = t.search(s.SIGN_UP_OPTIONS.gold) >= 0, t.search(s.SIGN_UP_OPTIONS.specific) >= 0) {
                var n;
                o = !0;
                let e = t.indexOf(s.SIGN_UP_OPTIONS.specific + ":"),
                    r = null == (n = t.slice(e + 1).match(/mtt:((a92|a93):\d+,*)+/g)) || null == (n = n.toString()) ? void 0 : n.slice(4);
                if (r)
                    for (let t of r.split(",")) {
                        let e = "";
                        t.indexOf(":") >= 0 && (e = t.split(":")[1]);
                        let o = parseFloat(e);
                        isNaN(o) || i.push(o)
                    }
            } else o = t.search(s.SIGN_UP_OPTIONS.tool) >= 0, o || e || (e = !0);
            return [e, o, i]
        }
        checkHasSameToolId(t, e) {
            for (let o of t)
                if (o == e) return !0;
            return !1
        }
        checkHasSameCurrency(t) {
            return t == this.displayCurrency || t == a.GOLDCOIN && this.displayCurrency == a.CNY || this.displayCurrency == a.GOLDCOIN && null == t
        }
        getToolsByGameId(t, e, o, i, n, a) {
            let c = [],
                g = [],
                h = cc_mtt.vv.DataManager.backPackTool;
            0 == i.length && (g = a.length > 0 ? h.filter((t => null == t.Config.Tag || a.indexOf(t.Config.Tag) >= 0)) : h.filter((t => null == t.Config.Tag)));
            let u = l.DisplayGold(e);
            if (t == r.commonProto.GAME_CATEGORY.COW_BOY) return h.filter((e => e.Config.ForCategory.indexOf(t) >= 0 && e.Type !== r.commonProto.TOOL_TYPE.coupon));
            if (i.length > 0) {
                if (t == s.GAME_TO_TOOL_ID.AOF) c = h.filter((t => t.Config.Aof && this.checkHasSameToolId(i, t.ToolId)));
                else {
                    cc_mtt.vv.DataManager.getNow();
                    c = h.filter((e => {
                        let o = l.DisplayGold(e.Value) == u,
                            n = e.Config.ForCategory.indexOf(t) >= 0,
                            s = this.checkHasSameCurrency(e.Currency),
                            r = this.checkHasSameToolId(i, e.ToolId);
                        return o && n && s && r
                    }).bind(this))
                }
                return c
            }
            return c = t == s.GAME_TO_TOOL_ID.AOF ? h.filter((t => t.Config.Aof && t.Value == e || o && t.Type == r.commonProto.TOOL_TYPE.coupon)) : g.filter((e => {
                let i = l.DisplayGold(e.Value) == u,
                    s = e.Config.ForCategory.indexOf(t) >= 0,
                    a = !e.Config.ForId || 0 == e.Config.ForId.length || e.Config.ForId.length > 0 && e.Config.ForId.indexOf(n) >= 0,
                    c = this.checkHasSameCurrency(e.Currency) || o && e.Type == r.commonProto.TOOL_TYPE.coupon;
                return i && s && c && a
            }).bind(this)), c
        }
    }
    t("SignUpBoxProperty", c), e._RF.pop()
}