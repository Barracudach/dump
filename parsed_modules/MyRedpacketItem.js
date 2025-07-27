import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";
import * as b from "./GameSceneInstance.js";

function main() {
    var g, p, m, h, d, f, _, y, S, v, C, k, w, T, z, D, M, I;
    i._RF.push({}, "31f0bGKTrtIG6+i4oV18/5G", "MyRedpacketItem", void 0);
    const {
        ccclass: R,
        property: E
    } = l;
    t("default", (g = E(o), p = E(o), m = E(r), h = E(r), d = E(o), f = E(r), _ = E(r), y = E(r), R((C = e((v = class extends a {
        constructor(...t) {
            super(...t), n(this, "bg", C, this), n(this, "openClick", k, this), n(this, "title", w, this), n(this, "label", T, this), n(this, "icon", z, this), n(this, "number", D, this), n(this, "number_des", M, this), n(this, "time_label", I, this), this._data = null
        }
        onLoad() {
            this.label.string = c.config.getStringData("StarRedpacketOpenView_help_btn_label"), this.number_des.string = c.config.getStringData("unit")
        }
        updateItemData(t) {
            this.title && (this.title.string = c.config.getStringData("MyRedpacketItem_title_" + t.state)), this.openClick.active = 0 == t.state, this.label.node.active = 0 == t.state, this.icon.active = 0 == t.state, this.bg.active = 1 == t.state, this.number.string = c.StringTools.serverGoldToShowString(t.amount), this.time_label.string = c.StringTools.formatTime(t.draw_time, c.Enum.eTimeType.Year_Month_Day_Hour_Min), 0 == t.state ? (this.number.node.getComponent(u).color = s(80, 66, 38), this.number_des.node.getComponent(u).color = s(80, 66, 38), this.time_label.node.getComponent(u).color = s(90, 76, 48)) : (this.number.node.getComponent(u).color = s(255, 189, 101), this.number_des.node.getComponent(u).color = s(255, 189, 101), this.time_label.node.getComponent(u).color = s(171, 171, 171))
        }
        onBtnClick() {
            var t;
            c.AudioMgr.playButtonSound("button_click");
            let e = null == (t = b.getInstance(null == this ? void 0 : this.node)) || null == (t = t.room) ? void 0 : t.gameScene;
            c.TP.showMsg(c.config.getStringData("Exit_confirmation"), c.Enum.ButtonStyle.TWO_BUTTON, (() => {
                c.dataHandler.getUserData().is_goto_myredpacket = !0, c.MessageCenter.send("Exit_click")
            }), null, !1, !1, "", !1, r.HorizontalAlign.CENTER, !1, e)
        }
    }).prototype, "bg", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(v.prototype, "openClick", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(v.prototype, "title", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(v.prototype, "label", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(v.prototype, "icon", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(v.prototype, "number", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(v.prototype, "number_des", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(v.prototype, "time_label", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = v)) || S));
    i._RF.pop()
}