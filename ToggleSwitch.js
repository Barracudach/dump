import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var l, g, u, f, S, d, p, w;
    s._RF.push({}, "2ffa1nV+4xHPb6XlsoYxfhX", "ToggleSwitch", void 0);
    const {
        ccclass: y,
        property: C
    } = h;
    t("ToggleSwitch", (l = C([o]), g = C(r), u = C([c.EventHandler]), y((d = e((S = class extends c {
        constructor(...t) {
            super(...t), this.Layer = n({
                back: 0,
                front: 1,
                frontOff: 2
            }), i(this, "switch", d, this), i(this, "useLocalStorage", p, this), i(this, "onSwitchedEvents", w, this), this.isChecked = !1, this.storageKey = "", this.duration = .075, this.onValueToggle = null
        }
        init(t, e, i = (() => {})) {
            this.storageKey = t, this.onValueToggle = i;
            const s = this.useLocalStorage ? this.getValueFromLocalStorage(e) : e;
            this.setChecked(s)
        }
        getValueFromLocalStorage(t) {
            const e = a.localStorage.getItem(this.storageKey);
            return e ? 1 == +e : t
        }
        getChecked() {
            return this.isChecked
        }
        setChecked(t) {
            this.isChecked = t, this.useLocalStorage && a.localStorage.setItem(this.storageKey, (t ? 1 : 0).toString()), this.toggle()
        }
        toggle(t = !0) {
            this.setSwitchStatus(this.isChecked)
        }
        setSwitchStatus(t) {
            this.switch[this.Layer.front] && (this.switch[this.Layer.front].active = t), this.switch[this.Layer.frontOff] && (this.switch[this.Layer.frontOff].active = !t)
        }
        onClickToggleSwitch() {
            this.setChecked(!this.isChecked), this.onValueToggle && this.onValueToggle(), this.onSwitchedEvents.forEach((t => t.emit([this])))
        }
    }).prototype, "switch", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), p = e(S.prototype, "useLocalStorage", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), w = e(S.prototype, "onSwitchedEvents", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), f = S)) || f));
    s._RF.pop()
}