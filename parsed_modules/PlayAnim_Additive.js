import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";
import * as r from "./cv.js";

function main() {
    var d, c, a, h;
    n._RF.push({}, "7fb696NZ7ZCS4GZXOwRj9qz", "PlayAnim_Additive", void 0);
    const {
        ccclass: u,
        property: p
    } = o;
    t("default", (d = p(s), u((h = i((a = class extends l {
        constructor(...t) {
            super(...t), e(this, "nodeList", h, this), this._playAdditive = !0
        }
        onLoad() {
            for (let t = 0; t < this.nodeList.length; t++) null != this.nodeList[t] && this.nodeList[t].on(s.EventType.FINISHED, this._onFinished, this)
        }
        _onFinished(...t) {
            const i = t[1];
            for (let t = 0; t < this.nodeList.length; t++) {
                const e = this.nodeList[t].clips,
                    n = e.indexOf(i.clip);
                n > -1 && n + 1 < e.length && this.PlayAdditive(n + 1)
            }
        }
        PlayAdditive(t) {
            for (let i = 0; i < this.nodeList.length; i++) {
                if (!this.nodeList.length) return;
                const e = this.nodeList[i].clips;
                if (this._playAdditive)
                    for (const t of e) t && this.nodeList[i].crossFade(t.name);
                else {
                    const e = r.StringTools.isNumber(t) ? t : 0,
                        n = this.nodeList[i].clips;
                    e >= 0 && e < n.length && this.nodeList[i].play(n[e].name)
                }
            }
        }
    }).prototype, "nodeList", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), c = a)) || c));
    n._RF.pop()
}