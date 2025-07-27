import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cv.js";
import * as y from "./ValidateEmail.js";
import * as S from "./LegalDocInfo.js";
import * as T from "./UserProfileConfig.js";
import * as k from "./DocumentAgreement.js";
import * as C from "./ConnectionTracing.js";
import * as w from "./DesignSystemButtonBase.js";
import * as _ from "./DesignSystemButtonBase.js";
import * as B from "./FakeMultipleGame.js";
import * as v from "./ResponsibleGamingLoader.js";
import * as M from "./i18nText.js";
import * as L from "./NativeEvent.js";
import * as E from "./MessageBroker.js";
import * as D from "./DropDownField.js";
import * as A from "./ThemeSystemType.js";

function main() {
    var N, I, G, P, V, F, H, O, R, z, U, W, x, Y, K, q, Z, j, J, Q, X, $, tt, et, it, ot, nt, at, st, lt, gt, ct, rt, ht, ut, pt, dt, bt, mt, ft, yt, St, Tt, kt, Ct, wt, _t, Bt, vt, Mt, Lt;
    o._RF.push({}, "8837e+69pZPqJNY96uxt1nn", "SystemSetting", void 0);
    const {
        ccclass: Et,
        property: Dt
    } = c;
    t("SystemSetting", (N = Dt(n), I = Dt(a), G = Dt(s), P = Dt(s), V = Dt(l), F = Dt(l), H = Dt(l), O = Dt(l), R = Dt({
        type: n,
        tooltip: "assets->prefab->lobby->hall->LegalDocInfo"
    }), z = Dt({
        type: n
    }), U = Dt(g), W = Dt(w), x = Dt(w), Y = Dt(a), K = Dt(a), q = Dt(l), Z = Dt(l), j = Dt(l), J = Dt(l), Q = Dt(l), X = Dt(l), $ = Dt(l), tt = Dt(g), et = Dt(l), Et(((Lt = class t extends r {
        constructor(...t) {
            super(...t), i(this, "prefab_validateEmail", nt, this), this._inst_validateEmail = null, i(this, "emailValidCheckMark", at, this), i(this, "btn_back", st, this), i(this, "vBtns", lt, this), i(this, "soundSwitchToggle", gt, this), i(this, "emailSwitchToggle", ct, this), i(this, "smsSwitchToggle", rt, this), i(this, "loginNotifySwitchToggle", ht, this), i(this, "prefab_legalDocInfo", ut, this), this._inst_legalDocInfo = null, i(this, "prefab_DocViewer", pt, this), this.docViewer = null, i(this, "versionNum", dt, this), this.propagateTogglesEvents = !0, this.KYCPolicyURL = null, i(this, "generalTab", bt, this), i(this, "gameplayTab", mt, this), i(this, "generalSettingsLayout", ft, this), i(this, "gameplaySettingsLayout", yt, this), i(this, "gameplaySoundSwitchToggle", St, this), i(this, "gameplayBBSwitchToggle", Tt, this), i(this, "gameplayGlobalSpinBackgroundToggle", kt, this), i(this, "gameplayMuckLosingHandsToggle", Ct, this), i(this, "autoFocusSwitchToggle", wt, this), i(this, "giftFestivalMessageDisplayToggle", _t, this), i(this, "darkModeSwitchToggle", Bt, this), i(this, "muckLosingHandsLabel", vt, this), i(this, "throwableAnimationDisplayToggle", Mt, this), this.languageDropDown = null
        }
        static getSinglePrefabInst(e, i) {
            let o = i;
            return o || (o = h.getScene().getComponentInChildren(u).node), t._g_prefabInst || (t._g_prefabInst = p(e)), o.getChildByUuid(t._g_prefabInst.uuid) || d(t._g_prefabInst, !0) || (t._g_prefabInst = p(e)), t._g_prefabInst
        }
        onLoad() {
            if (this.registerCallbacks(), this.docViewer = this.createDocViewer(), this.generalTab.btnState = _.pressed, this.generalTab.isChecked = !0, this.generalSettingsLayout.active = !0, this.gameplayTab.btnState = _.normal, this.gameplayTab.isChecked = !1, this.gameplaySettingsLayout.active = !1, f.appConfig.isWebApp) {
                this.btn_back && (this.btn_back.node.active = !1, this.btn_back.node.parent.active = !1);
                const t = b("panel/languageSet/Registration_country", this.generalSettingsLayout);
                t ? this.languageDropDown = t.getComponent(D) : m("[WebApp] the language node in setting is not found")
            }
        }
        onGeneralTabClick() {
            this.generalSettingsLayout.active || (this.generalTab.btnState = _.pressed, this.generalTab.isChecked = !0, this.generalSettingsLayout.active = !0, this.gameplayTab.btnState = _.normal, this.gameplayTab.isChecked = !1, this.gameplaySettingsLayout.active = !1)
        }
        onGamplayTabClick() {
            this.gameplaySettingsLayout.active || (this.generalTab.btnState = _.normal, this.generalTab.isChecked = !1, this.generalSettingsLayout.active = !1, this.gameplayTab.btnState = _.pressed, this.gameplayTab.isChecked = !0, this.gameplaySettingsLayout.active = !0)
        }
        createDocViewer() {
            return f.action.addChildToScene(this, this.prefab_DocViewer, [], f.Enum.ZORDER_TYPE.ZORDER_TOP, !0).getComponent(k)
        }
        showDocViewer(t, e) {
            this.docViewer.init(t, e)
        }
        registerCallbacks() {
            this.btn_back && this.btn_back.node.on("click", this._onClickBtnBack, this), this.vBtns[4].node.active = f.appConfig.getUserProfileConfig().showLogOutAt(T.UserProfileSettings);
            for (let t = 0; t < this.vBtns.length; ++t) this.vBtns[t].node.on("click", (e => {
                this._onClickBtns(t, e)
            }), this);
            this.soundSwitchToggle.node.on("toggle", this.onSoundSwitchToggled, this), this.emailSwitchToggle.node.on("toggle", this.onEmailSwitchToggled, this), this.smsSwitchToggle.node.on("toggle", this.onSmsSwitchToggled, this), this.loginNotifySwitchToggle.node.on("toggle", this.onLoginNotifySwitchToggled, this), this.gameplaySoundSwitchToggle.node.on("toggle", this.onSoundSwitchToggled, this), this.gameplayBBSwitchToggle.node.on("toggle", this.onGameplayBBSwitchToggled, this), this.gameplayGlobalSpinBackgroundToggle.node.on("toggle", this.onGameplayGlobalSpinBackgroundSwitchToggled, this), this.giftFestivalMessageDisplayToggle.node.on("toggle", this.onGiftFestivalMessageDisplayToggled, this), this.gameplayMuckLosingHandsToggle.node.on("toggle", this.onGameplayMuckLosingHandsSwitchToggled, this), this.throwableAnimationDisplayToggle.node.on("toggle", this.onThrowableAnimationDisplayToggled.bind(this), this), f.appConfig.isLandscapeLayout || (this.autoFocusSwitchToggle.node.on("toggle", this.onAutoFocusSwitchToggled, this), this.darkModeSwitchToggle.node.on("toggle", this.onDarkModeToggled, this)), this.gameplayMuckLosingHandsToggle.node.parent.active = f.appConfig.getLobbyConfig().enableMuckLosingHands
        }
        onEnable() {
            this.emailValidCheckMark.activeInHierarchy && (this.emailValidCheckMark.active = !1, f.dataHandler.getUserData().isEmailValid(this.emailValidCallback.bind(this))), f.appConfig.isLandscapeLayout || (f.MessageCenter.register("hall_bottom_lobby_button", this._onClickBtnBack.bind(this, !0), this.node), f.MessageCenter.register("hall_bottom_profile_button", this._onClickBtnBack.bind(this, !1), this.node)), f.appConfig.isWebApp && (f.MessageCenter.register(f.Enum.MessageCenterAction.onGoBack, (() => {
                var t;
                f.tools.visiblePopupCount > 0 ? f.popUp.hidePopup() : null != (t = this.languageDropDown) && t.isShown ? this.languageDropDown.hide() : this._onClickBtnBack(!1)
            }).bind(this), this.node), f.MessageCenter.register("webApp_close_profile", (() => {
                var t;
                null != (t = this.languageDropDown) && t.isShown && this.languageDropDown.hide(), this._onClickBtnBack(!0)
            }).bind(this), this.node))
        }
        start() {
            this.loadStateFromCache(), this.getNotificationSettings(), this.versionNum.string = f.config.GET_CLIENT_VERSION(), this.KYCPolicyURL = f.config.getStringData("WEB_KYC_POLICY", !0), this.vBtns[9] && (this.vBtns[9].node.active = null != this.KYCPolicyURL && this.KYCPolicyURL.length > 0), this.initConfig(), this.initSettingPH()
        }
        initConfig() {
            const t = f.appConfig.getUserProfileConfig();
            this.vBtns[7].node.active = t.tcEnabled, this.vBtns[8].node.active = t.ppEnabled, this.vBtns[9].node.active = t.kycEnabled, this.vBtns[10].node.active = f.appConfig.getGeneralConfig().responsibleGamingBtnEnabled
        }
        initSettingPH() {
            f.appConfig.isPH && this.muckLosingHandsLabel && (this.muckLosingHandsLabel.getComponent(M).enabled = !1, this.muckLosingHandsLabel.string = f.StringTools.formatC(f.config.getStringData("Setting_Muck_Hands_Title_PH")))
        }
        loadStateFromCache() {
            this.propagateTogglesEvents = !1, this.soundSwitchToggle.isChecked = f.tools.isSoundEffectOpen(), this.emailSwitchToggle.isChecked = f.tools.isEmailNotificationOn(), this.smsSwitchToggle.isChecked = f.tools.isSmsNotificationOn(), this.loginNotifySwitchToggle.isChecked = f.tools.isLoginNotificationOn(), this.gameplaySoundSwitchToggle.isChecked = f.tools.isSoundEffectOpen(), this.gameplayBBSwitchToggle.isChecked = f.tools.isGameplayBBChoice(), this.gameplayGlobalSpinBackgroundToggle.isChecked = f.tools.isGameplayGSMultiplierBackground(), this.giftFestivalMessageDisplayToggle.isChecked = f.tools.isGiftFestivalMessageDisplay(), this.gameplayMuckLosingHandsToggle.isChecked = f.tools.isGameplayMuckLosingHands(), this.throwableAnimationDisplayToggle.isChecked = f.tools.isThrowableAnimationDisplay(), f.appConfig.isLandscapeLayout || (this.autoFocusSwitchToggle.isChecked = f.tools.isAutoFocusOnMobile(), this.darkModeSwitchToggle.isChecked = f.appConfig.getDesignConfig().isDarkModeActive), this.propagateTogglesEvents = !0
        }
        emailValidCallback(t) {
            this.emailValidCheckMark.active = t
        }
        getNotificationSettings() {
            let t = f.config.getStringData("WEB_API_USER_NOTIFICATIONS", !0);
            f.http.sendRequestV2(t, {}, this.onNotificationsReceived.bind(this), this.onGetNotificationsError.bind(this), f.http.HttpRequestType.GET)
        }
        onNotificationsReceived(t) {
            this.propagateTogglesEvents = !1, null != t.useEmail && (this.emailSwitchToggle.isChecked = t.useEmail, f.tools.setEmailNotification(t.useEmail)), null != t.useSms && (this.smsSwitchToggle.isChecked = t.useSms, f.tools.setSmsNotification(t.useSms)), null != t.sendLoginNotification && (this.loginNotifySwitchToggle.isChecked = t.sendLoginNotification, f.tools.setLoginNotification(t.sendLoginNotification)), this.propagateTogglesEvents = !0
        }
        onGetNotificationsError(t) {
            this.loadStateFromCache()
        }
        setNotificationSettings() {
            let t = {
                    useEmail: this.emailSwitchToggle.isChecked,
                    useSms: this.smsSwitchToggle.isChecked,
                    sendLoginNotification: this.loginNotifySwitchToggle.isChecked
                },
                e = f.config.getStringData("WEB_API_USER_NOTIFICATIONS", !0);
            f.http.sendRequestV2(e, t, this.onNotificationsSet.bind(this), this.onSetNotificationsError.bind(this), f.http.HttpRequestType.POST)
        }
        onNotificationsSet(t) {
            f.tools.setEmailNotification(this.emailSwitchToggle.isChecked), f.tools.setSmsNotification(this.smsSwitchToggle.isChecked), f.tools.setLoginNotification(this.loginNotifySwitchToggle.isChecked)
        }
        onSetNotificationsError(t) {
            this.loadStateFromCache(), f.popUp.showFirstServerError(t)
        }
        _onClickBtnBack(t = !1) {
            let e;
            var i;
            (1 == t ? e = f.action.delay_type.INSTANT : (e = f.action.delay_type.NORMAL, t.node && "backBtn" == t.node._name && f.AudioMgr.playButtonSound("back_button.mp3")), this.showLogoBack(), f.action.showAction(this.node, f.action.eMoveActionDir.EMAD_TO_RIGHT, f.action.eMoveActionType.EMAT_FADE_OUT, e, ((t, e) => {}), ((t, e) => {})), f.appConfig.isLandscapeLayout) || (null == (i = B.instance) || i.moveHeaderToLeft())
        }
        showLogoBack() {
            f.appConfig.isWebApp ? E.getInstance().sendShowBackButton(!1) : f.MessageCenter.send(f.Enum.MessageCenterAction.EnableTopAppLogo)
        }
        _onClickBtns(t, e) {
            switch (t) {
                case 4:
                    this.onLogoutBtnClicked();
                    break;
                case 5:
                    this.onEmailValidateBtnClicked();
                    break;
                case 6:
                    this.onLegalDocBtnClicked();
                    break;
                case 7:
                    this.onTermOfServiceBtnClicked();
                    break;
                case 8:
                    this.onPrivacyPolicyBtnClicked();
                    break;
                case 9:
                    this.onKYCPolicyBtnClicked();
                    break;
                case 10:
                    this.onResponsibleGamingBtnClicked()
            }
        }
        onLogoutBtnClicked() {
            f.AudioMgr.playButtonSound("button_click.mp3"), f.popUp.showMsgI18n({
                txt: "ToastMessage10",
                isTwoBtn: !0,
                sureCallback: this._onLoginOut.bind(this)
            })
        }
        onEmailValidateBtnClicked() {
            if (f.AudioMgr.playButtonSound("button_click.mp3"), this.emailValidCheckMark.active) f.popUp.showMsgI18n({
                txt: "ValidateEmail_already_validated",
                msgType: f.Enum.ToastType.ToastTypeInfo
            });
            else {
                this._inst_validateEmail || (this._inst_validateEmail = y.getSinglePrefabInst(this.prefab_validateEmail)), this._inst_validateEmail.getComponent(y).backNode = this.node, f.action.showActionBothLeft(this._inst_validateEmail, this.node)
            }
        }
        onLegalDocBtnClicked() {
            f.AudioMgr.playButtonSound("button_click.mp3"), this._inst_legalDocInfo || (this._inst_legalDocInfo = S.getSinglePrefabInst(this.prefab_legalDocInfo)), this._inst_legalDocInfo.getComponent(S).backNode = this.node, f.action.showActionBothLeft(this._inst_legalDocInfo, this.node)
        }
        onTermOfServiceBtnClicked() {
            f.AudioMgr.playButtonSound("button_click.mp3"), this.showDocViewer({
                TermsAndConditions: null
            }, !1)
        }
        onPrivacyPolicyBtnClicked() {
            f.AudioMgr.playButtonSound("button_click.mp3"), this.showDocViewer({
                PrivacyPolicy: null
            }, !1)
        }
        onKYCPolicyBtnClicked() {
            f.AudioMgr.playButtonSound("button_click.mp3"), f.native.openUrl(this.KYCPolicyURL)
        }
        onGamingLicenseBtnClicked() {
            f.AudioMgr.playButtonSound("button_click.mp3"), f.native.openUrl("https://licensing.gaming-curacao.com/getcode/?lh=4a0f784644b741a5f7bd7e30691da2f3")
        }
        onResponsibleGamingBtnClicked() {
            f.AudioMgr.playButtonSound("button_click.mp3"), v.getInstance().load()
        }
        _onLoginOut() {
            C.hasInstance() && C.getInstance().endSession("manualLogout"), f.netWorkManager.Logout(!0, null, f.Enum.LogOutReason.Manual)
        }
        onDarkModeToggled(t) {
            if (this.propagateTogglesEvents) {
                f.AudioMgr.playButtonSound("button_click.mp3");
                const e = f.appConfig.getDesignConfig().getThemeIndex(A.WPTODark),
                    i = f.appConfig.getDesignConfig().getThemeIndex(A.WPTO);
                f.appConfig.getDesignConfig().themeUseIndex = t.isChecked ? e : i, L.changeWebviewBGColor(f.tools.getWebViewHexColor())
            }
        }
        onSoundSwitchToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), f.tools.setSoundEffect(t.isChecked)), t.isChecked ? f.AudioMgr.resumeAll() : f.AudioMgr.pauseAll()
        }
        onEmailSwitchToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), this.setNotificationSettings())
        }
        onSmsSwitchToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), this.setNotificationSettings())
        }
        onLoginNotifySwitchToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), this.setNotificationSettings())
        }
        onDisable() {
            f.appConfig.isLandscapeLayout || (f.MessageCenter.unregister("hall_bottom_lobby_button", this.node), f.MessageCenter.unregister("hall_bottom_profile_button", this.node)), f.appConfig.isWebApp && (f.MessageCenter.unregister(f.Enum.MessageCenterAction.onGoBack, this.node), f.MessageCenter.unregister("webApp_close_profile", this.node))
        }
        onGameplaySoundSwitchToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), f.tools.setGameplaySoundEffect(t.isChecked))
        }
        onGameplayBBSwitchToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), f.tools.setGameplayBBChoice(t.isChecked), f.MessageCenter.send(f.Enum.MessageCenterAction.changedBBGameplaySetting))
        }
        onGameplayMuckLosingHandsSwitchToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), f.tools.setGameplayMuckLosingHands(t.isChecked), f.MessageCenter.send(f.Enum.MessageCenterAction.changedMuckHandsSetting))
        }
        onGameplayGlobalSpinBackgroundSwitchToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), f.tools.setGameplayGSMultiplierBackground(t.isChecked), f.MessageCenter.send(f.Enum.MessageCenterAction.changedGSMultiplierBackgroundSetting))
        }
        onGiftFestivalMessageDisplayToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), f.tools.setGiftFestivalMessageDisplay(t.isChecked))
        }
        onAutoFocusSwitchToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), f.tools.setAutofocusOnMobile(t.isChecked), t.isChecked || f.popUp.showMsgI18n({
                txt: "Setting_AutoFocus_Toggle_popup_text",
                msgType: f.Enum.ToastType.ToastTypeWarning,
                sureLabel: "OK"
            }))
        }
        onThrowableAnimationDisplayToggled(t) {
            this.propagateTogglesEvents && (f.AudioMgr.playButtonSound("button_click.mp3"), f.tools.setThrowableAnimationDisplay(t.isChecked), f.appConfig.isLandscapeLayout && f.popUp.showMsg({
                txt: f.config.getStringData("RejoinTableMessage"),
                msgType: f.Enum.ToastType.ToastTypeInfo
            }))
        }
    })._g_prefabInst = null, nt = e((ot = Lt).prototype, "prefab_validateEmail", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(ot.prototype, "emailValidCheckMark", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(ot.prototype, "btn_back", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(ot.prototype, "vBtns", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), gt = e(ot.prototype, "soundSwitchToggle", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(ot.prototype, "emailSwitchToggle", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(ot.prototype, "smsSwitchToggle", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(ot.prototype, "loginNotifySwitchToggle", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(ot.prototype, "prefab_legalDocInfo", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(ot.prototype, "prefab_DocViewer", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(ot.prototype, "versionNum", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(ot.prototype, "generalTab", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(ot.prototype, "gameplayTab", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ot.prototype, "generalSettingsLayout", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(ot.prototype, "gameplaySettingsLayout", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ot.prototype, "gameplaySoundSwitchToggle", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(ot.prototype, "gameplayBBSwitchToggle", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(ot.prototype, "gameplayGlobalSpinBackgroundToggle", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(ot.prototype, "gameplayMuckLosingHandsToggle", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(ot.prototype, "autoFocusSwitchToggle", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(ot.prototype, "giftFestivalMessageDisplayToggle", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(ot.prototype, "darkModeSwitchToggle", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(ot.prototype, "muckLosingHandsLabel", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(ot.prototype, "throwableAnimationDisplayToggle", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = ot)) || it));
    o._RF.pop()
}