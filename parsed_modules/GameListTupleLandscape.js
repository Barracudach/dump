import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./GameListTuplePkw.js";
import * as d from "./MttHall.js";
import * as c from "./cv.js";
import * as h from "./CommonTools.js";
import * as m from "./ThemeSystemType.js";

function main() {
    var p, f, T, g, v, N;
    o._RF.push({}, "51ae9wR1NlBHZSReO/iIzXf", "GameListTupleLandscape", void 0);
    const {
        ccclass: w,
        property: E
    } = s;
    e("default", (p = E(i), f = E(i), w((v = t((g = class e extends u {
        constructor(...e) {
            super(...e), n(this, "shadowNode", v, this), n(this, "buyInTitle", N, this)
        }
        onEnable() {
            super.onEnable(), this.registerButtonEvents()
        }
        onDisable() {
            super.onDisable(), this.unregisterButtonEvents()
        }
        registerButtonEvents() {
            this.node.on(a.MOUSE_ENTER, (() => {
                this.onMouseEnter()
            })), this.node.on(a.MOUSE_LEAVE, (() => {
                this.onMouseLeave()
            }))
        }
        unregisterButtonEvents() {
            this.node.off(a.MOUSE_ENTER), this.node.off(a.MOUSE_LEAVE)
        }
        onMouseEnter() {
            c.appConfig.themeUse != m.WPTO && c.appConfig.themeUse != m.WPTODark ? this.isSelected() : this.shadowNode.active = !this.isSelected()
        }
        onMouseLeave() {
            c.appConfig.themeUse != m.WPTO && c.appConfig.themeUse != m.WPTODark ? this.isSelected() || this.onHover(!1) : this.shadowNode.active = !1
        }
        isSelected() {
            const e = d.instance.getHallScene().hallPokerViewController.getMttGameOverviewNode();
            return null != e && e.active && null != this._tupleInfo && null != this._tupleInfo.Detail && this._tupleInfo.Detail.Id === u.LastSelectedTournamentId
        }
        deselectLastItem() {
            var t;
            const n = u.lastSelectedTournamentListItem;
            if (l(n, !0) && n.deselect(), l(this.node, !0) && n && (null == (t = n._tupleInfo) ? void 0 : t.id) != u.LastSelectedTournamentId) {
                const t = this.node.parent.children.map((t => null == t ? void 0 : t.getComponent(e))).find((e => {
                    var t;
                    return e && e._tupleInfo && (null == (t = e._tupleInfo.Detail) ? void 0 : t.Id) == u.LastSelectedTournamentId
                }));
                l(t, !0) && t.deselect()
            }
        }
        showRoomName(e, t) {
            window.mttCacheName || (window.mttCacheName = {}), this.roomName.string = window.mttCacheName[t] || e, this.roomName.scheduleOnce((() => {
                this.updatingRoomName = !0;
                let n = l(this.buyInTitle) ? this.roomName.node.parent.getComponent(r).width - this.buyInTitle.getComponent(r).width / 2 : this.roomName.node.parent.getComponent(r).width;
                n -= 5, h.instance.ellipseText(this.roomName, e, n), window.mttCacheName[t] = this.roomName.string, this.updatingRoomName = !1
            }), 0)
        }
    }).prototype, "shadowNode", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(g.prototype, "buyInTitle", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = g)) || T));
    o._RF.pop()
}