import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./MessageTuple.js";
import * as c from "./mttconfig.js";
import * as u from "./Translator.js";
import * as p from "./NodeTools.js";

function main() {
    var g, h, b, d, f, m, v, y, T, L;
    r._RF.push({}, "2fcccMFscZDWornoX/qzlaq", "MessageTupleType3", void 0);
    const {
        ccclass: _,
        property: S
    } = s;
    e("MessageTupleType3", (g = S(o), h = S(n), b = S(n), d = S(n), _((v = t((m = class extends a {
        constructor(...e) {
            super(...e), i(this, "picture", v, this), i(this, "titleLabel", y, this), i(this, "textLabel", T, this), i(this, "footnoteLabel", L, this), this._width = 840, this._height = 504, this._screenWidth = 1080
        }
        calculateScale(e, t) {
            return e <= t ? this._width / e : this._screenWidth / e
        }
        setImage(e, t) {
            if (e && e.node) {
                let i = this.calculateScale(t.width, t.height);
                p.setNodeWidth(e.node, t.width * i), p.setNodeHeight(e.node, t.height * i);
                try {
                    e.spriteFrame = new l, e.spriteFrame.texture = t
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.error("PersonalSetting tex error")
                }
            } else cc_mtt.vv.ConsoleLog.error("PersonalSetting sprite or sprite.node is null")
        }
        loadWebImage(e, t) {
            cc_mtt.vv.AssetsManager.loadWebImage(e, {
                url: t,
                type: "jpg"
            }, null, (t => {
                this.setImage(e, t)
            }), (i => {
                cc_mtt.vv.ConsoleLog.log("message load image url:" + t + "\n" + JSON.stringify(i)), e.node.active = !1
            }))
        }
        setContent(e, t, i = "") {
            this.picture.node.active = !!i && "" !== i, this.picture.node.active && this.loadWebImage(this.picture, c.avatarHost + i + "?" + (new Date).getTime()), this.titleLabel.string = e || "", this.textLabel.string = t || "";
            let r = u("MESSAGE_PAGE.MESSAGE.FOOTNOTE");
            this.footnoteLabel.string = r
        }
    }).prototype, "picture", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(m.prototype, "titleLabel", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(m.prototype, "textLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(m.prototype, "footnoteLabel", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = m)) || f));
    r._RF.pop()
}