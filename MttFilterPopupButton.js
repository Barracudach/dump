import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cv.js";
import * as u from "./MttDesignSystemButton.js";

function main() {
    var c, a, d, h;
    s._RF.push({}, "597d29+5kdA9KqpAGIPEZo9", "MttFilterPopupButton", void 0);
    const {
        ccclass: p,
        property: _
    } = n, S = t("FilterItemClickEvent", "onFilterItemClicked");
    t("default", (c = _([i]), p((h = e((d = class extends u {
        constructor(...t) {
            super(...t), o(this, "subNodes", h, this)
        }
        onLoad() {
            this._toggleSwitchedCb || (this._toggleSwitchedCb = this._sendFilterItemClickEvent), this._clickedCb || (this._clickedCb = this._sendFilterItemClickEvent), this.isSwitchToggle && this.controlSwitch.muteClickSound(!0), super.onLoad()
        }
        _sendFilterItemClickEvent() {
            l.MessageCenter.send(S)
        }
        _onNormalState() {
            super._onNormalState(), this._setSubTextStyle()
        }
        _onhoverState() {
            super._onhoverState(), this._setSubTextStyle()
        }
        _onPressedState() {
            super._onPressedState(), this._setSubTextStyle()
        }
        _onDisabledState() {
            super._onDisabledState(), this._setSubTextStyle()
        }
        _setSubTextStyle() {
            if (this.subNodes)
                for (let t = 0; t < this.subNodes.length; ++t) this.subNodes[t].getComponent(r).color = this.textLabel.node.getComponent(r).color, this.subNodes[t].getComponent(r).color._set_a_unsafe(this.textLabel.node.getComponent(r).color.a)
        }
    }).prototype, "subNodes", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), a = d)) || a));
    s._RF.pop()
}