import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./TransferPrefab.js";

function main() {
    var s, d, u, p, g, C;
    o._RF.push({}, "64672HIFzNNn5p0yIfghahD", "AreaCodeTuple", void 0);
    const {
        ccclass: h,
        property: f
    } = i;
    e("AreaCodeTuple", (s = f(r), d = f(r), h((g = n((p = class extends a {
        constructor(...e) {
            super(...e), t(this, "areaName", g, this), t(this, "code", C, this), this._tupleId = 0
        }
        onCodeTupleClicked() {
            let e = c.getScene().getComponentInChildren("Login_ts"),
                n = c.getScene().getComponentInChildren("PhoneInputPage"),
                t = c.getScene().getComponentInChildren(l);
            e ? (e._userAreaCode = this.code.string.slice(1), e.areaCodeButton.node.getComponentInChildren(r).string = this.code.string, n.areaCodeButton.node.getComponentInChildren(r).string = this.code.string, c.getScene().getComponentInChildren("AreaCodeInputPage").onBackClicked()) : t && (t.areaCodeButton.node.getComponentInChildren(r).string = this.code.string, c.getScene().getComponentInChildren("AreaCodeInputPage").onBackClicked())
        }
    }).prototype, "areaName", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = n(p.prototype, "code", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = p)) || u));
    o._RF.pop()
}