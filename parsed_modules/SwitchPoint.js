import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as w from "./cv.js";

function main() {
    var p, d, m, y, f, S, A, C, M, N, v, z, x, L, B, D, G, E;
    n._RF.push({}, "20a9221OYpJDZUQmg8ZvcXX", "SwitchPoint", void 0);
    const {
        ccclass: T,
        property: U
    } = a;
    t("default", (p = U(r), d = U(r), m = U(s), y = U(s), f = U(r), S = U(o), A = U(o), C = U(r), T((v = e((N = class extends c {
        constructor(...t) {
            super(...t), i(this, "switch_box", v, this), i(this, "succ_box", z, this), i(this, "switch_cancel", x, this), i(this, "switch_sure", L, this), i(this, "switch_layout_Arr", B, this), i(this, "switch_lab_Arr", D, this), i(this, "labArr", G, this), i(this, "switch_icon", E, this), this.select_switch_data = null, this.succ_path = "zh_CN/hall/lobby/select", this.fail_path = "zh_CN/hall/lobby/switch_fail"
        }
        onLoad() {
            w.MessageCenter.register(w.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), w.MessageCenter.register("EarnView_showSwitch", this.showSwitch.bind(this), this.node), this.switch_sure.node.on("click", (() => {
                w.AudioMgr.playButtonSound("button_click.mp3"), this.select_switch_data && w.worldNet.ExchangeUserPointsRequest(this.select_switch_data.goods_id), this.node.active = !1, w.MessageCenter.send("show_mail_entrance", !0)
            }), this), this.switch_cancel.node.on("click", (() => {
                w.AudioMgr.playButtonSound("button_click.mp3"), this.node.active = !1, w.MessageCenter.send("show_mail_entrance", !0)
            }), this), this.initLanguage()
        }
        onDestroy() {
            w.MessageCenter.unregister(w.config.CHANGE_LANGUAGE, this.node), w.MessageCenter.unregister("EarnView_showSwitch", this.node)
        }
        initLanguage() {
            let t = this.labArr.length;
            for (let e = 0; e < t; e++) {
                this.labArr[e].string = w.config.getStringData("SwitchPoint_lab_" + e)
            }
        }
        showSwitch(t) {
            this.node.active = !0, this.switch_box.active = !0, this.succ_box.active = !1, this.select_switch_data = t;
            let e = w.resMgr.getLabelStringSize(this.switch_lab_Arr[0], this.getNumberIntoSymbolFormat(w.StringTools.serverGoldToShowString(t.cost_user_points)).toString()),
                i = w.resMgr.getLabelStringSize(this.switch_lab_Arr[1], this.getNumberIntoSymbolFormat(w.StringTools.serverGoldToShowString(t.obtain_game_coin)).toString());
            this.switch_layout_Arr[0].getComponent(h).setContentSize(this.switch_layout_Arr[0].getChildByName("lab_sec_0").getComponent(h).width + e.width, this.switch_layout_Arr[0].getComponent(h).height), this.switch_layout_Arr[1].getComponent(h).setContentSize(this.switch_layout_Arr[1].getChildByName("lab_sec_0").getComponent(h).width + i.width, this.switch_layout_Arr[1].getComponent(h).height), w.MessageCenter.send("hide_mail_entrance", !0)
        }
        getNumberIntoSymbolFormat(t) {
            return Math.abs(Number(t)) >= 1e9 ? Math.abs(Number(t)) / 1e9 + w.config.getStringData("B", !1, "B") : Math.abs(Number(t)) >= 1e6 ? Math.abs(Number(t)) / 1e6 + w.config.getStringData("M", !1, "M") : Math.abs(Number(t)) >= 1e4 ? Math.abs(Number(t)) / 1e3 + w.config.getStringData("K", !1, "K") : Math.abs(Number(t))
        }
        showSucc(t, e) {
            this.labArr[4].node.getComponent(l).color = e ? new u(229, 209, 146) : new u(255, 255, 255), this.labArr[4].string = t, w.resMgr.setSpriteFrame(this.switch_icon, e ? this.succ_path : this.fail_path), this.node.active = !0, this.switch_box.active = !1, this.succ_box.active = !0, _.stopAllByTarget(this.succ_box.getComponent(g)), this.succ_box.getComponent(g).opacity = 0, b(this.succ_box.getComponent(g)).to(.1, {
                opacity: 255
            }).delay(.5).to(.3, {
                opacity: 0
            }).call((() => {
                this.node.active = !1
            }))
        }
    }).prototype, "switch_box", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(N.prototype, "succ_box", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(N.prototype, "switch_cancel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(N.prototype, "switch_sure", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(N.prototype, "switch_layout_Arr", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), D = e(N.prototype, "switch_lab_Arr", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), G = e(N.prototype, "labArr", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), E = e(N.prototype, "switch_icon", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = N)) || M));
    n._RF.pop()
}