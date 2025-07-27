import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./TooltipsManager.js";
import * as s from "./EditBoxValidator.js";
import * as d from "./cv.js";
import * as n from "./DropDownField.js";

function main() {
    var r, h, D, g, c, u, f, B, F;
    a._RF.push({}, "a5e40HjSt5N054Z9BmrVuhZ", "BirthDayField", void 0);
    const {
        ccclass: p,
        property: O,
        menu: v
    } = o;
    t("default", (r = v("Custom UI/Date Field"), h = O(n), D = O(n), g = O(n), p(c = r((f = e((u = class extends s {
        constructor(...t) {
            super(...t), i(this, "DOBYearField", f, this), i(this, "DOBMonthField", B, this), i(this, "DOBDateField", F, this), this.focusingEditBoxIndex = 0, this._date = null, this.todaysDate = new Date, this._value = ""
        }
        getNextFocusingEditBox() {
            return 2 == this.focusingEditBoxIndex ? (this.focusingEditBoxIndex = 0, null) : (this.focusingEditBoxIndex++, this.editBox)
        }
        setEditBoxFormFieldIndex(t = null, e = 0) {
            var i;
            null == (i = this.editBox) || i.focus(), this.focusingEditBoxIndex = e
        }
        openDropDownList() {
            switch (this.hideDropDownList(), this.focusingEditBoxIndex) {
                case 0:
                    this.DOBDateField.onClick();
                    break;
                case 1:
                    this.DOBMonthField.onClick();
                    break;
                case 2:
                    this.DOBYearField.onClick()
            }
        }
        hideDropDownList() {
            this.DOBDateField.hide(), this.DOBMonthField.hide(), this.DOBYearField.hide()
        }
        clear() {
            this.value = ""
        }
        get date() {
            return this._date
        }
        set date(t) {
            this._date = t
        }
        get dateString() {
            return this.dateISOString.slice(0, 10) + "T00:00:00+00:00"
        }
        get dateISOString() {
            return d.config.getUTCWithTimeZone(this._date.getTime()).toISOString()
        }
        onLoad() {
            super.onLoad(), null == this._date && (this.date = d.config.getTimeWithTimeZone()), this.populateYearDropdown(), this.populateMonthDropdown(), this.populateDateDropdown()
        }
        start() {
            var t, e, i;
            null == (t = this.DOBDateField) || null == (t = t.editBox) || t._showLabels(), null == (e = this.DOBMonthField) || null == (e = e.editBox) || e._showLabels(), null == (i = this.DOBYearField) || null == (i = i.editBox) || i._showLabels()
        }
        onEnable() {
            this.date.toLocaleDateString() !== this.todaysDate.toLocaleDateString() && setTimeout((() => {
                this.DOBDateField && this.DOBMonthField && this.DOBYearField && (this.DOBDateField.value = this.date.getDate().toString(), this.DOBMonthField.value = (this.date.getMonth() + 1).toString(), this.DOBYearField.value = this.date.getFullYear().toString()), this.focusingEditBoxIndex = 0
            }), 0)
        }
        get value() {
            return this._value
        }
        set value(t) {
            if (t.length > 10) {
                let e = new Date(t);
                "Invalid Date" !== e.toLocaleString() && (this.date = e, this._value = t)
            }
        }
        getInvalidFieldNode() {
            return d.appConfig.isLandscapeLayout ? this.DOBYearField.node : this.node
        }
        populateYearDropdown() {
            const t = this.todaysDate.getFullYear() - d.appConfig.getFormsConfig().dob.minAge,
                e = t - 100;
            this.DOBYearField.onValueSelectCallback = t => {
                this.DOBMonthField.drawBorderEditBox(!1), this.DOBYearField.hideInvalidEffects(), this.populateDateDropdown(!0)
            };
            let i = "";
            this.date.toLocaleDateString() !== this.todaysDate.toLocaleDateString() && (this.DOBYearField.value = i = this.date.getFullYear().toString());
            for (let a = t; a >= e; a--) this.DOBYearField.dropDownItemList.push({
                text: a.toString(),
                id: a.toString(),
                selected: i
            })
        }
        populateMonthDropdown() {
            this.DOBMonthField.onValueSelectCallback = t => {
                this.DOBYearField.drawBorderEditBox(!1), this.DOBMonthField.hideInvalidEffects(), this.populateDateDropdown(!0)
            };
            let t = "";
            this.date.toLocaleDateString() !== this.todaysDate.toLocaleDateString() && (this.DOBMonthField.value = t = (this.date.getMonth() + 1).toString());
            for (let e = 1; e <= 12; e++) this.DOBMonthField.dropDownItemList.push({
                i18nKey: ("Month" + e).toString(),
                id: e.toString(),
                selected: t
            })
        }
        populateDateDropdown(t = !1) {
            this.DOBDateField.dropDownItemList = [], this.DOBDateField.onValueSelectCallback = t => {
                this.DOBDateField.value, this.DOBDateField.hideInvalidEffects(), this.DOBMonthField.drawBorderEditBox(!1), this.DOBYearField.drawBorderEditBox(!1), this.checkForEmptyField()
            };
            let e = 31,
                i = this.DOBDateField.value;
            if (t) {
                if ("" !== this.DOBYearField.value && "" !== this.DOBMonthField.value && "" !== this.DOBDateField.value) {
                    let t = parseInt(this.DOBMonthField.value);
                    e = new Date(parseInt(this.DOBYearField.value), t, 0).getDate(), parseInt(this.DOBDateField.value) > e && (this.DOBDateField.value = i = e.toString())
                }
            } else this.date.toLocaleDateString() !== this.todaysDate.toLocaleDateString() && "" == this.DOBDateField.value && (this.DOBDateField.value = i = this.date.getDate().toString());
            for (let t = 1; t <= e; t++) {
                let e = t <= 9 && d.appConfig.getFormsConfig().dob.addZeroInDay ? "0" + t : t;
                this.DOBDateField.dropDownItemList.push({
                    text: e.toString(),
                    id: t.toString(),
                    selected: i
                })
            }
            this.checkForEmptyField()
        }
        validateAge(t) {
            let e = Date.now() - t.getTime(),
                i = new Date(e).getUTCFullYear();
            return Math.abs(i - 1970)
        }
        checkForEmptyField() {
            if ("" !== this.DOBDateField.string && "" !== this.DOBMonthField.string && "" !== this.DOBYearField.string) {
                let t = parseInt(this.DOBMonthField.value) - 1;
                this._date = new Date(parseInt(this.DOBYearField.string), t, parseInt(this.DOBDateField.string)), this.validateAge(this._date) < d.appConfig.getFormsConfig().dob.minAge ? (this._valid = !1, this.showInvalidEffects(), l.hideAllTooltips(), l.showToolTipsForFieldValidator(this, d.config.getStringData("Attention"), d.config.getStringData("ErrorValidAge").replace("%d", d.appConfig.getFormsConfig().dob.minAge.toString()))) : this.hideInvalidEffects()
            }
        }
        showInvalidEffects() {
            this.DOBDateField.showInvalidEffects(), this.DOBMonthField.showInvalidEffects(), this.DOBYearField.showInvalidEffects()
        }
        hideInvalidEffects() {
            this.DOBDateField.hideInvalidEffects(), this.DOBMonthField.hideInvalidEffects(), this.DOBYearField.hideInvalidEffects(), this.showOrHideErrorToolTipText(!1)
        }
        validateFields() {
            const t = this.DOBDateField.string,
                e = this.DOBMonthField.string,
                i = this.DOBYearField.string;
            let a = d.config.getStringData("BirthDay"),
                o = d.config.getStringData("BirthDay_Day_Placeholder"),
                l = d.config.getStringData("BirthDay_Month_Placeholder"),
                s = d.config.getStringData("BirthDay_Year_Placeholder"),
                n = d.config.getStringData("ErrorValidRequired"),
                r = d.config.getStringData("ErrorValidAge"),
                h = d.config.getStringData("ErrorValidAllRequired"),
                D = super.doBaseValidate();
            if (t && e && i) {
                if (this._date) {
                    if (!(this.validateAge(this._date) < d.appConfig.getFormsConfig().dob.minAge)) return this.date = this._date, !0;
                    this._valid = !1, this.showInvalidEffects(), D = r.replace("%d", d.appConfig.getFormsConfig().dob.minAge.toString())
                }
            } else t || e || i ? t || e ? t || i ? e || i ? t ? e ? i ? D = !0 : (this.DOBYearField.showInvalidEffects(), D = n.replace("%s", s)) : (this.DOBMonthField.showInvalidEffects(), D = n.replace("%s", l)) : (this.DOBDateField.showInvalidEffects(), D = n.replace("%s", o)) : (this.DOBMonthField.showInvalidEffects(), this.DOBYearField.showInvalidEffects(), D = d.StringTools.formatC(h, l, s)) : (this.DOBDateField.showInvalidEffects(), this.DOBYearField.showInvalidEffects(), D = d.StringTools.formatC(h, o, s)) : (this.DOBDateField.showInvalidEffects(), this.DOBMonthField.showInvalidEffects(), D = d.StringTools.formatC(h, o, l)) : (this.showInvalidEffects(), D = n.replace("%s", a));
            return D
        }
        doValidate() {
            let t = this.validateFields();
            return !0 === t ? (this._valid = !0, this._error = "", this.hideInvalidEffects()) : (this._valid = !1, this._error = t, this.showOrHideErrorToolTipText(!0, this._error), l.hideAllTooltips()), t
        }
        addValueToObject(t) {
            null == this._date && (this.date = d.config.getTimeWithTimeZone()), t[this.schemaKey] = this.dateString
        }
    }).prototype, "DOBYearField", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(u.prototype, "DOBMonthField", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(u.prototype, "DOBDateField", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = u)) || c) || c));
    a._RF.pop()
}