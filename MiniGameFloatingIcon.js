import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as d from "./GameSceneLandscape.js";
import * as C from "./Holdem_Scene_Landscape.js";
import * as g from "./CommonTools.js";
import * as f from "./AnalyticsHandler.js";
import * as T from "./CowboyPromotionManager.js";
import * as E from "./ResourceManager.js";
import * as G from "./cv.js";

function main() {
    var v, y, b, M, _, I;
    n._RF.push({}, "78105oQ/4dBUq60xQ9u3xsp", "MiniGameFloatingIcon", void 0);
    const {
        ccclass: S,
        property: A
    } = s;
    t("default", (v = A({
        type: i(G.Enum.GameId)
    }), y = A(a), S((_ = e((M = class extends l {
        constructor(...t) {
            super(...t), o(this, "gameId", _, this), o(this, "tooltipCloseCashGame", I, this), this.parentTooltipNode = null, this._button = null
        }
        onLoad() {
            this._button = this.getComponentInChildren(r)
        }
        onEnable() {
            this._button && (this._button.node.on(a.EventType.MOUSE_ENTER, this.onMouseOver, this), this._button.node.on(a.EventType.MOUSE_LEAVE, this.onMouseLeave, this))
        }
        onDisable() {
            this._button && (this._button.node.off(a.EventType.MOUSE_ENTER, this.onMouseOver, this), this._button.node.off(a.EventType.MOUSE_LEAVE, this.onMouseLeave, this))
        }
        onIconClicked() {
            G.AudioMgr.playButtonSound("button_click.mp3"), G.getTotalOpeningGames() < G.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent && (f.getInstance().sendEvent(G.Enum.CurrentScreen.room, G.Enum.segmentEvent.CasinoGameStarted, G.Enum.Functionality.casino, {
                game: G.Enum.GameNameMap[this.gameId],
                item: "notification",
                context: "tournament"
            }), T.getInstance().data.instanceData.showCowboyPromoteIconFromMTT = !0, T.getInstance().data.instanceData.launchFromScreen = G.Enum.CurrentScreen.room, G.roomManager.openMiniGame(this.gameId))
        }
        showTooltip() {
            if (!this.parentTooltipNode) {
                var t, e;
                if (this.parentTooltipNode = null == (t = g.instance.getParentScene(p, this.node)) || null == (t = t.getComponentInChildren(C)) ? void 0 : t.holdem_view_node, !this.parentTooltipNode) this.parentTooltipNode = null == (e = g.instance.getParentScene(p, this.node)) || null == (e = e.getComponentInChildren(d)) ? void 0 : e.node;
                if (this.parentTooltipNode) {
                    this.tooltipCloseCashGame.active = !0, E.updateWidget(this.tooltipCloseCashGame, !0, c.AlignMode.ALWAYS);
                    let t = this.tooltipCloseCashGame.parent.convertToWorldSpaceAR(this.tooltipCloseCashGame.position),
                        e = this.parentTooltipNode.convertToNodeSpaceAR(t);
                    this.tooltipCloseCashGame.getComponent(c).enabled = !1, this.tooltipCloseCashGame.position = e
                }
                this.tooltipCloseCashGame.parent = this.parentTooltipNode || this.tooltipCloseCashGame.parent
            }
            u.stopAllByTarget(this.tooltipCloseCashGame), this.tooltipCloseCashGame.active = !0, h(this.tooltipCloseCashGame.getComponent(m)).set({
                opacity: 0
            }).to(.3, {
                opacity: 255
            }).start()
        }
        onMouseOver() {
            G.getTotalOpeningGames() >= G.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent && h(this.node).delay(.3).call(this.showTooltip.bind(this)).start()
        }
        onMouseLeave() {
            u.stopAllByTarget(this.node), u.stopAllByTarget(this.tooltipCloseCashGame), this.tooltipCloseCashGame.active = !1
        }
    }).prototype, "gameId", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return G.Enum.GameId.CowBoy
        }
    }), I = e(M.prototype, "tooltipCloseCashGame", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = M)) || b));
    n._RF.pop()
}