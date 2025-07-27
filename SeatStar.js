import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as S from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as l from "./cc.js";
import * as v from "./cc.js";
import * as _ from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as f from "./CircleSprite.js";
import * as P from "./cv.js";
import * as w from "./Seat.js";

function main() {
    var E, A, I, T, C, b, k, V, N, R, x, B;
    s._RF.push({}, "e9659kfzFpHUpHG0jrV6e61", "SeatStar", void 0);
    const {
        ccclass: D,
        property: H
    } = n;
    t("SeatStar", (E = H(a), A = H(a), I = H(a), T = H(a), C = H(o), D((V = e((k = class extends w {
        constructor(...t) {
            super(...t), i(this, "headEffect", V, this), i(this, "starVideo", N, this), i(this, "videoNode", R, this), i(this, "giftIcon", x, this), i(this, "videoRedpacketActionPrefab", B, this), this._videoredpacketActionNode = null, this.videoNodeScale = 1, this.videoStatusNode = null, this.videoProgress = null, this.videoProgressBar = null, this.videoProgressText = null, this.videoRedImg = null, this.videoAllinEffect = null, this.userWinEffect = null, this.starWinEffect = null, this.seatButton = null, this.viewStyle = 1, this.seatCount = 0, this.voicePos = null, this.voiceScal = null, this.selfChipsPos = null, this.choumaPos = null, this.tipsPos = null, this.gpsPos = null, this.m_headBlockPos = null, this.starVideoPos = null, this.statusTextSize = 0, this.leftX = 0, this.rightX = 0, this.bottomY = 0, this.topY = 0, this.leftbottomPos = r.ZERO, this.leftTopPos = r.ZERO, this.rightbottomPos = r.ZERO, this.rightTopPos = r.ZERO, this.topCenterPos = r.ZERO, this.bottomCenterPos = r.ZERO, this.number_showY = 0
        }
        onLoad() {
            this.giftIcon.active = !1, this._videoredpacketActionNode = h(this.videoRedpacketActionPrefab), this.node.addChild(this._videoredpacketActionNode), this._videoredpacketActionNode.active = !1, this.viewStyle = 1, this.videoStatusNode = d("video_status_node", this.starVideo), this.videoProgress = d("video_progress_bar", this.starVideo), this.videoProgressBar = this.videoProgress.getComponent(l), this.videoProgressText = d("text", this.videoProgress).getComponent(c), this.videoRedImg = d("video_red_img", this.starVideo), this.videoAllinEffect = d("star_allin_anim", this.starVideo), this.userWinEffect = d("user_win_anim", this.node), this.starWinEffect = d("star_win_anim", this.node), this.seatButton = d("button", this.node), this.statusTextSize = this.status_text.fontSize, this.selfChipsPos = this.selfChipsText_img.getPosition(), this.choumaPos = this.chouma.node.getPosition(), this.tipsPos = this.tips.node.getPosition(), this.gpsPos = this.gps_img.node.getPosition(), this.m_headBlockPos = this.headBlock.getPosition(), this.starVideoPos = this.starVideo.getPosition(), this.voicePos = this.voice_img.node.getPosition(), this.voiceScal = this.voice_img.node.scale, P.MessageCenter.register("closeStarSeat", this.onCloseStarSeat.bind(this), this.node), P.MessageCenter.register("freeInviterSeat", this.onFreeInviterSeat.bind(this), this.node), super.onLoad()
        }
        onDestroy() {
            super.onDestroy(), P.MessageCenter.unregister("closeStarSeat", this.node), P.MessageCenter.unregister("freeInviterSeat", this.node)
        }
        updateView() {
            this.updateChipCard(), this.setFlip(this.SeatViewId > 0 && this.SeatViewId < this.playerLength / 2)
        }
        setSeatEmpty() {
            this.seat_status = P.Enum.SeatStatus.SeatStatus_empty;
            let t = this.isStarSeat();
            this.getNodeByPath("star_waitting", this.role_img.node).active = t;
            let e = this.isInviterSeat();
            d("inviter_waitting", this.role_img.node).active = e, this.headBlock.active = !1, this.hideWin(), this.cleanHead(), super.setSeatEmpty(), this.setNoBodyTextActive(!(t || e)), this.doGray(!0)
        }
        showStatusText(t) {
            super.showStatusText(t), this.videoStatusNode.active = !0
        }
        hideStatusText() {
            this.videoStatusNode.active = !1, super.hideStatusText()
        }
        doGray(t) {
            this.seat_status == P.Enum.SeatStatus.SeatStatus_empty && (t = !0), t || (this.videoProgress.active = !1), super.doGray(t), this.seat_status == P.Enum.SeatStatus.SeatStatus_empty && (this.headGrag_img.node.active = !1)
        }
        thinkCdUpdate(t) {
            super.thinkCdUpdate(t), this.time <= 0 && (this.videoProgress.active = !1)
        }
        doBlink(t) {
            2 == this.viewStyle && (this.videoRedImg.active = !0), super.doBlink(t)
        }
        setSitDownView() {
            this.getNodeByPath("star_waitting", this.role_img.node).active = !1, d("inviter_waitting", this.role_img.node).active = !1, this.headBlock.active = !1;
            for (let t = 0; t < this.PlayerInfo.NotDisturbUids.length; t++)
                if (P.dataHandler.getUserData().u32Uid == this.PlayerInfo.NotDisturbUids[t]) {
                    this.headBlock.active = !0;
                    break
                } this.videoProgress.active = !1, this.videoRedImg.active = !1, super.setSitDownView()
        }
        setSeatLeaveAMonent() {
            this.videoProgress.active = !1, super.setSeatLeaveAMonent()
        }
        setSeatSelfOnAction() {
            this.videoProgress.active = !1, super.setSeatSelfOnAction()
        }
        showCd(t) {
            super.showCd(t), this.videoProgress.active = !0, this.videoProgressText.string = this.MaxTime.toString() + "s"
        }
        stopCDtime() {
            this.videoProgress.active = !1, this.videoRedImg.active = !1, super.stopCDtime()
        }
        stopBlink() {
            this.videoRedImg.active = !1, super.stopBlink()
        }
        onlyShowChouma() {
            this.videoProgress.active = !1, super.onlyShowChouma()
        }
        cleanHead() {
            f.cleanHeadNode(this.roleHeadNode), f.cleanVideoNode(this.roleHeadNode);
            let t = d("sprite_node", this.videoNode);
            t && (u.stopAllByTarget(t), t.removeFromParent(), t.destroy())
        }
        resetHead() {
            this.cleanHead(), this.PlayerInfo && (this.signHeadInfo(), f.setCircleSprite(this.roleHeadNode, this.PlayerInfo.headurl, this.PlayerInfo.plat, !1));
            let t = !1;
            switch (this.seat_status) {
                case P.Enum.SeatStatus.SeatStatus_empty:
                    t = !0;
                    break;
                case P.Enum.SeatStatus.SeatStatus_waiting:
                    this.PlayerInfo && (t = !this.PlayerInfo.in_game);
                    break;
                case P.Enum.SeatStatus.SeatStatus_leave_a_monment:
                    t = !0;
                    break;
                case P.Enum.SeatStatus.SeatStatus_inGame_OnAction:
                    break;
                case P.Enum.SeatStatus.SeatStatus_inGame_actionType:
                    this.actionType == P.Enum.ActionType.Enum_Action_Fold && (t = !0)
            }
            this.doGray(t)
        }
        setHeadTextureWithData(t, e, i, s, o = 0, n = 1, r = 1) {
            if (2 == this.viewStyle) {
                let h = d("sprite_node", this.videoNode);
                if (!h) {
                    h = new a;
                    let t = Math.abs(o),
                        e = 90 == t || 270 == t ? -1 : 1,
                        d = 1 == e ? i : s,
                        l = 1 == e ? s : i,
                        c = this.videoNode.getComponent(S),
                        u = c.width / d,
                        _ = c.height / l,
                        y = u >= _ ? u : _;
                    this.videoNodeScale = y, h.setScale(m(n * y, r * y, 0)), h.getComponent(S).setContentSize(i, s);
                    let f = h.addComponent(p);
                    f.spriteFrame = new v, f.spriteFrame.texture = new g, f.type = p.Type.SIMPLE, f.sizeMode = p.SizeMode.CUSTOM, this.videoNode.addChild(h), h.name = "sprite_node"
                }
                h.setScale(m(n * this.videoNodeScale, r * this.videoNodeScale, 0)), h.angle = -o;
                let l = cc_mtt.vv.AssetsManager.texture_InitWithData(t, e, i, s, !1);
                h.getComponent(p).spriteFrame.texture = l
            } else f.setHeadTextureWithData(this.roleHeadNode, t, e, i, s, o, n, r)
        }
        isStarSeat() {
            if (this.gameDataInstance.tRoomData.pkRoomParam.reserveSeat > 0) {
                let t = this.gameDataInstance.tRoomData.starSeats;
                for (let e = 0; e < t.length; e++)
                    if (t[e] == this.getSeverId()) return !0
            }
            return !1
        }
        isInviterSeat() {
            if (this.gameDataInstance.tRoomData.pkRoomParam.reserveSeat > 0) {
                let t = this.gameDataInstance.tRoomData.inviterSeats;
                for (let e = 0; e < t.length; e++)
                    if (t[e] == this.getSeverId()) return !0
            }
            return !1
        }
        isStar() {
            return !(!this.PlayerInfo || 1 != this.PlayerInfo.identity)
        }
        isInviter() {
            if (this.PlayerInfo && 0 == this.PlayerInfo.identity) {
                let t = this.gameDataInstance.tRoomData.pkRoomParam.starInviter;
                for (let e = 0; e < t.length; ++e)
                    if (t[e] == this.PlayerInfo.playerid) return !0
            }
            return !1
        }
        setViewStyle(t) {
            if (this.viewStyle == t) return;
            let e = !0;
            switch (t) {
                case 1:
                    this.setViewStyle1();
                    break;
                case 2:
                    this.setViewStyle2();
                    break;
                default:
                    e = !1
            }
            e && (this.updateSeatStatusOnViewStyleChanged(), P.MessageCenter.send("seatViewStyleChanged", this.viewStyle))
        }
        getViewStyle() {
            return this.viewStyle
        }
        setViewStyle1() {
            this.viewStyle = 1, this.starVideo.active = !1, this.head_panel.active = !0, this.cleanHead(), !this.PlayerInfo || 1 == this.PlayerInfo.identity && 1 == this.PlayerInfo.liveStatus || (this.signHeadInfo(), f.setCircleSprite(this.roleHeadNode, this.PlayerInfo.headurl, this.PlayerInfo.plat, !1)), this.setSeatViewId(this.SeatViewId, this.seatCount, this.seatType)
        }
        setViewStyle2() {
            this.viewStyle = 2, this.starVideo.active = !0, this.head_panel.active = !1, this.cleanHead(), this.setSeatViewId(this.SeatViewId, this.seatCount, this.seatType)
        }
        updateSeatStatusOnViewStyleChanged() {
            switch (this.hideStatusText(), this.seat_status) {
                case P.Enum.SeatStatus.SeatStatus_empty:
                    this.doGray(!0);
                    break;
                case P.Enum.SeatStatus.SeatStatus_waiting:
                    this.PlayerInfo && (this.PlayerInfo.in_game, this.doGray(!this.PlayerInfo.in_game));
                    break;
                case P.Enum.SeatStatus.SeatStatus_leave_a_monment:
                    this.doGray(!0), this.showStatusText(P.config.getStringData("UISeatLeave"));
                    break;
                case P.Enum.SeatStatus.SeatStatus_inGame_OnAction:
                    break;
                case P.Enum.SeatStatus.SeatStatus_inGame_actionType:
                    this.updateByActionTypeOnViewStyleChanged()
            }
        }
        updateByActionTypeOnViewStyleChanged() {
            switch (this.hideStatusText(), this.actionType) {
                case P.Enum.ActionType.Enum_Action_Null:
                    this.doGray(!1);
                    break;
                case P.Enum.ActionType.Enum_Action_Check:
                    break;
                case P.Enum.ActionType.Enum_Action_Fold:
                    this.doGray(!0);
                    break;
                case P.Enum.ActionType.Enum_Action_Call:
                case P.Enum.ActionType.Enum_Action_Bet:
                case P.Enum.ActionType.Enum_Action_Raise:
                case P.Enum.ActionType.Enum_Action_Allin:
                case P.Enum.ActionType.Enum_Action_CallMuck:
                case P.Enum.ActionType.Enum_Action_AddActionTime:
                case P.Enum.ActionType.Enum_Action_SendCard_Common:
                case P.Enum.ActionType.Enum_Action_Send_HoleCards:
                case P.Enum.ActionType.Enum_Action_Straddle:
                case P.Enum.ActionType.Enum_Action_Post:
            }
            this.hideWin()
        }
        playSitDownAction() {
            let t = this.headEffect.getComponent(_);
            t.play("CelebritySeated"), t.on(_.EventType.FINISHED, ((e, i) => {
                t.off(_.EventType.FINISHED), this.headEffect.active = !1
            }), this);
            d("New Particle_Atom", this.headEffect).getComponent(y), d("New Particle_Stars", this.headEffect).getComponent(y);
            this.headEffect.active = !0
        }
        setVideoBlockPositionParam() {
            let t = this.starVideo.getComponent(S);
            this.leftX = this.starVideo.position.x - t.anchorX * t.width * this.starVideo.scale.x, this.rightX = this.leftX + t.width * this.starVideo.scale.x, this.bottomY = this.starVideo.position.y - t.anchorY * t.height * this.starVideo.scale.y, this.topY = this.bottomY + t.height + this.starVideo.scale.y;
            let e = this.starVideo.parent.getComponent(S);
            e.convertToWorldSpaceAR(m(this.leftX, this.bottomY, 0), this.leftbottomPos), e.convertToWorldSpaceAR(m(this.leftX, this.topY, 0), this.leftTopPos), e.convertToWorldSpaceAR(m(this.rightX, this.bottomY, 0), this.rightbottomPos), e.convertToWorldSpaceAR(m(this.rightX, this.topY, 0), this.rightTopPos), e.convertToWorldSpaceAR(m(0, this.topY, 0), this.topCenterPos), e.convertToWorldSpaceAR(m(0, this.bottomY, 0), this.bottomCenterPos)
        }
        onCloseStarSeat(t) {
            t && (this.getNodeByPath("star_waitting", this.role_img.node).active = !1, d("inviter_waitting", this.role_img.node).active = !1, this.seat_status == P.Enum.SeatStatus.SeatStatus_empty && this.setNoBodyTextActive(!0), this.resetHead())
        }
        onFreeInviterSeat(t) {
            if (t && t.seatId.length > 0) {
                let e = t.seatId,
                    i = t.attr,
                    s = !1;
                for (let t = e.length - 1; t >= 0; --t)
                    if (this.getSeverId() == e[t]) {
                        s = !0;
                        break
                    } if (!s || 0 != i && 1 != i && 2 != i) return;
                d("star_waitting", this.role_img.node).active = !1, d("inviter_waitting", this.role_img.node).active = !1, 0 == i ? this.seat_status == P.Enum.SeatStatus.SeatStatus_empty && this.setNoBodyTextActive(!0) : 1 == i ? this.seat_status == P.Enum.SeatStatus.SeatStatus_empty && (d("inviter_waitting", this.role_img.node).active = !0, this.setNoBodyTextActive(!1)) : 2 == i && this.seat_status == P.Enum.SeatStatus.SeatStatus_empty && (d("star_waitting", this.role_img.node).active = !0, this.setNoBodyTextActive(!1))
            }
        }
        showRedAction(t, e, i) {
            this.starVideo.active ? super.showRedActionByNode(this._videoredpacketActionNode, t, e, i, !0) : super.showRedAction(t, e, i)
        }
        onClickGifIcon(t) {
            P.MessageCenter.send("click_seat_gift_icon")
        }
    }).prototype, "headEffect", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(k.prototype, "starVideo", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(k.prototype, "videoNode", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(k.prototype, "giftIcon", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(k.prototype, "videoRedpacketActionPrefab", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = k)) || b));
    s._RF.pop()
}