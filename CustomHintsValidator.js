import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./HintValidator.js";

function main() {
    var l, c, u, h, p, f, d, m, b, g;
    n._RF.push({}, "50564HTeDZAiYwOmUOpxWrH", "CustomHintsValidator", void 0);
    const {
        ccclass: y,
        property: v
    } = o;
    t("CustomHintsValidator", (l = y("CustomHintsValidator"), c = v({
        type: r
    }), u = v({
        type: r
    }), h = v({
        type: a
    }), l((d = i((f = class extends s {
        constructor(...t) {
            super(...t), e(this, "iconInvalid", d, this), e(this, "iconValid", m, this), e(this, "formsConfigName", b, this), e(this, "hints", g, this)
        }
        onEnable() {
            this.reset(!1)
        }
        init(t, i) {
            const e = this.hints.length;
            for (let n = 0; n < e; n++) this.hints[n].init(t, i, this.formsConfigName, this.iconInvalid, this.iconValid)
        }
        validate(t, i = !0) {
            let e = !0;
            const n = this.hints.length;
            for (let r = 0; r < n; r++) {
                const n = this.hints[r].validate(t, i);
                e && (e = n)
            }
            return e
        }
        reset(t = !0) {
            const i = this.hints.length;
            for (let e = 0; e < i; e++) this.hints[e].reset(t)
        }
    }).prototype, "iconInvalid", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), m = i(f.prototype, "iconValid", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), b = i(f.prototype, "formsConfigName", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), g = i(f.prototype, "hints", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), p = f)) || p));
    n._RF.pop()
}