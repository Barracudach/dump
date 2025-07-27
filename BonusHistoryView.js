import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cv.js";
import * as a from "./RecordScrollViewBase.js";
import * as r from "./BonusHistoryEntry.js";
import * as u from "./FakeMultipleGame.js";
import * as c from "./MessageBroker.js";
import * as p from "./Enum.js";

function main() {
    var l;
    t._RF.push({}, "f16ee2oEIJFmLfhDq5Y/vvC", "BonusHistoryView", void 0);
    const {
        ccclass: g,
        property: b
    } = o;
    e("default", g(l = class extends a {
        onEnable() {
            super.onEnable(), i.appConfig.isLandscapeLayout || (i.MessageCenter.register("hall_bottom_lobby_button", this.onClickBack.bind(this, !0), this.node), i.MessageCenter.register("hall_bottom_profile_button", this.onClickBack.bind(this, !1), this.node)), i.appConfig.isWebApp && (i.MessageCenter.register(i.Enum.MessageCenterAction.onGoBack, (() => {
                i.tools.visiblePopupCount > 0 ? i.popUp.hidePopup() : this.onClickBack(!1)
            }).bind(this), this.node), i.MessageCenter.register("webApp_close_profile", (() => {
                i.tools.visiblePopupCount > 0 && i.popUp.hidePopup(), this.onClickBack(!0)
            }).bind(this), this.node))
        }
        init() {
            if (this.setRequestData(i.config.getStringData("WEB_API_BONUS_HISTORY", !0)), i.appConfig.isWebApp) {
                const e = s("top_panel/backNode", this.node);
                e && (e.active = !1)
            }
        }
        onDisable() {
            super.onDisable(), i.appConfig.isWebApp && i.MessageCenter.unregister(i.Enum.MessageCenterAction.onGoBack, this.node)
        }
        onGetDataSuccess(e) {
            let t = [];
            for (let n = 0; n < e.length; ++n) {
                var s = {
                    bonusName: e[n].bonusName,
                    description: e[n].description,
                    bonusPtsType: e[n].bonusPtsType,
                    bonusPtsVal: e[n].bonusPtsVal,
                    bonusPtsCoin: e[n].bonusPtsCoin,
                    bonusInstantCoin: e[n].bonusInstantCoin,
                    startDate: this.formDate("" + i.StringTools.formatTime(1e3 * e[n].createTime, p.Year_Month_Day, !0)),
                    expDate: this.formDate("" + i.StringTools.formatTime(1e3 * e[n].expireTime, p.Year_Month_Day, !0)),
                    maxBonusCoin: "" + e[n].totalAmount,
                    releasedBonusCoin: "" + e[n].realizedAmount,
                    bonusCode: e[n].bonusCode,
                    bonusPoints: e[n].bonusPoints ? e[n].bonusPoints.toString() : "-",
                    currency: e[n].currency || i.appConfig.getWalletConfig().defaultCurrency.type,
                    status: e[n].status ? e[n].status : "-"
                };
                let o = new r(s);
                o && t.push(o)
            }
            this.scrollView.reloadView(t, !0), this.noDataIcon.active = t.length <= 0
        }
        onGetDataFail(e) {
            i.popUp.showFirstServerError(e)
        }
        formDate(e) {
            if (!e || 10 != e.length) return n("incorrect date formate!"), "-";
            let t = "",
                s = e.substring(0, 4),
                o = e.substring(5, 7),
                a = e.substring(8, 10);
            return "0" == o.substring(0, 1) && (o = o.substring(1, 2)), "0" == a.substring(0, 1) && (a = a.substring(1, 2)), t = i.config.getStringData("MonthAbbrev" + o) + " " + a + ", " + s, t
        }
        onClickBack(e = !0) {
            var t;
            (super.onClickBack(e), this.showLogoBack(), i.appConfig.isLandscapeLayout) || (null == (t = u.instance) || t.moveHeaderToLeft())
        }
        showLogoBack() {
            i.appConfig.isWebApp ? c.getInstance().sendShowBackButton(!1) : i.MessageCenter.send(i.Enum.MessageCenterAction.EnableTopAppLogo)
        }
    }) || l);
    t._RF.pop()
}