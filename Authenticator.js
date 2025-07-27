import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cv.js";
import * as a from "./Enum.js";
import * as u from "./AnalyticsHandler.js";
import * as r from "./AuthenticationPopup.js";
import * as h from "./MTTConnector.js";

function main() {
    var l, p;
    e._RF.push({}, "2dbf7go3KVG2Y0kcfe1MgqN", "Authenticator", void 0);
    const {
        ccclass: c
    } = o;
    t("Authenticator", c("Authenticator")(((p = class t {
        constructor() {
            this.autoShowBuyInMTTById = null, this.autoShowBuyInSNG = null, this.autoShowTabInSelfView = null, this.autoShowCashier = null, this.autoShowSportsBook = null, this.autoShowInvite = null, this.autoShowMiniGamePopup = null, this.delayShowPromoPopup = !1, this.registerMessageHandlers()
        }
        registerMessageHandlers() {
            const t = i.MessageCenter;
            t.register(a.OnLoginSuccess, this.onLoginSuccess.bind(this), this), t.register(a.OnLoginSuccessActionsReq, this.onLoginSuccess.bind(this), this), t.register(h.instance.config.BroadCast.MTT_TOKEN_END, this.onMTTTokenEnd.bind(this), this), t.register("login_Lock", this.onLoginLock.bind(this), this)
        }
        static getInstance() {
            return t.instance || (t.instance = new t), t.instance
        }
        showLoginPopup(t = null) {
            i.authenticationPopup.showPopup({
                popupType: r.LOGIN,
                parentNode: t,
                closeCallback: () => {
                    i.dataHandler.getUserData().isTouristUser && this.resetAutoRedirectProperties()
                }
            })
        }
        showRegistrationPopup(t = null) {
            i.authenticationPopup.showPopup({
                popupType: r.REGISTER,
                parentNode: t,
                closeCallback: () => {
                    i.dataHandler.getUserData().isTouristUser && this.resetAutoRedirectProperties()
                }
            })
        }
        showForgetPasswordPopup() {
            i.authenticationPopup.showPopup({
                popupType: r.FORGOT_PASSWORD,
                closeCallback: () => {
                    i.dataHandler.getUserData().isTouristUser && this.resetAutoRedirectProperties()
                }
            })
        }
        logOutAndDoGuestLogin() {
            const t = () => {
                i.httpHandler.requestTouristLogin(null, null, !1)
            };
            i.SwitchLoadingView.show("", !1, !1, !1, !1, !0), i.dataHandler.getUserData().isLoggedIn() ? (u.getInstance().sendEvent(i.Enum.CurrentScreen.profile, i.Enum.segmentEvent.UserLoggedOut), i.netWorkManager.Logout(!0, null, i.Enum.LogOutReason.Manual, t, t)) : t()
        }
        onGuestLoginFails() {
            i.popUp.showMsg({
                title: i.config.getStringData("Get_User_Data_Error_Title"),
                txt: i.config.getStringData("Something_Went_Wrong"),
                msgType: i.Enum.ToastType.ToastTypeWarning,
                isTwoBtn: !0,
                sureLabel: i.config.getStringData("Hotupdate_retrybtn"),
                cancelLabel: i.config.getStringData("Close"),
                sureCallback: () => {
                    i.SwitchLoadingView.show("", !1, !1, !1, !1, !0), i.httpHandler.requestTouristLogin(null, null, !1)
                },
                cancelCallback: () => {
                    s.end()
                },
                onXCancelCallback: !0,
                showAboveLoadingView: !0
            })
        }
        onLoginSuccess(t) {
            var e;
            t || (i.dataHandler.getUserData().isTouristUser || null == (e = i.authenticationPopup) || e.hideAllPopup(!0))
        }
        onMTTTokenEnd() {
            if (!i.dataHandler.getUserData().isTouristUser) {
                if (this.autoShowBuyInMTTById > 0) {
                    const t = {
                        tournamentId: this.autoShowBuyInMTTById,
                        simulateRegisterClick: !0
                    };
                    i.appConfig.getLobbyConfig().useLobbyV2 ? i.MessageCenter.send("show_mtt_detail_in_hall", t) : i.MessageCenter.send("show_tournament_detail", t), this.delayShowPromoPopup = !0
                } else null !== this.autoShowBuyInSNG ? (i.MessageCenter.send("sng_show_buy_in_popup", this.autoShowBuyInSNG), this.delayShowPromoPopup = !0) : null !== this.autoShowTabInSelfView && n(this.autoShowTabInSelfView.selfView) ? this.autoShowTabInSelfView.selfView.performButtonAction(this.autoShowTabInSelfView.tabIndex) : this.autoShowCashier ? (i.MessageCenter.send("switchSceneToEarnView"), this.delayShowPromoPopup = !0) : this.autoShowSportsBook ? i.MessageCenter.send("jumpToSportsBook") : this.autoShowInvite && i.MessageCenter.send("jumpToInvite");
                this.autoShowMiniGamePopup > 0 && (this.delayShowPromoPopup = !0, i.MessageCenter.send(i.Enum.MessageCenterAction.OpenListMiniGamePopup, {
                    gameId: this.autoShowMiniGamePopup,
                    redirectAfterLogin: !0
                })), this.resetAutoRedirectProperties()
            }
        }
        resetAutoRedirectProperties() {
            this.autoShowBuyInMTTById = null, this.autoShowBuyInSNG = null, this.autoShowTabInSelfView = null, this.autoShowCashier = null, this.autoShowSportsBook = null, this.autoShowInvite = null, this.autoShowMiniGamePopup = null
        }
        onLoginLock(t) {
            i.popUp.showMsg({
                txt: t,
                msgType: i.Enum.ToastType.ToastTypeWarning,
                sureCallback: this.showForgetPasswordPopup.bind(this),
                isTwoBtn: !0,
                sureLabel: i.config.getStringData("OKAY"),
                cancelLabel: i.config.getStringData("Cancel")
            })
        }
        shouldDelayPromo() {
            return this.autoShowBuyInMTTById > 0 || null !== this.autoShowBuyInSNG || null !== this.autoShowCashier || this.autoShowMiniGamePopup > 0
        }
        showDelayedPromo() {
            this.delayShowPromoPopup && (this.delayShowPromoPopup = !1, i.MessageCenter.send("ShowPromoPopupAfterLogin"))
        }
    }).instance = null, l = p)) || l);
    e._RF.pop()
}