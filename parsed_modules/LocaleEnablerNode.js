import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as u from "./Enum.js";

function main() {
    var d, g, _, h, f, p, b, N, L, C, E, y, A, m, v;
    o._RF.push({}, "714batPRd5D2KWXolwLADZe", "LocaleEnablerNode", void 0);
    const {
        ccclass: D,
        property: G,
        executionOrder: P,
        menu: w
    } = a;
    var z = function(e) {
        return e[e.en_US = 0] = "en_US", e[e.vi_VN = 1] = "vi_VN", e[e.th_TH = 2] = "th_TH", e[e.pt_BR = 3] = "pt_BR", e[e.fr_CA = 4] = "fr_CA", e[e.es_MX = 5] = "es_MX", e[e.ja_JP = 6] = "ja_JP", e[e.ko_KR = 7] = "ko_KR", e[e.zh_TW = 8] = "zh_TW", e[e.pl_PL = 9] = "pl_PL", e[e.no_NO = 10] = "no_NO", e[e.fi_FI = 11] = "fi_FI", e[e.id_ID = 12] = "id_ID", e
    }(z || {});
    let R = (d = D("LocaleEnablerNodeDecider"), g = G({
        type: i(z)
    }), _ = G(r), d((p = t((f = class {
        constructor() {
            n(this, "language", p, this), n(this, "negate", b, this)
        }
    }).prototype, "language", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return z.en_US
        }
    }), b = t(f.prototype, "negate", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), h = f)) || h);
    e("LocaleEnablerNode", (N = w("Custom UI/Locale Node Enabler"), L = P(-1), C = G([s]), E = G([R]), D(y = N(y = L((m = t((A = class extends c {
        constructor(...e) {
            super(...e), n(this, "nodes", m, this), n(this, "deciders", v, this)
        }
        onLoad() {
            this.toggleNodes(), l.MessageCenter.register(l.config.CHANGE_LANGUAGE, this.onLanguageChanged.bind(this), this.node)
        }
        onDestroy() {
            l.MessageCenter.unregister(l.config.CHANGE_LANGUAGE, this.node)
        }
        onLanguageChanged() {
            this.toggleNodes()
        }
        toggleNodes() {
            const e = this.canShowNode;
            if (this.nodes && this.nodes.length > 0)
                for (let t = 0; t < this.nodes.length; ++t) this.nodes[t].active = e;
            else this.node.active = e
        }
        get canShowNode() {
            let e = !0;
            const t = l.config.getCurrentLanguage();
            for (let n of this.deciders) {
                const o = t == u[z[n.language]];
                if (e && (e = n.negate ? !o : o), !e) break
            }
            return e
        }
    }).prototype, "nodes", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = t(A.prototype, "deciders", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), y = A)) || y) || y) || y));
    o._RF.pop()
}