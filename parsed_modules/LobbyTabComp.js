import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./MVCListComp.js";

function main() {
    var c, p, b, f, h, d, m, g, L, y;
    n._RF.push({}, "ce6b3qyleRJkbQC3fiCr5vX", "LobbyTabComp", void 0);
    const {
        ccclass: v,
        property: S
    } = o;
    t("default", (c = S(u), p = S(r), b = S(r), f = S(s), v((m = i((d = class extends l {
        constructor(...t) {
            super(...t), this.mvcViews = [], e(this, "gameList", m, this), e(this, "listLoading", g, this), e(this, "listEmpty", L, this), e(this, "prefabSubfilter", y, this)
        }
        onLoad() {
            this.setShowEmptyList(!1), this.setShowLoadingList(!0)
        }
        setActive(t) {
            this.node.active = t
        }
        getGameListNode() {
            var t;
            return null == (t = this.gameList) ? void 0 : t.node
        }
        setShowLoadingList(t) {
            this.listLoading && (this.listLoading.active = t)
        }
        setShowEmptyList(t) {
            this.listEmpty && (this.listEmpty.active = t)
        }
        getSubfilterPanel() {
            if (!this.prefabSubfilter) return null;
            const t = a(this.prefabSubfilter);
            return t.parent = this.node, t.setSiblingIndex(0), t
        }
    }).prototype, "gameList", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = i(d.prototype, "listLoading", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = i(d.prototype, "listEmpty", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(d.prototype, "prefabSubfilter", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = d)) || h));
    n._RF.pop()
}