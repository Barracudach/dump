import * as d from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./cv.js";
import * as g from "./HoneyPot.js";
import * as C from "./Holdem_Player_ts.js";
import * as p from "./Pb.js";
import * as c from "./HoneyPotHelper.js";

function main() {
    var m;
    o._RF.push({}, "6b935+cReJOXZQu4fSo6RPs", "HoneyPotMtt", void 0);
    const {
        ccclass: u,
        property: f
    } = d, A = "honey_pot_prev_pos", _ = "honey_pot_prev_size", T = "honey_pot_prev_color", y = "honey_pot_prev_widget_alignment";
    t("default", u(m = class extends g {
        constructor(...t) {
            super(...t), this._holdemRoom = void 0, this.modifiedNodes = [], this.modifiedCardsByColor = []
        }
        get hpConfig() {
            return c.config
        }
        initMtt(t) {
            this._holdemRoom = t, h.MessageCenter.register("MTT_onDealerPosMsgNewGame", this.onStartHand.bind(this), this), h.MessageCenter.register("MTT_onRoomSnapshotMsg", this.onRoomSnapShot.bind(this), this), h.MessageCenter.register("MTT_onStartMyTurn", this.onStartMyTurn.bind(this), this), h.MessageCenter.register("MTT_onActionMyTurn", this.onActionMyTurn.bind(this), this), h.MessageCenter.register("MTT_onRoundResultMsg", this.onEndHand.bind(this), this)
        }
        onDestroy() {
            h.MessageCenter.unregister("MTT_onDealerPosMsgNewGame", this), h.MessageCenter.unregister("MTT_onRoomSnapshotMsg", this), h.MessageCenter.unregister("MTT_onStartMyTurn", this), h.MessageCenter.unregister("MTT_onActionMyTurn", this), h.MessageCenter.unregister("MTT_onRoundResultMsg", this)
        }
        onStartHand(t) {
            t && t.startTime && t.roomId && this._holdemRoom._roomId != t.roomId || (this.handId = t.startTime.toString(), this.startHandTracking())
        }
        onRoomSnapShot(t) {
            this._holdemRoom._roomId == t && this.clearTrackingCurrentTurn()
        }
        onEndHand(t) {
            this._holdemRoom._roomId == t && this.stopHandTracking()
        }
        onStartMyTurn(t) {
            this._holdemRoom._roomId == t && this.startTurnTracking()
        }
        onActionMyTurn(t) {
            this._holdemRoom._roomId == t.roomId && this.stopTurnTracking(this.getActionString(t.action))
        }
        getActionString(t) {
            switch (t) {
                case p.holdem.Action.FOLD:
                    return "Fold";
                case p.holdem.Action.CHECK:
                    return "Check";
                case p.holdem.Action.CALL:
                    return "Call";
                case p.holdem.Action.BET:
                case p.holdem.Action.RAISE:
                    return "Raise";
                case p.holdem.Action.ALL_IN:
                    return "AllIn";
                default:
                    return "Other"
            }
        }
        isSelfPlaying() {
            return !!this._holdemRoom.store.getSelfPlayer()
        }
        modifyUI() {
            this.restoreAllModifiedNodes(), this.modifiedPlayerCards(), this.modifiedBoardCards(), this.modifedBetButtons()
        }
        restoreUI() {
            this.restoreAllModifiedNodes()
        }
        modifiedPlayerCards() {
            const t = c.config,
                o = this._holdemRoom.playerNodes.map((t => t.getComponent(C)));
            null == o || o.forEach((o => o.cardsHandler._cards.forEach((o => {
                t.enableChangeHoleCardSize && this.applySizeChange(o.sprite.node, e(this.hpConfig.selfHoleCardGapWidth, this.hpConfig.selfHoleCardGapHeight)), t.enableChangeCardColor && this.applyColorChangeToCard(o)
            }))))
        }
        modifiedBoardCards() {
            var t;
            const o = c.config;
            null == (t = this._holdemRoom) || null == (t = t.publicCardsHandler) || null == (t = t._cards) || t.forEach((t => {
                o.enableChangePublicCardSize && this.applySizeChange(t.sprite.node, e(this.hpConfig.publicCardGapWidth, this.hpConfig.publicCardGapHeight)), o.enableChangePublicCardPos && this.applyPositionChange(t.sprite.node, new i(this.hpConfig.publicCardMoveX, this.hpConfig.publicCardMoveY)), o.enableChangeCardColor && this.applyColorChangeToCard(t)
            }))
        }
        modifedBetButtons() {
            var t;
            const o = c.config,
                e = null == (t = this._holdemRoom) ? void 0 : t.playerControl;
            if (e && (o.enableChangeActionButtonPos && this.applyPositionChange(this._holdemRoom.playerControlContainer, new i(this.hpConfig.actionButtonMoveX, this.hpConfig.actionButtonMoveY)), o.enableChangeActionButtonColor)) {
                this.applyColorChange(e.preCallButton), this.applyColorChange(e.preFoldButton);
                e.potButtons.forEach((t => {
                    t.getComponentsInChildren(n).forEach((t => {
                        this.applyColorChange(t.node)
                    }))
                }));
                {
                    const t = [e.foldButton, e.callButton, e.allInPotButton];
                    var s;
                    if (h.appConfig.isLandscapeLayout) t.push(null == (s = e.raiseOrBetButton) ? void 0 : s.node);
                    t.forEach((t => {
                        this.applyColorChange(t)
                    }))
                }
            }
        }
        applyColorChange(t) {
            t && (t[T] = t.getComponent(s).color, t.getComponent(s).color = h.tools.getAdjustedColor(t.getComponent(s).color, c.config.colorAdjustAmount), this.modifiedNodes.includes(t) || this.modifiedNodes.push(t))
        }
        applyColorChangeToCard(t) {
            r(t) && (t.setColorAdjustmentAmount(this, c.config.colorAdjustAmount), this.modifiedCardsByColor.includes(t) || this.modifiedCardsByColor.push(t))
        }
        applySizeChange(t, o) {
            t && (this.turnOffWidgetProperties(t), t[_] = t.getContentSize(), this.scheduleOnce((() => {
                t.getComponent(l).setContentSize(e(t.getContentSize().width + o.width, t.getContentSize().height + o.height))
            })), this.modifiedNodes.includes(t) || this.modifiedNodes.push(t))
        }
        applyPositionChange(t, o) {
            t && (this.turnOffWidgetProperties(t), t[A] = t.position, t.position = t.position.add(o), this.modifiedNodes.includes(t) || this.modifiedNodes.push(t))
        }
        turnOffWidgetProperties(t) {
            const o = t.getComponent(a);
            if (o && !t[y]) {
                const e = t.getContentSize();
                t[y] = {
                    left: o.left,
                    bottom: o.bottom,
                    right: o.right,
                    top: o.top,
                    horizontalCenter: o.horizontalCenter,
                    verticalCenter: o.verticalCenter,
                    isAlignTop: o.isAlignTop,
                    isAlignBottom: o.isAlignBottom,
                    isAlignLeft: o.isAlignLeft,
                    isAlignRight: o.isAlignRight,
                    isAlignVerticalCenter: o.isAlignVerticalCenter,
                    isAlignHorizontalCenter: o.isAlignHorizontalCenter
                }, o.isAlignTop = !1, o.isAlignBottom = !1, o.isAlignLeft = !1, o.isAlignRight = !1, o.isAlignVerticalCenter = !1, o.isAlignHorizontalCenter = !1, t.getComponent(l).setContentSize(e)
            }
        }
        restoreWidget(t) {
            const o = t[y];
            if (o) {
                const e = t.getComponent(a);
                e && (e.left = o.left, e.bottom = o.bottom, e.right = o.right, e.top = o.top, e.horizontalCenter = o.horizontalCenter, e.isAlignHorizontalCenter = o.isAlignHorizontalCenter, e.isAlignTop = o.isAlignTop, e.isAlignBottom = o.isAlignBottom, e.isAlignLeft = o.isAlignLeft, e.isAlignRight = o.isAlignRight, e.isAlignVerticalCenter = o.isAlignVerticalCenter, e.isAlignHorizontalCenter = o.isAlignHorizontalCenter), delete t[y]
            }
        }
        restoreAllModifiedNodes() {
            this.modifiedNodes.forEach((t => {
                t[T] && (t.getComponent(s).color = t[T]), t[A] && (t.position = t[A]), t[_] && t.getComponent(l).setContentSize(t[_]), this.restoreWidget(t)
            })), this.modifiedNodes = [], this.modifiedCardsByColor.forEach((t => t.clearColorAdjustment(this))), this.modifiedCardsByColor = []
        }
        getTableName() {
            return this._holdemRoom.store.tournamentId + "_" + this._holdemRoom.store.roomId
        }
        getGameType() {
            return "MTT"
        }
    }) || m);
    o._RF.pop()
}