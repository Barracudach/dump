import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";
import * as u from "./PlayAnim_New.js";

function main() {
    var g, p, h, f, d, b, y, m, P;
    n._RF.push({}, "895ad7r8URAzpT4H4tlVroV", "WaitingPlayer", void 0);
    const {
        ccclass: _,
        property: w
    } = r;
    t("default", (g = w(a), p = w(a), h = w(a), _(((P = class t extends o {
        constructor(...t) {
            super(...t), e(this, "loadingIcon", b, this), e(this, "clickBlockerNode", y, this), e(this, "unregisterButton", m, this), this.unregisterCallback = null, this.WaitingPlayerPrefab = null, this._waitingAnim = void 0, this.prefabUrl = "prefabs/GlobalSpins/WaitingPlayers"
        }
        static getInstance() {
            return t.g_instance || (t.g_instance = new t), t.g_instance
        }
        setUnregisterCallback(t) {
            this.unregisterButton.on("click", t, this)
        }
        hide(t) {
            this._waitingAnim && (this._waitingAnim = !1, this.clickBlockerNode.getComponent(u).playAnimation(), t && t())
        }
        show(t, i) {
            this.node.parent = t, this._waitingAnim = !0, this.node.getComponent(u).playAnimation(), this.loadingIcon.getComponent(u).playAnimation(), i && i()
        }
        createNew() {
            return new Promise(((i, e) => {
                if (this.WaitingPlayerPrefab && l(this.WaitingPlayerPrefab, !0)) {
                    let e = s(this.WaitingPlayerPrefab).getComponent(t);
                    i(e)
                } else c.tools.loadAssetFromBundle(this.prefabUrl).then((e => {
                    this.WaitingPlayerPrefab = e;
                    let n = s(this.WaitingPlayerPrefab).getComponent(t);
                    i instanceof Function && i(n)
                })).catch((t => {
                    e instanceof Function && e(t)
                }))
            }))
        }
    }).g_instance = void 0, b = i((d = P).prototype, "loadingIcon", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(d.prototype, "clickBlockerNode", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = i(d.prototype, "unregisterButton", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = d)) || f));
    n._RF.pop()
}