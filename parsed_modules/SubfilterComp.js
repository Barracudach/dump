import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as S from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./DesignSystemButtonBase.js";
import * as d from "./cv.js";
import * as b from "./i18nText.js";
import * as g from "./LobbyHelper.js";
import * as B from "./LobbyTools.js";
import * as k from "./SubfilterController.js";
import * as C from "./SubfilterController.js";

function main() {
    var w, v, T, L, I, M, U, F, N, G, A, z, E, _, x, D, V, R, H, P, K, O, Y, j;
    n._RF.push({}, "ff978oY4KVO1bOqoEowbvV8", "SubfilterComp", void 0);
    const {
        ccclass: q,
        property: W
    } = l;
    t("default", (w = W(r), v = W(o), T = W(o), L = W(s), I = W(r), M = W(p), U = W(p), F = W(p), N = W(p), G = W(p), A = W(r), q((_ = e((E = class extends u {
        constructor(...t) {
            super(...t), this.mvcView = null, i(this, "rightListSubfilter", _, this), i(this, "prefabSubfilterButton", x, this), i(this, "prefabSubfilterIconButton", D, this), i(this, "iconButtonSpriteFrames", V, this), i(this, "leftListSubfilter", R, this), i(this, "myTicketButton", H, this), i(this, "currencySwitcher", P, this), i(this, "myGameSwitcher", K, this), i(this, "filterButton", O, this), i(this, "refreshButton", Y, this), i(this, "line", j, this), this.btnsSubFilter = new Map, this.isSyncingMyGameToggle = !1, this._currencySwitcherIsChecked = !1, this.canUseMyTickets = !1
        }
        get currencySwitcherIsChecked() {
            return this._currencySwitcherIsChecked
        }
        set currencySwitcherIsChecked(t) {
            var e, i, n;
            (this._currencySwitcherIsChecked = t, null != (e = this.currencySwitcher) && e.node) && g.setDesignBtnState(null == (n = this.currencySwitcher) ? void 0 : n.node, t);
            null == (i = this.mvcView) || null == i.onSwitchCurrencyClick || i.onSwitchCurrencyClick(t)
        }
        onLoad() {
            this.leftListSubfilter.children.forEach((t => t.active = !1)), this.rightListSubfilter.children.forEach((t => t.active = !1)), this.reloadSeparatorLine()
        }
        createSubFilterButtons(t) {
            t.forEach((t => {
                const e = this.getSubfilterNodeByName(t.name, t);
                e && (e.active = !0, this.setUpButon(e, t))
            })), this.reloadSeparatorLine()
        }
        setUpButon(t, e) {
            if (e.hasIcon) {
                var i;
                const n = null == (i = t.getChildByName("icon")) ? void 0 : i.getComponent(c);
                if (n) switch (e.name.toUpperCase()) {
                    case k:
                        this.myTicketButton = t.getComponent(p), n.spriteFrame = this.iconButtonSpriteFrames[1], n.node.getComponent(a).width = 52, n.node.getComponent(a).height = 36, n.trim = !0;
                        break;
                    case C:
                        this.currencySwitcher = t.getComponent(p), n.spriteFrame = this.iconButtonSpriteFrames[0], n.node.getComponent(a).width = 96, n.node.getComponent(a).height = 96, n.trim = !1
                }
            } else this.setupButtonText(t, e), this.setupButtonIcon(t, e), this.setupButtonAmount(t, e), this.setupButtonLayout(t, e);
            this.btnsSubFilter.set(e.name, t), this.setupButtonClick(t, e)
        }
        setupButtonIcon(t, e) {}
        getSubfilterNodeByName(t, e) {
            let i = this.btnsSubFilter.get(t);
            return !i && e && (i = h(e.hasIcon ? this.prefabSubfilterIconButton : this.prefabSubfilterButton), i.parent = e.isLeft ? this.leftListSubfilter : this.rightListSubfilter, null != e.siblingIndex && null != e.siblingIndex && i.setSiblingIndex(e.siblingIndex)), i
        }
        setupButtonClick(t, e) {
            e.name.toUpperCase() == C ? t.on("click", this.onSwitchCurrencyClick.bind(this)) : e.name.toUpperCase() == k ? t.on("click", this.onSwitchCanUseMyTicketClick.bind(this)) : t.on("click", this.onSubFilterClick.bind(this, e.name))
        }
        setupButtonText(t, e) {
            var i;
            const n = null == (i = t.getChildByName("layout")) || null == (i = i.getChildByName("text")) ? void 0 : i.getComponent(b);
            if (n) {
                const t = g.getI18nKeyOfGameTypeNameByName(e.name),
                    i = d.config.getStringData(t);
                null != i && i.length ? null == n || n.setKey(t) : null == n || n.setText(e.name.toUpperCase())
            }
        }
        setupButtonAmount(t, e) {
            const i = this.getAmountContainer(t);
            i && (i.active = Boolean(e.showAmount))
        }
        setupButtonLayout(t, e) {
            var i;
            const n = null == (i = t.getChildByName("layout")) ? void 0 : i.getComponent(m);
            n && n.updateLayout()
        }
        getAmountContainer(t) {
            var e;
            return null == (e = t.getChildByName("layout")) ? void 0 : e.getChildByName("amount")
        }
        setShowSwitchCurrencyButton(t) {
            this.currencySwitcher && this.currencySwitcher.node && (this.currencySwitcher.node.active = t), this.reloadSeparatorLine()
        }
        setShowMyGameButton(t) {
            this.myGameSwitcher.node.active = t, this.reloadSeparatorLine()
        }
        setShowCanUseMyTicketButton(t) {
            this.myTicketButton.node.active = t, this.reloadSeparatorLine()
        }
        setShowFilterButton(t) {
            y(this.filterButton) && (this.filterButton.node.active = t, this.reloadSeparatorLine())
        }
        reloadSeparatorLine() {
            var t, e;
            const i = null == (t = this.rightListSubfilter) ? void 0 : t.children.some((t => t.activeInHierarchy)),
                n = null == (e = this.leftListSubfilter) ? void 0 : e.children.some((t => t.activeInHierarchy));
            this.line && (this.line.active = i && n)
        }
        setActive(t) {
            this.node.active = t
        }
        setSelectedSubFilterButton(t) {
            this.btnsSubFilter.forEach(((e, i) => {
                i.toUpperCase() == C || i.toUpperCase() == k || g.setDesignBtnState(e, i == t)
            }))
        }
        setActiveSubFilterButton(t) {
            t && t.forEach((t => {
                const e = this.getSubfilterNodeByName(t.name);
                e && (e.active = t.isShow)
            }))
        }
        setSubfilterAmount(t, e) {
            const i = this.getSubfilterNodeByName(t);
            i && this.setButtonAmount(i, e)
        }
        setMyGameAmount(t) {
            this.setButtonAmount(this.myGameSwitcher.node, t)
        }
        syncMyGameToggle(t) {
            this.isSyncingMyGameToggle = !0, this.myGameSwitcher.getComponent(f).isChecked = t, this.isSyncingMyGameToggle = !1
        }
        setButtonAmount(t, e) {
            const i = this.getAmountContainer(t);
            if (!y(i)) return;
            const n = i.getChildByName(e <= 0 ? "zero" : "valid");
            if (i.children.forEach((t => t.active = !1)), n) {
                n.active = !0;
                const t = n.getComponentInChildren(S);
                t && (t.string = e.toString())
            }
        }
        setSwitchCanUseMyTicketButton(t) {
            var e, i, n, r;
            (this.canUseMyTickets = t, null != (e = this.myTicketButton) && e.node) && g.setDesignBtnState(null == (r = this.myTicketButton) ? void 0 : r.node, this.canUseMyTickets, !0);
            null == (i = (n = this.mvcView).onCanUseMyTicketClick) || i.call(n, this.myTicketButton.isChecked)
        }
        setFilterToggleButton(t) {
            var e, i;
            null != (e = this.filterButton) && e.node && g.setDesignBtnState(null == (i = this.filterButton) ? void 0 : i.node, t, !0)
        }
        updateFilterToggleButtonState(t) {
            var e, i;
            null != (e = this.filterButton) && e.node && g.setDesignBtnState(null == (i = this.filterButton) ? void 0 : i.node, t, t)
        }
        onSubFilterClick(t) {
            var e, i;
            B.playSoundTab(), null == (e = (i = this.mvcView).onSubfilterClicked) || e.call(i, t)
        }
        onSwitchCurrencyClick() {
            B.playSoundClick(), this.currencySwitcherIsChecked = !this.currencySwitcherIsChecked
        }
        onRefreshClick() {
            var t, e, i, n;
            (B.playSoundClick(), null == (t = (e = this.mvcView).onRefreshClicked) || t.call(e), null != (i = this.refreshButton) && i.node) && g.setDesignBtnState(null == (n = this.refreshButton) ? void 0 : n.node, !1, !0)
        }
        onMyGamesClick() {
            var t, e;
            this.isSyncingMyGameToggle || (B.playSoundClick(), null == (t = (e = this.mvcView).onMyGamesClick) || t.call(e, this.myGameSwitcher.isChecked))
        }
        onSwitchCanUseMyTicketClick() {
            var t, e, i, n;
            (B.playSoundClick(), this.canUseMyTickets = !this.canUseMyTickets, null != (t = this.myTicketButton) && t.node) && g.setDesignBtnState(null == (n = this.myTicketButton) ? void 0 : n.node, this.canUseMyTickets);
            null == (e = (i = this.mvcView).onCanUseMyTicketClick) || e.call(i, this.myTicketButton.isChecked)
        }
        setShowRefreshButton(t) {
            y(this.refreshButton) && (this.refreshButton.node.active = t)
        }
    }).prototype, "rightListSubfilter", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(E.prototype, "prefabSubfilterButton", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(E.prototype, "prefabSubfilterIconButton", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(E.prototype, "iconButtonSpriteFrames", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), R = e(E.prototype, "leftListSubfilter", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(E.prototype, "myTicketButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(E.prototype, "currencySwitcher", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(E.prototype, "myGameSwitcher", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(E.prototype, "filterButton", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(E.prototype, "refreshButton", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(E.prototype, "line", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = E)) || z));
    n._RF.pop()
}