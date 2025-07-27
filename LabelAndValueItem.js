import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, u, o, c, b, h, m;
    l._RF.push({}, "2ef9eOcLbFMSJF9zWsYmI1m", "LabelAndValueItem", void 0);
    const {
        ccclass: p,
        property: L
    } = i;
    e("LabelAndValueItem", (s = p("LabelAndValueItem"), u = L(n), o = L(n), s((h = t((b = class extends r {
        constructor(...e) {
            super(...e), a(this, "nameLabel", h, this), a(this, "valueLabel", m, this), this._key = "", this._data = null, this._customData = null
        }
        get key() {
            return this._key
        }
        setInfo(e, t, a) {
            this._key = e, this._data = t, this._customData = a
        }
        setNameLabel(e) {
            this.nameLabel && (this.nameLabel.string = e)
        }
        setValueLabel(e) {
            this.valueLabel && (this.valueLabel.string = e)
        }
    }).prototype, "nameLabel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(b.prototype, "valueLabel", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = b)) || c));
    l._RF.pop()
}