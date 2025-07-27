import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";

function main() {
    var a, d, h, u, p, f;
    e._RF.push({}, "2b968da5XtJXIpXIxuqi+LW", "PlayAnim", void 0);
    const {
        ccclass: L,
        property: y
    } = l;
    i("default", (a = y(s), d = y(o), L((p = t((u = class extends r {
        constructor(...i) {
            super(...i), n(this, "nodeList", p, this), n(this, "HideOnFinished", f, this)
        }
        onLoad() {
            for (let i = 0; i < this.nodeList.length; i++) null != this.nodeList[i] && this.nodeList[i].on(s.EventType.FINISHED, this._onFinished, this)
        }
        _onFinished(...i) {
            null != this.HideOnFinished && (this.HideOnFinished.active = !1);
            const t = i[1];
            for (let i = 0; i < this.nodeList.length; i++) {
                const n = this.nodeList[i].clips,
                    e = n.indexOf(t.clip);
                e > -1 && e + 1 < n.length && this.playAnimation(e + 1)
            }
        }
        playAnimation(i) {
            for (let t = 0; t < this.nodeList.length; t++) {
                if (!this.nodeList[t]) return;
                const n = this.nodeList[t].clips,
                    e = c.StringTools.isNumber(i) ? i : 0;
                e >= 0 && e < n.length && this.nodeList[t].play(n[e].name)
            }
        }
    }).prototype, "nodeList", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), f = t(u.prototype, "HideOnFinished", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = u)) || h));
    e._RF.pop()
}