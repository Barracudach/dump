import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./FormValidator.js";
import * as u from "./cv.js";
import * as f from "./RegisterScene.js";
import * as m from "./TooltipsManager.js";
import * as w from "./RegisterPageLandscape.js";
import * as S from "./borderGraphic.js";
import * as v from "./ColorSystemTypeOther.js";
import * as y from "./ColorSystemType.js";
import * as T from "./ColorSystemWeight.js";
import * as b from "./i18nText.js";
import * as C from "./Enum.js";
import * as F from "./Enum.js";
import * as V from "./NotifyMsg.js";

function main() {
    var E, R, A, D, L, N, _, M, O, B;
    o._RF.push({}, "869e01we5lJCqRgLkUZXBNM", "RegistrationView", void 0);
    const {
        ccclass: x,
        property: P
    } = s;
    e("default", (E = P({
        type: n,
        tooltip: "Node showed/hidden when field is invalid/valid"
    }), R = P({
        type: n,
        tooltip: "Node hidden/showed when field is invalid/valid"
    }), A = P({
        type: r
    }), D = P({
        type: n
    }), x((_ = t((N = class extends f {
        constructor(...e) {
            super(...e), i(this, "invalidShow", _, this), i(this, "invalidHide", M, this), i(this, "scrollView", O, this), i(this, "loading_node", B, this), this.loginView = null
        }
        onLoad() {
            u.resMgr.adaptWidget(this.node, !0, !1)
        }
        onEnable() {
            super.onEnable(), this.pages.length <= 0 ? this.loading_node.active = !0 : this.loading_node.active = !1
        }
        onSchemaSuccess(e) {
            super.onSchemaSuccess(e), null != e && (this.loading_node.active = !1)
        }
        processPage(e, t, i, o) {
            if (super.processPage(e, t, i, o), u.appConfig.isLandscapeLayout) {
                let i = t.getComponent(w);
                "termsOfService" == e.formName && (i.closeButton.node.on(a.EventType.CLICK, this.previousStep, this), this.scrollView = i.scrollView, t.node.parent = u.tools.getRoot(this.node), u.resMgr.adaptWidget(t.node, !0, !1))
            }
        }
        handleRegisterForm(e, t) {
            0 == e && (t.invalidHide = t.invalidHide.concat(this.invalidHide), t.invalidShow = t.invalidShow.concat(this.invalidShow), this.backLable = this.backButton.getComponentInChildren(b))
        }
        applySupportForForm(e, t) {
            t.customSubmitOnEnter = (() => {
                e == this.getFormIndex() && this.submitForm(t)
            }).bind(this)
        }
        submitForm(e) {
            if (u.appConfig.isLandscapeLayout && "termsOfService" == this.getCurrentFormName()) {
                let t = !1,
                    i = e.fields.length;
                for (let o = 0; o < i; o++) {
                    let i = e.fields[o],
                        n = d.validate([i]);
                    if (!0 !== n) {
                        let e = i.getInvalidFieldNode();
                        this.showTooltips(i, u.config.getStringData("Attention"), n, e), t = !0;
                        break
                    }
                }
                if (t) return
            }
            super.submitForm(e)
        }
        formShowServerError(e, t) {
            if (!u.appConfig.isLandscapeLayout) return void super.formShowServerError(e, t);
            let i = e.getServerErrorDetail(t),
                o = i[0],
                n = "",
                r = u.Enum.ToastType.ToastTypeDefault;
            if (null == o ? (o = u.config.getStringData("ErrorUnknown", !1, "Unknown error occured"), n = u.config.getStringData("Error"), r = u.Enum.ToastType.ToastTypeError) : (n = u.config.getStringData("Attention"), r = u.Enum.ToastType.ToastTypeWarning), "10000003" == o) u.popUp.showMsg({
                txt: u.config.getStringData("Register_value_already_used"),
                iconType: C.InvalidCode,
                isTwoBtn: !0,
                msgType: u.Enum.ToastType.ToastTypeWarning,
                sureLabel: u.config.getStringData("LoginBtnText"),
                cancelLabel: u.config.getStringData("Close"),
                sureCallback: () => {
                    u.MessageCenter.send(u.Enum.MessageCenterAction.SwitchFromRegisterToLogin)
                }
            });
            else {
                let t = i[1];
                if (t < 0) V.getInstance().show(o, !0);
                else {
                    let i = e.fields[t],
                        r = i.getInvalidFieldNode();
                    this.showTooltips(i, n, o, r)
                }
            }
        }
        showTooltips(e, t, i, o) {
            if (m.hideAllTooltips(), "termsOfService" == this.getCurrentFormName() && this.scrollView) {
                this.scrollView.stopAutoScroll();
                let n = o.getComponent(l).convertToWorldSpaceAR(c.ZERO),
                    r = this.scrollView.content.getComponent(l).convertToNodeSpaceAR(n),
                    s = this.scrollView.getMaxScrollOffset(),
                    a = 200,
                    h = Math.max(-a - r.y, 0);
                h = Math.min(h, s.y), this.scrollView.scrollToOffset(new g(0, h), .1), this.scrollView.scheduleOnce((() => {
                    m.showToolTipsForFieldValidator(e, t, i)
                }), .2)
            } else m.showToolTipsForFieldValidator(e, t, i)
        }
        switchToNextForm(e) {
            if ("termsOfService" == this.getCurrentFormName()) {
                this.trackSwitchToNextForm(e), this.pages[e].active = !0
            } else super.switchToNextForm(e)
        }
        createDocViewer() {
            let e = super.createDocViewer();
            return e.eventMgr.register(F.OnBack, this.reshowAgreementScreen.bind(this), this.node), e.eventMgr.register(F.OnFinish, this.reshowAgreementScreen.bind(this), this.node), e
        }
        showAgreementScreen(e) {
            this.termsStepPage && (this.termsStepPage.active = e)
        }
        reshowAgreementScreen() {
            this.showAgreementScreen(!0)
        }
        acceptAgreement(e) {
            super.acceptAgreement(e), this.reshowAgreementScreen()
        }
        showDocViewer(e, t) {
            this.showAgreementScreen(!1), super.showDocViewer(e, t)
        }
        initializeRegistrationSteps() {
            let e = this.forms.length;
            if (e > 1)
                for (let i = 0; i < e; i++) {
                    var t;
                    const o = this.pages[i].getChildByName("Registration_ProgressBar"),
                        n = this.pages[i].getChildByName("spacer_for_ProgressBar");
                    o.active = !0, n.active = !0;
                    const r = o.children[0],
                        s = (null == (t = o.getComponent(h)) ? void 0 : t.spacingX) ?? 16;
                    r.getComponent(l).width = o.getComponent(l).width / e - s * (e - 1);
                    for (let t = 1; t < e; t++) {
                        const e = p(r);
                        e.parent = o;
                        const n = e.getComponent(S),
                            s = t <= i ? v.RegistrationProgressbarFill : v.RegistrationProgressbarBG;
                        n.setColor(y.Other, T.W400, s)
                    }
                }
        }
    }).prototype, "invalidShow", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), M = t(N.prototype, "invalidHide", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), O = t(N.prototype, "scrollView", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(N.prototype, "loading_node", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = N)) || L));
    o._RF.pop()
}