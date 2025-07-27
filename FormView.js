import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./NotifyMsg.js";
import * as h from "./PhoneFieldLandscape.js";
import * as f from "./cv.js";
import * as c from "./BirthDayField.js";
import * as p from "./DropDownField.js";
import * as g from "./PasswordField.js";
import * as F from "./AppConfig.js";
import * as b from "./TooltipsManager.js";
import * as E from "./EditBoxValidator.js";
import * as m from "./FieldValidator.js";
import * as y from "./FormValidator.js";

function main() {
    var w, v, S, C, x, D, B, T, I, O;
    s._RF.push({}, "6ce23YIzF9IDJOY3tcX68SN", "FormView", void 0);
    const {
        ccclass: V,
        property: A
    } = n;
    e("FormView", (w = A({
        tooltip: "key used to get full URL address from Server class"
    }), v = A({
        tooltip: "get, post, put or delete"
    }), S = A([m]), C = A(o), V((B = t((D = class extends r {
        constructor(...e) {
            super(...e), i(this, "urlKey", B, this), i(this, "method", T, this), i(this, "fields", I, this), i(this, "autoFocusOnEnable", O, this), this.objValues = null, this.customSubmitOnEnter = null, this.isSubmitted = !1, this.isShiftPressed = !1, this.lockForMultipleEnter = !1, this.lastFocusedField = -1, this.currentFocusField = -1, this._isFocusingNextInputField = !1, this._initFirstTime = !1, this.currentFormIsPopup = !1
        }
        submitOnEnter() {
            this.lockForMultipleEnter || (this.lockForMultipleEnter = !0, this.scheduleOnce((() => {
                this.lockForMultipleEnter = !1
            }).bind(this), f.action.delay_type.NORMAL), this.customSubmitOnEnter && this.customSubmitOnEnter())
        }
        onFieldValid(e) {
            this.validate()
        }
        onFieldInvalid(e) {
            this.validate()
        }
        initFormRegisterEvent() {
            this._initFirstTime || (this.registerOnTabAndEnter(), this._initFirstTime = !0)
        }
        onLoad() {
            this.initFormRegisterEvent(), this.isSubmitted = !1, f.appConfig.isLandscapeLayout && (f.MessageCenter.register(f.Enum.MessageCenterAction.onOpenPopUpMsg, this.onShowGeneralPopup.bind(this), this.node), f.MessageCenter.register(f.Enum.MessageCenterAction.onDisablePopUpMsg, this.onHideGeneralPopup.bind(this), this.node))
        }
        onDestroy() {
            f.appConfig.isLandscapeLayout && (f.MessageCenter.unregister(f.Enum.MessageCenterAction.onOpenPopUpMsg, this.node), f.MessageCenter.unregister(f.Enum.MessageCenterAction.onDisablePopUpMsg, this.node), this._isFocusingNextInputField = !1)
        }
        onShowGeneralPopup(e) {
            if (!(this.currentFormIsPopup && e <= 1 || !this.currentFormIsPopup && e <= 0) && l(this.node, !0) && this.node.active && this.fields.length > 0)
                for (var t = 0; t < this.fields.length; t++) {
                    let e = this.fields[t];
                    if (e && e.editBox && e.editBox.isFocused()) {
                        this.lastFocusedField = t, e.editBox.blur(), b.hideAllTooltips();
                        break
                    }
                }
        }
        onHideGeneralPopup(e) {
            if (!(this.currentFormIsPopup && e > 1 || !this.currentFormIsPopup && e > 0) && l(this.node, !0) && this.node.active && this.fields.length > 0 && this.lastFocusedField >= 0 && this.lastFocusedField < this.fields.length) {
                let e = this.fields[this.lastFocusedField];
                e && e.editBox && (this.lastFocusedField = -1, this.scheduleOnce((() => {
                    l(e.editBox.node, !0) && (e.editBox.focus(), e.getComponent(E).onTextChanged())
                }), 0))
            }
        }
        registerOnTabAndEnterFor(e, t) {
            let i = null,
                s = null;
            var o;
            t instanceof g && (s = null == (o = t.repeat_password) ? void 0 : o.editBox);
            if (t.editBox) i = t.editBox;
            else {
                let e = t.node.getComponent(d);
                e && (i = e)
            }
            if (!i) return;
            let n = e;
            i.node.off("editing-return"), i.node.on("editing-return", (() => {
                this.onEditReturn(n)
            }), this), i.node.off("editing-tab"), i.node.on("editing-tab", (() => {
                this.onEditTab(n)
            }), this), i.node.off("editing-backtab"), i.node.on("editing-backtab", (() => {
                this.onEditBackTab(n)
            }), this), s && (s.node.off("editing-return"), s.node.on("editing-return", (() => {
                this.onEditReturn(n)
            }), this), s.node.off("editing-tab"), s.node.on("editing-tab", (() => {
                this.onEditTab(n)
            }), this), s.node.off("editing-backtab"), s.node.on("editing-backtab", (() => {
                this.onEditBackTab(n)
            }), this))
        }
        registerOnTabAndEnter() {
            if (f.appConfig.isLandscapeLayout)
                for (let e = 0, t = this.fields.length; e < t; e++) {
                    let t = this.fields[e];
                    t instanceof E && this.registerOnTabAndEnterFor(e, t)
                }
        }
        addField(e) {
            if (this.fields.push(e), f.appConfig.isLandscapeLayout && (this.initFormRegisterEvent(), e instanceof E)) {
                let t = this.fields.length - 1;
                this.registerOnTabAndEnterFor(this.fields.length - 1, e), e.setForm(t, this)
            }
        }
        removeField(e) {
            const t = this.findFieldByKey(e)[0];
            t >= 0 && (l(this.fields[t], !0) && this.fields[t].destroy(), this.fields.splice(t, 1))
        }
        submit(e, t, i) {
            if (null == this.urlKey || 0 == this.urlKey.length) return !1;
            let s = f.config.getStringData(this.urlKey, !0);
            return null != s && 0 != s.length && this.submitForm(s, this.method, e, t, i)
        }
        submitForm(e, t, i, s, o) {
            let n = this.validate();
            return !0 === n ? (f.http.sendRequestV2(e, this.objValues, i, s || this.showServerError.bind(this), t, null, !0, !1, !0, null, o), !0) : n
        }
        populate(e, t) {
            if (e) {
                for (let i = 0, s = this.fields.length; i < s; i++) {
                    let s = this.fields[i];
                    !0 === t && s.reset(), s.setValueFromObj(e)
                }
                this.objValues = e
            }
        }
        unpopulate(e) {
            if (e) {
                let t = this.fields.length;
                for (let i = 0; i < t; i++) {
                    this.fields[i].removeValueFromObj(e)
                }
                this.objValues = e
            }
        }
        clear() {
            for (let e = 0, t = this.fields.length; e < t; e++) this.fields[e].reset();
            this.objValues = {}
        }
        validate() {
            let e = !0;
            b.hideAllTooltips();
            const t = y.validateAll(this.fields);
            for (let i = 0; i < t.length; i++) {
                let s = t[i];
                if (!0 !== s) {
                    e = s, b.showToolTipsForFieldValidator(this.fields[i], f.config.getStringData("Attention"), e);
                    break
                }
            }
            if (!0 === e) {
                null == this.objValues && (this.objValues = {});
                let e = this.fields.length;
                for (let t = 0; t < e; t++) this.fields[t].ignoreFromSubmit || this.fields[t].addValueToObject(this.objValues, !1)
            }
            return this.isSubmitted = !0, e
        }
        saveRawValuesToObject(e) {
            let t = this.fields.length;
            for (let i = 0; i < t; i++) this.fields[i].addValueToObject(e, !0)
        }
        getVerificationCodeErrorPayload(e) {
            return {
                [e]: [{
                    code: "10000021",
                    description: f.config.getStringData("serverErrorCode10000021")
                }]
            }
        }
        getServerError(e) {
            return this.getServerErrorDetail(e)
        }
        getServerErrorDetail(e) {
            let t = [F.Instance.getFormsConfig().code.key.toLowerCase(), F.Instance.getFormsConfig().verificationCode.key.toLowerCase()],
                i = ["10000021", "10000006"],
                s = f.config.getStringData("ErrorUnknown", !1),
                o = -1;
            if (e instanceof Array && e.length > 0 && (e = e[0]), e) {
                let n = f.httpHandler.getResponseCode(e);
                null != n && (s = f.config.getStringData("serverErrorCode" + n, !1, f.httpHandler.getResponseMessage(e) || "Unknown error occured"));
                try {
                    if (null != e.payload && "object" == typeof e.payload) {
                        let i = e.payload,
                            n = Object.keys(i);
                        if (n.length > 0) {
                            if (null != i[n[0]][0]) {
                                if ("10000010" == i[n[0]][0].code) return s = f.config.getStringData("serverErrorCode" + i[n[0]][0].code, !1, i[n[0]][0].description), [s, -1];
                                s = this.formatServerError(i[n[0]][0], f.config.getStringData(n[0], !1, n[0]))
                            }
                            t.includes(n[0].toLowerCase()) && (i = this.getVerificationCodeErrorPayload(n[0])), [s, o] = this.findFieldWithError(i)
                        }
                    } else if (i.includes(n)) {
                        let e = 0,
                            i = this.fields.length;
                        for (; e < i; e++)
                            if (t.includes(this.fields[e].schemaKey.toLowerCase())) {
                                let t = this.getVerificationCodeErrorPayload(this.fields[e].schemaKey);
                                s = this.fields[e].formatServerError(t[this.fields[e].schemaKey][0]), o = e;
                                break
                            }
                    }
                } catch (e) {
                    return [s, o]
                }
            }
            return [s, o]
        }
        findFieldByKey(e) {
            for (let t = 0, i = this.fields.length; t < i; t++)
                if (this.fields[t].schemaKey.toLowerCase() == e.toLowerCase()) return [t, this.fields[t]];
            return [-1, null]
        }
        findFieldWithError(e) {
            let t = Object.keys(e),
                i = null;
            for (let s = 0, o = this.fields.length; s < o; s++) {
                let o = this.fields[s].schemaKey;
                if (((o = t.find((e => e.toLowerCase() == this.fields[s].schemaKey.toLowerCase()))) || (o = t.find((e => e.toLowerCase() == ("$." + this.fields[s].schemaKey).toLowerCase()))) || (o = t.find((e => e.toLowerCase() == (this.fields[s].schemaKey + ".areaCode").toLowerCase())))) && (i = e[o][0]), i) return b.hideAllTooltips(), [this.fields[s].formatServerError(i), s]
            }
            return [null, -1]
        }
        showServerError(e) {
            let t = this.getServerError(e),
                i = "",
                s = f.Enum.ToastType.ToastTypeDefault;
            null == t[0] ? (t[0] = f.config.getStringData("ErrorUnknown", !1, "Unknown error occured"), i = f.config.getStringData("Error"), s = f.Enum.ToastType.ToastTypeError) : (i = f.config.getStringData("Attention"), s = f.Enum.ToastType.ToastTypeWarning), t[1] >= 0 ? b.showToolTipsForFieldValidator(this.fields[t[1]], i, t[0]) : "10000003" == e.code ? this.fields.forEach((t => {
                if ("phone" === t.schemaKey || "email" === t.schemaKey) {
                    let s = t.formatServerError(e);
                    b.showToolTipsForFieldValidator(t, i, s.split("<", 1)[0])
                }
            })) : u.getInstance().show(t[0], !0)
        }
        formatServerError(e, t) {
            let i = f.httpHandler.getResponseCode(e),
                s = f.config.getStringData("serverErrorCode" + i, !1, f.httpHandler.getResponseMessage(e) || "Unknown error occured");
            return null != t && t.length > 0 && (s = t + ": " + s), s
        }
        onEnable() {
            this.node.on("size-changed", this.onSizeChange, this), this.checkAndSetAutoFocus()
        }
        checkAndSetAutoFocus() {
            (this.autoFocusOnEnable || f.appConfig.isLandscapeLayout) && this.scheduleOnce(this.autoFocus.bind(this), f.action.delay_type.VERYSLOW)
        }
        onSizeChange(e) {
            let t = this.getEditBoxFocusing();
            !a.isNative || a.os !== a.OS.WINDOWS && a.os !== a.OS.OSX ? null == t || t.isFocused() || t.setFocus() : null != t && this.scheduleOnce((() => {
                t.setFocus()
            }))
        }
        onDisable() {
            this.node.off("size-changed", this.onSizeChange, this)
        }
        autoFocus() {
            if (f.tools.isAnyPopupVisible(this.currentFormIsPopup)) return;
            if (b.getInstance().isAnyTooltipsShowed()) return;
            let e = this.getFirstSuggestedEditbox();
            if (e) {
                var t;
                if (f.popUp.isNodeActive() && (null == (t = f.popUp.getGeneralPopup()) || null == (t = t.inputField) ? void 0 : t.uuid) != e.uuid) return;
                e.focus()
            }
        }
        getEditBoxFocusing() {
            let e = this.fields.find((e => {
                var t;
                return e instanceof E && (null == (t = e.getEditBox()) ? void 0 : t.isFocused())
            }));
            return null != e ? e.getEditBox() : null
        }
        getFirstSuggestedEditbox() {
            if (!this.fields || 0 == this.fields.length) return null;
            for (let e = 0; e < this.fields.length; e++) {
                let t = this.fields[e];
                if (t instanceof E) {
                    let e = t.getEditBox();
                    if (t instanceof c) continue;
                    if (!(!this.isActive(e) || e.string && t.isFieldValid())) return e;
                    if (t instanceof g && t.repeat_password && (e = t.repeat_password.getEditBox(), this.isActive(e) && (!e.string || !t.repeat_password.isFieldValid()))) return e
                }
            }
            return null
        }
        onEditReturn(e) {
            this.submitOnEnter()
        }
        onEditBackTab(e) {
            if (!this.fields || 0 == this.fields.length || this._isFocusingNextInputField) return;
            let t = this.fields[e];
            if (t instanceof g) {
                const e = t;
                if (e.repeat_password) {
                    if (e.repeat_password.editBox.isFocused()) return void this.focusInput(e.editBox)
                }
            }
            if (t instanceof c && (t.focusingEditBoxIndex = 0, t.hideDropDownList()), t instanceof h) {
                if (0 == t.isDropDownShown) return void t.initAreaCode();
                t.isDropDownShown = !1
            }
            t instanceof p && t.hide();
            let i = e,
                s = !1;
            for (; - 1 == i ? (i = this.fields.length - 1, s = !0) : i--, !(s && i <= e);) {
                let e = this.fields[i];
                if (e instanceof E) {
                    if (e instanceof g) {
                        const t = e;
                        if (t.repeat_password) {
                            if (!t.repeat_password.editBox.isFocused()) return void this.focusInput(t.repeat_password.editBox)
                        }
                    }
                    if (this.focusInput(e.getEditBox())) {
                        if (e instanceof c && (e.focusingEditBoxIndex = 0, e.openDropDownList()), e.node.activeInHierarchy && e instanceof h) return void(e.isDropDownShown = !1);
                        break
                    }
                }
            }
        }
        onEditTab(e) {
            if (!this.fields || 0 == this.fields.length || this._isFocusingNextInputField) return;
            let t = this.fields[e];
            if (t instanceof g) {
                const e = t;
                if (e.repeat_password) {
                    if (1 == e.editBox.isFocused() && this.focusInput(e.repeat_password.editBox)) return
                }
            }
            if (t instanceof c) {
                let e = t.getNextFocusingEditBox();
                if (this.focusInput(e)) return void t.openDropDownList();
                t.focusingEditBoxIndex = 0, t.hideDropDownList()
            }
            if (t instanceof h) {
                let e = t.editBox;
                if (this.isActive(e) && t.isDropDownShown) return t.isDropDownShown = !1, void this.focusInput(e)
            }
            t instanceof p && t.hide();
            let i = e,
                s = !1;
            for (; i >= this.fields.length - 1 ? (i = 0, s = !0) : i++, !(s && i >= e);) {
                let e = this.fields[i];
                if (e instanceof E) {
                    if (e.node.activeInHierarchy && e instanceof h) return void e.initAreaCode();
                    if (this.focusInput(e.getEditBox())) {
                        e instanceof c && (e.focusingEditBoxIndex = 0, e.openDropDownList());
                        break
                    }
                }
            }
        }
        isActive(e) {
            return e && e.enabled && e.node.activeInHierarchy
        }
        focusInput(e) {
            return !(!l(e) || !this.isActive(e)) && (this._isFocusingNextInputField = !0, this.scheduleOnce((() => {
                e.focus(), this._isFocusingNextInputField = !1
            })), !0)
        }
        haveField(e) {
            return this.findFieldByKey(e)[0] >= 0
        }
    }).prototype, "urlKey", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), T = t(D.prototype, "method", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "post"
        }
    }), I = t(D.prototype, "fields", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), O = t(D.prototype, "autoFocusOnEnable", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), x = D)) || x));
    s._RF.pop()
}