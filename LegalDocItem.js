import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var a, u, c, h, b, p, d, m, g, f;
    n._RF.push({}, "b6892KA1mpPQbwjF3Q7wxMh", "LegalDocItem", void 0);
    const {
        ccclass: _,
        property: v
    } = l;
    t("default", (a = v(r), u = v(s), c = v(s), h = v(s), _((d = i((p = class extends o {
        constructor(...t) {
            super(...t), e(this, "title_btn", d, this), e(this, "dateTimeVal", m, this), e(this, "jurisdictionVal", g, this), e(this, "versionVal", f, this), this._name = "", this._viewCb = null
        }
        start() {
            this.title_btn.node.on("click", this._showInfoCb.bind(this))
        }
        init({
            name: t,
            acceptedAtPretty: i,
            fullName: e,
            jurisdiction: n,
            countryName: r,
            version: l,
            cb: o
        }) {
            t ? (this._name = t, this.title_btn.getComponent(s).string = e || "", this.dateTimeVal.string = i || "", this.jurisdictionVal.string = n || "", this.versionVal.string = (null == l ? void 0 : l.toString()) || "", o && (this._viewCb = o)) : this.node.destroy()
        }
        _showInfoCb() {
            this._viewCb && this._viewCb({
                name: this._name,
                version: this.versionVal.string
            })
        }
        updateSVReuseData(t, i) {
            i.length <= 0 || i.length - 1 < t || this.init(i[t])
        }
    }).prototype, "title_btn", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = i(p.prototype, "dateTimeVal", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = i(p.prototype, "jurisdictionVal", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = i(p.prototype, "versionVal", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = p)) || b));
    n._RF.pop()
}