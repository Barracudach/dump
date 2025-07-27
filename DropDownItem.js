import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./DropDown.js";
import * as h from "./i18nText.js";

function main() {
    var c, b, g, d, D, f, w, y, m, T, I, L;
    n._RF.push({}, "038aaQWJQVHsKRIu1iqCgMj", "DropDownItem", void 0);
    const {
        ccclass: v,
        property: x
    } = a;
    e("DropDownItem", (c = x(o), b = x(h), g = x(r), d = x(l), D = x(s), v((y = t((w = class extends p {
        constructor(...e) {
            super(...e), i(this, "label", y, this), i(this, "labelI18n", m, this), i(this, "sprite", T, this), i(this, "toggle", I, this), i(this, "dropDownNode", L, this), this.index = -1, this.dropDown = null
        }
        start() {
            this.dropDownNode && (this.dropDown = this.dropDownNode.getComponent(u))
        }
        onEnable() {
            this.toggle && this.toggle.node.on(l.EventType.TOGGLE, this.onToggle, this)
        }
        onDisable() {
            this.toggle && this.toggle.node.off(l.EventType.TOGGLE, this.onToggle, this)
        }
        onToggle() {
            this.dropDown && this.dropDown.onOptionSelected(this.index)
        }
        setData(e) {
            this.updateLabel(e.optionLabel, e.optionLabelUseI18n), this.updateSprite(e.optionSprite)
        }
        updateLabel(e, t) {
            this.label && (t ? this.labelI18n.setKey(e) : this.label.string = e, this.labelI18n.enabled = t)
        }
        updateSprite(e) {
            this.sprite && (this.sprite.spriteFrame = e, this.sprite.enabled = null != e)
        }
    }).prototype, "label", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(w.prototype, "labelI18n", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(w.prototype, "sprite", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(w.prototype, "toggle", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(w.prototype, "dropDownNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = w)) || f));
    n._RF.pop()
}