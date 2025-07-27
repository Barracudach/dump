import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./Enum.js";
import * as w from "./i18nText.js";
import * as b from "./ScrollViewReuse.js";
import * as S from "./StringTools.js";
import * as y from "./cv.js";
import * as C from "./SlideView.js";

function main() {
    var V, I, D, v, R, L, x, E, K, P, A, T, M, O, z, B, _, N, G, F, k, U, j;
    n._RF.push({}, "63a26zjvTJK3qJR9yMOuoPx", "SelectView", void 0);
    let W = {
        titleKey: "SelectAnOption",
        searchPlaceholderKey: "Search",
        confirmBtnKey: "Confirm"
    };
    const {
        ccclass: H,
        property: J
    } = l;
    e("SelectView", (V = J(C), I = J(b), D = J(s), v = J(s), R = J(s), L = J(w), x = J(w), E = J(a), K = J(w), P = J(a), H(((j = class e extends o {
        constructor(...e) {
            super(...e), i(this, "slideView", M, this), i(this, "scrollViewReuse", O, this), i(this, "itemGeneral", z, this), i(this, "itemPhoneArea", B, this), i(this, "itemCountry", _, this), i(this, "title", N, this), i(this, "subtitle", G, this), i(this, "searchInputNode", F, this), i(this, "confirmBtnLabel", k, this), i(this, "dynamicContainer", U, this), this.searchInput = null, this.searchInputPlaceholder = null, this.data = null, this.shownData = [], this.defualtSpanCount = 0
        }
        static getSinglePrefabInst(e, t) {
            let i = t;
            return i || (i = r.getScene().getComponentInChildren(h).node), i ? (this.prefabInst && u(this.prefabInst, !0) && (i.getChildByUuid(this.prefabInst.uuid) || u(this.prefabInst, !0)) || (this.prefabInst = c(e), i.addChild(this.prefabInst), this.prefabInst.setSiblingIndex(y.Enum.ZORDER_TYPE.ZORDER_LOADING)), this.prefabInst) : (console.error("Select view: fail to get the canvas node"), null)
        }
        static showPrefab(t, i, n) {
            let s = e.getSinglePrefabInst(i, n).getComponent(e);
            return s.show(t), s
        }
        static sortMethod(e, t = !0) {
            return t && e.forEach((e => {
                null != e.i18nKey && "" != e.i18nKey && (e.text = y.config.getStringData(e.i18nKey, !1, e.text))
            })), e.sort((function(e, t) {
                return e.text.localeCompare(t.text)
            })), e.filter((function(e) {
                return null != e.text && e.text.length > 0
            }))
        }
        static stringsToItems(e, t) {
            return e.map((e => ({
                text: e,
                selected: t
            })))
        }
        static i18nKeysToItems(t, i) {
            let n = t.map((e => ({
                i18nKey: e,
                text: y.config.getStringData(e),
                selected: i
            })));
            return e.sortMethod(n, !1)
        }
        onLoad() {
            this.searchInput = this.searchInputNode.getComponentInChildren(d), this.searchInputPlaceholder = this.searchInput.getComponent(w), this.defualtSpanCount = this.scrollViewReuse.spawnCount, y.MessageCenter.register(y.Enum.MessageCenterAction.OnSelectViewOptionSelected, this.onSelected.bind(this), this.node), y.MessageCenter.register("onLogout", this.hide.bind(this), this.node)
        }
        start() {
            this.resetBGSize()
        }
        resetBGSize() {
            this.dynamicContainer && this.slideView && this.slideView.resetDynamicContainer(this.dynamicContainer.getComponent(p).height)
        }
        onDestroy() {
            y.MessageCenter.unregister(y.Enum.MessageCenterAction.OnSelectViewOptionSelected, this.node), y.MessageCenter.unregister("onLogout", this.node)
        }
        onDisable() {
            y.MessageCenter.send(y.Enum.MessageCenterAction.OnSelectViewHide)
        }
        show(e) {
            y.MessageCenter.send(y.Enum.MessageCenterAction.OnSelectViewShow), e.items.forEach((t => {
                null != t.i18nKey && "" != t.i18nKey && (t.text = y.config.getStringData(t.i18nKey, !1, t.text)), e.valueSelected && (t.selected = e.valueSelected)
            })), this.data = Object.assign({}, W, e), this.slideView ? this.slideView.show(!0, this.data.onValueExit) : this.node.active = !0, !0 === e.enableDynamicScroll && this.addLayoutToScrollContent(), this.updateView(), this.initScrollView(this.data.itemPrefab || this.itemGeneral, this.data.itemClassName || "SelectItem"), this.updatSpawnData(!0)
        }
        addLayoutToScrollContent() {
            this.scrollViewReuse.spawnCount = this.data.items.length;
            let e = this.scrollViewReuse.scrollView.content,
                t = e.getComponent(g);
            t || (t = e.addComponent(g), t.type = g.Type.VERTICAL, t.resizeMode = g.ResizeMode.CONTAINER, t.verticalDirection = g.VerticalDirection.TOP_TO_BOTTOM), t && (t.enabled = !0)
        }
        removeLayoutFromScrollContent() {
            this.scrollViewReuse.spawnCount = this.defualtSpanCount;
            let e = this.scrollViewReuse.scrollView.content;
            if (e) {
                let t = e.getComponent(g);
                t && (t.enabled = !1)
            }
        }
        onChangeLanguage() {
            this.data.items.forEach((e => {
                null != e.i18nKey && "" != e.i18nKey && (e.text = y.config.getStringData(e.i18nKey, !1, e.text))
            })), this.searchInput.string = "", this.updatSpawnData(!1)
        }
        initScrollView(e, t) {
            this.scrollViewReuse.bindPrefab(e, t), this.scrollViewReuse.generateItemPool(), this.scrollViewReuse.bindScrollEventTarget(this)
        }
        onSelected([e, t]) {
            var i, n;
            this.data.valueSelected = t, this.data.items.forEach((e => e.selected = t)), this.updatSpawnData(!1), null == (i = (n = this.data).onValueSelected) || i.call(n, t)
        }
        onEditBoxSearchChanged() {
            if (y.appConfig.isLandscapeLayout) {
                let e = this.node.getComponent(f);
                const t = this.node.getComponent(p),
                    i = null == t ? void 0 : t.width,
                    n = this.node.getWorldPosition();
                this.scrollViewReuse.resetScrollVewSize(null == t ? void 0 : t.contentSize), this.updatSpawnData(!0), e && (e.enabled = !1, e.isAlignLeft = !1, e.isAlignRight = !1, e.isAlignTop = !1, e.isAlignBottom = !1, t && (t.width = i), this.node.setWorldPosition(n))
            } else this.updatSpawnData(!0)
        }
        onBtnConfirm() {
            var e, t;
            y.AudioMgr.playButtonSound("button_click.mp3"), null == (e = (t = this.data).onClickConfirm) || e.call(t), this.hide()
        }
        hide(e) {
            var t, i;
            (!0 === this.data.enableDynamicScroll && this.removeLayoutFromScrollContent(), this.slideView) ? this.slideView.hide(): (this.node.active = !1, null == (t = (i = this.data).onValueExit) || t.call(i, e))
        }
        onBtnSearch() {
            y.AudioMgr.playButtonSound("button_click.mp3"), this.updatSpawnData(!0)
        }
        updateView() {
            this.title.setKey(this.data.titleKey, !0), this.searchInputPlaceholder.setKey(this.data.searchPlaceholderKey, !0), this.confirmBtnLabel.setKey(this.data.confirmBtnKey, !0), this.data.subtitleKey ? (this.subtitle.node.active = !0, this.subtitle.setKey(this.data.subtitleKey, !0)) : this.subtitle.node.active = !1, this.searchInputNode.active = !0 === this.data.searchEnabled, this.searchInput.string = ""
        }
        isEnglishRelatedLanguage() {
            return [m.es_MX, m.pt_BR, m.fr_CA, m.en_US, m.pl_PL, m.no_NO, m.fi_FI].includes(y.config.getCurrentLanguage())
        }
        updatSpawnData(e) {
            if (this.shownData = [], "" == this.searchInput.string) this.shownData = this.data.items;
            else {
                let e = this.searchInput.string,
                    t = !1;
                t = this.isEnglishRelatedLanguage(), t && (e = S.removeAccents(this.searchInput.string)), e = e.toLowerCase();
                for (let i = 0; i < this.data.items.length; i++) {
                    let n = this.data.items[i].text;
                    t && (n = S.removeAccents(this.data.items[i].text));
                    let s = e.length;
                    s > 2 ? n.toLowerCase().indexOf(e) >= 0 && this.shownData.push(this.data.items[i]) : n.toLowerCase().substring(0, s) == e && this.shownData.push(this.data.items[i])
                }
            }
            this.scrollViewReuse.reloadView(this.shownData, e)
        }
    }).prefabInst = null, M = t((T = j).prototype, "slideView", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(T.prototype, "scrollViewReuse", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(T.prototype, "itemGeneral", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(T.prototype, "itemPhoneArea", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(T.prototype, "itemCountry", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(T.prototype, "title", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(T.prototype, "subtitle", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(T.prototype, "searchInputNode", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(T.prototype, "confirmBtnLabel", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(T.prototype, "dynamicContainer", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = T)) || A));
    n._RF.pop()
}