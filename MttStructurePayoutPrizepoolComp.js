import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./DesignSystemButtonBase.js";
import * as c from "./DesignSystemButtonBase.js";
import * as b from "./MttTabComp.js";

function main() {
    var h, l, p, d, _, T, w;
    o._RF.push({}, "435d22yXKhOq4aMliXY9aIK", "MttStructurePayoutPrizepoolComp", void 0);
    const {
        ccclass: m,
        property: y
    } = r;
    t("MttStructurePayoutPrizepoolComp", (h = m("MttStructurePayoutPrizepoolComp"), l = y(n), p = y(n), h((T = e((_ = class extends s {
        constructor(...t) {
            super(...t), this.mvcView = null, i(this, "tabButtons", T, this), i(this, "tabViews", w, this), this._currentTabIndex = 0
        }
        start() {
            this._showTab(0)
        }
        onClickTabButton(t, e) {
            const i = parseInt(e);
            i !== this._currentTabIndex && this._showTab(i)
        }
        _showTab(t = 0) {
            this._currentTabIndex = t, this._updateTabButtons(), this._updateTabView()
        }
        _updateTabButtons() {
            for (let t = 0; t < this.tabButtons.length; t++) {
                const e = this.tabButtons[t].getComponent(u);
                e.btnState = t == this._currentTabIndex ? c.pressed : c.normal, e.isChecked = t == this._currentTabIndex
            }
        }
        _updateTabView() {
            for (let t = 0; t < this.tabViews.length; t++) {
                const e = this.tabViews[t],
                    i = e.getComponent(b),
                    o = e.active;
                e.active = t == this._currentTabIndex, a(i) && (t != this._currentTabIndex || o ? t != this._currentTabIndex && o && i.onDeactived() : i.onActived())
            }
        }
        getBlindStructure() {
            return this.tabViews[0]
        }
        getPayout() {
            return this.tabViews[1]
        }
        getPrizepool() {
            return this.tabViews[2]
        }
        showPayout(t) {
            const e = this.tabButtons[1];
            e && (e.active = t)
        }
        showPrizePool(t) {
            const e = this.tabButtons[2];
            e && (e.active = t)
        }
    }).prototype, "tabButtons", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), w = e(_.prototype, "tabViews", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), d = _)) || d));
    o._RF.pop()
}