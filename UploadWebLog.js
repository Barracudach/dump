import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as d from "./ConsoleLog.js";
import * as p from "./LogUploader.js";
import * as b from "./mttconfig.js";
import * as f from "./MTTConnector.js";

function main() {
    var C, _, L, m;
    n._RF.push({}, "e1723SmetFEnr+/C8EyNcBx", "UploadWebLog", void 0);
    const {
        ccclass: v,
        property: x
    } = a;
    t("default", (C = x(i), v((m = o((L = class extends s {
        constructor(...t) {
            super(...t), e(this, "button", m, this), this._lastDebugButtonPos = void 0, this.moveMargin = 50, this._lastCheckZIndexTime = -9999999, this._logUploader = void 0
        }
        start() {
            let t = this,
                o = this.node.parent;
            r.isNative && (this._logUploader = new p(f.instance.prefix));
            let e = this.button.getComponentInChildren(c);
            l(e) && (e.string = "Log\n" + b.webVersion), this.button.node.on(u.TOUCH_START, (function(o) {
                t._lastDebugButtonPos = t.button.node.position
            })), this.button.node.on(u.TOUCH_MOVE, (function(e) {
                let n = e.getStartLocation().x,
                    i = e.getStartLocation().y,
                    a = e.getLocation().x - n,
                    s = e.getLocation().y - i,
                    r = t._lastDebugButtonPos.x + a,
                    c = t._lastDebugButtonPos.y + s,
                    l = o.getComponent(h),
                    u = t.button.node.getComponent(h),
                    d = -1 * l.width * l.anchorX + u.width * u.anchorX + t.moveMargin,
                    p = l.width * l.anchorX - u.width * u.anchorX - t.moveMargin,
                    b = l.height * (1 - l.anchorY) - u.height * (1 - u.anchorY) - t.moveMargin,
                    f = -1 * l.height * l.anchorY + u.height * u.anchorY + t.moveMargin;
                (Math.abs(a) > 5 || Math.abs(s)) && (t.button.interactable = !1), r < d && (r = d), r > p && (r = p), c > b && (c = b), c < f && (c = f), t.button.node.position = new g(r, c)
            })), this.button.node.on(u.TOUCH_END, (function(o) {
                t.button.interactable = !0
            }))
        }
        onClickUpload() {
            cc_mtt.vv.AssetsManager.showDialogBox("", "Upload Log?", !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: () => {
                    d.uploadWebLogs()
                }
            }, {
                type: 1,
                text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                callback: null
            }])
        }
        update() {
            if (l(this.node)) {
                let t = (new Date).getTime();
                t - this._lastCheckZIndexTime > 1e3 && (this._lastCheckZIndexTime = t, this.node.setSiblingIndex(99999))
            }
        }
    }).prototype, "button", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = L)) || _));
    n._RF.pop()
}