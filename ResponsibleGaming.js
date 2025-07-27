import * as i from "./cc.js";
import * as e from "./cv.js";
import * as n from "./ResponsibleGamingData.js";
import * as o from "./ResponsibleGamingData.js";
import * as s from "./ResponsibleGamingData.js";

function main() {
    i._RF.push({}, "9a7fcUDTrlNcbKRvY3LylPK", "ResponsibleGaming", void 0);
    var a = function(t) {
        return t[t.NotRequired = 0] = "NotRequired", t[t.Accepted = 1] = "Accepted", t[t.NotAccepted = 2] = "NotAccepted", t
    }(a || {});
    class u {
        static getInstance() {
            return u.instance || (u.instance = new u), u.instance
        }
        constructor() {
            this.limits = new s, this.rci = 0, this.maxSessionDurationMinutes = 0, this.blockDeposit = !1, this.cumulativeDepositCheck = null, this.pendingLimits = new Map, this.pendingLimitsTimeouts = [], this.pendingLimitsCullOff = 24, e.appConfig.getModulesConfig().rgStatus.rgEnabled && (e.MessageCenter.register(e.Enum.MessageCenterAction.OnLoginSuccess, this.init.bind(this), this), e.MessageCenter.register("onLogout", this.reset.bind(this), this))
        }
        init() {
            e.http.sendRequestV2(e.config.getStringData("WEB_API_RG_LIMITS", !0), {}, this.onGetLimitsSuccess.bind(this), null, e.http.HttpRequestType.GET), e.http.sendRequestV2(e.config.getStringData("WEB_API_RG_SESSION_DURATION", !0), {}, this.onGetSessionDurationSuccess.bind(this), null, e.http.HttpRequestType.GET), e.http.sendRequestV2(e.config.getStringData("WEB_API_RG_BLOCK_DEPOSIT", !0), {}, this.onGetBlockDepositSuccess.bind(this), null, e.http.HttpRequestType.GET), this.getCumulativeDepositCheck(!1), this.getPendingLimits()
        }
        reset() {
            this.limits = new s, this.rci = 0, this.maxSessionDurationMinutes = 0, this.blockDeposit = !1, this.cumulativeDepositCheck = null, this.pendingLimits.clear();
            for (let t in this.pendingLimitsTimeouts) clearTimeout(this.pendingLimitsTimeouts[t]);
            this.pendingLimitsTimeouts = []
        }
        getLimitCount() {
            let t = 0;
            return t += this.limits.limitsSetCount, this.rci > 0 && t++, this.maxSessionDurationMinutes > 0 && t++, 1 == this.blockDeposit && t++, t
        }
        onGetLimitsSuccess(t) {
            this.limits = n(t)
        }
        onGetSessionDurationSuccess(t) {
            this.maxSessionDurationMinutes = t[o.GameTime]
        }
        onGetRCISuccess(t) {
            this.rci = t.intervalMinutes
        }
        onGetBlockDepositSuccess(t) {
            this.blockDeposit = t
        }
        getCumulativeDepositCheck(t) {
            e.http.sendRequestV2(e.config.getStringData("WEB_API_RG_CUMULATIVE_DEPOSIT_CHECK", !0), {}, (i => {
                this.onGetCumulativeDepositCheck(i), t && this.checkCumulativeDeposit()
            }), null, e.http.HttpRequestType.GET)
        }
        onGetCumulativeDepositCheck(t) {
            this.cumulativeDepositCheck = t, this.cumulativeDepositCheck.status = a[t.status]
        }
        checkCumulativeDeposit(t) {
            null != this.cumulativeDepositCheck && this.cumulativeDepositCheck.status == a.NotAccepted && e.popUp.showMsg({
                txt: e.StringTools.formatC(e.config.getStringData("ResponsibleGaming_CumulativeDepositCheck_msg"), this.cumulativeDepositCheck.limit, this.cumulativeDepositCheck.currencySymbol),
                isTwoBtn: !0,
                sureCallback: () => {
                    this.confirmCumulativeDepositCheck(t)
                },
                cancelCallback: () => {
                    null == t || t(!1)
                },
                msgType: e.Enum.ToastType.ToastTypeDefault
            }), null == t || t(!0)
        }
        confirmCumulativeDepositCheck(t) {
            e.http.sendRequestV2(e.config.getStringData("WEB_API_RG_CUMULATIVE_DEPOSIT_CHECK", !0), {}, (i => {
                this.cumulativeDepositCheck.status = a.Accepted, null == t || t(!0)
            }), (i => {
                e.popUp.showFirstServerError(i), null == t || t(!1)
            }), e.http.HttpRequestType.POST)
        }
        getPendingLimits() {
            e.http.sendRequestV2(e.config.getStringData("WEB_API_RG_LIMITS_PENDING", !0), {}, this.onGetPendingLimits.bind(this), null, e.http.HttpRequestType.GET)
        }
        onGetPendingLimits(t) {
            if (null != t)
                for (let i in t) this.parseNewPendingLimit(t[i])
        }
        parseNewPendingLimit(t) {
            let i = e.tools.traverseObjGet(t, "update.createdAt");
            if (null == i) return;
            let s = new Date(i),
                n = (e.config.getTimeWithTimeZone().getTime() - e.config.getTimeWithTimeZone(s.getTime()).getTime()) / 1e3 / 60 / 60;
            n >= this.pendingLimitsCullOff ? this.showPendingConfirmation(t) : this.pendingLimitsTimeouts.push(setTimeout(this.showPendingConfirmation.bind(this, t), 60 * (this.pendingLimitsCullOff - n) * 60 * 1e3))
        }
        showPendingConfirmation(t) {
            this.pendingLimits.set(e.Number(t.update.updateId), t), e.popUp.showMsg({
                txt: this.getPendingMsg(t, "acceptance"),
                isTwoBtn: !0,
                sureCallback: this.respondePendingLimits.bind(this, t.update.updateId, !0),
                cancelCallback: this.respondePendingLimits.bind(this, t.update.updateId, !1),
                msgType: e.Enum.ToastType.ToastTypeWarning,
                sureLabel: e.config.getStringData("Confirm"),
                cancelLabel: e.config.getStringData("Reject")
            })
        }
        getPendingMsg(t, i) {
            let s = "";
            "acceptance" == i ? s = e.config.getStringData("ResponsibleGaming_PendingLimitAction") : "new" == i && (s = e.config.getStringData("ResponsibleGaming_NewPendingLimit"));
            let n = "",
                a = 0;
            t.limits[o.DayLimit] ? (a = t.limits[o.DayLimit], n = e.config.getStringData("daily")) : t.limits[o.WeekLimit] ? (a = t.limits[o.WeekLimit], n = e.config.getStringData("weekly")) : t.limits[o.MonthLimit] && (a = t.limits[o.MonthLimit], n = e.config.getStringData("monthly"));
            let u = e.config.getStringData(t.update.type).toLowerCase();
            return "acceptance" == i ? s = e.StringTools.formatC(s, n, u, a, e.dataHandler.getUserData().getCurrencySymbol()) : "new" == i && (s = e.StringTools.formatC(s, a, e.dataHandler.getUserData().getCurrencySymbol(), n, u, this.pendingLimitsCullOff, this.pendingLimitsCullOff)), s
        }
        respondePendingLimits(t, i) {
            let s = {
                updateId: t,
                apply: i
            };
            e.http.sendRequestV2(e.config.getStringData("WEB_API_RG_LIMITS_PENDING", !0), s, this.onRespondePendingLimits.bind(this, t, i), null, e.http.HttpRequestType.POST)
        }
        onRespondePendingLimits(t, i, s) {
            if (this.pendingLimits.has(t)) {
                let s = this.pendingLimits.get(t);
                if (i) {
                    let t = s.update.type;
                    s.limits[o.DayLimit] && (this.limits[t][o.DayLimit] = s.limits[o.DayLimit]), s.limits[o.WeekLimit] && (this.limits[t][o.WeekLimit] = s.limits[o.WeekLimit]), s.limits[o.MonthLimit] && (this.limits[t][o.MonthLimit] = s.limits[o.MonthLimit]), e.MessageCenter.send("rg_limits_updated")
                }
                this.pendingLimits.delete(t)
            }
        }
    }
    t("ResponsibleGaming", u), u.instance = void 0, i._RF.pop()
}