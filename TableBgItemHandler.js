import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cv.js";
import * as o from "./CustomToggleHandler.js";
import * as u from "./JurisdLoader.js";

function main() {
    var c, b, g, d, h, p, f, m;
    a._RF.push({}, "8c8bfvXrc9Jt7qLjrWRV1gn", "TableBgItemHandler", void 0);
    const {
        ccclass: L,
        property: S
    } = l;
    e("default", (c = S(n), b = S(r), g = S(r), L((p = t((h = class extends o {
        constructor(...e) {
            super(...e), i(this, "tableName", p, this), i(this, "tableSprite", f, this), i(this, "tableBgSprite", m, this), this.tableIndex = null
        }
        onLoad() {
            s.MessageCenter.register(s.config.CHANGE_LANGUAGE, this.onLanguageChanged.bind(this), this.node)
        }
        onDestroy() {
            s.MessageCenter.unregister(s.config.CHANGE_LANGUAGE, this.node)
        }
        initialize(e, t, i, a) {
            this.initializeBase(e, i, a), this.tableIndex = t, this.onLanguageChanged();
            const n = "Textures/tableBgs/table_" + t;
            u.loadTableSpriteWithFallback(this.tableSprite, n);
            const r = "Textures/tableBgs/table_bg_" + t;
            u.loadTableSpriteWithFallback(this.tableBgSprite, r)
        }
        onLanguageChanged() {
            if (void 0 === this.tableIndex || null === this.tableIndex) return;
            const e = s.resMgr.getTableName(this.tableIndex);
            this.tableName.string = s.config.getStringData("table_name_" + e)
        }
    }).prototype, "tableName", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(h.prototype, "tableSprite", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(h.prototype, "tableBgSprite", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = h)) || d));
    a._RF.pop()
}