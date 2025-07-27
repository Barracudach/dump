import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./EditBoxValidator.js";
import * as C from "./cv.js";
import * as c from "./SelectView.js";
import * as p from "./CountryFlagSpriteFrame.js";
import * as f from "./LayoutChildAutoSize.js";
import * as g from "./FormValidator.js";
import * as y from "./libphonenumber.mjs_cjs=&original=.js";

function main() {
    var m, A, b, N, K, S, L, w, v, F, D, I, V, B, P, _, E, T, O, x, z, U;
    a._RF.push({}, "ea3a8p1GX1I26B7YzkybqkG", "PhoneField", void 0);
    const {
        ccclass: R,
        property: j
    } = d;
    e("default", (m = j(o), A = j({
        override: !0,
        visible: !1
    }), b = j(r), N = j(n), K = j(n), S = j(n), L = j(s), w = j(l), v = j(r), F = j(n), R((V = t((I = class extends h {
        constructor(...e) {
            super(...e), i(this, "areaCodeText", V, this), i(this, "asString", B, this), i(this, "areaCode_prefab", P, this), i(this, "dropDownBtn", _, this), i(this, "dropDownImg", E, this), i(this, "addButton", T, this), i(this, "currentCountry", O, this), i(this, "defaultFlag", x, this), i(this, "itemPhoneArea", z, this), i(this, "alternateRegistrationPanelNode", U, this), this._fullAreaCode = "", this.flagCode = "", this.PHONE_AREA_COUNT = 238, this.areaCodesKyes = [], this.areaCodesValues = [], this.isDropDownShown = !1, this.defualtCode = {
                name: "CA",
                value: "+1",
                i18Key: "areaCode35"
            }, this.isNodeLoaded = !1, this.canUpdateCodeByLocation = !0, this.areaCodeKeyList = [], this.addVerificationTypeInValue = !1, this.showAllCountryCodeList = !1
        }
        set fullAreaCode(e) {
            this._fullAreaCode = e
        }
        get fullAreaCode() {
            return this._fullAreaCode
        }
        onLoad() {
            super.onLoad(), this.asString = !0, isNaN(Number(this.editBox.string)) && (this.editBox.string = ""), this.setIntialView(), this.isNodeLoaded = !0, this.showAllCountryCodeList = !1
        }
        setIntialView() {
            this.defualtCode && null != this.defualtCode.name && this.areaCodeKeyList.includes(this.defualtCode.i18Key) ? this.updateAreaCode(this.defualtCode.name + this.defualtCode.value, !1) : this.areaCodeKeyList.length > 0 && (this.defualtCode = this.getAreaCodeFromI18Key(this.areaCodeKeyList[0]), this.updateAreaCode(this.defualtCode.name + this.defualtCode.value, !1)), this.updateAreaCodeInteractable(this.areaCodeKeyList.length > 1), this.canUpdateCodeByLocation && this.updateCountryNameByLocation()
        }
        initFieldFromSchema(e) {
            if (super.initFieldFromSchema(e), e) {
                const t = e.meta;
                t && "object" == typeof t && t.map((e => {
                    this.addCountryAreaCodesToList(e)
                }), this)
            }
            this.addAreaCodeKeyByCountry()
        }
        setDefualtValue(e) {
            var t;
            const i = this.getAreaCodeByCountryName(e);
            null != (t = i[0]) && t.name && this.areaCodeKeyList.includes(i[0].i18Key) && (this.defualtCode = i[0])
        }
        getAllAreaCodesKeys(e = !1) {
            if (0 == this.areaCodesKyes.length)
                for (let t = 0; t < this.PHONE_AREA_COUNT; t++) {
                    const i = "areaCode" + t;
                    if (e) {
                        const e = this.stripEmptyStrings(C.appConfig.getLoginConfig().phone.countryIgnore || []),
                            t = this.getAreaCodeFromI18Key(i).name;
                        if (e.includes(t)) continue
                    }
                    this.areaCodesKyes.push(i), this.areaCodesValues.push(C.config.getStringData(this.areaCodesKyes[t]).split(",").pop())
                }
        }
        addAreaCodeKeyByCountry(e = !1) {
            if (this.areaCodeKeyList.length <= 0) {
                var t;
                const i = e ? C.appConfig.getLoginConfig() : C.appConfig.getFormsConfig(),
                    a = this.stripEmptyStrings((null == i || null == (t = i.phone) ? void 0 : t.country) || []);
                if (!this.showAllCountryCodeList && a.length > 0)
                    for (let e = 0; e < a.length; e++) this.addCountryAreaCodesToList(a[e]);
                else this.getAllAreaCodesKeys(e), this.areaCodeKeyList = [...this.areaCodesKyes]
            }
            this.isNodeLoaded && this.setIntialView()
        }
        addCountryAreaCodesToList(e) {
            const t = this.getAreaCodeByCountryName(e);
            for (let e = 0; e < t.length; e++) t[e].name && this.areaCodeKeyList.push(t[e].i18Key)
        }
        stripEmptyStrings(e) {
            return e.filter((e => "" !== e))
        }
        onSpriteFrameLoaded(e, t) {
            t == this.flagCode && u(this.currentCountry, !0) && (this.currentCountry.spriteFrame = e)
        }
        onLoadFlagError(e) {
            this.currentCountry.spriteFrame = this.defaultFlag
        }
        updateAreaCodeInteractable(e) {
            this.dropDownBtn && (this.dropDownBtn.active = e), this.dropDownImg && (this.dropDownImg.active = e), this.dropDownImg.parent.getComponentsInChildren(f).forEach((e => e.updateSize()))
        }
        initAreaCode() {
            C.AudioMgr.playButtonSound("button_click.mp3"), c.showPrefab({
                titleKey: "SelectPhoneArea_Title",
                searchPlaceholderKey: "SelectPhoneArea_SearchInputPlaceholder",
                itemPrefab: this.itemPhoneArea,
                itemClassName: "SelectItem_PhoneArea",
                items: c.i18nKeysToItems(this.areaCodeKeyList, this.fullAreaCode),
                searchEnabled: !0,
                onValueExit: this.onDropDownHide.bind(this),
                valueSelected: this.fullAreaCode,
                onValueSelected: this.updateAreaCode.bind(this)
            }, this.areaCode_prefab)
        }
        updateAreaCode(e, t = !0) {
            this.setAreaCodeText(e, t)
        }
        setAreaCodeText(e, t = !0) {
            e.indexOf("+") <= 0 && (e = this.getFullAreaCode(e)), this.fullAreaCode = e, this.flagCode = e.split("+")[0], p.loadFlag(this.flagCode, this.onSpriteFrameLoaded.bind(this), this.onLoadFlagError.bind(this)), this.areaCodeText.string = "(" + this.getAreaCodeData() + ")", this.value && this.value.toString().length > 0 && this.doValidate(), this.scheduleOnce(function() {
                this.drawBorderEditBox(this.isFocus)
            }.bind(this), 0)
        }
        getAreaCodeData() {
            let e = this.fullAreaCode,
                t = e.indexOf("+");
            return e = e.substring(t, e.length).trim(), e
        }
        get areaCodeValue() {
            return C.appConfig.getFormsConfig().phone.includePlusSign ? this.getAreaCodeData() : this.getAreaCodeData().replace("+", "")
        }
        setValueFromObj(e) {
            let t = {};
            C.appConfig.getFormsConfig().phone.useNestedSchema ? this.schemaKey in e && (t = e[this.schemaKey]) : t = e, "mobile" in t && (this.value = t.mobile || "")
        }
        addValueToObject(e) {
            var t;
            if (null != (t = this.node) && t.active) {
                const t = this.simplifyInternationalPhoneValue();
                this.addVerificationTypeInValue && (e.verificationType = "Sms"), C.appConfig.getFormsConfig().phone.useNestedSchema ? e[this.schemaKey] = {
                    mobile: t.phoneNumber,
                    areaCode: t.areaCode
                } : (e.mobile = t.phoneNumber, e.areaCode = t.areaCode)
            }
        }
        getPhoneAndAreaValueAsString() {
            const e = this.simplifyInternationalPhoneValue(),
                t = {
                    formatedData: {
                        mobile: e.phoneNumber,
                        areaCode: e.areaCode
                    },
                    rawData: {
                        mobile: this.value.toString(),
                        fullAreaCode: this.fullAreaCode
                    }
                };
            return JSON.stringify(t)
        }
        setPhoneAndAreaValueFromString(e) {
            try {
                var t, i;
                let a = JSON.parse(e);
                if (null != a && null != (t = a.rawData) && t.fullAreaCode) {
                    this.canUpdateCodeByLocation = !1;
                    const e = a.rawData.fullAreaCode.split("+").shift(),
                        t = this.getAreaCodeByCountryName(e);
                    t[0] && (this.defualtCode = t[0], this.updateAreaCode(this.defualtCode.name + this.defualtCode.value, !1))
                }
                null != a && null != (i = a.rawData) && i.mobile && (this.value = a.rawData.mobile, this.doValidate())
            } catch {}
        }
        simplifyInternationalPhoneValue() {
            let e = {
                areaCode: "",
                phoneNumber: ""
            };
            if (!this.value || !this.fullAreaCode || !/^\d+$/.test(this.value)) return e;
            const t = this.fullAreaCode.split("+")[0],
                i = y.PhoneNumberUtil.getInstance().parseAndKeepRawInput(this.value, t),
                a = y.PhoneNumberUtil.getInstance().format(i, y.PhoneNumberFormat.INTERNATIONAL).split(" ");
            return e.areaCode = a.shift(), e.phoneNumber = a.join("").replace(/-/g, ""), e
        }
        getFullAreaCode(e) {
            let t = e.split("+").pop();
            if ("" == t) return e;
            this.getAllAreaCodesKeys();
            for (let e = 0; e < this.PHONE_AREA_COUNT; e++) {
                let i = this.areaCodesValues[e];
                const a = i.split("*").pop();
                if ("" != a && a == t) return i.replace("*", "+")
            }
            return e
        }
        getAreaCodeByCountryName(e) {
            this.getAllAreaCodesKeys();
            const t = [];
            for (let i = 0; i < this.PHONE_AREA_COUNT; i++) {
                const a = this.areaCodesValues[i];
                if ("string" == typeof a && "" !== a && a.includes("*")) {
                    const a = this.areaCodesValues[i].split("*");
                    if (a.length > 1 && a[0] == e) {
                        const e = {
                            name: null,
                            value: null,
                            i18Key: null
                        };
                        e.name = a[0], e.value = "+" + a[1], e.i18Key = this.areaCodesKyes[i], t.push(e)
                    }
                } else console.log("Invalid area code by country name : " + a)
            }
            return t
        }
        getAreaCodeFromI18Key(e) {
            let t = {
                    name: null,
                    value: null,
                    i18Key: null
                },
                i = C.config.getStringData(e).split(",").pop().split("*");
            return i ? (t.name = i[0], t.value = "+" + i[1], t.i18Key = e, t) : t
        }
        onGetCountryName(e) {
            var t;
            if (!u(this.node) || !this.canUpdateCodeByLocation) return;
            const i = this.getAreaCodeByCountryName(e);
            null != (t = i[0]) && t.name && this.areaCodeKeyList.includes(i[0].i18Key) && this.updateAreaCode(i[0].name + i[0].value, !1)
        }
        updateCountryNameByLocation() {
            C.dataHandler.getUserData().countryISO2 ? this.onGetCountryName(C.dataHandler.getUserData().countryISO2) : C.security.locationMonitor.getLocationDetails(this.onGetCountryName.bind(this))
        }
        doBaseValidate() {
            return g.validateField(this)
        }
        onDropDownHide(e) {
            var t, i;
            "editing-tab" == e && (null == (t = this._form) || t.onEditTab(this._formFieldIndex));
            "editing-backtab" == e && (null == (i = this._form) || i.onEditBackTab(this._formFieldIndex))
        }
    }).prototype, "areaCodeText", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(I.prototype, "asString", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), P = t(I.prototype, "areaCode_prefab", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(I.prototype, "dropDownBtn", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(I.prototype, "dropDownImg", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(I.prototype, "addButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(I.prototype, "currentCountry", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(I.prototype, "defaultFlag", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(I.prototype, "itemPhoneArea", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(I.prototype, "alternateRegistrationPanelNode", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = I)) || D));
    a._RF.pop()
}