import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as F from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as I from "./cc.js";
import * as x from "./cv.js";
import * as y from "./UserInfoForm.js";
import * as P from "./UserChallengeForm.js";
import * as v from "./DatePickerManager.js";
import * as U from "./Enum.js";
import * as T from "./Enum.js";
import * as D from "./SlideView.js";
import * as k from "./i18nText.js";
import * as w from "./AppsflyerSDKHandler.js";
import * as A from "./AnalyticsHandler.js";
import * as E from "./DesignSystemButtonBase.js";

function main() {
    var O, B, R, L, H, _, M, V, N, z, j, K, W, G, Z, q, Q, Y, J, X, $, ee, te, ie, ne, se, oe, re, ae, le, he, ue, ce, ge, de, me, pe, fe;
    n._RF.push({}, "5d74aTx9PxNPogxxu02NTyi", "UserInfo", void 0);
    const {
        ccclass: be,
        property: Se
    } = h;
    e("default", (O = Se(D), B = Se(k), R = Se(k), L = Se(k), H = Se(s), _ = Se(o), M = Se([r]), V = Se([s]), N = Se([s]), z = Se(a), j = Se(a), K = Se(a), W = Se(s), G = Se(s), Z = Se(s), q = Se(s), Q = Se(s), Y = Se(l), be(($ = t((X = class extends u {
        constructor(...e) {
            super(...e), i(this, "slideView", $, this), i(this, "txtTitleSingle", ee, this), i(this, "txtSubTitlesSingle", te, this), i(this, "txtButtonOkSingle", ie, this), i(this, "iconParentSingle", ne, this), i(this, "iconSpriteSingle", se, this), i(this, "icons", oe, this), i(this, "pages", re, this), i(this, "formsParents", ae, this), i(this, "userInfoFormPrefab", le, this), i(this, "userChallengeFormPrefab", he, this), i(this, "datePickerPrefab", ue, this), i(this, "groupOfTab", ce, this), i(this, "lineHighlight", ge, this), i(this, "backButton", de, this), i(this, "multiFormUserInfoPage", me, this), i(this, "multiFormUserInfoFormParent", pe, this), i(this, "nextButton", fe, this), this.userSchema = {}, this.challengeSchema = {}, this.formIndex = 0, this.pageIndex = 0, this.objValues = null, this.hallScene = null, this.selectedDate = new Date, this.forms = [], this.destroyAfterHide = !0, this.listOfLineHightlight = [], this.totalUserInfoForms = 1, this.callbackCloseForm = null, this.callbackSubmitSuccess = null, this.isSubmitForUserUpdate = !1, this.nextButtonDS = null
        }
        onLoad() {
            x.resMgr.adaptWidget(this.node, !0, !1), this.selectedDate = x.config.getTimeWithTimeZone(), this.objValues = {
                captcha: "",
                version: x.config.GET_CLIENT_VERSION(),
                device_uuid: x.native.GetDeviceUUID()
            }
        }
        onEnable() {
            x.MessageCenter.register(T.OpenDatePicker, this.openDOBDatePicker.bind(this), this.node), x.MessageCenter.register("onLogout", this.onLogoutSccess.bind(this), this.node), this.slideView ? this.slideView.show(!1, this.hidePanel.bind(this)) : (this.node.getComponent(c).opacity = 0, g(this.node.getComponent(c)).delay(x.action.delay_type.NORMAL).to(0, {
                opacity: 255
            }).start()), x.tools.triggerPopupShowEvent(), this.nextButtonDS = this.nextButton.getComponent(E)
        }
        onDisable() {
            x.MessageCenter.unregister(T.OpenDatePicker, this.node), x.MessageCenter.unregister("onLogout", this.node), x.tools.triggerPopupHideEvent()
        }
        onLogoutSccess() {
            this.node.active && this.hidePanelAnim(!0)
        }
        hidePanelAnim(e) {
            this.destroyAfterHide = e, this.slideView ? this.slideView.hide() : this.hidePanel()
        }
        hidePanel() {
            var e;
            x.dataHandler.getUserData().isLoggedIn() && !x.dataHandler.getUserData().isTouristUser && (null == (e = this.callbackCloseForm) || e.call(this), this.hallScene.OnStage2RegistrationFormClose());
            this.node.active = !1, this.destroyAfterHide && this.node.destroy()
        }
        updateForm(e = null) {
            this.txtTitleSingle.setKey(e && e.title ? e.title : "ProfileInfo_Edit_Title"), this.txtSubTitlesSingle.setKey(e && e.subtitle ? e && e.subtitle : "ProfileInfo_Edit_Subtitle"), this.txtButtonOkSingle.setKey(e && e.sureLabel ? e && e.sureLabel : "Verify"), this.callbackCloseForm = e.callbackCloseForm, null == e || null == e.iconType || null == this.icons[e.iconType] ? this.iconParentSingle.active = !1 : (this.iconParentSingle.active = !0, this.iconSpriteSingle.spriteFrame = this.icons[e.iconType])
        }
        setHallScene(e) {
            this.hallScene = e
        }
        setUserSchema(e, t = null, i = null) {
            if (null != e && (this.userSchema = e, this.buildUserForm(t, i)), x.appConfig.getUserProfileConfig().canSetChallengeQuestions) {
                let e = x.config.getStringData("WEB_API_GET_CHALLENGE_CONFIG", !0);
                x.http.sendRequestV2(e, null, this.onChallengeConfigSuccess.bind(this), this.onChallengeConfigFailed.bind(this), x.http.HttpRequestType.GET, x.http.HttpParseType.NONE, !1)
            }
        }
        onChallengeConfigSuccess(e) {
            null != e && (this.challengeSchema = e, this.buildChallengeForm())
        }
        onChallengeConfigFailed(e) {}
        buildUserForm(e = null, t = null) {
            var i;
            this.removeAllForms(), this.totalUserInfoForms = (null == (i = this.userSchema) ? void 0 : i.length) ?? 1, this.backButton.active = !1, this.totalUserInfoForms > 1 ? (this.pages[this.pageIndex] = this.multiFormUserInfoPage, this.formsParents[this.pageIndex] = this.multiFormUserInfoFormParent) : this.multiFormUserInfoPage.active = !1;
            for (let e = 0; e < this.pages.length; e++) this.pages[e].active = !1;
            for (let i = 0; i < this.totalUserInfoForms; i++) {
                let n = d(this.userInfoFormPrefab).getComponent(y);
                if (this.totalUserInfoForms > 1)
                    if (i > 0) {
                        let e = d(this.lineHighlight);
                        this.groupOfTab.addChild(e), this.listOfLineHightlight.push(e)
                    } else this.listOfLineHightlight.push(this.lineHighlight);
                n.init(this.userSchema[i] ?? this.userSchema, e, t), n.currentFormIsPopup = !0, this.formsParents[this.pageIndex].addChild(n.node), this.adaptRichText(this.pages[this.pageIndex]), this.forms.push(n), this.forms[i].node.active = !1
            }
            this.pages[this.pageIndex].active = !0, this.highlightFormCheckAndActive(!0)
        }
        onClickNextUserInfoForm() {
            if (x.AudioMgr.playButtonSound("button_click.mp3"), !0 === this.forms[this.formIndex].validate()) {
                if (this.formIndex < this.totalUserInfoForms - 1) this.highlightFormCheckAndActive(!1), this.formIndex++, this.highlightFormCheckAndActive(!0);
                else if (this.formIndex == this.totalUserInfoForms - 1 && !this.isSubmitForUserUpdate) {
                    var e;
                    this.isSubmitForUserUpdate = !0, this.nextButton.interactable = !1, null == (e = this.nextButtonDS) || e.showLoadingAnim(!0);
                    let t = this.prepareFormPayloadData();
                    this.forms[this.formIndex].objValues = {}, Object.assign(this.forms[this.formIndex].objValues, t);
                    let i = {
                        intent: "cta",
                        label: "continue"
                    };
                    A.getInstance().sendEvent(x.Enum.CurrentScreen.registrationStageTwo, x.Enum.segmentEvent.RegistrationStageTwoCompleted, x.Enum.Functionality.registration, i);
                    let n = this.forms[this.formIndex].submit(this.onFormResponseSuccess.bind(this), this.onFormResponseFail.bind(this));
                    1 != n && this.trackFailed(n.toString())
                }
                this.backButton.active = this.formIndex > 0
            }
        }
        onClickBackUserInfoForm() {
            x.AudioMgr.playButtonSound("button_click.mp3"), this.formIndex > 0 && (this.highlightFormCheckAndActive(!1), this.formIndex--, this.highlightFormCheckAndActive(!0)), this.backButton.active = this.formIndex > 0
        }
        highlightFormCheckAndActive(e) {
            if (this.forms[this.formIndex].node.active = e, this.totalUserInfoForms > 1) {
                if (this.listOfLineHightlight && this.listOfLineHightlight.length > 1 && (this.listOfLineHightlight[this.formIndex].getChildByName("highlight").active = e), e) {
                    let e = m("TopNode/subtitle", this.pages[this.pageIndex]).getComponent(p);
                    e && (e.string = x.config.getStringData("ProfileInfo_Edit_Subtitle_" + this.forms[this.formIndex].getComponent(y).formName));
                    let t = m("BottomNode/nextButton/Label", this.pages[this.pageIndex]).getComponent(p);
                    t && (this.formIndex == this.totalUserInfoForms - 1 ? (t.string = x.config.getStringData("Confirm").toUpperCase(), A.getInstance().sendEvent(x.Enum.CurrentScreen.registrationStageTwoAccountCompletion, x.Enum.segmentEvent.ScreenOpened, x.Enum.Functionality.registration, {
                        journey: "registration"
                    })) : t.string = x.config.getStringData("NextBtnText").toUpperCase())
                }
            } else e && A.getInstance().sendEvent(x.Enum.CurrentScreen.registrationStageTwoAccountCompletion, x.Enum.segmentEvent.ScreenOpened, x.Enum.Functionality.registration, {
                journey: "registration"
            })
        }
        prepareFormPayloadData() {
            let e = {},
                t = "isAdditionalField",
                i = [];
            for (let s = 0; s < this.totalUserInfoForms; s++) {
                var n;
                let o = null == (n = this.forms[s]) ? void 0 : n.fields,
                    r = this.forms[s].objValues;
                for (let n = 0; n < o.length; n++) {
                    let s = o[n],
                        a = s.schemaFull,
                        l = {
                            Key: s.schemaKey,
                            Value: r[s.schemaKey] || s.value
                        };
                    "state" == a.name ? (i.push(l), s.addValueToObject(e, !1)) : a && a.hasOwnProperty(t) && !0 === a[t] ? i.push(l) : s.addValueToObject(e, !1)
                }
            }
            return i.length > 0 && x.tools.traverseObjSet(e, "countryAdditionalFields", i), e
        }
        setChallangeSchema(e) {
            null != e && (this.challengeSchema = e, this.buildChallengeForm())
        }
        buildChallengeForm() {
            let e = d(this.userChallengeFormPrefab).getComponent(P);
            e.init(this.challengeSchema), this.formsParents[this.pageIndex].addChild(e.node), this.adaptRichText(this.pages[this.pageIndex]), this.forms.push(e)
        }
        adaptRichText(e) {
            e.getComponentsInChildren(f).forEach((e => {
                let t = e.getComponent(b);
                null != t && (t.updateAlignment(), e.maxWidth = e.node.getComponent(S).width)
            }))
        }
        onFormResponseSuccess(e) {
            var t;
            this.isSubmitForUserUpdate && (this.isSubmitForUserUpdate = !1, this.nextButton.interactable = !0, null == (t = this.nextButtonDS) || t.showLoadingAnim(!1));
            if (this.formIndex == this.forms.length - 1) {
                var i;
                this.hidePanelAnim(!1), x.popUp.showMsg({
                    subtitle: x.config.getStringData("Success"),
                    txt: x.config.getStringData("ProfileInfo_Edit_Success_Msg"),
                    msgType: x.Enum.ToastType.ToastTypeSuccess,
                    iconType: U.Success,
                    sureLabel: x.config.getStringData("Close"),
                    sureCallback: this.onMsgPopupClose.bind(this),
                    cancelCallback: this.onMsgPopupClose.bind(this)
                }), null == (i = this.callbackSubmitSuccess) || i.call(this), I.os !== I.OS.IOS && I.os !== I.OS.ANDROID || (I.os === I.OS.IOS || I.os === I.OS.ANDROID) && w.getInstance().AppsflyerSDKLogin(x.dataHandler.getUserData().getUserIdS().toString(), !0, "2");
                let e = {
                    intent: "cta",
                    label: "Create an account",
                    registrationData: new Date
                };
                A.getInstance().sendEvent(x.Enum.CurrentScreen.registrationStageTwo, x.Enum.segmentEvent.UserRegistered, x.Enum.Functionality.registration, e)
            } else 1 == this.pageIndex && this.formIndex == this.totalUserInfoForms - 1 && (this.pageIndex++, this.formIndex++, this.skipCurrentForm() ? this.onFormResponseSuccess(null) : (this.forms[this.formIndex].populate(this.objValues), x.action.showActionBothLeft(this.pages[this.pageIndex], this.pages[this.pageIndex - 1])))
        }
        onFormResponseFail(e) {
            var t;
            this.isSubmitForUserUpdate && (this.isSubmitForUserUpdate = !1, this.nextButton.interactable = !0, null == (t = this.nextButtonDS) || t.showLoadingAnim(!1));
            if (this.forms) {
                let t = this.forms[this.formIndex].getServerError(e);
                t && null != t[0] ? this.trackFailed(t[0]) : this.trackFailed(JSON.stringify(e)), this.forms[this.formIndex].showServerError(e)
            }
        }
        onMsgPopupClose() {
            var e;
            F(this.node, !0) && (null == (e = this.node) || e.destroy()), null != this.hallScene && this.hallScene.OnStage2RegistrationComplete()
        }
        skipCurrentForm() {
            return this.forms[this.formIndex] instanceof P && this.challengeSchema.challengeQuestions
        }
        removeAllForms() {
            for (this.listOfLineHightlight && (this.listOfLineHightlight = []); this.forms.length;) {
                this.forms.pop().node.destroy()
            }
        }
        nextStep() {
            if (x.AudioMgr.playButtonSound("button_click.mp3"), this.formIndex < this.forms.length) {
                let e = this.forms[this.formIndex].submit(this.onFormResponseSuccess.bind(this), this.onFormResponseFail.bind(this));
                1 != e && this.trackFailed(e.toString())
            }
        }
        trackFailed(e) {
            let t = {
                failureReason: e
            };
            A.getInstance().sendEvent(x.Enum.CurrentScreen.registrationStageTwo, x.Enum.segmentEvent.RegistrationStageTwoFailed, x.Enum.Functionality.registration, t)
        }
        previousStep() {
            x.AudioMgr.playButtonSound("back_button.mp3"), this.formIndex in this.forms && this.forms[this.formIndex].unpopulate(this.objValues), this.pageIndex > 0 ? (this.pageIndex--, this.formIndex--, x.action.showActionBothRight(this.pages[this.pageIndex], this.pages[this.pageIndex + 1])) : this.hidePanelAnim(!0)
        }
        openDOBDatePicker(e) {
            var t = e.node;
            this.selectedDate = e.date;
            let i = t.getPosition();
            i.y -= t.height * t.anchorY;
            let n = this.node.getComponent(S).convertToNodeSpaceAR(t.parent.convertToWorldSpaceAR(i)),
                s = this.datePickerPrefab.data,
                o = n.y - (1 - s.getComponent(S).anchorY) * s.getComponent(S).height;
            var r = {
                datePickerPrefab: this.datePickerPrefab,
                parentRef: this.node,
                dpPosMultiplier: new C(0, o / this.node.getComponent(S).height),
                arrowPosMultiplier: new C(0, .51),
                arrowRotation: 90,
                localisationMethod: this.localiseDatePickerComponent,
                selectedDate: this.selectedDate
            };
            v.getInstance().show(r), v.getInstance().setCallbackMethod(this.onSelectedDateCB.bind(this))
        }
        localiseDatePickerComponent(e) {
            return x.config.getStringData(e)
        }
        onSelectedDateCB(e) {
            e.getTime() > x.config.getTimeWithTimeZone().getTime() && (e = x.config.getTimeWithTimeZone()), this.selectedDate = e, x.MessageCenter.send(T.OpenDatePickerCallback, this.selectedDate)
        }
    }).prototype, "slideView", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(X.prototype, "txtTitleSingle", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(X.prototype, "txtSubTitlesSingle", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(X.prototype, "txtButtonOkSingle", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(X.prototype, "iconParentSingle", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(X.prototype, "iconSpriteSingle", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(X.prototype, "icons", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), re = t(X.prototype, "pages", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ae = t(X.prototype, "formsParents", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), le = t(X.prototype, "userInfoFormPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(X.prototype, "userChallengeFormPrefab", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t(X.prototype, "datePickerPrefab", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t(X.prototype, "groupOfTab", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(X.prototype, "lineHighlight", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(X.prototype, "backButton", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(X.prototype, "multiFormUserInfoPage", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(X.prototype, "multiFormUserInfoFormParent", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(X.prototype, "nextButton", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = X)) || J));
    n._RF.pop()
}