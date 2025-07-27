import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as d from "./StatusBar.js";
import * as f from "./BasicScene.js";
import * as m from "./DataManager.js";

function main() {
    var p, g, b, S, _, v, w;
    i._RF.push({}, "8945eRqA3xDKoGMmdh24CWy", "Holdem_View", void 0);
    const {
        ccclass: y,
        property: M
    } = n;
    t("Holdem_View", (p = M(a), g = M(a), y(((w = class t extends f {
        constructor(...t) {
            super(...t), o(this, "roomPrefab", _, this), this._roomNode = void 0, o(this, "cashGameRoomPrefab", v, this), this.mttHallInfo = null
        }
        onLoad() {
            t.instance = this
        }
        start() {
            this.loadPrefab()
        }
        loadPrefab() {
            this._roomNode = r(this.roomPrefab), this._roomNode.parent = this.node, this.setStatusBar(this._roomNode)
        }
        setStatusBar(t) {
            cc_mtt.vv.AssetsManager.loadRes("prefab/common/status_bar", a, (function(e, o) {
                let i = r(o);
                i.parent = t, m.StatusBar = i.getComponent(d), s.windowSize.width / s.windowSize.height > l.getDesignResolutionSize().width / l.getDesignResolutionSize().height && m.StatusBar.setSize(1.2171875)
            }))
        }
        setMttHallInfo(t) {
            cc_mtt.vv.ConsoleLog.log("setMttHallInfo", t), this.mttHallInfo = t
        }
        static checkModern(t) {
            try {
                if (c.os === c.OS.IOS && c.isNative) {
                    let e = t.getComponent(u);
                    e.top = "true" === h.reflection.callStaticMethod("AppController", "checkModern") ? 88 * 1.2171875 : 0, e.updateAlignment()
                }
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
            }
        }
    }).instance = null, _ = e((S = w).prototype, "roomPrefab", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(S.prototype, "cashGameRoomPrefab", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = S)) || b));
    i._RF.pop()
}