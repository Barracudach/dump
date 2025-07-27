import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./CalenderItem.js";

function main() {
    var u, p, D, m, g, M, y, b, v, S, C, w, B, f, T, _, Y, k, V, O, A, F;
    i._RF.push({}, "32273r/FzVPA5TrwugOAGS0", "DatePicker", void 0);
    const I = "onChange";
    let N = t("CalenderMode", function(t) {
        return t[t.Date = 0] = "Date", t[t.Month = 1] = "Month", t[t.Year = 2] = "Year", t
    }({}));
    class z {
        constructor(t, e, a) {
            this.day = void 0, this.month = void 0, this.year = void 0, this.day = t, this.month = e, this.year = a
        }
    }
    const {
        ccclass: W,
        property: E
    } = r;
    t("default", (u = E(n), p = E(n), D = E(s), m = E(s), g = E(s), M = E(s), y = E(s), b = E(s), v = E(s), S = E(s), W((B = e((w = class extends h {
        constructor(...t) {
            super(...t), this.oneDay = 864e5, this.date = new Date, this.daysMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], this.monthMap = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], this._calMode = N.Date, this.currentSelectedDate = null, this.tempDate = null, this.localisationMethod = null, a(this, "calenderBar", B, this), a(this, "calenderItem", f, this), a(this, "calenderBase", T, this), a(this, "navBar", _, this), a(this, "bgArrow", Y, this), a(this, "dateTitle", k, this), a(this, "navLeft", V, this), a(this, "navRight", O, this), a(this, "btnCurDate", A, this), a(this, "blockerButton", F, this)
        }
        initialiseUIComponent(t, e) {
            this.localisationMethod = t, this.localiseDaysMapData(), this.localiseMonthMapData(), this._calMode = N.Date;
            var a = new Date;
            e && (this.currentSelectedDate = e, a = this.currentSelectedDate), this.setupView(a), this.hideBlockerButton()
        }
        hideBlockerButton() {
            this.blockerButton.active = !1
        }
        addWidgetToBlockerButton(t) {
            this.blockerButton.active = !0, this.blockerButton.getComponent(l).width = 2 * t.getComponent(l).width, this.blockerButton.getComponent(l).height = 2 * t.getComponent(l).height
        }
        blockerButtonCallback(t, e) {
            this.node.removeFromParent()
        }
        setArrowOrientation(t, e) {
            t && this.bgArrow.setPosition(t), e && !isNaN(e) && (this.bgArrow.angle = -e)
        }
        getCurrentSelectedDate() {
            return this.currentSelectedDate ? this.currentSelectedDate : new Date
        }
        setupView(t) {
            this.tempDate = new Date(t), this.calenderBase.removeAllChildren(), this._calMode == N.Year ? this.setupYearView(t) : this._calMode == N.Month ? this.setupMonthView(t) : this._calMode == N.Date && this.setupSelectedMonthCalender(t)
        }
        setupYearView(t) {
            this.setupEmptyBar(), this.setupCalenderNavigationBar(this.tempDate.getFullYear() - 11 + "-" + this.tempDate.getFullYear()), this.setupYearData(this.tempDate)
        }
        setupMonthView(t) {
            this.setupCalenderNavigationBar("" + this.tempDate.getFullYear()), this.setupEmptyBar(), this.setupMonthData()
        }
        setupSelectedMonthCalender(t) {
            this.setupCalenderNavigationBar(this.monthMap[this.tempDate.getMonth()] + " " + this.tempDate.getFullYear()), this.setupDaysTitleBar(), this.setupDaysData(), this.setupEmptyBar()
        }
        setupYearData(t) {
            this.getDateSplit().day, this.getDateSplit().month;
            var e = this.getDateSplit().year,
                a = o(this.calenderBar);
            this.calenderBase.addChild(a);
            for (var i = 12; i >= 1; i--) {
                var n = o(this.calenderItem);
                a.addChild(n);
                var r = e - (i - 1),
                    h = new Date;
                h.setFullYear(r, this.date.getMonth(), this.date.getDate());
                var l = {
                    text: r.toString(),
                    selectionStatus: !!this.currentSelectedDate && this.currentSelectedDate.getFullYear() == r,
                    itemOpacity: 255,
                    cellType: this._calMode,
                    date: h
                };
                n.getComponent(c).initialiseItemWithValue(l), n.on(s.EventType.TOUCH_START, this.updateCalender, this), (i - 1) % 4 == 0 && 12 != i && (this.setupEmptyBar(), a = o(this.calenderBar), this.calenderBase.addChild(a))
            }
        }
        setupMonthData() {
            var t = o(this.calenderBar);
            this.calenderBase.addChild(t);
            for (var e = 0; e < this.monthMap.length; e++) {
                var a = o(this.calenderItem);
                t.addChild(a);
                var i = new Date;
                i.setMonth(e, this.date.getDate());
                var n = {
                    text: this.monthMap[e],
                    selectionStatus: !!this.currentSelectedDate && this.currentSelectedDate.getMonth() == e,
                    itemOpacity: 255,
                    cellType: this._calMode,
                    date: i
                };
                a.getComponent(c).initialiseItemWithValue(n), a.on(s.EventType.TOUCH_START, this.updateCalender, this), (e + 1) % 4 == 0 && 0 != e && (this.setupEmptyBar(), t = o(this.calenderBar), this.calenderBase.addChild(t))
            }
        }
        setupDaysData() {
            this.getDateSplit().day;
            for (var t = this.getDateSplit().month, e = this.getDateSplit().year, a = this.getMonthDetails(e, t), i = 0; i < 6; i++) {
                var n = o(this.calenderBar);
                this.calenderBase.addChild(n);
                for (var r = 0; r < 7; r++) {
                    a[7 * i + r].date;
                    var h = a[7 * i + r].month,
                        l = o(this.calenderItem);
                    n.addChild(l);
                    var d = !1,
                        u = this.getDate(a[7 * i + r]);
                    this.currentSelectedDate && u.toDateString() == this.currentSelectedDate.toDateString() && (d = !0);
                    var p = 0 == h ? 255 : 100,
                        D = {
                            text: "" + a[7 * i + r].date.toString(),
                            selectionStatus: d,
                            itemOpacity: p,
                            cellType: this._calMode,
                            date: this.getDate(a[7 * i + r])
                        };
                    l.getComponent(c).initialiseItemWithValue(D), l.on(s.EventType.TOUCH_START, this.updateCalender, this)
                }
            }
        }
        setupDaysTitleBar() {
            var t = o(this.calenderBar);
            this.calenderBase.addChild(t);
            for (var e = 0; e < this.daysMap.length; e++) {
                var a = o(this.calenderItem);
                t.addChild(a);
                var i = {
                    text: this.daysMap[e],
                    selectionStatus: !1,
                    itemOpacity: 100,
                    cellType: this._calMode
                };
                a.getComponent(c).initialiseItemWithValue(i)
            }
        }
        setupEmptyBar() {
            var t = o(this.calenderBar);
            this.calenderBase.addChild(t)
        }
        setupCalenderNavigationBar(t) {
            this.btnCurDate.on("click", this.navTabCb, this), this.updateCalenderNavigationBarDate(t)
        }
        updateCalenderNavigationBarDate(t) {
            this.navBar;
            this.dateTitle.getComponent(d).string = t, this.navLeft.on(s.EventType.TOUCH_START, this.decrementDate, this), this.navRight.on(s.EventType.TOUCH_START, this.incrementDate, this)
        }
        getDate({
            date: t,
            month: e
        }) {
            let a = new Date(this.tempDate);
            return a.setMonth(a.getMonth() + e, t), a
        }
        emitSelectedDate() {
            this.node.emit(I, this.currentSelectedDate)
        }
        updateCalenderWithSelectedDate(t) {
            this._calMode = N.Date, this.currentSelectedDate = new Date(t.getComponent(c).currentDate), this.setupView(this.currentSelectedDate.toDateString()), this.emitSelectedDate(), this.node.removeFromParent()
        }
        updateCalenderWithSelectedMonth(t) {
            this._calMode = N.Date;
            var e = this.monthMap.indexOf(t.getComponent(c).text);
            this.tempDate.setMonth(e, 1), this.setupView(this.tempDate.toDateString())
        }
        updateCalenderWithSelectedYear(t) {
            this._calMode = N.Month;
            var e = parseInt(t.getComponent(c).text);
            this.tempDate.setFullYear(e, this.tempDate.getMonth(), 1), this.setupView(this.tempDate.toDateString())
        }
        getDateSplit() {
            let t = this.tempDate;
            return new z(t.getDate(), t.getMonth(), t.getFullYear())
        }
        getNumberOfDays(t, e) {
            return 40 - new Date(t, e, 40).getDate()
        }
        getMonthDetails(t, e) {
            let a = new Date(t, e).getDay(),
                i = this.getNumberOfDays(t, e),
                n = [],
                s = null,
                r = 0;
            for (let h = 0; h < 6; h++)
                for (let h = 0; h < 7; h++) s = this.getDayDetails(r, i, a, t, e), n.push(s), r++;
            return n
        }
        getDayDetails(t, e, a, i, n) {
            let s = t - a,
                r = t % 7,
                h = n - 1,
                l = i;
            h < 0 && (h = 11, l--);
            let o = this.getNumberOfDays(l, h),
                d = (s < 0 ? o + s : s % e) + 1;
            return {
                date: d,
                day: r,
                month: s < 0 ? -1 : s >= e ? 1 : 0,
                timestamp: new Date(i, n, d).getTime(),
                dayString: this.daysMap[r]
            }
        }
        incrementMonthDate(t = 1) {
            this.tempDate.setMonth(this.tempDate.getMonth() + t, 1)
        }
        decrementMonthDate(t = 1) {
            this.tempDate.setMonth(this.tempDate.getMonth() - t, 1)
        }
        localiseDaysMapData() {
            for (let t = 0; t < this.daysMap.length; t++) this.localisationMethod && this.localisationMethod(this.daysMap[t]) && (this.daysMap[t] = this.localisationMethod(this.daysMap[t]))
        }
        localiseMonthMapData() {
            for (let t = 0; t < this.monthMap.length; t++) this.localisationMethod && this.localisationMethod(this.daysMap[t]) && (this.monthMap[t] = this.localisationMethod(this.monthMap[t]))
        }
        navTabCb(t) {
            switch (this._calMode) {
                case N.Date:
                    this._calMode = N.Month;
                    break;
                case N.Month:
                    this._calMode = N.Year
            }
            this.setupView(this.tempDate)
        }
        decrementDate() {
            switch (this._calMode) {
                case N.Date:
                    this._calMode = N.Date, this.decrementMonthDate(), this.setupView(this.tempDate.toDateString());
                    break;
                case N.Month:
                    this._calMode = N.Month, this.decrementMonthDate(12), this.setupView(this.tempDate.toDateString());
                    break;
                case N.Year:
                    this._calMode = N.Year, this.decrementMonthDate(144), this.setupView(this.tempDate.toDateString())
            }
        }
        incrementDate() {
            switch (this._calMode) {
                case N.Date:
                    this._calMode = N.Date, this.incrementMonthDate(), this.setupView(this.tempDate.toDateString());
                    break;
                case N.Month:
                    this._calMode = N.Month, this.incrementMonthDate(12), this.setupView(this.tempDate.toDateString());
                    break;
                case N.Year:
                    this._calMode = N.Year, this.incrementMonthDate(144), this.setupView(this.tempDate.toDateString())
            }
        }
        updateCalender(t) {
            var e = t.target;
            switch (this._calMode) {
                case N.Date:
                    this.updateCalenderWithSelectedDate(e);
                    break;
                case N.Month:
                    this.updateCalenderWithSelectedMonth(e);
                    break;
                case N.Year:
                    this.updateCalenderWithSelectedYear(e)
            }
        }
    }).prototype, "calenderBar", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(w.prototype, "calenderItem", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(w.prototype, "calenderBase", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(w.prototype, "navBar", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(w.prototype, "bgArrow", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(w.prototype, "dateTitle", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(w.prototype, "navLeft", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(w.prototype, "navRight", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(w.prototype, "btnCurDate", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(w.prototype, "blockerButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = w)) || C));
    i._RF.pop()
}