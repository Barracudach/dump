import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as S from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as y from "./cv.js";
import * as v from "./RegisterForm.js";
import * as C from "./RichTextClickHandler.js";
import * as x from "./DocumentAgreement.js";
import * as I from "./RegisterPage.js";
import * as P from "./i18nText.js";
import * as T from "./BranchSDKHandler.js";
import * as D from "./Tools.js";
import * as E from "./AppsflyerSDKHandler.js";
import * as B from "./DeeplinksDataHandler.js";
import * as F from "./borderGraphic.js";
import * as R from "./ColorSystemType.js";
import * as V from "./ColorSystemTypeOther.js";
import * as w from "./ColorSystemWeight.js";
import * as A from "./AnalyticsHandler.js";
import * as L from "./Enum.js";
import * as k from "./Enum.js";
import * as N from "./Enum.js";
import * as O from "./Enum.js";
import * as M from "./NativeEvent.js";
import * as H from "./StringUtils.js";
import * as j from "./NotifyMsg.js";

function main() {
    var U, K, _, G, W, z, X, q, J, Y, Q, Z, $, ee, te, ie, se, ne, oe, re, ae, le, he, ge, ce;
    s._RF.push({}, "cccbesBOK1Fv4eXueDi/y6F", "RegisterScene", void 0);
    const {
        ccclass: me,
        property: de
    } = a;
    e("default", (U = de([n]), K = de([n]), _ = de(o), G = de({
        type: o
    }), W = de({
        type: o
    }), z = de({
        type: o
    }), X = de({
        type: r
    }), q = de({
        type: P
    }), J = de(n), Y = de(n), Q = de(n), me(((ce = class e extends l {
        constructor(...e) {
            super(...e), i(this, "pages", ee, this), i(this, "formsParents", te, this), i(this, "registerFormPrefab", ie, this), i(this, "docViewerPage", se, this), i(this, "gamingEnforcementFormPage", ne, this), i(this, "registerPagePrefab", oe, this), i(this, "backButton", re, this), i(this, "backLable", ae, this), i(this, "bannerNode", le, this), i(this, "registrationProgressBar", he, this), i(this, "disclaimerText", ge, this), this.registrationSchema = {}, this._formIndex = 0, this.forms = [], this.objValues = null, this.docViewer = null, this.termsStepPage = null, this.getSchemaXhr = null, this.registerPage = null, this.vCodeField = null
        }
        get formIndex() {
            return this._formIndex
        }
        set formIndex(e) {
            const t = this._formIndex < e,
                i = this._formIndex != e;
            this._formIndex = e, this.updateBackButtonLabel(), i && this.updateCurrentProgressBarStep(t)
        }
        getFormIndex() {
            return this.formIndex
        }
        updateBackButtonLabel() {
            this.backLable && (this.formIndex <= 0 ? this.backLable.setKey("LoginBtnText", !0) : this.backLable.setKey("Back", !0))
        }
        getCurrentFormName() {
            return this.formIndex >= 0 && this.formIndex < this.forms.length ? this.forms[this.formIndex].formName : ""
        }
        onLoad() {
            y.config.adaptScreen(this.node), y.resMgr.adaptWidget(this.node, !0, !1), this.showMXDesclaimerText(), this.pages.length <= 0 && this.initForm()
        }
        onEnable() {
            e.isCurrentView = !0, y.MessageCenter.register(y.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccess.bind(this), this.node), y.MessageCenter.register(y.Enum.MessageCenterAction.SwitchFromRegisterToLogin, this.goBack.bind(this), this.node), y.MessageCenter.register(y.Enum.MessageCenterAction.onUpdateRegisterNextButton, this.updateRegisterNextButton.bind(this), this.node), this.updateBackButtonLabel(), this.pages.length <= 0 && this.initForm(), M.setReceiveAttributionDataReady()
        }
        onDisable() {
            e.isCurrentView = !1, y.MessageCenter.unregister(y.Enum.MessageCenterAction.OnLoginSuccess, this.node), y.MessageCenter.unregister(y.Enum.MessageCenterAction.SwitchFromRegisterToLogin, this.node), y.MessageCenter.unregister(y.Enum.MessageCenterAction.onUpdateRegisterNextButton, this.node)
        }
        onDestroy() {
            y.dataHandler.getUserData().isOpenUpdateUserMode = !1
        }
        initForm() {
            this.getSchemaXhr && this.getSchemaXhr.readyState !== XMLHttpRequest.DONE || (this.objValues = y.httpHandler.getDefaultRegistrationObj(), this.getSchema(), this.getLegalDocsV())
        }
        getSchema() {
            if (y.appConfig.getRegistrationConfig().useLocalSchema) this.onSchemaSuccess(y.appConfig.getRegistrationConfig().localSchema);
            else {
                let e = y.config.getStringData("WEB_API_GET_REGISTRATION_CONFIG", !0);
                this.getSchemaXhr = y.http.sendRequestV2(e, {}, this.onSchemaSuccess.bind(this), this.onSchemaFailed.bind(this), y.http.HttpRequestType.GET, y.http.HttpParseType.NONE, !1, !1, !0, null, !0)
            }
        }
        getLegalDocsV() {
            let e = y.appConfig.getRegistrationConfig().legalDocs,
                t = y.appConfig.getRegistrationConfig().legalDocsNamePrefix;
            for (let i = 0; i < e.length; i++) {
                t && !e[i].startsWith(t) ? this.objValues.legalDocuments.push({
                    name: t + e[i]
                }) : this.objValues.legalDocuments.push({
                    name: e[i]
                });
                let s = y.httpHandler.getLegalDocsURL(e[i]);
                y.http.sendRequestV2(s, {}, this.onDocLoaded.bind(this), null, y.http.HttpRequestType.GET)
            }
        }
        onSchemaSuccess(e) {
            h(this.node, !0) && (null != e ? (this.registrationSchema = e, this.buildRegistrationForm()) : this.node.activeInHierarchy && (this.goBack(), y.popUp.showMsgI18n({
                txt: "Register_Scene_empty_schema",
                msgType: y.Enum.ToastType.ToastTypeWarning
            })))
        }
        onSchemaFailed(e) {
            h(this.node, !0) && this.node.activeInHierarchy && (this.goBack(), y.popUp.isNodeActive(!1) || y.popUp.showFirstServerError(e))
        }
        formParentsAddChild(e, t) {
            this.formsParents[e].addChild(t)
        }
        handleRegisterForm(e, t) {}
        buildRegistrationForm() {
            let e = new g;
            e.target = this.node, e.component = "RegisterScene", e.handler = "openPage", this.removeAllForms();
            let t = this.registrationSchema;
            for (let i = 0, s = t.length; i < s; i++) {
                let n = t[i],
                    o = n.fields.some((e => H.isSameString(e.name, "email") || H.isSameString(e.name, "phone")));
                for (let e = 0; e < i; e++) {
                    let i = t[e];
                    for (let e = n.fields.length - 1; e >= 0; e--)
                        if (!0 === i.fields.some((t => t.name == n.fields[e].name))) {
                            if ((H.isSameString(n.fields[e].name, "code") || H.isSameString(n.fields[e].name, "verificationCode")) && o) continue;
                            n.fields.splice(e, 1)
                        }
                }
                let r = c(this.registerFormPrefab).getComponent(v);
                r.init(n), r.node.getComponentsInChildren(C).forEach((t => {
                    t.onOpenPage.push(e)
                }));
                let a = c(this.registerPagePrefab).getComponent(I),
                    l = 0;
                if (h(this.bannerNode) && (l = this.bannerNode.getComponent(m).height + 60), h(this.registrationProgressBar) && t.length > 1 && (l += this.registrationProgressBar.getComponent(m).height + 24, h(this.bannerNode) && (l -= 45)), (h(this.bannerNode) || h(this.registrationProgressBar) && t.length > 1) && (a.formParent.getComponent(d).paddingTop = l, D.forceUpdateLayout(a.formParent)), a.alreadyHaveAccount && (a.alreadyHaveAccount.active = 0 == i), a.legalDocsPlaceHolder) {
                    let e = r.fields.find((e => "acceptLegalDocs" == e.schemaKey));
                    e && (e.node.parent = a.legalDocsPlaceHolder);
                    let t = r.fields.find((e => "verifyToken" == e.schemaKey));
                    if (t) {
                        const e = t.node.getPosition();
                        t.node.parent = a.legalDocsPlaceHolder;
                        if (t.node.getComponent(u)) t.getComponent(u).bottom = 60;
                        else {
                            const i = t.node.getComponent(m);
                            t.node.setPosition(new f(e.x, i.height * i.anchorY + 30, e.z))
                        }
                    }
                }
                let g = i == s - 1;
                this.processPage(r, a, e, g), this.handleRegisterForm(i, r), this.forms.push(r), this.formParentsAddChild(i, r.node), y.resMgr.adaptWidget(r.node, !0, !1), this.adaptRichText(this.pages[i]), this.applySupportForForm(i, r)
            }
            if (this.initializeRegistrationSteps(), this.hideAllSteps(), this.formIndex = 0, 0 == this.forms.length ? y.popUp.showMsgI18n({
                    txt: "Register_Scene_empty_schema",
                    sureCallback: this.goBack.bind(this),
                    msgType: y.Enum.ToastType.ToastTypeWarning
                }) : this.showRegistrationForm(), null != y.dataHandler.getUserData().registrationData) {
                for (let e = 0; e < this.forms.length; e++)
                    if (0 == e) Object.assign(this.objValues, y.dataHandler.getUserData().registrationData[this.forms[e].formName]), this.forms[e].populate(this.objValues);
                    else {
                        let t = Object.assign({}, this.objValues);
                        Object.assign(t, y.dataHandler.getUserData().registrationData[this.forms[e].formName]), this.forms[e].populate(t)
                    } y.dataHandler.getUserData().registrationData = null
            }
        }
        processPage(e, t, i, s) {
            this.node.addChild(t.node), "termsOfService" == e.formName && (y.appConfig.getRegistrationConfig().canSelectAllAtOnce && t.selectAll.node.on("toggle", this.onSelectAllCheck, this), t.richTextHandlers.forEach((e => {
                e.onOpenPage.push(i)
            }))), this.backButton.node.on(r.EventType.CLICK, this.previousStep, this), t.nextButton.node.on(r.EventType.CLICK, this.nextStep, this), this.pages.push(t.node), this.formsParents.push(t.formParent), e.titleKey || e.subTitleKey ? (e.titleKey && t.title && t.title.getComponent(P).setKey(e.titleKey), e.subTitleKey && t.subTitle && t.subTitle.getComponent(P).setKey(e.subTitleKey)) : this.addTitlesToForm(e, t, s)
        }
        hideAllSteps() {
            for (let e = 0; e < this.pages.length; e++) this.pages[e].active = !1
        }
        addTitlesToForm(e, t, i) {
            t.title && t.title.getComponent(P).setKey("Registration"), i ? (this.registerPage = t, t.textBtnConfirmValid && t.textBtnConfirmValid.setKey("RegisterBtnText"), t.textBtnConfirmInValid && t.textBtnConfirmInValid.setKey("RegisterBtnText")) : (t.textBtnConfirmValid && t.textBtnConfirmValid.setKey("NextBtnText"), t.textBtnConfirmInValid && t.textBtnConfirmInValid.setKey("NextBtnText"))
        }
        applySupportForForm(e, t) {}
        adaptRichText(e) {
            e.getComponentsInChildren(p).forEach((e => {
                let t = e.getComponent(u);
                null != t && (t.updateAlignment(), e.maxWidth = e.node.getComponent(m).width)
            }))
        }
        removeAllForms() {
            if (this.forms)
                for (; this.forms.length;) {
                    this.forms.pop().node.destroy(), this.pages.pop().destroy(), this.formsParents.pop()
                }
        }
        showRegistrationForm() {
            this.formIndex in this.forms && this.forms[this.formIndex].populate(this.objValues), this.trackSwitchToNextForm(this.formIndex), this.pages[this.formIndex].active = !0
        }
        onFormResponseSuccess(e) {
            let t = y.httpHandler.getErrorMessage(e);
            if (null != t) return this.updateRegisterPageBackButton(!0), void this.showPopupMsg(t.description);
            if (this.formIndex == this.forms.length - 1) y.TT.showMsg(y.config.getStringData("Register_Scene_registration_complete"), y.Enum.ToastType.ToastTypeSuccess), y.dataHandler.getUserData().user_id = e.payload.playerId, b.isNative && (b.os === b.OS.IOS || b.os === b.OS.ANDROID || b.os === b.OS.WINDOWS ? b.os === b.OS.IOS ? E.getInstance().AppsflyerSDKLogin(y.dataHandler.getUserData().getUserIdS().toString(), !0, "1") : b.os === b.OS.ANDROID ? E.getInstance().AppsflyerSDKLogin(y.dataHandler.getUserData().getUserIdS().toString(), !0) : (T.getInstance().BranchSDKLogin(y.dataHandler.getUserData().getUserIdS().toString()), T.getInstance().BranchSDKTrackingCustomEventsWithEventName("Branch" + y.Enum.segmentEvent.UserRegistered, "", "")) : b.os === b.OS.OSX && T.getInstance().BranchSDKLogin(y.dataHandler.getUserData().getUserIdS().toString(), !0), B.SaveLocalDataString("")), A.getInstance().sendEvent(y.Enum.CurrentScreen.register, y.Enum.segmentEvent.RegistrationStageOneCompleted, y.Enum.Functionality.registration), this.goToAutoLogin();
            else {
                this.updateRegisterPageBackButton(!0);
                let e = "";
                var i, s;
                if ("verification_info" == this.forms[this.formIndex].formName) e = H.isSameString(this.objValues.verificationType, "Email") ? null == (i = this.forms[this.formIndex].fields.find((e => "email" === (null == e ? void 0 : e.schemaKey)))) ? void 0 : i.schemaKey : null == (s = this.forms[this.formIndex].fields.find((e => "phone" === (null == e ? void 0 : e.schemaKey)))) ? void 0 : s.schemaKey;
                if (this.formIndex++, this.forms[this.formIndex].populate(this.objValues), "verification_code" == this.forms[this.formIndex].formName) {
                    var n, o, r, a;
                    this.vCodeField = this.forms[this.formIndex].fields.find((e => "code" === e.schemaKey));
                    let t = H.isSameString(this.objValues.verificationType, "Email") ? null == (n = this.objValues) ? void 0 : n.email : null == (o = this.objValues) ? void 0 : o.phone;
                    null == (r = this.vCodeField) || r.updatePersonalDetailText(t, null == (a = this.objValues) ? void 0 : a.verificationType, e)
                }
                this.switchToNextForm(this.formIndex)
            }
        }
        switchToNextForm(e) {
            this.trackSwitchToNextForm(e), this.pages[e].active = !0, this.pages[e - 1].active = !1, y.MessageCenter.send(y.Enum.MessageCenterAction.onChangeCheckFormValid)
        }
        trackSwitchToNextForm(e) {
            "account" == this.forms[e].formName || "userInfo" == this.forms[e].formName ? A.getInstance().sendEvent(y.Enum.CurrentScreen.registrationStageOneCreateAccount, y.Enum.segmentEvent.ScreenOpened, y.Enum.Functionality.registration, {
                journey: "registration"
            }) : "profile" == this.forms[e].formName && A.getInstance().sendEvent(y.Enum.CurrentScreen.profile, y.Enum.segmentEvent.ScreenOpened, y.Enum.Functionality.registration, {
                registration: "profile"
            })
        }
        switchToPreviousForm(e, t = null) {
            this.pages[e].active = !0, this.pages[e + 1].active = !1, "function" == typeof t && t(null, null), y.MessageCenter.send(y.Enum.MessageCenterAction.onChangeCheckFormValid)
        }
        onFormResponseError(e) {
            if (this.updateRegisterPageBackButton(!0), this.updateRegisterNextButton(!1), e && e.payload) {
                let t = Object.keys(e.payload);
                if (t.length > 0)
                    if ("location" == t[0].toLowerCase()) {
                        let t = this.forms[this.formIndex].getServerError(e)[0];
                        if (t) return void this.showPopupMsg(t, !0)
                    } else if (this.formIndex > 0 && !this.forms[this.formIndex].haveField(t[0]) && this.forms[this.formIndex - 1].haveField(t[0])) return void this.previousStep(((t, i) => {
                    this.formShowServerError(this.forms[this.formIndex], e)
                }))
            }
            this.formShowServerError(this.forms[this.formIndex], e);
            let t = {
                failureReason: e
            };
            A.getInstance().sendEvent(y.Enum.CurrentScreen.register, y.Enum.segmentEvent.RegistationStageOneFailed, y.Enum.Functionality.registration, t)
        }
        showPopupMsg(e, t = !1) {
            j.getInstance().show(e, !0)
        }
        formShowServerError(e, t) {
            e.showServerError(t)
        }
        nextStep() {
            if (y.AudioMgr.playButtonSound("button_click.mp3"), this.formIndex < this.forms.length) {
                if (this.formIndex == this.forms.length - 1) {
                    var e = B.GetLastAttributedDataString();
                    if ("" != e && "undefined" != e) try {
                        let t = {
                            domain: (i = JSON.parse(e))[N.domain],
                            url: i[N.url],
                            visitorSiteUserId: i[N.visitorSiteUserId],
                            firstVisitDate: new Date(1e3 * i[N.firstVisitDate])
                        };
                        this.forms[this.formIndex].objValues[k.sourceVisitorSite] = t;
                        let s = {
                            campaign: i[N.utm_campaign],
                            source: i[N.utm_source],
                            medium: i[N.utm_medium]
                        };
                        this.forms[this.formIndex].objValues[k.Utm] = s;
                        let n = {
                            btag: i[N.incomeAccessBtag]
                        };
                        this.forms[this.formIndex].objValues[k.Affiliate] = n;
                        let o = {
                            fbc: void 0 !== i[N.fbc] ? i[N.fbc] : "",
                            fbp: void 0 !== i[N.fbp] ? i[N.fbp] : ""
                        };
                        this.forms[this.formIndex].objValues[k.advertiserTracking] ? Object.assign(this.forms[this.formIndex].objValues[k.advertiserTracking], o) : this.forms[this.formIndex].objValues[k.advertiserTracking] = o
                    } catch (e) {
                        console.log("Parse Deeplink Data Json fail")
                    }
                    var t = B.GetDeviceInfoDataString();
                    if ("" != t && "undefined" != t) try {
                        var i = JSON.parse(t);
                        this.forms[this.formIndex].objValues[L.deviceModel] = i[L.deviceModel], this.forms[this.formIndex].objValues[L.deviceAgent] = i[L.deviceAgent], this.forms[this.formIndex].objValues[L.deviceMacAddress] = i[L.deviceMacAddress]
                    } catch (e) {
                        console.log("Parse Device Infor from Branch Data Json fail")
                    }
                    let s = {
                        intent: "cta",
                        label: "Create an account"
                    };
                    A.getInstance().sendEvent(y.Enum.CurrentScreen.registrationStageOneCreateAccount, y.Enum.segmentEvent.RegistrationStageOneCreateAccountClicked, y.Enum.Functionality.registration, s)
                }
                this.submitForm(this.forms[this.formIndex])
            }
        }
        submitForm(e) {
            let t = e.validate();
            const i = ["userInfo", "location"].includes(e.formName) && this.formIndex < this.forms.length - 1;
            ["verification_info"].includes(e.formName) && 1 == t ? e.requestVerificationCode(this.vCodeField, this.onFormResponseSuccess.bind(this), this.onFormResponseError.bind(this)) : 0 == i && (t = e.submit(this.onFormResponseSuccess.bind(this), this.onFormResponseError.bind(this), !0)), 1 == t ? (this.updateRegisterPageBackButton(!1), 1 == i && this.onFormResponseSuccess("")) : this.updateRegisterPageBackButton(!0)
        }
        previousStep(e = null) {
            y.AudioMgr.playButtonSound("back_button.mp3"), this.formIndex in this.forms && this.forms[this.formIndex].unpopulate(this.objValues), this.formIndex > 0 ? (this.formIndex--, this.switchToPreviousForm(this.formIndex, e)) : this.goBack()
        }
        goBack() {
            y.dataHandler.getUserData().registrationData = this.getFormValues(), y.authenticator.showLoginPopup()
        }
        getFormValues(e = !1) {
            if (this.forms) {
                let t = {};
                for (let i = 0; i < this.forms.length; i++) {
                    let s = {};
                    this.forms[i].saveRawValuesToObject(s), e ? this.forms[i].saveRawValuesToObject(t) : t[this.forms[i].formName] = s
                }
                return t
            }
            return null
        }
        goToAutoLogin() {
            let e = this.forms[0],
                t = {
                    loginMode: null == e ? void 0 : e.selectedRegistrationMode,
                    userName: y.tools.checkNestedValue(this.getFormValues(!0), y.appConfig.getFormsConfig().userName.key),
                    password: y.tools.checkNestedValue(this.getFormValues(!0), y.appConfig.getFormsConfig().password.key)
                };
            y.netWorkManager.Logout(!0, null, y.Enum.LogOutReason.Manual, (() => {
                y.httpHandler.requestLogin(t, null, this.onUserNameLoginFailed.bind(this))
            }))
        }
        onUserNameLoginFailed(e) {
            this.goBack(), y.httpHandler.onLoginFail(e)
        }
        onLoginSuccess() {
            y.dataHandler.getUserData().loginAfterRegister = !0, y.dataHandler.getUserData().saveLoginDataToFile(), y.SwitchLoadingView.show(y.config.getStringData("Loading"))
        }
        onSelectAllCheck(e) {
            this.forms[this.formIndex].toggleAllCheckboxes(e.isChecked)
        }
        acceptAgreement(e) {
            let t = y.Enum.GlobalPageName[e],
                i = this.forms[this.formIndex];
            for (let e = 0, s = i.fields.length; e < s; e++)
                if (t == y.Enum.GlobalPageName.TermsAndConditions && "acceptTerms" == i.fields[e].schemaKey || t == y.Enum.GlobalPageName.PrivacyPolicy && "acceptPrivacyPolicy" == i.fields[e].schemaKey) {
                    i.fields[e].value = !0;
                    break
                }
        }
        openPage(e) {
            const t = e.split(","),
                i = t[0];
            let s = y.Enum.GlobalPageName[i];
            if (void 0 !== s) switch (s) {
                case y.Enum.GlobalPageName.TermsAndConditions:
                case y.Enum.GlobalPageName.PrivacyPolicy:
                    null == this.docViewer && (this.docViewer = this.createDocViewer(), this.docViewer.eventMgr.register(O.OnAccept, this.acceptAgreement.bind(this), this.node));
                    let e = {};
                    e[i] = null;
                    let s = !0;
                    t.length > 1 && (s = "true" == t[1].toLowerCase()), this.showDocViewer(e, s);
                    break;
                case y.Enum.GlobalPageName.GamingEnforcementForm:
                    y.action.showPrefabUnique(this.gamingEnforcementFormPage, y.action.eMoveActionDir.EMAD_TO_LEFT, y.action.eMoveActionType.EMAT_FADE_IN, this.node, this.node.getComponent(m).priority + 1)
            } else S("[RegisterScene] => openPage() Warning: Page type with name `" + i + "` doesn't exist in `Enum.GlobalPageName`!")
        }
        showDocViewer(e, t) {
            this.docViewer.init(e, t)
        }
        createDocViewer() {
            return y.action.addChildToScene(this, this.docViewerPage, [], -1, !0).getComponent(x)
        }
        onDocLoaded(e) {
            if (this.objValues && this.objValues.legalDocuments)
                for (let t = 0, i = this.objValues.legalDocuments.length; t < i; t++)
                    if (this.objValues.legalDocuments[t].name == e.name) {
                        this.objValues.legalDocuments[t].version = e.version;
                        break
                    }
        }
        updateRegisterPageBackButton(e) {
            this.backButton && (this.backButton.interactable = e)
        }
        initializeRegistrationSteps() {
            if (this.forms.length > 1 && h(this.registrationProgressBar)) {
                this.registrationProgressBar.parent.active = !0;
                const e = this.registrationProgressBar.children[0];
                for (let t = 1; t < this.forms.length; t++) {
                    const t = c(e);
                    t.parent = this.registrationProgressBar;
                    t.getComponent(F).setColor(R.Other, w.W400, V.RegistrationProgressbarBG)
                }
            }
        }
        updateCurrentProgressBarStep(e) {
            if (this.forms.length > 1 && h(this.registrationProgressBar)) {
                const t = this.registrationProgressBar.children[e ? this.formIndex : this._formIndex + 1].getComponent(F),
                    i = e ? V.RegistrationProgressbarFill : V.RegistrationProgressbarBG;
                t.setColor(R.Other, w.W400, i)
            }
        }
        showMXDesclaimerText() {
            this.disclaimerText && y.appConfig.isMX && (this.disclaimerText.active = !0)
        }
        updateRegisterNextButton(e) {
            var t;
            let i = null == (t = this.pages[this.formIndex]) ? void 0 : t.getComponent(I);
            i && (i.nextButton.interactable = e)
        }
    }).isCurrentView = !1, ee = t(($ = ce).prototype, "pages", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), te = t($.prototype, "formsParents", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ie = t($.prototype, "registerFormPrefab", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t($.prototype, "docViewerPage", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t($.prototype, "gamingEnforcementFormPage", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t($.prototype, "registerPagePrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t($.prototype, "backButton", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t($.prototype, "backLable", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t($.prototype, "bannerNode", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t($.prototype, "registrationProgressBar", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t($.prototype, "disclaimerText", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = $)) || Z));
    s._RF.pop()
}