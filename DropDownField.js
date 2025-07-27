import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./SelectView.js";
import * as D from "./CountryFlagSpriteFrame.js";
import * as b from "./Enum.js";
import * as w from "./TooltipsManager.js";
import * as m from "./EditBoxValidator.js";
import * as f from "./GeneralConfig.js";
import * as T from "./cv.js";

function main() {
    var C, S, L, v, E, I, N, B, F, x, V, O, _, z, A, P, H, K, G, k, M, U, J, R, j, W;
    o._RF.push({}, "a40ceEXM6RJ96k0zPptmHlS", "DropDownField", void 0);
    const {
        ccclass: X,
        property: Y
    } = p;
    let Z = e("DropDownType", function(e) {
        return e[e.CountryType = 0] = "CountryType", e[e.NationalityType = 1] = "NationalityType", e[e.CountryOfBirthType = 2] = "CountryOfBirthType", e[e.LanguagesType = 3] = "LanguagesType", e[e.OccupationType = 4] = "OccupationType", e[e.StateType = 5] = "StateType", e[e.OccupationJobTitleType = 6] = "OccupationJobTitleType", e[e.BirthDayType = 7] = "BirthDayType", e[e.SourceOfIncomeType = 8] = "SourceOfIncomeType", e
    }({}));
    e("DropDownField", (C = Y(n), S = Y({
        type: r(Z)
    }), L = Y({
        type: a,
        visible: function() {
            return this.dropDownType == Z.CountryType || this.dropDownType == Z.CountryOfBirthType || this.dropDownType == Z.NationalityType || this.dropDownType == Z.LanguagesType
        }
    }), v = Y({
        type: s,
        visible: function() {
            return this.dropDownType == Z.CountryType || this.dropDownType == Z.CountryOfBirthType || this.dropDownType == Z.NationalityType || this.dropDownType == Z.LanguagesType
        }
    }), E = Y(l), I = Y(l), N = Y(l), B = Y(n), F = Y(l), x = Y(h), V = Y(a), X((z = t((_ = class extends m {
        constructor(...e) {
            super(...e), i(this, "dropDownSelectViewPrefab", z, this), i(this, "dropDownType", A, this), i(this, "countryIcon", P, this), i(this, "currentCountry", H, this), i(this, "itemKeyConcatStr", K, this), i(this, "titleKey", G, this), i(this, "searchPlaceholderKey", k, this), i(this, "itemPrefab", M, this), i(this, "itemClassName", U, this), i(this, "searchEnabled", J, this), i(this, "isAutoFillField", R, this), i(this, "custmiseDropDownScrollContentSize", j, this), i(this, "arrowImageNode", W, this), this.dropDownItemList = [], this.isDropDownEnable = !0, this.onValueSelectCallback = null, this.selectViewNode = null, this.tempValue = "", this._value = ""
        }
        onEnable() {
            super.onEnable(), this.onLanguageChange(), T.MessageCenter.register(T.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this.node), this.dropDownType == Z.LanguagesType && (this.value = T.config.getCurrentLanguage(), this.tempValue = this.value, this.dropDownItemList = T.appConfig.getGeneralConfig().availableLanguages.map((e => ({
                i18nKey: T.StringTools.formatC(this.itemKeyConcatStr, f[e].code),
                id: f[e].type,
                imgPath: f[e].flagPath,
                selected: this.value
            })))), 1 == this.dropDownItemList.length ? (this.searchEnabled = !1, this.custmiseDropDownScrollContentSize = !1, this.value = this.dropDownItemList[0].id, this.isDropDownEnable = !1, this.enableDropDown(this.isDropDownEnable)) : this.dropDownItemList.length < 6 && (this.searchEnabled = !1, this.custmiseDropDownScrollContentSize = !1), u.on(d.EVENT_SHOW, this.onAppEnterForeground, this)
        }
        onDisable() {
            super.onDisable(), T.MessageCenter.unregister(T.config.CHANGE_LANGUAGE, this.node), u.off(d.EVENT_SHOW, this.onAppEnterForeground, this)
        }
        onAppEnterForeground() {
            this.isAutoFillField && !this.value && T.security.locationMonitor.getLocationDetails(this.onGetCountryName.bind(this), (() => {}), !1, 2)
        }
        get value() {
            return this._value
        }
        set value(e) {
            if (this._value = e, this.isDropDownEnable) {
                let i = T.StringTools.formatC(this.itemKeyConcatStr, e);
                if (i && (this.string = T.config.getStringData(i, !1)), this.dropDownType == Z.LanguagesType) this.string = T.config.getStringData(T.StringTools.formatC(this.itemKeyConcatStr, f[e].code), !1), D.loadFlag(f[e].flagPath, this.onSpriteFrameLoaded.bind(this), this.onLoadFlagError.bind(this), this.dropDownType == Z.LanguagesType);
                else if (this.dropDownType == Z.OccupationType) this.string = this.dropDownItemList[parseInt(e)].text, this.editBox.textLabel.node.activeInHierarchy || (this.editBox.textLabel.node.active = !0);
                else if (this.dropDownType == Z.OccupationJobTitleType) {
                    var t;
                    let e = null == (t = this.string) ? void 0 : t.split("-");
                    e && e.length > 1 && (this.string = e[1].trim()), this.editBox.textLabel.node.activeInHierarchy || (this.editBox.textLabel.node.active = !0)
                } else this.dropDownType == Z.CountryType || this.dropDownType == Z.NationalityType || this.dropDownType == Z.CountryOfBirthType ? D.loadFlag(e, this.onSpriteFrameLoaded.bind(this), this.onLoadFlagError.bind(this)) : this.dropDownType == Z.BirthDayType && 0 == this.itemKeyConcatStr.length ? (parseInt(e) <= 31 && (e = parseInt(e) <= 9 && T.appConfig.getFormsConfig().dob.addZeroInDay ? "0" + e : e), this.string = e) : this.dropDownType == Z.SourceOfIncomeType && (this.editBox.textLabel.node.activeInHierarchy || (this.editBox.textLabel.node.active = !0));
                this.drawBorderEditBox("" != this.string)
            }
        }
        get isShown() {
            var e;
            return null != this.selectViewNode && (null == (e = this.selectViewNode.node) ? void 0 : e.active)
        }
        onLanguageChange() {
            this._value && (this.value = this._value)
        }
        onSpriteFrameLoaded(e) {
            c(this.countryIcon, !0) && (this.countryIcon.active = !1), c(this.currentCountry, !0) && (this.currentCountry.node.active = !0, this.currentCountry.spriteFrame = e)
        }
        onLoadFlagError(e) {
            c(this.countryIcon, !0) && (this.countryIcon.active = !0), c(this.currentCountry, !0) && (this.currentCountry.node.active = !1)
        }
        initFieldFromSchema(e) {
            this.isDropDownEnable = "ComboBox" == e.type, this.enableDropDown(this.isDropDownEnable), this.isDropDownEnable && (this.dropDownItemList = [], e.meta && "object" == typeof e.meta && (this.dropDownItemList = e.meta.map((e => ({
                i18nKey: T.StringTools.formatC(this.itemKeyConcatStr, e),
                id: e
            }))))), super.initFieldFromSchema(e), this.isDropDownEnable && this.isAutoFillField && this.updateCountryNameByLocation()
        }
        enableDropDown(e) {
            let t = this.node.getComponent(y);
            t || (t = this.node.getComponentInChildren(y)), T.appConfig.isLandscapeLayout && this.isDropDownEnable ? (this.editBox.enabled = !0, this.editBox.node.on("editing-did-began", this.onEditStart, this)) : this.editBox.enabled = !e, 1 == this.dropDownItemList.length && (this.editBox.enabled = !1), t && (t.enabled = e), c(this.arrowImageNode, !0) && (this.arrowImageNode.active = e)
        }
        onEditStart(e) {
            this.onClick(), e.blur()
        }
        onValueSelected(e) {
            this.value = e, this.onTextChanged(), this.drawBorderEditBox("" != e)
        }
        onClickConfirm() {
            this.dropDownType == Z.LanguagesType && (this.tempValue = this.value, T.config.setCurrentLanguage(b[this.value]))
        }
        onTextChanged() {
            this.isDropDownEnable || (this.value = this.string), super.onTextChanged()
        }
        onDropDownHide(e) {
            var t, i, o, n;
            (null == (t = this.onValueSelectCallback) || t.call(this, this.value), this.onArrowUpDown(!1), null == (i = this.editBox) || i.node.emit("editing-did-ended", this.editBox), "editing-tab" == e) && (null == (o = this._form) || o.onEditTab(this._formFieldIndex));
            "editing-backtab" == e && (null == (n = this._form) || n.onEditBackTab(this._formFieldIndex));
            this.dropDownType == Z.LanguagesType && (this.onValueSelected(this.tempValue), this.tempValue = this.value, T.MessageCenter.send("Close_Language_Dialog"))
        }
        onClick(e = null) {
            this.isShown || (e && (e.propagationStopped = !0, T.AudioMgr.playButtonSound("button_click.mp3")), this.onArrowUpDown(!0), w.hideAllTooltips(), Z.BirthDayType || (this.dropDownItemList = g.sortMethod(this.dropDownItemList, !0)), this.selectViewNode = g.showPrefab({
                titleKey: this.titleKey,
                searchPlaceholderKey: this.searchPlaceholderKey,
                itemPrefab: this.itemPrefab,
                itemClassName: this.itemClassName,
                items: this.dropDownItemList,
                searchEnabled: this.searchEnabled,
                onValueSelected: this.onValueSelected.bind(this),
                onValueExit: this.onDropDownHide.bind(this),
                onClickConfirm: this.onClickConfirm.bind(this),
                enableDynamicScroll: this.custmiseDropDownScrollContentSize,
                valueSelected: this.dropDownType == Z.LanguagesType ? this.value : null
            }, this.dropDownSelectViewPrefab))
        }
        showOrHideInvalid(e) {
            this.isDropDownEnable || super.showOrHideInvalid(e)
        }
        showNodesIfInvalid(e) {
            this.isDropDownEnable || super.showNodesIfInvalid(e)
        }
        onArrowUpDown(e = !1) {
            c(this.arrowImageNode) && (this.arrowImageNode.angle = e ? 180 : 0)
        }
        onGetCountryName(e) {
            !T.dataHandler.getUserData().countryISO2 || this.dropDownType != Z.NationalityType && this.dropDownType != Z.CountryOfBirthType || (e = T.dataHandler.getUserData().countryISO2), this.dropDownItemList.find((t => t.id === e)) && (this.value = e)
        }
        updateCountryNameByLocation() {
            T.dataHandler.getUserData().countryISO2 ? this.onGetCountryName(T.dataHandler.getUserData().countryISO2) : T.security.locationMonitor.getLocationDetails(this.onGetCountryName.bind(this))
        }
        hide() {
            var e;
            this.isShown && (null == (e = this.selectViewNode) || e.hide())
        }
    }).prototype, "dropDownSelectViewPrefab", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(_.prototype, "dropDownType", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return Z.CountryType
        }
    }), P = t(_.prototype, "countryIcon", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(_.prototype, "currentCountry", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(_.prototype, "itemKeyConcatStr", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), G = t(_.prototype, "titleKey", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), k = t(_.prototype, "searchPlaceholderKey", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), M = t(_.prototype, "itemPrefab", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(_.prototype, "itemClassName", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), J = t(_.prototype, "searchEnabled", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), R = t(_.prototype, "isAutoFillField", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), j = t(_.prototype, "custmiseDropDownScrollContentSize", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), W = t(_.prototype, "arrowImageNode", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = _)) || O));
    o._RF.pop()
}