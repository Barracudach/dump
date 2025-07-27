import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cv.js";
import * as h from "./MiniGamePopup.js";
import * as y from "./MiniGamePopupManager.js";

function main() {
    var g, m, d, C, S, w, B, P, z, H, T, M, E, I, v, G, L, F, _, D, R, W, k, x, U, X, j;
    r._RF.push({}, "f3c6aX9ELdAlrd4l3ZygXEc", "MiniGameComboPopup", void 0);
    const {
        ccclass: A,
        property: N
    } = s;
    let O = (g = A("MiniGamePopupStyle"), m = N({
        type: o(y)
    }), d = N(n), C = N(a), S = N(l), w = N(u), B = N(u), P = N(u), g((T = t((H = class {
        constructor() {
            i(this, "popupType", T, this), i(this, "button", M, this), i(this, "itemPrefab", E, this), i(this, "spriteBgHeader", I, this), i(this, "bgColor", v, this), i(this, "tabBarColor", G, this), i(this, "buttonSelectedColor", L, this)
        }
    }).prototype, "popupType", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.CowBoy
        }
    }), M = t(H.prototype, "button", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(H.prototype, "itemPrefab", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(H.prototype, "spriteBgHeader", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(H.prototype, "bgColor", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new u(u.WHITE)
        }
    }), G = t(H.prototype, "tabBarColor", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new u(u.WHITE)
        }
    }), L = t(H.prototype, "buttonSelectedColor", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new u(u.WHITE)
        }
    }), z = H)) || z);
    e("default", (F = N(p), _ = N(p), D = N(p), R = N(O), A((x = t((k = class extends h {
        constructor(...e) {
            super(...e), i(this, "bg", x, this), i(this, "tabBar", U, this), i(this, "bgHeader", X, this), i(this, "popupStyles", j, this)
        }
        onLoad() {
            this.popupStyles.forEach((e => {
                var t;
                null == (t = e.button) || t.node.on("click", (t => {
                    this.onSelectTab(e.popupType)
                }))
            })), this.node.getComponent(c).opacity = 10
        }
        onSelectTab(e) {
            this.applyLayoutStyle(e), f.MessageCenter.send("onTabChanged", e)
        }
        applyLayoutStyle(e) {
            const t = this.getStyle(e);
            return this.bg.node.getComponent(b).color = t.bgColor, this.tabBar.node.getComponent(b).color = t.tabBarColor, this.bgHeader.spriteFrame = t.spriteBgHeader, this.popupStyles.forEach((e => {
                e.button.node.getChildByName("Bg").getComponent(b).color = e == t ? t.buttonSelectedColor : t.tabBarColor
            })), this.changeItemPrefab(t.itemPrefab), this.node.getComponent(c).opacity = 255, this
        }
        getStyle(e) {
            let t = this.popupStyles.find((t => t.popupType == e));
            return t || null
        }
    }).prototype, "bg", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(k.prototype, "tabBar", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(k.prototype, "bgHeader", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(k.prototype, "popupStyles", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), W = k)) || W));
    r._RF.pop()
}