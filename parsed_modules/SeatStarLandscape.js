import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./CircleSprite.js";
import * as u from "./SeatStar.js";
import * as m from "./cv.js";
import * as g from "./RadialProgressBarWithEdges.js";
import * as S from "./SeatLandscape.js";
import * as C from "./SeatLandscape.js";

function main() {
    var _, y, P, f, v, x, w, T;
    o._RF.push({}, "d3597TZBaRH8rCx7LyF7Iv8", "SeatStarLandscape", void 0);
    const {
        ccclass: N,
        property: B
    } = a;
    e("default", (_ = B(s), y = B(n), P = B(s), N((x = t((v = class extends u {
        constructor(...e) {
            super(...e), i(this, "moneyTextContainer", x, this), i(this, "blurSprite", w, this), i(this, "flipableContainer", T, this), this.radialProgressBar = null
        }
        onLoad() {
            super.onLoad(), this.radialProgressBar = this.progressBar.getComponent(g)
        }
        setRemarkNodePosition() {}
        hideMoneyTextWhenShowCardType() {}
        setFlip(e) {
            let t = e ? -1 : 1;
            this.flipableContainer.setScale(new r(t, this.flipableContainer.scale.y)), this.money_text.node.setScale(new r(t, this.money_text.node.scale.y)), this.roleName_text.node.setScale(new r(t, this.roleName_text.node.scale.y)), this.roleName_text_forRemark.node.setScale(new r(t, this.roleName_text_forRemark.node.scale.y)), this.tips_text.node.setScale(new r(t, this.tips_text.node.scale.y));
            let i = this.m_seatHandsCardType == m.Enum.SeatHandsCardType.SHCT_PLO,
                o = i ? 75 : 0;
            this.winRateNode.position = l(e ? -18 + o : 200 + o, this.winRateNode.position.y, this.winRateNode.position.z), this.role_img.node.setScale(new r(t, this.role_img.node.scale.y)), this.nobody_text.node.setScale(new r(t, this.nobody_text.node.scale.y)), this.m_card_panel.position = l(e ? i ? S : C : 0, this.m_card_panel.position.y, this.m_card_panel.position.z)
        }
        setWinRateFlip() {}
        updateProgressBar(e) {
            let t = 1 - e;
            this.radialProgressBar && this.radialProgressBar.updateProgress(t)
        }
        setSeatSelfOnAction() {
            this.showCd(this.thinkCdTime), super.setSeatSelfOnAction()
        }
        showCd(e) {
            super.showCd(e), this.setIconBlur(!0)
        }
        stopCd() {
            super.stopCd(), this.setIconBlur(!1)
        }
        setIconBlur(e) {
            c.getHeadNode(this.roleHeadNode) && c.getHeadNode(this.roleHeadNode).getComponent(d).setSharedMaterial(e ? this.blurSprite : this.normalSprite, 0)
        }
        activeSelfChipsImg(e) {
            this.moneyTextContainer.active = e
        }
        setTipsPosition() {}
        updateProgressBarParticleEffect(e) {
            this.practicalImg.angle = 360 * e
        }
        updateView() {
            this.m_pkChipsMove.SetFadeInPos(this.node.getComponent(h).convertToWorldSpaceAR(new r(0, 0, 0))), this.m_pkChipsMove.node.setPosition(new r(this.chouma.node.getPosition().x - this.chouma.node.getComponent(h).contentSize.width / 2 + this.chouma_img.node.getPosition().x, this.chouma.node.getPosition().y)), this.m_pkChipsMoveContainer.setPosition(this.m_pkChipsMove.node.getPosition()), this.m_pkChipsMove.SetFadeInPos(this.node.getComponent(h).convertToWorldSpaceAR(new r(0, 0, 0)));
            let e = this.mainPool;
            for (let t = 0; t < this.m_pkCards.length; t++) {
                let i = this.m_pkCards_srcPos[t],
                    o = this.m_pkCards_srcAngle[t];
                const s = this.m_pkCards[t];
                let n = e.getComponent(h).convertToWorldSpaceAR(new r(0, 0, 0));
                s.setDealPos(l(n.x, n.y)), s.node.setPosition(i.x, i.y), s.rootNode.angle = o, s.setDealRotate(o)
            }
        }
        setMoneyTextFormat() {}
        setNoBodyTextActive(e) {
            super.setNoBodyTextActive(e), this.setSeatPanelActive(!e)
        }
        setSeatPanelActive(e) {
            this.flipableContainer.active = e
        }
        getShowNumberTargetPosition() {
            return p(0, 150)
        }
        getNodeByPath(e, t) {
            return t === this.node && (e = "container/" + e), super.getNodeByPath(e, t)
        }
        setRoleImageTrueWhenSitDown() {
            this.role_img.node.active = !1
        }
        setGrayNameAndChipsText(e) {}
        setTipsTextColor(e, t) {}
        setProgressBarActive(e) {
            this.progressBar.node.parent.active = e
        }
        isProgressBarActive() {
            return this.progressBar.node.parent.active
        }
        getRedImgBlinkNode() {
            let e = this.red_img.node.getComponentInChildren(d);
            return e ? e.node : this.red_img.node
        }
        showStatusText(e) {
            this.status_text.node.active = !0, this.status_text.string = e, this.SetName(this.PlayerInfo.name)
        }
        getRoleNameWidth(e) {
            return e ? 230 : 260
        }
    }).prototype, "moneyTextContainer", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(v.prototype, "blurSprite", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(v.prototype, "flipableContainer", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = v)) || f));
    o._RF.pop()
}