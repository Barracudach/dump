import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./ScrollViewReuse.js";
import * as p from "./cv.js";
import * as f from "./cb.js";
import * as m from "./MiniGameSoundManager.js";

function main() {
    var g, d, y, w, _, C, v, S, L, V, z, P;
    i._RF.push({}, "c2600m9V3NLKKwv9zShSxeg", "CowboyList", void 0);
    const {
        ccclass: R,
        property: B
    } = a;
    e("default", (g = B(o), d = B(o), y = B(l), w = B(r), _ = B(s), R((S = t((v = class extends c {
        constructor(...e) {
            super(...e), n(this, "online_desc", S, this), n(this, "online_num", L, this), n(this, "item_prefab", V, this), n(this, "scrollView", z, this), n(this, "chartbg", P, this)
        }
        start() {
            let e = this.scrollView.getComponent(h);
            e.bindPrefab(this.item_prefab, "cowboyItem", []), e.generateItemPool(), e.bindScrollEventTarget(this), this.setData(), 0 == f.getCowboyRoom().gamePlayerList.length ? (this.online_desc.node.active = !1, this.online_num.node.active = !1) : (this.online_desc.node.active = !0, this.online_num.node.active = !0, this.online_num.string = p.StringTools.formatC("%d", f.getCowboyRoom().dzplayerNum)), u("Button_close", this.chartbg).on(b.EventType.CLICK, this.onBtnClose, this)
        }
        onBtnClose() {
            m.playButtonSound("close"), this.node.active = !1
        }
        setData() {
            let e = this.scrollView.getComponent(h);
            f.getCowboyRoom().gamePlayerList.length;
            e.reloadView(f.getCowboyRoom().gamePlayerList)
        }
    }).prototype, "online_desc", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(v.prototype, "online_num", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(v.prototype, "item_prefab", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(v.prototype, "scrollView", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(v.prototype, "chartbg", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = v)) || C));
    i._RF.pop()
}