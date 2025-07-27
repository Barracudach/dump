import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./FindItem.js";
import * as h from "./cv.js";
import * as m from "./ThemeSystem.js";
import * as p from "./GameDetailRightPartManager.js";
import * as g from "./CommonTools.js";
import * as d from "./ThemeSystemType.js";

function main() {
    var f, y, I, b, S, v, T, _, w, B, F, M, P, C, W, k;
    o._RF.push({}, "4c643IcXqpDfKKrJ44si0e7", "FindItemLandscape", void 0);
    const {
        ccclass: z,
        property: D
    } = c;
    var L = function(t) {
        return t[t.Join = 0] = "Join", t[t.Watch = 1] = "Watch", t
    }(L || {});
    t("default", (f = D(n), y = D(n), I = D(s), b = D(s), S = D(a), v = D(r), T = D(r), z((B = e((w = class extends u {
        constructor(...t) {
            super(...t), i(this, "actionIconSF", B, this), i(this, "actionIconSelectedSF", F, this), i(this, "playIcon", M, this), i(this, "watchIcon", P, this), i(this, "playButtonLabel", C, this), i(this, "rootButton", W, this), i(this, "shadowNode", k, this), this.actionIcon = null, this.showMVP = !1
        }
        onEnable() {
            this.registerButtonEvents()
        }
        onDisable() {
            this.unregisterButtonEvents()
        }
        adaptWidget() {
            h.resMgr.adaptWidget(this.node, !0, !1)
        }
        updateZoomItemPosition() {}
        updateMemberImagePosition(t) {}
        updateMinimumImagePos() {}
        onBtnItemClick(t) {
            let e = h.roomManager.checkGameIsZoom(this.msg.game_id),
                i = h.roomManager.checkGameIsPlo(this.msg.game_id),
                o = [];
            if (!e && !i)
                for (let t = 0; t < this.msg.player_count; t++) o.push({
                    seatId: t,
                    avatorUrl: ""
                });
            this.gameTypeTitle, this.msg.room_name, this.msg.player_count_max, this.sideBar.node.getComponent(m).colorSchemeOther, h.Number(h.StringTools.numToFloatString(this.msg.buyin_min)), h.Number(h.StringTools.numToFloatString(this.msg.buyin_max)), this.joinButton.active, this.msg.currency;
            p.selectedRoomInfo = this.msg
        }
        updateActionIcon(t = !1) {
            let e = h.roomManager.checkGameIsZoom(this.msg.game_id),
                i = h.roomManager.checkGameIsPlo(this.msg.game_id),
                o = L.Join;
            this.actionIcon = this.playIcon, 0 == e && 0 == i && this.msg.player_count >= this.msg.player_count_max && (o = L.Watch, this.actionIcon = this.watchIcon), this.actionIcon.spriteFrame = t ? this.actionIconSelectedSF[o] : this.actionIconSF[o], super.updateActionIcon(t)
        }
        registerButtonEvents() {
            this.rootButton.on("mouseenter", (() => {
                this.onMouseEnter()
            })), this.rootButton.on("mouseleave", (() => {
                this.onMouseLeave()
            }))
        }
        unregisterButtonEvents() {
            this.rootButton.off("mouseenter"), this.rootButton.off("mouseleave")
        }
        onMouseEnter() {
            h.appConfig.themeUse != d.WPTO && h.appConfig.themeUse != d.WPTODark ? this.isSelected() || (this.selectedHighlight.active = !0) : this.shadowNode.active = !this.isSelected()
        }
        onMouseLeave() {
            h.appConfig.themeUse != d.WPTO && h.appConfig.themeUse != d.WPTODark ? this.isSelected() || (this.selectedHighlight.active = !1) : this.shadowNode.active = !1
        }
        showGameType(t) {
            let e = this.game_type.getComponent(a);
            if (e) {
                let i = () => {
                    g.instance.ellipseText(e, t, this.game_type.parent.getComponent(l).width)
                };
                e.string = t, e.scheduleOnce(i, 0)
            }
        }
    }).prototype, "actionIconSF", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), F = e(w.prototype, "actionIconSelectedSF", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), M = e(w.prototype, "playIcon", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(w.prototype, "watchIcon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(w.prototype, "playButtonLabel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(w.prototype, "rootButton", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(w.prototype, "shadowNode", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = w)) || _));
    o._RF.pop()
}