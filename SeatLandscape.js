import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
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
import * as m from "./CircleSprite.js";
import * as g from "./Enum.js";
import * as P from "./Seat.js";

function main() {
    var f, C, v, y, S, b, _, A, T, I, B, N, M, w;
    o._RF.push({}, "9c641mHCdhFS4XtvhxOjHx6", "SeatLandscape", void 0);
    t("CardFlipGapX", -290), t("PLOCardFlipGapX", -255), t("PLO5CardFlipGapX", -240), t("winRateYPos", 135), t("winRateYPosPlo5", 105);
    const {
        ccclass: x,
        property: R
    } = n;
    t("default", (f = R(s), C = R(a), v = R(a), y = R(r), S = R(a), b = R(a), x((T = e((A = class extends P {
        constructor(...t) {
            super(...t), i(this, "starProgressBar", T, this), i(this, "starPracticalImg", I, this), i(this, "moneyTextContainer", B, this), i(this, "blurSprite", N, this), i(this, "flipableContainer", M, this), i(this, "buttonNode", w, this), this.gameReplay = null, this.m_chipsDropOffset = h(-.2, -85), this.m_chipsMoveOffset = h(0, -77)
        }
        onLoad() {
            super.onLoad(), this.setProgressBarActive(!1), this.buttonNode.on(a.EventType.MOUSE_ENTER, this.buttonMouseEnter, this), this.buttonNode.on(a.EventType.MOUSE_LEAVE, this.buttonMouseLeave, this)
        }
        initChoumaPosition() {
            super.initChoumaPosition();
            const t = this.getChoumaAnchorPoint(this.SeatViewId, this.playerLength);
            if (t) {
                var e, i, o, s;
                null == (e = this.chouma.node.getComponent(c)) || e.setAnchorPoint(t), null == (i = this.chouma_text.node.parent.getComponent(c)) || i.setAnchorPoint(t), null == (o = this.chouma_text.node.getComponent(c)) || o.setAnchorPoint(t);
                const a = this.chouma.node.active;
                a || (this.chouma.node.active = !0), null == (s = this.chouma.node.getComponent(l)) || s.updateLayout(!0), this.chouma.node.active = a
            }
            u(this.m_pkChipsDrop) && this.m_pkChipsDrop.node.setPosition(this.getChipsDropPosition())
        }
        getChoumaAnchorPoint(t, e) {
            return this.gameMains ? this.gameMains.tablePositions.getChipsAnchorPoint(e, t) : this.gameReplay ? this.gameReplay.tablePositions.getChipsAnchorPoint(e, t) : void 0
        }
        getWorldPositionChipsAnimation() {
            return this.chouma_img.node.parent.convertToWorldSpaceAR(this.chouma_img.node.getPosition().add(this.m_chipsMoveOffset))
        }
        getLocalPositionChipsAnimation() {
            const t = this.chouma_img.node.parent.convertToWorldSpaceAR(this.chouma_img.node.getPosition());
            return this.chouma.node.parent.convertToNodeSpaceAR(t)
        }
        setRemarkNodePosition() {}
        hideMoneyTextWhenShowCardType() {}
        setCardFlip() {}
        setWinRateFlip() {}
        setSeatSelfOnAction() {
            this.showCd(this.thinkCdTime), super.setSeatSelfOnAction()
        }
        hideCountdownTextOnSelfAction() {}
        showCd(t) {
            super.showCd(t)
        }
        stopCd() {
            super.stopCd()
        }
        setIconBlur(t) {
            m.getHeadNode(this.roleHeadNode) && m.getHeadNode(this.roleHeadNode).getComponent(p).setSharedMaterial(t ? this.blurSprite : this.normalSprite, 0)
        }
        activeSelfChipsImg(t) {
            this.moneyTextContainer.active = t
        }
        setTipsPosition() {}
        updateView() {
            this.updateChipCard()
        }
        updateReplayChisPos() {}
        setMoneyTextFormat() {}
        setNoBodyTextActive(t) {
            super.setNoBodyTextActive(t), this.setSeatPanelActive(!t)
        }
        setSeatPanelActive(t) {
            this.flipableContainer.active = t
        }
        getShowNumberTargetPosition() {
            return new d(0, 150)
        }
        getNodeByPath(t, e) {
            return e === this.node && (t = "container/" + t), super.getNodeByPath(t, e)
        }
        setRoleImageTrueWhenSitDown() {
            this.role_img.node.active = !1
        }
        resetRoleNameColor(t) {}
        setGrayNameAndChipsText(t) {
            super.setGrayNameAndChipsText(t)
        }
        setTipsTextColor(t, e) {}
        setProgressBarActive(t) {
            u(this.starProgressBar) && (this.starProgressBar.node.active = t && this._isStreaming), this.progressBar.node.active = t && !this._isStreaming
        }
        isProgressBarActive() {
            return this.progressBar.node.active
        }
        getRedImgBlinkNode() {
            let t = this.red_img.node.getComponentInChildren(p);
            return t ? t.node : this.red_img.node
        }
        buttonMouseEnter() {
            this.PlayerInfo && this.PlayerInfo.last_action == g.Enum_Action_Fold && this.gameMains && this.PlayerInfo.playerid == this.gameMains.getUserIDData() && this.gameMains.m_pkSelfCard.forEach((t => {
                t.showAnimation()
            }))
        }
        buttonMouseLeave() {
            this.PlayerInfo && this.PlayerInfo.last_action == g.Enum_Action_Fold && this.gameMains && this.PlayerInfo.playerid == this.gameMains.getUserIDData() && this.gameMains.m_pkSelfCard.forEach(((t, e) => {
                t.hideAnimation(e)
            }))
        }
        showStatusText(t) {
            this.status_text.node.active = !0, this.status_text.string = t, this.SetName(this.PlayerInfo.name)
        }
        getRoleNameWidth(t) {
            return t ? 230 : 260
        }
        updateProgresBarAndParticalEffect() {
            1 == this.progressBar.node.active && this.setProgressBarActive(!0), 1 == this.practicalImg.active && this.activePractical(!0)
        }
        getProgressBar() {
            return u(this.starProgressBar) ? this.starProgressBar : this.progressBar
        }
        activePractical(t) {
            super.activePractical(t), u(this.starPracticalImg) && (this.starPracticalImg.active = t && this._isStreaming)
        }
        getPracticalImg() {
            return u(this.starPracticalImg) ? this.starPracticalImg : this.practicalImg
        }
    }).prototype, "starProgressBar", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(A.prototype, "starPracticalImg", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(A.prototype, "moneyTextContainer", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(A.prototype, "blurSprite", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(A.prototype, "flipableContainer", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(A.prototype, "buttonNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = A)) || _));
    o._RF.pop()
}