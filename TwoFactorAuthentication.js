import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cv.js";

function main() {
    var l, c, h, u, d, p, b, C, x, f;
    n._RF.push({}, "3b06c4/ZdBDp60UCSijmAMV", "TwoFactorAuthentication", void 0);
    const {
        ccclass: g,
        property: B
    } = s;
    e("default", (l = B(o), c = B(o), h = B(o), u = B(o), g((b = t((p = class extends r {
        constructor(...e) {
            super(...e), i(this, "pinCodeBox1", b, this), i(this, "pinCodeBox2", C, this), i(this, "pinCodeBox3", x, this), i(this, "pinCodeBox4", f, this), this.enteredPinCode = ["", "", "", ""], this.boxes = [], this.sendPINCallback = void 0, this.backToLoginPageCB = void 0, this.resendPinCB = void 0
        }
        onLoad() {
            this.boxes.push(this.pinCodeBox1), this.boxes.push(this.pinCodeBox2), this.boxes.push(this.pinCodeBox3), this.boxes.push(this.pinCodeBox4)
        }
        onEnable() {
            this.focusNextInput()
        }
        focusNextInput(e = 0) {
            let t = e + this.enteredPinCode.length;
            for (let i = e; i < t; i++) {
                let e = i % this.enteredPinCode.length;
                if (0 == this.boxes[e].string.length) {
                    this.boxes[e].focus();
                    break
                }
            }
        }
        cancelButtonCB(e, t) {
            this.backToLoginPageCB(), this.node.destroy()
        }
        confirmButtonCB(e, t) {
            let i = this.boxes.reduce(((e, t) => e + t.string), "");
            i.length < this.enteredPinCode.length ? (this.scheduleOnce((() => {
                this.node.active = !1
            })), a.popUp.showMsg({
                txt: a.config.getStringData("EnterPin_pinIncomplete"),
                msgType: a.Enum.ToastType.ToastTypeWarning,
                sureCallback: () => {
                    this.node.active = !0
                },
                cancelCallback: () => {
                    this.node.active = !0
                }
            })) : this.sendPINCallback && this.sendPINCallback(i)
        }
        resendPin(e, t) {
            this.resendPinCB()
        }
        onTextChanged(e, t, i) {
            let n = parseInt(i);
            if (!isNaN(n)) {
                if (isNaN(parseInt(e))) return t.string = "", t.placeholder = "-", void(this.enteredPinCode[n] = "");
                t.blur(), this.focusNextInput(n), this.enteredPinCode[n] = e
            }
        }
    }).prototype, "pinCodeBox1", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(p.prototype, "pinCodeBox2", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(p.prototype, "pinCodeBox3", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(p.prototype, "pinCodeBox4", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = p)) || d));
    n._RF.pop()
}