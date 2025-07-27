import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var c, l, p, u, v, h;
    a._RF.push({}, "3f509dpnkpN6YmJdpIbDrG6", "Avatar", void 0);
    const {
        ccclass: d,
        property: m
    } = n;
    t("Avatar", (c = m([i]), l = m([i]), d((v = e((u = class extends s {
        constructor(...t) {
            super(...t), r(this, "avatarIcon", v, this), r(this, "selected", h, this), this._systemAvatar = null, this.positionIndex = 0
        }
        init(t, e) {
            this._systemAvatar = t, this.positionIndex = e
        }
        setAvatar(t, e) {
            this.avatarIcon[t].enabled = !0;
            try {
                this.avatarIcon[t].spriteFrame = new o, this.avatarIcon[t].spriteFrame.texture = e
            } catch (t) {
                cc_mtt.vv.ConsoleLog.error("Avatar setAvatar error")
            }
        }
        setSelected(t, e) {
            this.selected[t].enabled = e
        }
        onClickAvatar(t, e) {
            this.avatarIcon[e].enabled && this._systemAvatar.onClickAvatar(this.positionIndex, e)
        }
    }).prototype, "avatarIcon", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), h = e(u.prototype, "selected", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), p = u)) || p));
    a._RF.pop()
}