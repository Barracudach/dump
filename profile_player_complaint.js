import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./SlideView.js";
import * as u from "./Enum.js";
import * as p from "./i18nText.js";
import * as h from "./SingletonPrefab.js";
import * as c from "./cv.js";
import * as d from "./FreshchatHandler.js";

function main() {
    var m, g, b, C, f, y, _, L, S, R, v, D, w, N, P, A, E, F, k, B, T, H, G, M, O, U, K, z, I, Y, V, x, q;
    i._RF.push({}, "4309dC8/TtMdaiMC+skNgOk", "profile_player_complaint", void 0);
    const {
        ccclass: W,
        property: Q
    } = l;
    e("profile_player_complaint", (m = Q(a), g = Q(a), b = Q(a), C = Q(a), f = Q(a), y = Q(o), _ = Q(o), L = Q(o), S = Q(o), R = Q(o), v = Q(o), D = Q(o), w = Q(p), N = Q(o), P = Q(o), W(((q = class e extends h {
        constructor(...e) {
            super(...e), n(this, "phone", F, this), n(this, "email", k, this), n(this, "emailPaymentRelated", B, this), n(this, "emailForKYCDocuments", T, this), n(this, "emailForResponsibleGaming", H, this), n(this, "CustomerServiceNode", G, this), n(this, "PaymentRelatedNode", M, this), n(this, "KYCDocumentsNode", O, this), n(this, "ResponsibleGamingNode", U, this), n(this, "PaymentRelatedLineBreak", K, this), n(this, "KYCDocumentsLineBreak", z, this), n(this, "ResponsibleGamingLineBreak", I, this), n(this, "FaqButtonNameLabel", Y, this), n(this, "bottomLayout", V, this), n(this, "freshChatBtnPNode", x, this), this._handleMainEntrance = !1, this._slideView = null
        }
        static show(t, n, i = null) {
            if (e.closeCallback = i, c.appConfig.getGeneralConfig().helpLine.useCustomWebPage) return c.httpHandler.getCustom(), void setTimeout((() => {
                null == e.closeCallback || e.closeCallback()
            }), 1e3);
            e.getSinglePrefabInst(t, n).getComponent(e).show()
        }
        onLoad() {
            this._slideView = this.getComponent(s)
        }
        onEnable() {
            var e, t, n, i, a;
            this.phone.string = (null == (e = c.dataHandler.helpLineData) || null == (e = e.phone) ? void 0 : e.name) || "", this.email.string = (null == (t = c.dataHandler.helpLineData) || null == (t = t.email) ? void 0 : t.name) || "", this.emailPaymentRelated.string = (null == (n = c.dataHandler.helpLineData) || null == (n = n.emailPaymentRelated) ? void 0 : n.name) || "", this.emailForKYCDocuments.string = (null == (i = c.dataHandler.helpLineData) || null == (i = i.emailForKYCDocuments) ? void 0 : i.name) || "", this.emailForResponsibleGaming.string = (null == (a = c.dataHandler.helpLineData) || null == (a = a.emailForResponsibleGaming) ? void 0 : a.name) || "", this.FaqButtonNameLabel.setKey(c.appConfig.getGeneralConfig().playerSupportLiveChat ? "FAQ_button_text_LiveChat" : "FAQ_button_text"), this.freshChatBtnPNode && (this.freshChatBtnPNode.active = !c.dataHandler.getUserData().isTouristUser && c.appConfig.getGeneralConfig().enableFreshchat && !c.appConfig.getGeneralConfig().playerSupportLiveChat), this.showOrHideBottomLayout()
        }
        onDisable() {
            c.tools.triggerPopupHideEvent()
        }
        showOrHideBottomLayout() {
            this.bottomLayout.active = c.appConfig.getGeneralConfig().showPlayerSupportBottomLayout, this.CustomerServiceNode && (this.CustomerServiceNode.active = this.email.string.length > 0), this.PaymentRelatedNode && (this.PaymentRelatedNode.active = this.emailPaymentRelated.string.length > 0, this.PaymentRelatedLineBreak && (this.PaymentRelatedLineBreak.active = this.PaymentRelatedNode.active)), this.KYCDocumentsNode && (this.KYCDocumentsNode.active = this.emailForKYCDocuments.string.length > 0, this.KYCDocumentsLineBreak && (this.KYCDocumentsLineBreak.active = this.PaymentRelatedNode.active)), this.ResponsibleGamingNode && (this.ResponsibleGamingNode.active = this.emailForResponsibleGaming.string.length > 0, this.ResponsibleGamingLineBreak && (this.ResponsibleGamingLineBreak.active = this.PaymentRelatedNode.active))
        }
        show(e = !1) {
            c.tools.triggerPopupShowEvent(), this._handleMainEntrance = e, c.config.getCurrentScene() == c.Enum.SCENE.HALL_SCENE && e && c.MessageCenter.send("hide_mail_entrance", !0), this.showScreenAnim()
        }
        showScreenAnim() {
            this._slideView ? this._slideView.show(!1, this.onHideFinish.bind(this)) : c.action.showAction(this.node, c.action.eMoveActionDir.EMAD_TO_LEFT, c.action.eMoveActionType.EMAT_FADE_IN)
        }
        hide() {
            c.action.showAction(this.node, c.action.eMoveActionDir.EMAD_TO_RIGHT, c.action.eMoveActionType.EMAT_FADE_OUT, c.action.delay_type.NORMAL, ((e, t) => {}), ((e, t) => {
                this.onHideFinish()
            }))
        }
        hidePanel() {
            this._slideView ? this._slideView.hide() : this.hide()
        }
        goBack() {
            c.AudioMgr.playButtonSound("close.mp3"), this.hidePanel()
        }
        onHideFinish() {
            c.config.getCurrentScene() == c.Enum.SCENE.HALL_SCENE && this._handleMainEntrance && c.MessageCenter.send("show_mail_entrance", !0), null == e.closeCallback || e.closeCallback()
        }
        onEmail(e, t) {
            c.AudioMgr.playButtonSound("button_click.mp3");
            let n = c.dataHandler.helpLineData.email.value;
            switch (t) {
                case "kyc-documents":
                    n = c.dataHandler.helpLineData.emailForKYCDocuments.name;
                    break;
                case "responsible-gaming":
                    n = c.dataHandler.helpLineData.emailForResponsibleGaming.name;
                    break;
                case "payment-query":
                    n = c.dataHandler.helpLineData.emailPaymentRelated.name;
                    break;
                case "customer-care":
                default:
                    n = c.dataHandler.helpLineData.email.value
            }
            r.openURL("mailto:" + n)
        }
        onPhone() {
            c.AudioMgr.playButtonSound("button_click.mp3"), r.openURL("tel:" + c.dataHandler.helpLineData.phone.value)
        }
        static openChat() {
            let t, n = "";
            r.isNative && r.os === r.OS.ANDROID ? t = 1 : r.isNative && r.os === r.OS.IOS ? t = 2 : r.isBrowser ? t = 0 : r.os === r.OS.WINDOWS ? t = 5 : r.os === r.OS.OSX && (t = 4), n = c.dataHandler.getUserData().isLoggedIn() && !c.dataHandler.getUserData().isTouristUser ? c.config.getStringData("API_POST_CHAT_URL_FOR_LOGGEDIN_USER", !0) : c.config.getStringData("API_POST_CHAT_URL_FOR_GUEST_USER", !0);
            let i = {
                props: {
                    deviceType: t.toString(),
                    websiteType: (0).toString()
                },
                platform: "PKW/WPTG",
                languageCode: e.getCurrentChatLanguage()
            };
            c.http.sendRequestV2(n, i, (e => {
                c.native.openUrl(e.payload.url)
            }), (e => {
                e && 10000155 == e.code ? c.popUp.showMsgI18n({
                    txt: "CHAT_SERVICES_NOT_AVAILABLE",
                    sureLabel: "OKAY"
                }) : c.popUp.showMsgI18n({
                    txt: "ErrorUnknown",
                    msgType: c.Enum.ToastType.ToastTypeMalformedResponse
                })
            }), c.http.HttpRequestType.POST, c.http.HttpParseType.NONE, !1, !1, !1, null, !0)
        }
        onFaqButtonClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), e.openSupport()
        }
        static openSupport() {
            c.appConfig.getGeneralConfig().playerSupportLiveChat ? e.openChat() : c.native.openUrl(c.appConfig.getGeneralConfig().FAQ_url)
        }
        static getCurrentChatLanguage() {
            let e = u.en_US;
            const t = c.config.getCurrentLanguage();
            return t.toString() in u && (e = u[t]), e
        }
        onFreshChatBtnClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), this.hidePanel(), d.getInstance().expandFreshChat()
        }
    }).closeCallback = null, F = t((E = q).prototype, "phone", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(E.prototype, "email", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(E.prototype, "emailPaymentRelated", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(E.prototype, "emailForKYCDocuments", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(E.prototype, "emailForResponsibleGaming", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(E.prototype, "CustomerServiceNode", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(E.prototype, "PaymentRelatedNode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(E.prototype, "KYCDocumentsNode", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(E.prototype, "ResponsibleGamingNode", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(E.prototype, "PaymentRelatedLineBreak", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(E.prototype, "KYCDocumentsLineBreak", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(E.prototype, "ResponsibleGamingLineBreak", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(E.prototype, "FaqButtonNameLabel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(E.prototype, "bottomLayout", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(E.prototype, "freshChatBtnPNode", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = E)) || A));
    i._RF.pop()
}