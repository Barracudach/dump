import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./cc.js";
import * as n from "./cv.js";
import * as s from "./CircleSprite.js";
import * as o from "./JackfruitData.js";
import * as l from "./JackfruitManager.js";
import * as r from "./GameSceneInstance.js";

function main() {
    var c, h, u, _, d, g, p, m, b, S, f, y, v, w, k, T, N, D, I, P, z, B, C, L, A, W, E, F, R, U, G, x, Y, V, J, H, M, O, j, q;
    a._RF.push({}, "6b8a82FcgNOkryuJm1VifQZ", "JackfruitSeat", void 0);
    const {
        ccclass: Q,
        property: Z
    } = cc._decorator;
    e("default", (c = Z(cc.Node), h = Z(cc.Node), u = Z(cc.Node), _ = Z(cc.Node), d = Z(cc.Node), g = Z(cc.Label), p = Z(cc.Node), m = Z(cc.Label), b = Z(cc.Node), S = Z(cc.Node), f = Z(cc.Label), y = Z(cc.Node), v = Z(cc.Node), w = Z(cc.Label), k = Z(cc.Prefab), T = Z(cc.Prefab), N = Z(cc.Prefab), D = Z(cc.Prefab), I = Z(cc.Sprite), Q((z = class extends cc.Component {
        constructor(...e) {
            super(...e), t(this, "headBlock", B, this), t(this, "head_img", C, this), t(this, "head_frame_img", L, this), t(this, "head_panel", A, this), t(this, "head_node", W, this), t(this, "name_text", E, this), t(this, "gold_img", F, this), t(this, "gold_label", R, this), t(this, "seat_btn", U, this), t(this, "empty_label", G, this), t(this, "gold_change_label", x, this), t(this, "lose_img", Y, this), t(this, "ready_img", V, this), t(this, "type_label", J, this), t(this, "Node_YouWin_Small", H, this), t(this, "Node_YouLoose_Small", M, this), t(this, "Node_Tie_Small", O, this), t(this, "total_score_action", j, this), t(this, "voice_img", q, this), this.voiceImgList = [], this.speakTime = 0, this.spine = null, this._seat_status = o.SeatStatus_empty, this._playerInfo = void 0, this._seatID = 0, this._seatViewID = 0, this._specialEffects_panel = null, this._showType = 0, this._itemNum = 0, this._newStake = 0
        }
        onLoad() {
            for (let e = 0; e < 3; e++) {
                let t = cc.find("voice_img_icon/voice_" + e, this.voice_img.node);
                this.voiceImgList.push(t)
            }
            this.empty_label.getComponent(cc.Label).string = n.config.getStringData("jackfruit_seat_empty_label"), this.setSeatEmpty()
        }
        _getSpecialEffectsPos(e) {
            return this._specialEffects_panel.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(e))
        }
        _runWinOrLoseAction(e, t) {
            this._specialEffects_panel.addChild(e), e.active = !0;
            let i = this._getSpecialEffectsPos(cc.v3(0, 0));
            e.setPosition(i), e.getComponent(cc.Animation).play(t)
        }
        _setStake(e) {
            if (this._seat_status == o.SeatStatus_empty) return this._stopTimeUpdate(), void(this.gold_label.string = "");
            this.gold_label.string = e.toString(), this.gold_label.string.length >= 8 ? this.gold_label.fontSize = 36 : this.gold_label.fontSize = 38
        }
        _runStakeAction(e, t) {
            if (this._setStake(e), t) {
                let e = this.node.getChildByName("total_score_action");
                e || (e = cc.instantiate(this.total_score_action), e.name = "total_score_action", this.node.addChild(e)), e.active = !0, e.stopAllActions();
                let t = this.gold_label.node.getPosition();
                e.setPosition(cc.v2(t.x + this.gold_label.node.getContentSize().width / 2, t.y)), cc.find("Particle_BigTotal_Burst", e).getComponent(cc.ParticleSystem).resetSystem(), cc.find("Particle_BigTotal_Burst/Particle_BigTotal_Burst_1", e).getComponent(cc.ParticleSystem).resetSystem(), e.runAction(cc.sequence(cc.delayTime(1), cc.callFunc((e => {
                    e.active = !1
                }), this)))
            }
        }
        _getDecimalPlaces(e, t) {
            return e != n.StringTools.handleNumberByFloor(e, 1) || t != n.StringTools.handleNumberByFloor(t, 1) ? 2 : e != n.StringTools.handleNumberByFloor(e, 0) || t != n.StringTools.handleNumberByFloor(t, 0) ? 1 : 0
        }
        _timeUpdate() {
            let e = n.Number(this.gold_label.string);
            if (e = n.StringTools.plus(e, this._itemNum), this._itemNum >= 0 && e >= this._newStake || this._itemNum < 0 && e <= this._newStake) return this._setStake(this._newStake), void this._stopTimeUpdate();
            this._setStake(e)
        }
        _stopTimeUpdate() {
            this._newStake = 0, this._itemNum = 0, this.unschedule(this._timeUpdate)
        }
        setStake(e, t, i) {
            let a = n.StringTools.serverGoldToShowNumber(e);
            a = n.StringTools.toFixed(a, 1), this.gold_label.node.active = !0, this._stopTimeUpdate(), t ? this._runStakeAction(a, i) : this._setStake(a)
        }
        setData(e) {
            this._playerInfo = e
        }
        getData() {
            return this._playerInfo
        }
        setSeatViewID(e) {
            this._seatViewID = e
        }
        getSeatViewID() {
            return this._seatViewID
        }
        setSeatID(e) {
            this._seatID = e
        }
        getSeatID() {
            return this._seatID
        }
        getHeadWorldPos() {
            return cc.v3(this.head_node.getParent().convertToWorldSpaceAR(this.head_node.getPosition()))
        }
        getGoldWorldPos() {
            return this.gold_label.node.getParent().convertToWorldSpaceAR(this.gold_label.node.getPosition())
        }
        updateSeatStatus(e) {
            switch (this._seat_status = e, e) {
                case o.SeatStatus_empty:
                    this.setSeatEmpty();
                    break;
                case o.SeatStatus_waiting:
                    this.setSeatWaiting();
                    break;
                case o.SeatStatus_waiting_bubble:
                    this.setSeatWaitingBubble();
                    break;
                case o.SeatStatus_inGame:
                    this.setSeatInGame();
                    break;
                case o.SeatStatus_ready:
                    this.setSeatReady();
                    break;
                case o.SeatStatus_wait_ready:
                    this.setSeatWaitReady()
            }
        }
        setSeatEmpty() {
            this._stopTimeUpdate(), this.empty_label.active = !0, this.head_frame_img.active = !1, this.gold_img.active = !1, this.gold_label.string = "", this.name_text.string = "", this.head_img.active = !0, this.head_panel.active = !1, this.ready_img.active = !1, this.type_label.string = ""
        }
        setSeatReady() {
            this.showBubbleByType(2)
        }
        setSeatWaitReady() {
            this.showBubbleByType(1)
        }
        setSeatWaiting() {
            this.setSitDownView()
        }
        setSeatWaitingBubble() {
            this.showBubbleByType(0)
        }
        showBubbleByType(e) {
            this._showType = e, this.ready_img.active = !1, this.type_label.string = ""
        }
        setSeatInGame() {
            this.ready_img.active = !1, this.type_label.string = ""
        }
        setSitDownView() {
            this.head_panel.active = !0, this.empty_label.active = !1, this.head_frame_img.active = !0, this.gold_img.active = !0, this.head_img.active = !1, this.headBlock.active = !1;
            for (let e = 0; e < this._playerInfo.NotDisturbUids.length; e++)
                if (n.dataHandler.getUserData().u32Uid == this._playerInfo.NotDisturbUids[e]) {
                    this.headBlock.active = !0;
                    break
                } n.StringTools.setShrinkString(this.name_text.node, this._playerInfo.name, !0), s.setCircleSprite(this.head_node, this._playerInfo.headUrl, this._playerInfo.plat, !1), this.setStake(this._playerInfo.score)
        }
        onBtnSeat(e) {
            this._seat_status == o.SeatStatus_empty ? -1 == n.JackfruitManager.tRoomData.nSelfSeatID && (l.tRoomData.nPrePickSeatID = this.getSeatID(), n.jackfruitNet.requestSitDown(r.getInstanceRoomId(null == this ? void 0 : this.node), this.getSeatID())) : (n.JackfruitManager.tRoomData.nSelfSeatID, this.getSeatID(), n.MessageCenter.send("on_show_face_panel", this.getData()))
        }
        showGoldChangeAction(e, t, i) {
            let a = n.StringTools.serverGoldToShowNumber(e);
            a = n.StringTools.toFixed(a, 1);
            let s = cc.instantiate(this.gold_change_label.node),
                o = s.getComponent(cc.Label);
            this._specialEffects_panel.addChild(s), s.active = !0;
            let l = this._getSpecialEffectsPos(cc.v3(0, 0));
            s.setPosition(l), o.font = t, o.fontSize = i, o.lineHeight = i, o.string = a < 0 ? a.toString() : "+" + a.toString();
            let r = this.node.getContentSize().height / 2 + n.resMgr.getLabelStringSize(o).height / 2,
                c = this._getSpecialEffectsPos(cc.v3(0, 0 == this.getSeatViewID() ? r + 60 : -r - 30)),
                h = cc.moveTo(.1, cc.v2(c)),
                u = cc.callFunc((() => {
                    s.getComponent(cc.Animation).play("jingbi_dd")
                })),
                _ = cc.delayTime(1),
                d = cc.callFunc((() => {
                    s.removeFromParent()
                }));
            s.runAction(cc.sequence(h, u, _, d))
        }
        runYouWinOrLose(e) {
            let t, i;
            e > 0 ? (t = cc.instantiate(this.Node_YouWin_Small), i = "YouWin_Small") : e < 0 ? (t = cc.instantiate(this.Node_YouLoose_Small), i = "YouLoose_Small") : (t = cc.instantiate(this.Node_Tie_Small), i = n.config.getCurrentLanguage() == n.Enum.LANGUAGE_TYPE.zh_CN || n.config.getCurrentLanguage() == n.Enum.LANGUAGE_TYPE.zh_TW ? "Tie_Small" : "Tie_SmallEN"), this._runWinOrLoseAction(t, i)
        }
        showFace(e) {
            if (null == this.spine) {
                let e = new cc.Node;
                this.spine = e.addComponent(sp.Skeleton), e.y = -72, this.node.addChild(e, 999)
            }
            this.spine.node.active = !0, cc.resources.load(`zh_CN/game/dzpoker/animation/face/baseSpineAni_${e}`, sp.SkeletonData, function(e, t) {
                e || (this.spine.skeletonData = t, this.spine.setAnimation(0, "animation", !1), this.spine.node.scale = 1.8, this.spine.setCompleteListener(function() {
                    this.spine.node.active = !1
                }.bind(this)))
            }.bind(this))
        }
        getHeadWorldPosForFace() {
            let e = this.head_node.parent.convertToWorldSpaceAR(cc.v2(this.head_node.x, this.head_node.y - .5 * this.head_node.height));
            return cc.v2(e.x, e.y)
        }
        setSpecialEffectsPanel(e) {
            this._specialEffects_panel = e
        }
        speak(e) {
            this.voice_img.node.active = !0, this.speakTime = 0, this.unschedule(this.speaking), this.schedule(this.speaking, .2), this.scheduleOnce(function() {
                this.unschedule(this.speaking), this.voice_img.node.active = !1
            }.bind(this), e)
        }
        speaking() {
            this.speakTime++;
            let e = this.speakTime % 3;
            console.log("Seat speaking, len:" + e);
            for (let t = 0; t < this.voiceImgList.length; t++) {
                const i = this.voiceImgList[t];
                i.active = t <= e
            }
        }
        showHeadBlock(e) {
            this.headBlock.active = e
        }
    }, B = i(z.prototype, "headBlock", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(z.prototype, "head_img", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = i(z.prototype, "head_frame_img", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = i(z.prototype, "head_panel", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = i(z.prototype, "head_node", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = i(z.prototype, "name_text", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = i(z.prototype, "gold_img", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = i(z.prototype, "gold_label", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = i(z.prototype, "seat_btn", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = i(z.prototype, "empty_label", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(z.prototype, "gold_change_label", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = i(z.prototype, "lose_img", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = i(z.prototype, "ready_img", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = i(z.prototype, "type_label", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = i(z.prototype, "Node_YouWin_Small", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = i(z.prototype, "Node_YouLoose_Small", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = i(z.prototype, "Node_Tie_Small", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = i(z.prototype, "total_score_action", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = i(z.prototype, "voice_img", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = z)) || P));
    a._RF.pop()
}