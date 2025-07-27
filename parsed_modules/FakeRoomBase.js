import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as n from "./FakeMultipleGame.js";

function main() {
    var a;
    i._RF.push({}, "12b53jCyC1NfbAp163mUrM1", "FakeRoomBase", void 0);
    const {
        ccclass: r,
        property: u
    } = s;
    t("default", r(a = class extends e {
        constructor(...t) {
            super(...t), this._tabIndex = void 0, this._isSittingOut = !1, this._timeUpAt = 0, this._totalTime = 10, this.isExtraTime = !1, this.startTimerFunction = null
        }
        get tabButton() {
            var t;
            return null == (t = n.instance) ? void 0 : t._multipleGameTabButtons[this.tabIndex]
        }
        startTimer(t, i, e = !1, s = !1) {
            var a, r;
            n.instance && (this.startTimerFunction && (clearTimeout(this.startTimerFunction), this.startTimerFunction = null), this.startTimerFunction = setTimeout((() => {
                var s;
                void 0 === i && (i = t), this._totalTime = t, this._timeUpAt = Date.now() + 1e3 * i, this.isExtraTime = e, null == (s = this.tabButton) || s.setTimeType(e)
            }), 5), null == (a = this.tabButton) || a.showTimeBar(), null == (r = this.tabButton) || r.setTriggerStartTime(s))
        }
        stopTimer() {
            var t;
            n.instance && (this._timeUpAt = 0, this.startTimerFunction && (clearTimeout(this.startTimerFunction), this.startTimerFunction = null), null == (t = this.tabButton) || t.hideTimeBar())
        }
        update() {
            if (!n.instance || this._isSittingOut) return;
            let t = this._timeUpAt - Date.now();
            if (t >= 0) {
                var i;
                let e = t / this._totalTime / 1e3;
                e = Math.max(e, 0), null == (i = this.tabButton) || i.setTimeProgress(e, t, this.isExtraTime)
            } else {
                var e;
                null == (e = this.tabButton) || e.hideTimeBar()
            }
        }
        onDestroy() {
            this.startTimerFunction && (clearTimeout(this.startTimerFunction), this.startTimerFunction = null)
        }
        set tabIndex(t) {
            this._tabIndex = t
        }
        get tabIndex() {
            return this._tabIndex
        }
    }) || a);
    i._RF.pop()
}