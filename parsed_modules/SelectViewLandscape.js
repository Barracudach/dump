import * as t from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./SelectView.js";
import * as d from "./NodeHelper.js";
import * as c from "./cv.js";

function main() {
    var p, l;
    t._RF.push({}, "f0f34BFmGpCe6i4LKOtWFWS", "SelectViewLandscape", void 0);
    const {
        ccclass: g,
        property: u
    } = n;
    e("SelectViewLandscape", g(((l = class e extends a {
        constructor(...e) {
            super(...e), this.maxNodeHeight = 550, this.currentFormIsPopup = !1
        }
        static showPrefab(e, t, n) {
            return this.parentNode = n, super.showPrefab(e, t, n)
        }
        show(e) {
            super.show(e), this.syncDropdownWidthFromParent(), this.addPanelOutOfScreen(), !0 === e.enableDynamicScroll ? this.scheduleOnce((() => {
                this.syncPanelSizeWithContent(), this.addPanelToScene()
            }), .1) : (this.syncPanelSizeWithContent(), this.addPanelToScene())
        }
        syncDropdownWidthFromParent() {
            const t = e.parentNode,
                n = null == t ? void 0 : t.getComponent(o),
                i = this.node.getComponent(o);
            n && i && (i.width = n.width)
        }
        delayForSearchInput() {
            this.searchInput && this.searchInput.node.activeInHierarchy && this.searchInput.focus()
        }
        onDisable() {
            c.MessageCenter.unregister(c.Enum.MessageCenterAction.onOpenPopUpMsg, this.node)
        }
        onEnable() {
            c.MessageCenter.register(c.Enum.MessageCenterAction.onOpenPopUpMsg, this.onShowGeneralPopup.bind(this), this.node)
        }
        onLoad() {
            super.onLoad(), this.searchInput.node.off("editing-tab"), this.searchInput.node.off("editing-backtab"), this.searchInput.node.on("editing-tab", this.onTabEditing.bind(this)), this.searchInput.node.on("editing-backtab", this.onShiftTabEditing.bind(this))
        }
        onShowGeneralPopup(e) {
            this.currentFormIsPopup && e <= 1 || !this.currentFormIsPopup && e <= 0 || (this.searchInput.blur(), this.hide())
        }
        onTabEditing() {
            this.searchInput.blur(), this.hide("editing-tab")
        }
        onShiftTabEditing() {
            this.searchInput.blur(), this.hide("editing-backtab")
        }
        syncPanelSizeWithContent() {
            let e = this.scrollViewReuse.scrollView,
                t = this.node.getComponent(o).height - e.node.getComponent(o).height;
            e.content.getComponent(o).height < e.node.getComponent(o).height ? this.node.getComponent(o).height = t + e.content.getComponent(o).height + .01 : this.node.getComponent(o).height < this.maxNodeHeight && (this.node.getComponent(o).height = this.maxNodeHeight)
        }
        addPanelOutOfScreen() {
            const t = e.parentNode;
            if (!t) return;
            const n = this.node,
                s = n.getComponent(o),
                h = n.getComponent(i);
            if (!s || !h) return;
            const r = n.getWorldPosition(),
                a = s.width;
            h.isAlignLeft = !1, h.isAlignRight = !1, h.isAlignTop = !0, h.isAlignBottom = !1, h.top = 1e4, h.enabled = !1, n.active = !1, n.parent = t, n.setWorldPosition(r), s.width = a, h.enabled = !0, h.updateAlignment(), n.active = !0
        }
        addPanelToScene() {
            let t = e.parentNode;
            t && this.scheduleOnce((() => {
                let e = this.node;
                const n = t.getComponent(o);
                if (!n) return;
                const r = t.parent.getComponent(o).convertToWorldSpaceAR(t.getPosition()).y - n.height * n.anchorPoint.y - 8,
                    a = e.getComponent(o),
                    p = e.getComponent(i);
                a && p && (a.height > r ? (p.isAlignTop = !1, p.isAlignBottom = !0, p.bottom = 8 + n.height) : (p.isAlignTop = !0, p.isAlignBottom = !1, p.top = 8 + n.height), e.parent = t, this.alignDropdownXToParent(), e.active = !0, p.enabled = !0, p.updateAlignment(), s.once(h.EVENT_AFTER_UPDATE, (() => {
                    d.setParentWorldPosStays(this, e, c.tools.getRootCanvas(t)), this.scheduleOnce((() => {
                        this.delayForSearchInput()
                    }), .1)
                })))
            }), 0)
        }
        alignDropdownXToParent() {
            const t = e.parentNode,
                n = this.node,
                i = null == t ? void 0 : t.getComponent(o),
                s = null == n ? void 0 : n.getComponent(o);
            if (!i || !s) return;
            const h = t.getWorldPosition().x - i.width * i.anchorPoint.x + s.width * s.anchorPoint.x,
                a = n.getWorldPosition().y;
            n.setWorldPosition(new r(h, a, 0))
        }
        onSelected([e, t]) {
            super.onSelected([e, t]), this.onBtnConfirm()
        }
        hide(e) {
            c.MessageCenter.send(c.Enum.MessageCenterAction.OnSelectViewHide), super.hide(e)
        }
    }).parentNode = null, p = l)) || p);
    t._RF.pop()
}