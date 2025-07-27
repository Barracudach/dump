import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";
import * as r from "./AnalyticsHandler.js";
import * as a from "./cv.js";
import * as c from "./ToggleGroupValidator.js";

function main() {
    var o, u, g, d, f, h;
    l._RF.push({}, "a425aFZDKhKf7UWaLZcWM7a", "GenderField", void 0);
    const {
        ccclass: m,
        property: p
    } = s;
    e("default", (o = p(n), u = p(n), m((f = t((d = class extends c {
        constructor(...e) {
            super(...e), i(this, "maleToggle", f, this), i(this, "femaleToggle", h, this), this.selfClick = !1
        }
        onMaleSelected() {
            if (this.selfClick) return void(this.selfClick = !1);
            this.femaleToggle.isChecked && (this.selfClick = !0, this.femaleToggle.isChecked = !1);
            r.getInstance().sendEvent(a.Enum.CurrentScreen.profile, a.Enum.segmentEvent.InputFieldValueEntered, a.Enum.Functionality.registration, {
                item: "genderInput"
            })
        }
        onFemaleSelected() {
            if (this.selfClick) return void(this.selfClick = !1);
            this.maleToggle.isChecked && (this.selfClick = !0, this.maleToggle.isChecked = !1);
            r.getInstance().sendEvent(a.Enum.CurrentScreen.profile, a.Enum.segmentEvent.InputFieldValueEntered, a.Enum.Functionality.registration, {
                item: "genderInput"
            })
        }
        get value() {
            return this.maleToggle.isChecked || this.femaleToggle.isChecked ? this.maleToggle.isChecked ? 1 : 2 : 0
        }
        set value(e) {
            1 == e ? this.maleToggle.isChecked = !0 : 2 == e && (this.femaleToggle.isChecked = !0)
        }
    }).prototype, "maleToggle", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = t(d.prototype, "femaleToggle", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = d)) || g));
    l._RF.pop()
}