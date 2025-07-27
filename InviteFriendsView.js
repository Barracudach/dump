import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as m from "./ScrollItem.js";
import * as g from "./Enum.js";
import * as h from "./Enum.js";
import * as b from "./cv.js";
import * as f from "./InviteFriendsItem.js";
import * as v from "./FakeMultipleGame.js";
import * as C from "./i18nText.js";
import * as w from "./DynamicPromoEnums.js";
import * as y from "./AnalyticsHandler.js";
import * as I from "./MessageBroker.js";
import * as B from "./Helpers2.js";
import * as E from "./Helpers2.js";
import * as A from "./MessageSender.js";
import * as L from "./CommonWebView.js";

function main() {
    var F, S, k, _, R, M, T, P, V, H, U, D, G, N, O, W, x, X, z, $, q, K, Y;
    i._RF.push({}, "5e79aoI2HJAIqwTGOaifi2H", "InviteFriendsView", void 0);
    const {
        ccclass: J,
        property: j
    } = l;
    let Q = e("InviteFriendsView", (F = j(r), S = j(r), k = j(m), _ = j(a), R = j(a), M = j(s), T = j(s), P = j(C), V = j(L), H = j(o), J(((Y = class e extends u {
            constructor(...e) {
                super(...e), n(this, "numOfFriendsLabel", G, this), n(this, "numOfRedeemsLabel", N, this), n(this, "friendItemList", O, this), n(this, "redeemBtn", W, this), n(this, "inviteBtn", x, this), n(this, "mxPesoBannerBG", X, this), n(this, "rowBannerBG", z, this), n(this, "rewardLabelI18n", $, this), n(this, "webViewComponent", q, this), n(this, "loaderText", K, this), this.selfView = null, this.redeemCurrencyType = g.USD, this.redeemAmount = 0, this.outStandingAmount = 0, this.getSummaryXHR = null, this.redeemXHR = null, this.URL_KEY = "WEB_INVITE_FRIEND", this.SCHEME_WEB = "invite"
            }
            static getSinglePrefabInst(t, n) {
                let i = n;
                return i || (i = d.getScene().children[0]), e.prefabInstant || (e.prefabInstant = c(t)), i.getChildByUuid(e.prefabInstant.uuid) || p(e.prefabInstant, !0) || (e.prefabInstant = c(t)), e.prefabInstant
            }
            onEnable() {
                y.getInstance().sendEvent(b.Enum.CurrentScreen.inviteFriends, b.Enum.segmentEvent.ScreenOpened, b.Enum.Functionality.invite), b.appConfig.isMX && this.rewardLabelI18n && (this.rewardLabelI18n.textKey = "selfview_InviteFriends_Reward_Text_mexico"), this.friendItemList.setItemFunc(0, ((e, t) => {
                    let n = e.getComponent(f);
                    n.SetAvatar(t.avatarUrl), n.setUserName(t.nickname), n.setUserId("" + t.uid);
                    let i = b.Number(e.name) % 2 == 0;
                    n.setBackground(i)
                })), this.loadFriendList(), b.MessageCenter.register(w.LoadInviteInfo, this.onBtnLearnMoreClick.bind(this), this.node), b.appConfig.isWebApp && (b.MessageCenter.register(b.Enum.MessageCenterAction.onGoBack, (() => {
                    b.tools.visiblePopupCount > 0 ? b.popUp.hidePopup() : this.onBtnBackClick()
                }).bind(this), this.node), b.MessageCenter.register("webApp_close_profile", (() => {
                    b.tools.visiblePopupCount > 0 && b.popUp.hidePopup(), this.goBack(!0)
                }).bind(this), this.node)), b.appConfig.getGeneralConfig().enableInviteFriend && this.setWebviewUrl()
            }
            start() {
                this.redeemBtn.interactable = !1, this.numOfFriendsLabel.string = "0", this.numOfRedeemsLabel.string = this.outStandingAmount.toString(), b.appConfig.isMX ? this.mxPesoBannerBG && this.rowBannerBG && (this.mxPesoBannerBG.active = !0, this.rowBannerBG.active = !1) : this.mxPesoBannerBG && this.rowBannerBG && (this.mxPesoBannerBG.active = !1, this.rowBannerBG.active = !0)
            }
            onDisable() {
                b.MessageCenter.unregister(w.LoadInviteInfo, this.node), b.appConfig.isWebApp && (b.MessageCenter.unregister(b.Enum.MessageCenterAction.onGoBack, this.node), b.MessageCenter.unregister("webApp_close_profile", this.node))
            }
            onDestroy() {
                var e, t;
                this.getSummaryXHR && 4 != this.getSummaryXHR.readyState && "function" == typeof this.getSummaryXHR.abort && (null == (e = this.getSummaryXHR) || e.abort()), this.redeemXHR && 4 != this.redeemXHR.readyState && "function" == typeof this.redeemXHR.abort && (null == (t = this.redeemXHR) || t.abort())
            }
            onBtnInviteFriendsClick() {
                b.AudioMgr.playButtonSound("button_click.mp3"), b.appConfig.isWebApp ? A.sendMessage({
                    sourceApp: B.Poker,
                    targetApp: B.WebApp,
                    eventType: E.NavigatorShare,
                    payload: {
                        title: b.appConfig.getAppTitle(),
                        text: b.dataHandler.getUserData().referralCode,
                        url: b.dataHandler.getUserData().referralInviteLink
                    }
                }) : this.selfView && this.selfView.onBtnInviteFriendsClick(null)
            }
            onBtnLearnMoreClick() {
                b.AudioMgr.playButtonSound("button_click.mp3"), b.native.openUrl(b.appConfig.getUserProfileConfig().InviteFriendsWebsite_url)
            }
            onBtnRedeemNowClick() {
                b.AudioMgr.playButtonSound("button_click.mp3"), this.loadRedeem()
            }
            onBtnBackClick() {
                b.AudioMgr.playButtonSound("back_button.mp3"), this.showLogoBack(), this.goBack()
            }
            showLogoBack() {
                b.appConfig.isWebApp ? I.getInstance().sendShowBackButton(!1) : b.MessageCenter.send(b.Enum.MessageCenterAction.EnableTopAppLogo)
            }
            goBack(e = !1) {
                var t;
                b.appConfig.isLandscapeLayout || (!0 === e ? (this.node.destroy(), b.MessageCenter.send(b.Enum.MessageCenterAction.OnBackFromInviteFriend)) : (b.action.showAction(this.node, b.action.eMoveActionDir.EMAD_TO_RIGHT, b.action.eMoveActionType.EMAT_FADE_OUT, b.action.delay_type.NORMAL, ((e, t) => {}), ((e, t) => {
                    e.destroy(), b.MessageCenter.send(b.Enum.MessageCenterAction.OnBackFromInviteFriend)
                })), b.appConfig.isLandscapeLayout || null == (t = v.instance) || t.moveHeaderToLeft()))
            }
            loadRedeem() {
                let e = {
                    amount: this.redeemAmount,
                    currency: this.redeemCurrencyType
                };
                this.redeemBtn.interactable = !1;
                let t = b.config.getStringData("REDEEM_INVITE_FRIEND_API", !0);
                this.redeemXHR = b.http.sendRequestV2(t, e, this.onLoadRedeemSuccess.bind(this), this.onLoadRedeemFailed.bind(this), b.http.HttpRequestType.POST)
            }
            onLoadRedeemSuccess(e) {
                p(this.node, !0) && (this.outStandingAmount = this.outStandingAmount - this.redeemAmount, this.resetRedeemValue())
            }
            onLoadRedeemFailed(e) {
                p(this.node, !0) && (b.popUp.showFirstServerError(e), this.resetRedeemValue())
            }
            loadFriendList() {
                let e = b.config.getStringData("GET_INVITE_FRIEND_SUMMARY_API", !0);
                this.getSummaryXHR = b.http.sendRequestV2(e, null, this.onLoadFriendListSuccess.bind(this), this.onLoadFriendListFailed.bind(this), b.http.HttpRequestType.GET)
            }
            onLoadFriendListSuccess(e) {
                p(this.node, !0) && (this.numOfFriendsLabel.string = e.invitees.length, this.outStandingAmount = e.claimableAmount, this.resetRedeemValue(), this.redeemAmount = this.outStandingAmount, this.redeemCurrencyType = e.currency, this.friendItemList.changeItemData(e.invitees, !0))
            }
            onLoadFriendListFailed(e) {
                p(this.node, !0) && b.popUp.showMsgI18n({
                    txt: "Invite_Friend_Fetch_error",
                    iconType: b.Enum.PopUpIconType.Warning,
                    msgType: b.Enum.ToastType.ToastTypeError
                })
            }
            resetRedeemValue() {
                Number.isInteger(this.outStandingAmount) ? this.numOfRedeemsLabel.string = this.outStandingAmount.toString() : this.numOfRedeemsLabel.string = this.outStandingAmount.toFixed(2).toString(), this.redeemBtn.interactable = this.outStandingAmount > 0
            }
            static onNativeInviteFriendsCallback(t) {
                console.log("[InviteFriendsView] => onNativeInviteFriendsCallback(): ", t), e.inviteFriendP2PEvent(Z.OtherAnyMobileApp, t.toString())
            }
            static inviteFriendP2PEvent(e, t) {
                let n = {
                    item: e.toString()
                };
                switch (e) {
                    case Z.OtherAnyMobileApp:
                        n.item = t, y.getInstance().sendEvent(b.Enum.CurrentScreen.referAFriend, b.Enum.segmentEvent.Clicked, b.Enum.Functionality.P2P, n);
                        break;
                    case Z.CopyButton:
                        y.getInstance().sendEvent(b.Enum.CurrentScreen.referAFriendInvitation, b.Enum.segmentEvent.Clicked, b.Enum.Functionality.P2P, n);
                        break;
                    case Z.InviteButton:
                        y.getInstance().sendEvent(b.Enum.CurrentScreen.invite, b.Enum.segmentEvent.Clicked, b.Enum.Functionality.P2P, n);
                        break;
                    default:
                        y.getInstance().sendEvent(b.Enum.CurrentScreen.referAFriend, b.Enum.segmentEvent.Clicked, b.Enum.Functionality.P2P, n)
                }
            }
            _getInviteFriendWebUrl() {
                this.setCashierLoadingMsg("...");
                const e = b.config.getStringData(this.URL_KEY, !0),
                    t = this._convertLangaugeCode(b.config.getCurrentLanguage()),
                    n = b.appConfig.isLandscapeLayout ? "desktop" : "mobile";
                return `${e}/?languageCode=${t}&wptgId=${b.dataHandler.getUserData().user_id}&nickName=${b.dataHandler.getUserData().nick_name}&referralCode=${b.dataHandler.getUserData().referralCode}&deviceType=${n}`
            }
            setWebviewUrl() {
                var e, t, n;
                const i = this._getInviteFriendWebUrl();
                null == (e = this.webViewComponent) || e.reset(i), null == (t = this.webViewComponent) || t.setSchemeName(this.SCHEME_WEB), null == (n = this.webViewComponent) || n.webView.setOnJSCallback(((e, t) => {
                    this.webGameCallback(t)
                }))
            }
            onWebViewLoaded(e) {
                var t;
                console.log("----webView---loaded----URL : " + (null == e ? void 0 : e._url)), null != (t = this.webViewComponent) && t.isWebViewLoaded && this.scheduleOnce((() => {
                    var e, t;
                    null == (e = this.webViewComponent) || null == (e = e.baseImg) || e.cleanImage(), null == (t = this.webViewComponent) || t.setShouldShowWebview(!0)
                }), 1)
            }
            setCashierLoadingMsg(e, t = !0) {
                this.loaderText && (this.loaderText.string = t ? b.config.getStringData("Loading") + " " + e : b.config.getStringData(e, !1, e))
            }
            _convertLangaugeCode(e) {
                switch (e) {
                    case h.zh_CN:
                    case h.zh_TW:
                        return "zh";
                    case h.es_MX:
                        return "es";
                    case h.fr_CA:
                        return "fr";
                    case h.pt_BR:
                        return "pt";
                    case h.vi_VN:
                        return "vn";
                    case h.th_TH:
                        return "th";
                    case h.pl_PL:
                        return "pl";
                    case h.fi_FI:
                        return "fi";
                    case h.ko_KR:
                        return "kr";
                    default:
                        return "en"
                }
            }
            webGameCallback(e) {
                e && "string" == typeof e ? this.webViewComponent.eventFromWebView(e) : warn("data send from webview should be string")
            }
        }).prefabInstant = null, G = t((D = Y).prototype, "numOfFriendsLabel", [F], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), N = t(D.prototype, "numOfRedeemsLabel", [S], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), O = t(D.prototype, "friendItemList", [k], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), W = t(D.prototype, "redeemBtn", [_], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), x = t(D.prototype, "inviteBtn", [R], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), X = t(D.prototype, "mxPesoBannerBG", [M], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), z = t(D.prototype, "rowBannerBG", [T], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), $ = t(D.prototype, "rewardLabelI18n", [P], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), q = t(D.prototype, "webViewComponent", [V], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), K = t(D.prototype, "loaderText", [H], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), U = D)) || U)),
        Z = e("EventP2PPropertiesItem", function(e) {
            return e.InviteButton = "inviteButton", e.Email = "email", e.Message = "message", e.Facebook = "facebook", e.Twitter = "twitter", e.Telegram = "telegram", e.KakaoTalk = "kakaoTalk", e.Link = "link", e.CopyButton = "copyButton", e.OtherAnyMobileApp = "AnyMobileApp", e
        }({}));
    window.NativeInviteFriendsCallback = Q.onNativeInviteFriendsCallback, i._RF.pop()
}