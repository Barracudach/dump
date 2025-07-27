import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./MTTGameTabComp.js";
import * as d from "./CommonTools.js";
import * as M from "./cv.js";
import * as E from "./LobbyTools.js";

function main() {
    var B, C, f, b, T, v, S, m, L, x, y, F, A;
    n._RF.push({}, "0ec1b/Fpi5AQYnj/QCnbPYG", "MTTGameTabCompIntegrateLandscape", void 0);
    const {
        ccclass: _,
        property: P
    } = a;
    t("MTTGameTabCompIntegrateLandscape", (B = _("MTTGameTabCompIntegrateLandscape"), C = P(r), f = P(o), b = P(s), T = P(r), v = P(r), B((L = e((m = class extends g {
        constructor(...t) {
            super(...t), i(this, "subfilterContainer", L, this), i(this, "searchMttBox", x, this), i(this, "searchMttBorder", y, this), i(this, "searchMttCancelBtn", F, this), i(this, "hoverBorder", A, this), this._onChangeLang = !1
        }
        onLoad() {
            super.onLoad(), M.MessageCenter.register(M.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onDestroy() {
            super.onDestroy(), M.MessageCenter.unregister(M.config.CHANGE_LANGUAGE, this)
        }
        onEnable() {
            super.onEnable(), this.searchMttBox.node.on(r.EventType.MOUSE_ENTER, this.onMouseEnterEditBox, this), this.searchMttBox.node.on(r.EventType.MOUSE_LEAVE, this.onMouseLeaveEditBox, this), this.searchMttCancelBtn.on(r.EventType.MOUSE_ENTER, this.onMouseEnterEditBox, this), this.searchMttCancelBtn.on(r.EventType.MOUSE_LEAVE, this.onMouseLeaveEditBox, this), this._onChangeLang && this.scheduleOnce((() => {
                this.updateFilterHieght(), this._onChangeLang = !1
            }))
        }
        onDisable() {
            super.onDisable(), this.searchMttBox.node.off(r.EventType.MOUSE_ENTER, this.onMouseEnterEditBox, this), this.searchMttBox.node.off(r.EventType.MOUSE_LEAVE, this.onMouseLeaveEditBox, this), this.searchMttCancelBtn.off(r.EventType.MOUSE_ENTER, this.onMouseEnterEditBox, this), this.searchMttCancelBtn.off(r.EventType.MOUSE_LEAVE, this.onMouseLeaveEditBox, this)
        }
        start() {
            this.updateFilterSize()
        }
        updateFilterHieght() {
            if (h(this.groupFilterPopup) && h(this.filterContainer) && this.filterContainer.getComponent(c).height > 20) {
                d.instance.updateLayouts(this.groupFilterPopup, !0, !0), M.resMgr.adaptWidget(this.groupFilterPopup, !0, !1);
                const t = this.groupFilterPopup.getComponent(c).contentSize.height + 24;
                this.filterContainer.getComponent(c).height = t, d.instance.updateAlignments(this.node)
            }
        }
        onMouseEnterEditBox(t) {
            this.hoverBorder && (this.hoverBorder.active = !0)
        }
        onMouseLeaveEditBox(t) {
            this.hoverBorder && (this.hoverBorder.active = !1)
        }
        getSubfilterPanel() {
            if (!this.prefabSubfilter) return null;
            const t = l(this.prefabSubfilter);
            return t.parent = this.subfilterContainer, t.setSiblingIndex(0), t
        }
        onLanguageChange() {
            this._onChangeLang = !0
        }
        updateFilterSize() {}
        getGroupFilterPopup() {
            return this.groupFilterPopup || (this.groupFilterPopup = l(this.gamelistFilterPrefab), h(this.filterContainer) ? (this.groupFilterPopup.parent = this.filterContainer, this.groupFilterPopup.on(r.EventType.SIZE_CHANGED, this.updateFilterSize, this)) : this.groupFilterPopup.parent = d.instance.getParentScene(u, null).getComponentInChildren(p).node), this.groupFilterPopup
        }
        onClickRefresh() {
            E.playSoundClick(), M.MessageCenter.send(M.Enum.MessageCenterAction.RequestMttLobbyLevelList)
        }
        onClickCancelSearchMTT() {
            h(this.searchMttBox) && (this.searchMttBox.string = ""), this.setFilterOptionSearchName(this.searchMttBox.string), this.setSearchMttCancelBtnActive(!1)
        }
        onBeganEditSearchMTT() {
            this.highlightSearchMttBorder(!0), this.setSearchMttCancelBtnActive(!0)
        }
        onEndEditSearchMTT() {
            this.setFilterOptionSearchName(this.searchMttBox.string), this.highlightSearchMttBorder(!1), this.updateCancelButton()
        }
        highlightSearchMttBorder(t) {
            h(this.searchMttBorder) && (this.searchMttBorder.node.active = t)
        }
        updateCancelButton() {
            h(this.searchMttBox) && this.setSearchMttCancelBtnActive(this.searchMttBox.string && this.searchMttBox.string.length > 0)
        }
        setSearchMttCancelBtnActive(t) {
            h(this.searchMttCancelBtn) && (this.searchMttCancelBtn.active = t)
        }
        setFilterOptionSearchName(t) {
            M.MessageCenter.send(M.Enum.MessageCenterAction.onMTTSearchBoxInput, t)
        }
    }).prototype, "subfilterContainer", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(m.prototype, "searchMttBox", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(m.prototype, "searchMttBorder", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(m.prototype, "searchMttCancelBtn", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(m.prototype, "hoverBorder", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = m)) || S));
    n._RF.pop()
}