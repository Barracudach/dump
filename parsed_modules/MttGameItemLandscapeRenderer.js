import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as p from "./MttGameItemRender.js";
import * as d from "./CommonTools.js";
import * as T from "./cv.js";
import * as u from "./Translator.js";
import * as v from "./TooltipsManager.js";
import * as y from "./TooltipsManager.js";
import * as S from "./TooltipsHandler.js";
import * as c from "./TooltipsHandler.js";
import * as _ from "./NodePage.js";
import * as f from "./MttItemRenderHelper.js";

function main() {
    var g, m, L, M, H, N, b, O, U, R, C, w, B, P, x;
    i._RF.push({}, "c5e62Nr08ZEhZmd5gTfjiZn", "MttGameItemLandscapeRenderer", void 0);
    const {
        ccclass: A,
        property: I
    } = h;
    e("MttGameItemLandscapeRenderer", (g = A("MttGameItemLandscapeRenderer"), m = I(s), L = I(n), M = I(n), H = I(n), N = I(n), b = I(n), g((R = t((U = class extends p {
        constructor(...e) {
            super(...e), o(this, "lbRoomStatus", R, this), o(this, "lbRoomStatusBoxNode", C, this), o(this, "textLimitForEllipse", w, this), o(this, "registerPlayersNode", B, this), o(this, "gameSpeedNode", P, this), o(this, "highlight", x, this), this._tooltipShowNode = null, this._tooltipContent = "", this._tooltipDelay = .3
        }
        onEnable() {
            this.registerHoverEvents()
        }
        onDisable() {
            this.unregisterHoverEvents()
        }
        registerHoverEvents() {
            this.lbRoomStatusBoxNode.on(n.EventType.MOUSE_ENTER, this.onHoverStatusText, this), this.lbRoomStatusBoxNode.on(n.EventType.MOUSE_LEAVE, this.onMouseLeaveStatusText, this), this.lbRoomStatusBoxNode.on(n.EventType.MOUSE_WHEEL, this.onMouseLeaveStatusText, this), this.playerCount.node.on(n.EventType.MOUSE_ENTER, this.onHoverPlayerCount, this), this.playerCount.node.on(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.playerCount.node.on(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.ticketNode.on(n.EventType.MOUSE_ENTER, this.onHoverTicket, this), this.ticketNode.on(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.ticketNode.on(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.currencyBuyIn.node.on(n.EventType.MOUSE_ENTER, this.onHoverFee, this), this.currencyBuyIn.node.on(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.currencyBuyIn.node.on(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.registerPlayersNode.on(n.EventType.MOUSE_ENTER, this.onHoverRegisteredPlayers, this), this.registerPlayersNode.on(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.registerPlayersNode.on(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.gameModeBg.node.on(n.EventType.MOUSE_ENTER, this.onHoverGameMode, this), this.gameModeBg.node.on(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.gameModeBg.node.on(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.gameSpeedNode.on(n.EventType.MOUSE_ENTER, this.onHoverGameSpeed, this), this.gameSpeedNode.on(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.gameSpeedNode.on(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.bountyNode.on(n.EventType.MOUSE_ENTER, this.onHoverBounty, this), this.bountyNode.on(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.bountyNode.on(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this)
        }
        unregisterHoverEvents() {
            this.lbRoomStatusBoxNode.off(n.EventType.MOUSE_ENTER, this.onHoverStatusText, this), this.lbRoomStatusBoxNode.off(n.EventType.MOUSE_LEAVE, this.onMouseLeaveStatusText, this), this.lbRoomStatusBoxNode.off(n.EventType.MOUSE_WHEEL, this.onMouseLeaveStatusText, this), this.playerCount.node.off(n.EventType.MOUSE_ENTER, this.onHoverPlayerCount, this), this.playerCount.node.off(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.playerCount.node.off(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.ticketNode.off(n.EventType.MOUSE_ENTER, this.onHoverTicket, this), this.ticketNode.off(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.ticketNode.off(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.currencyBuyIn.node.off(n.EventType.MOUSE_ENTER, this.onHoverFee, this), this.currencyBuyIn.node.off(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.currencyBuyIn.node.off(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.registerPlayersNode.off(n.EventType.MOUSE_ENTER, this.onHoverRegisteredPlayers, this), this.registerPlayersNode.off(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.registerPlayersNode.off(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.gameModeBg.node.off(n.EventType.MOUSE_ENTER, this.onHoverGameMode, this), this.gameModeBg.node.off(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.gameModeBg.node.off(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.gameSpeedNode.off(n.EventType.MOUSE_ENTER, this.onHoverGameSpeed, this), this.gameSpeedNode.off(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.gameSpeedNode.off(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this), this.bountyNode.off(n.EventType.MOUSE_ENTER, this.onHoverBounty, this), this.bountyNode.off(n.EventType.MOUSE_LEAVE, this.onHoverLeave, this), this.bountyNode.off(n.EventType.MOUSE_WHEEL, this.onHoverLeave, this)
        }
        onHoverStatusText(e) {
            if (this.lbRoomStatus.string && this.lbRoomStatus.string.endsWith("...") && this.roomStatusI18nKey) {
                const e = T.StringTools.convertText(u(this.roomStatusI18nKey), 4);
                this.showToolTip(this.lbRoomStatus.node, e)
            }
        }
        onMouseLeaveStatusText() {
            this.hideToolTip()
        }
        scheduleShowToolTip() {
            r(this._tooltipShowNode) && "" !== this._tooltipContent && this.showToolTip(this._tooltipShowNode, this._tooltipContent, S.Default)
        }
        onHoverLeave() {
            this._tooltipContent = "", this.unschedule(this.scheduleShowToolTip), this.hideToolTip()
        }
        onHoverPlayerCount(e) {
            this._tooltipContent = T.StringTools.formatC(u("Lobby_MTT_Tooltip_PlayerCount"), this.playerCount.playerCountLabel.string), this._tooltipShowNode = this.playerCount.node, this.scheduleOnce(this.scheduleShowToolTip, this._tooltipDelay)
        }
        onHoverTicket(e) {
            this._tooltipContent = T.StringTools.formatC(u("Lobby_MTT_Tooltip_Ticket")), this._tooltipShowNode = this.ticketNode, this.scheduleOnce(this.scheduleShowToolTip, this._tooltipDelay)
        }
        onHoverFee(e) {
            this._tooltipContent = T.StringTools.formatC(u("Lobby_MTT_Tooltip_Fee")), this._tooltipShowNode = this.currencyBuyIn.node, this.scheduleOnce(this.scheduleShowToolTip, this._tooltipDelay)
        }
        onHoverRegisteredPlayers(e) {
            this._tooltipContent = T.StringTools.formatC(u("Lobby_MTT_Tooltip_RegisteredPlayers")), this._tooltipShowNode = this.registerPlayersNode, this.scheduleOnce(this.scheduleShowToolTip, this._tooltipDelay)
        }
        onHoverGameMode(e) {
            const t = f.getGameModeFullName(this.gameMode);
            this._tooltipContent = T.StringTools.formatC(u("Lobby_MTT_Tooltip_GameMode"), t), this._tooltipShowNode = this.gameModeBg.node, this.scheduleOnce(this.scheduleShowToolTip, this._tooltipDelay)
        }
        onHoverGameSpeed(e) {
            const t = f.getGameSpeedString(this.gameSpeed);
            this._tooltipContent = T.StringTools.formatC(u("Lobby_MTT_Tooltip_GameSpeed"), t), this._tooltipShowNode = this.gameSpeedNode, this.scheduleOnce(this.scheduleShowToolTip, this._tooltipDelay)
        }
        onHoverBounty(e) {
            this._tooltipContent = T.StringTools.formatC(u("Lobby_MTT_Tooltip_Bounty")), this._tooltipShowNode = this.bountyNode, this.scheduleOnce(this.scheduleShowToolTip, this._tooltipDelay)
        }
        showToolTip(e, t, o = S.Default, i) {
            this.hideToolTip();
            const s = e.getComponent(l).contentSize,
                n = e.getComponent(l).anchorPoint,
                h = new a(s.width * (.5 - n.x), s.height * (0 - n.y) - 20),
                r = e.convertToWorldSpaceAR(h),
                E = (new v).setPosition(r).setGap(i ?? new a(0, 0, 0)).setTitle("").setContent(t).setType(c.PointerUpMiddle).setMaxTooltipWidth(810).setSkinType(o).setTargetNode(e).setPaddingX(30).setAnchorPosLeft(.2).setAnchorPosRight(.8);
            y.getInstance().showToolTips(E)
        }
        hideToolTip() {
            y.hideAllTooltips()
        }
        onClicked() {
            super.onClicked();
            let e = this.node.getComponent(E);
            e && _.coolDownButton(e, this)
        }
        setRoomStatusLabel(e) {
            this.roomStatusI18nKey = e;
            const t = T.StringTools.convertText(u(e), 4),
                o = d.instance.ellipseText(this.lbRoomStatus, t, this.textLimitForEllipse.getComponent(l).width, this.textLimitForEllipse.getComponent(l).width);
            this.lbRoomStatus.string = o
        }
        updateSelected(e) {
            this.highlight && (this.highlight.active = e.isSelected)
        }
        render(e) {
            super.render(e), this.updateSelected(e)
        }
    }).prototype, "lbRoomStatus", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(U.prototype, "lbRoomStatusBoxNode", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(U.prototype, "textLimitForEllipse", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(U.prototype, "registerPlayersNode", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(U.prototype, "gameSpeedNode", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(U.prototype, "highlight", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = U)) || O));
    i._RF.pop()
}