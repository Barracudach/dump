import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./MttGameItemRenderIntegrate.js";
import * as d from "./Pb.js";
import * as g from "./DoubleClickHandler.js";
import * as p from "./MttItemRenderHelper.js";

function main() {
    var m, S, b, v, f, H, E, I, N, M, L, R, y;
    i._RF.push({}, "e1576pqRbZJ6I7q9wVjCE3t", "MttGameItemRenderIntegrateLandscape", void 0);
    const {
        ccclass: T,
        property: C
    } = s;
    let _ = e("MttGameItemIntegrateSelectStatus", function(e) {
        return e[e.Normal = 0] = "Normal", e[e.Hover = 1] = "Hover", e[e.Selected = 2] = "Selected", e
    }({}));
    e("MttGameItemRenderIntegrateLandscape", (m = T("MttGameItemRenderIntegrateLandscape"), S = C(r), b = C(r), v = C(r), f = C([o]), H = C(a), m((N = t((I = class extends h {
        constructor(...e) {
            super(...e), this.TAG = "MttGameItemRenderIntegrateLandscape", n(this, "backgroundNode", N, this), n(this, "hoverHighlightNode", M, this), n(this, "selectHighlightNode", L, this), n(this, "bannerBgList", R, this), n(this, "bannerBgSprite", y, this), this.doubleClickHandler = null, this._selectStatus = _.Normal, this.abbreviationFormat = !1
        }
        onLoad() {
            super.onLoad(), this.doubleClickHandler = this.node.addComponent(g);
            let e = new l;
            e.target = this.node, e.component = "MttGameItemRenderIntegrateLandscape", e.handler = "onDoubleClick", this.doubleClickHandler.doubleClickEvents.push(e)
        }
        onEnable() {
            this.registerButtonEvents()
        }
        onDisable() {
            this.unregisterButtonEvents()
        }
        applyGamePrizePoolColor(e, t, n) {
            p.applyGameLandscapePrizePoolColor(e, t, n)
        }
        registerButtonEvents() {
            this.node.on(u.MOUSE_ENTER, (() => {
                this.onMouseEnter()
            })), this.node.on(u.MOUSE_LEAVE, (() => {
                this.onMouseLeave()
            }))
        }
        unregisterButtonEvents() {
            this.node.off(u.MOUSE_ENTER), this.node.off(u.MOUSE_LEAVE)
        }
        onMouseEnter() {
            this.onHover(!0)
        }
        onMouseLeave() {
            this.onHover(!1)
        }
        onHover(e) {
            this._selectStatus != _.Selected && (e ? this.changeSelectStatus(_.Hover) : this.changeSelectStatus(_.Normal))
        }
        changeSelectStatus(e) {
            cc_mtt.vv.ConsoleLog.log(this.TAG, "changeSelectStatus", e), this._selectStatus = e, c(this.backgroundNode) && (this.backgroundNode.active = e == _.Normal), c(this.hoverHighlightNode) && (this.hoverHighlightNode.active = e == _.Hover), c(this.selectHighlightNode) && (this.selectHighlightNode.active = e == _.Selected)
        }
        updateBuyInTitle() {
            super.updateBuyInTitle()
        }
        setStartDate(e, t) {
            super.setStartDate(e, t)
        }
        setRoomStatusLabel(e) {
            var t;
            this.currentState != d.commonProto.MTT_GAME_STATUS.NOT_STARTED ? super.setRoomStatusLabel(e) : null == (t = this.labelRoomStatus) || t.setString("")
        }
        updateSelected(e) {
            if (!c(this.selectHighlightNode)) return;
            e.isSelected ? this.changeSelectStatus(_.Selected) : this.changeSelectStatus(_.Normal)
        }
        render(e) {
            super.render(e), this.updateSelected(e)
        }
        onLanguageChanged() {
            super.onLanguageChanged(), this.updateBuyInTitle(), this.startingTime && this.setStartDate(this.startingTime, this.playerOnJoint)
        }
        onDoubleClick() {
            var e;
            null == (e = this._onDoubleClickHandler) || e.call(this)
        }
    }).prototype, "backgroundNode", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(I.prototype, "hoverHighlightNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(I.prototype, "selectHighlightNode", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(I.prototype, "bannerBgList", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), y = t(I.prototype, "bannerBgSprite", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = I)) || E));
    i._RF.pop()
}