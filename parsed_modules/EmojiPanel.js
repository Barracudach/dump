import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as f from "./EmojiMagicItem.js";
import * as h from "./EmojiResources.js";

function main() {
    var d, p, j, E, y, P, v, L, b, g;
    o._RF.push({}, "3c9e10w8RBP9Kyi7hSGEcSH", "EmojiPanel", void 0);
    const {
        ccclass: D,
        property: w
    } = a;
    e("EmojiPanel", (d = w(s), p = w(s), j = w(n), E = w(r), D((v = t((P = class extends l {
        constructor(...e) {
            super(...e), i(this, "isPreLoadEffect", v, this), i(this, "isRemoveResourcesOnDestroy", L, this), i(this, "emojiPre", b, this), i(this, "fullScreenParent", g, this), this.emojiList = new Map, this.timestamp = 0
        }
        onLoad() {
            this.timestamp = Date.now(), this.loadEmojiIcons()
        }
        loadEmojiIcons() {
            const e = h.instance.listEmoji;
            for (let i = 0; i < e.length; i++) {
                var t;
                let o = null == (t = this.emojiList.get(e[i].value)) ? void 0 : t.node;
                if (!c(o)) {
                    o = m(this.emojiPre);
                    const t = o.getComponent(f);
                    t.type = e[i].value, t.name = e[i].name, this.emojiList.set(e[i].value, t)
                }
            }
            Promise.all(Array.from(this.emojiList.values()).map((e => e.loadIcon()))).then((e => {
                u(`>>>>> [Loaded emoji icons in ${(Date.now()-this.timestamp)/1e3} seconds]`), this.isPreLoadEffect && this.loadEmojiEffects()
            })).catch((e => {
                u(`>>>>> [Loaded emoji icons error: ${e}]`)
            }))
        }
        loadEmojiEffects() {
            this.timestamp = Date.now(), Promise.all(Array.from(this.emojiList.values()).map((e => e.loadEmoji()))).then((e => {
                u(`>>>>> [Loaded emoji effects in ${(Date.now()-this.timestamp)/1e3} seconds]`)
            })).catch((e => {
                u(`>>>>> [Loaded emoji effects error: ${e}]`)
            }))
        }
        onDestroy() {
            this.isRemoveResourcesOnDestroy && h.instance.removeAll()
        }
        removeEmojis() {
            this.emojiList.forEach(((e, t) => {
                c(e) && e.node.destroy()
            })), this.emojiList.clear()
        }
    }).prototype, "isPreLoadEffect", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), L = t(P.prototype, "isRemoveResourcesOnDestroy", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), b = t(P.prototype, "emojiPre", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(P.prototype, "fullScreenParent", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = P)) || y));
    o._RF.pop()
}