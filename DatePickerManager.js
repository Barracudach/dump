import * as t from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./DatePicker.js";

function main() {
    o._RF.push({}, "937aefQzq5J37maCgfX4Bmj", "DatePickerManager", void 0);
    class d {
        constructor() {
            this.callbackMethod = null
        }
        static getInstance() {
            return this.datePickerManager || (this.datePickerManager = new d), this.datePickerManager
        }
        show({
            datePickerPrefab: e,
            parentRef: o,
            dpPosMultiplier: d,
            arrowPosMultiplier: s,
            arrowRotation: g,
            localisationMethod: h,
            selectedDate: k
        }) {
            if (t.isNative && t.os === t.OS.ANDROID) {
                var M = (k = k || new Date).getFullYear() + "-" + (k.getMonth() + 1) + "-" + k.getDate();
                a.reflection.callStaticMethod("com/cocos/game/DatePickerManager", "openDatePickerCalendar", "(Ljava/lang/String;)V", M.toString())
            } else if (t.isNative && t.os === t.OS.IOS) M = (k = k || new Date).getFullYear() + "-" + (k.getMonth() + 1) + "-" + k.getDate(), a.reflection.callStaticMethod("DatePickerManager", "openDatePickerCalendar:", M.toString());
            else if (o && e) {
                var P = n(e),
                    u = P.getComponent(l);
                o.addChild(P), P.on("onChange", this.dateSelected.bind(this)), u.initialiseUIComponent(h, k), d = d || new i(0, 0), P.setPosition(r(o.getComponent(c).width * d.x, o.getComponent(c).height * d.y));
                var D = s || new i(0, 0);
                u.setArrowOrientation(r(P.getComponent(c).width * D.x, P.getComponent(c).height * D.y), g || 0), u.addWidgetToBlockerButton(o)
            }
        }
        setCallbackMethod(e) {
            d.datePickerManager.callbackMethod = e
        }
        dateSelected(e) {
            d.datePickerManager.callbackMethod && d.datePickerManager.callbackMethod(e)
        }
        static onNativeDateSelectedCB(e) {
            var t = e && new Date(e) || new Date;
            d.datePickerManager.callbackMethod && d.datePickerManager.callbackMethod(t)
        }
    }
    e("default", d), d.datePickerManager = null, window.NativeDatePickerCallback = d.onNativeDateSelectedCB, o._RF.pop()
}