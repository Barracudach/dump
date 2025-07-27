import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cv.js";
import * as l from "./DropDown.js";

function main() {
    var u, d, p, g, I, c, m, D;
    i._RF.push({}, "91f687TJwRB2apkYxI8BgGS", "ReportDateField", void 0);
    const {
        ccclass: y,
        property: w
    } = r;
    t("default", (u = w(a), d = w(s), p = w(s), y((c = e((I = class extends h {
        constructor(...t) {
            super(...t), this.selectedDate = new Date, n(this, "monthInputNode", c, this), n(this, "dayInput", m, this), n(this, "yearInput", D, this), this._dateChangeHandler = null, this.monthInput = null, this.dateNow = new Date, this.minYear = 1900, this.maxYear = 2020
        }
        get daysInMonth() {
            return new Date(parseInt(this.yearInput.string), this.monthInput.value + 1, 0).getDate()
        }
        get dateString() {
            return this.GetFieldDate().toISOString().slice(0, 10) + "T00:00:00+00:00"
        }
        get dateISOString() {
            return this.GetFieldDate().toISOString()
        }
        start() {
            this.monthInput = this.monthInputNode.getComponent(l), this.selectedDate = o.config.getTimeWithTimeZone(), this.dateNow = o.config.getTimeWithTimeZone(), this.maxYear = this.dateNow.getFullYear(), this.minYear = 1900
        }
        clear() {
            this.dateNow = o.config.getTimeWithTimeZone(), this.monthInput.value = this.dateNow.getMonth(), this.dayInput.string = this.dateNow.getDate().toString(), this.yearInput.string = this.dateNow.getFullYear().toString()
        }
        Init(t) {
            this.monthInput = this.monthInputNode.getComponent(l), this._dateChangeHandler = t, this.clear()
        }
        SetFieldDate(t) {
            this.selectedDate = t, this.monthInput.value = this.selectedDate.getMonth(), this.dayInput.string = this.selectedDate.getDate().toString(), this.yearInput.string = this.selectedDate.getFullYear().toString(), this.validateDateIntern()
        }
        GetFieldDate() {
            return new Date(parseInt(this.yearInput.string), this.monthInput.value, parseInt(this.dayInput.string))
        }
        onMonthChanged() {
            let t = parseInt(this.dayInput.string);
            this.dayInput.string = Math.clamp(t, 1, this.daysInMonth).toString(), this.validateDateIntern()
        }
        onDayChanged() {
            let t = parseInt(this.dayInput.string);
            t = isNaN(t) ? 1 : Math.clamp(t, 1, this.daysInMonth), this.dayInput.string = t.toString(), this.validateDateIntern()
        }
        onYearChanged() {
            let t = parseInt(this.yearInput.string);
            t = isNaN(t) ? this.dateNow.getFullYear() : Math.clamp(t, this.minYear, this.maxYear);
            let e = parseInt(this.dayInput.string);
            this.yearInput.string = t.toString(), this.dayInput.string = Math.clamp(e, 1, this.daysInMonth).toString(), this.validateDateIntern()
        }
        validateDateIntern() {
            let t = this.GetFieldDate();
            this.selectedDate = t, t.getTime() > this.dateNow.getTime() && (this.selectedDate = this.dateNow, this.yearInput.string = this.dateNow.getFullYear().toString(), this.monthInput.value = this.dateNow.getMonth(), this.dayInput.string = this.dateNow.getDate().toString()), this._dateChangeHandler()
        }
    }).prototype, "monthInputNode", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(I.prototype, "dayInput", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(I.prototype, "yearInput", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = I)) || g));
    i._RF.pop()
}