import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as _ from "./cc.js";
import * as T from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as R from "./cc.js";
import * as w from "./cc.js";
import * as v from "./cv.js";
import * as E from "./RedEnvelope.js";
import * as y from "./LuckTurntables.js";
import * as k from "./GameSceneInstance.js";
import * as D from "./TweenControl.js";
import * as M from "./AudioComp.js";

function main() {
    var I, S, A, P, B, x, N, G, L, H, O, z, U, F, V, W, q, j;
    s._RF.push({}, "83251KynSVDQrUThZESacMQ", "LuckTurntablesButton", void 0);
    const {
        ccclass: K,
        property: Q
    } = r;
    e("default", (I = Q(n), S = Q(n), A = Q(a), P = Q(o), B = Q(o), x = Q(o), N = Q(o), G = k("GameDataInstance"), K((O = t((H = class extends h {
        constructor(...e) {
            super(...e), i(this, "bg", O, this), i(this, "bg_time", z, this), i(this, "time_text", U, this), i(this, "effRrootPrefab", F, this), i(this, "redeff_prefab", V, this), i(this, "red_Envelope_prefab", W, this), i(this, "turntables_prefab", q, this), this.redeffAni = null, this.redeffTextAni = null, this.s_time = 0, this.s_isReady = !1, this.s_gold_list = [], this.effRrootNode = null, this.prizeActionIndex = 0, this.s_tips_panel = null, this.s_tips_text = null, this.tips_panel_2 = null, this.tips_panel_1 = null, this.tips_text_2 = null, this.tips_text_1 = null, this.redeff_node = null, this.red_Envelope = null, this.turntables_node = null, this.selfCoinPos = null, this.red_Envelope_Parent = null, this.isRequesting = !1, this.onAbleToShowWelcome = null, this.isMiniGame = !0, this.glowEffect = null, i(this, "gameDataInstance", j, this)
        }
        onLoad() {
            v.MessageCenter.register("showReadyTime", this.onShowReadyTime.bind(this), this.node), v.MessageCenter.register("showCurrentTime", this.onShowCurrentTime.bind(this), this.node), v.MessageCenter.register("updataLuckTurntablesButton", this.updataButton.bind(this), this.node), v.MessageCenter.register("LuckTurntableResult", this.onLuckTurntableResult.bind(this), this.node), v.MessageCenter.register("luckTurntablesOver", this.onLuckTurntablesOver.bind(this), this.node), v.MessageCenter.register("App_On_Will_Enter_Foreground", this.onAppEnterForeground.bind(this), this.node), v.MessageCenter.register("drawRedPackage", this.drawRedPackage.bind(this), this.node), v.MessageCenter.register("showLuckTurntables", this.showLuckTurntables.bind(this), this.node), l.on(d.EVENT_HIDE, this.OnAppEnterBackground, this), l.on(d.EVENT_SHOW, this.OnAppEnterForeground, this), v.config.getCurrentScene() == v.Enum.SCENE.GAME_SCENE || v.config.getCurrentScene() == v.Enum.SCENE.JACKFRUIT_SCENE ? this.bg_time.setScale(u(p.ONE)) : this.bg_time.setScale(new p(.6, .6, .6)), this.bg_time.active = !1, this.isMiniGame = v.roomManager.checkIsSceneMiniGame(v.config.getCurrentScene())
        }
        init(e) {
            this.red_Envelope_Parent = e, this.initredPackage(), v.roomManager.luckTurntablesRewardId = 0
        }
        setViewData(e) {
            this.selfCoinPos = e
        }
        onDestroy() {
            v.MessageCenter.unregister("LuckTurntableResult", this.node), v.MessageCenter.unregister("showReadyTime", this.node), v.MessageCenter.unregister("showCurrentTime", this.node), v.MessageCenter.unregister("updataLuckTurntablesButton", this.node), v.MessageCenter.unregister("luckTurntablesOver", this.node), v.MessageCenter.unregister("App_On_Will_Enter_Foreground", this.node), v.MessageCenter.unregister("drawRedPackage", this.node), v.MessageCenter.unregister("showLuckTurntables", this.node), l.off(d.EVENT_HIDE, this.OnAppEnterBackground, this), l.off(d.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        onLuckTurntableResult(e) {
            var t, i;
            this.isRequesting = !1, (null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32RoomId) == (null == (i = e.gameData) || null == (i = i.tRoomData) ? void 0 : i.u32RoomId) && "1" == e.error && this.showLuckTurntables()
        }
        clickEvent() {
            v.AudioMgr.playSoundButtonInMiniAndCashGame(M.Instance().setUrl("giftbox_button.mp3").setRoomId(this.gameDataInstance.tRoomData.u32RoomId).setGameId(this.gameDataInstance.tRoomData.u32GameID)), this.redPacketsButton()
        }
        onShowReadyTime() {
            this.showReadyTime()
        }
        showReadyTime() {
            let e = Math.floor((new Date).getTime() / 1e3),
                t = v.dataHandler.getUserData().luckTurntablesStartTime - e;
            t > 0 && (this.s_time = t, this.unschedule(this.updataTime), this.schedule(this.updataTime, 1), this.s_isReady = !0, this.updataTime(0), this.showDes(!0), this.updateDes(!0), this.updateBg(!0))
        }
        updataTime(e) {
            if (this.s_time >= 0) {
                let e = v.StringTools.formatUTCTime(this.s_time, v.Enum.eTimeType.Hour_Min_Sec),
                    t = v.config.getStringData("red_envelope_start_in").toUpperCase();
                0 == this.s_isReady && (t = v.config.getStringData("red_envelope_end_in").toUpperCase()), this.time_text.string = this.isMiniGame ? t + " " + e : t + "\n" + e, this.s_time -= 1, this.bg_time.active = !0
            } else this.unschedule(this.updataTime), this.time_text.string = "", this.bg_time.active = !1, this.showDes(!1), this.s_isReady || (v.dataHandler.getUserData().luckTurntables = [], this.updataButton());
            this.onAbleToShowWelcome && this.onAbleToShowWelcome(this.s_time >= 0)
        }
        showDes(e) {}
        updateDes(e) {}
        updateBg(e) {}
        getRedEnvelopFrame(e) {
            return "zh_CN/game/redpacket/" + (e ? "red_btn" : "red_btn_open")
        }
        onShowCurrentTime() {
            this.showCurrentTime()
        }
        showCurrentTime() {
            let e = Math.floor((new Date).getTime() / 1e3),
                t = v.dataHandler.getUserData().luckTurntablesEndTime - e;
            t > 0 ? (this.s_time = t, this.unschedule(this.updataTime), this.schedule(this.updataTime, 1), this.s_isReady = !1, this.updataTime(0), this.showDes(!0), this.updateDes(!1), this.updateBg(!1)) : (v.dataHandler.getUserData().luckTurntables = [], this.updataButton(), this.s_isReady || this.luckTurntablesOver())
        }
        updataLuckTurntablesButton(e) {
            this.updataButton()
        }
        updataButton() {
            this.showEff()
        }
        showEff() {
            let e = v.dataHandler.getUserData().luckTurntables.length > 0;
            if (this.glowEffect.active = e, e) {
                let e = this.node.getComponent(c);
                e.play("animation0");
                let t = e.getState("animation0");
                t && (t.wrapMode = _.WrapMode.Loop)
            } else this.node.getComponent(c).stop()
        }
        onLuckTurntablesOver() {
            this.luckTurntablesOver()
        }
        luckTurntablesOver() {
            this.updataButton(), this.s_time = -1, this.updataTime(0), this.updateBg(!0), this.unschedule(this.updataTime)
        }
        onAppEnterForeground() {
            this.s_isReady = !1, this.showReadyTime(), this.showCurrentTime()
        }
        updateView(e, t) {
            this.initView();
            let i = !1;
            null != this.s_tips_panel && (i = this.s_tips_panel.active && this.s_tips_panel.getComponent(g).opacity > 0), this.s_tips_panel = e ? this.tips_panel_2 : this.tips_panel_1, this.s_tips_text = this.s_tips_panel.getComponentInChildren(f), this.showEff(), this.updateDes(!0), this.showDes(!1), this.updateBg(!0), this.time_text.string = "", this.showReadyTime(), this.showCurrentTime(), i && this.showTips()
        }
        setLeftShowDes() {}
        initView() {
            if (null == this.effRrootNode) {
                this.effRrootNode = m(this.effRrootPrefab), this.s_gold_list = [];
                for (let e = 0; e < 6; e++) {
                    let t = this.effRrootNode.getChildByName(`Image_${e}`).getComponent(b);
                    this.s_gold_list.push(t), t.node.active = !1
                }
                this.tips_panel_1 = this.effRrootNode.getChildByName("tips_panel_1"), this.tips_panel_2 = this.effRrootNode.getChildByName("tips_panel_2"), this.tips_panel_1.active = !1, this.tips_panel_2.active = !1, this.effRrootNode.parent = this.node.parent, this.effRrootNode.setPosition(0, -20, 0)
            }
        }
        showTips() {
            let e = this.isMiniGame ? new p(.6, .6, 1) : new p(.9, .9, 1),
                t = this.isMiniGame ? new p(.7, .7, 1) : new p(p.ONE);
            T.stopAllByTarget(this.s_tips_panel), this.s_tips_text.string = v.config.getStringData("LuckTurntablesButton_tips_text"), this.s_tips_panel.active = !0, this.s_tips_panel.scale = e, this.s_tips_panel.getComponent(g).opacity = 0, T.stopAllByTarget(this.s_tips_panel), w(this.s_tips_panel.getComponent(g)).to(.3, {
                opacity: 255
            }).delay(3).to(.3, {
                opacity: 0
            }).call((() => {
                this.s_tips_panel.active = !1
            })).start(), w(this.s_tips_panel).to(.3, {
                scale: t
            }).delay(3).to(.3, {
                scale: e
            }).call((() => {
                this.s_tips_panel.active = !1
            })).start()
        }
        initredPackage() {
            if (this.redeff_node = m(this.redeff_prefab), this.redeff_node.getComponent(C).setContentSize(this.node.getComponent(C).width, this.node.getComponent(C).height), this.redeff_node.active = !1, this.redeff_node.setSiblingIndex(20), this.redeff_node.parent = this.red_Envelope_Parent, this.isMiniGame) {
                let e = this.red_Envelope_Parent.convertToNodeSpaceAR(new p(v.config.WIDTH / 2, v.config.HEIGHT / 2));
                this.redeff_node.setPosition(e)
            } else this.redeff_node.setPosition(0, -230);
            this.redeffAni = this.redeff_node.getComponent(c), this.redeffTextAni = this.redeff_node.children[1].getComponent(c), this.glowEffect = this.node.getChildByName("a0001_1")
        }
        drawRedPackage() {
            this.redeff_node.active || this.glowEffect.active || (v.AudioMgr.playSoundMiniGame(M.Instance().setUrl("zh_CN/game/dzpoker/audio/giftbox_start").setRoomId(this.gameDataInstance.tRoomData.u32RoomId).setGameId(this.gameDataInstance.tRoomData.u32GameID)), this.redeff_node.active = !0, this.redeffAni.play("GF_GiftBox"), this.redeffTextAni.play("GF_YouWon"), this.redeff_node.setPosition(0, -230), this.redeffAni.on(c.EventType.FINISHED, this.drawRedAniBack, this))
        }
        drawRedAniBack() {
            switch (this.prizeActionIndex) {
                case 0:
                    this.prizeActionIndex = 1, this.redPackageMove()
            }
        }
        drawRedMoveBack() {
            this.prizeActionIndex = 0, this.showEff(), this.redeff_node.active = !1, this.showTips()
        }
        redPackageMove() {
            const e = this.node.convertToWorldSpaceAR(this.node.getPosition()),
                {
                    WIDTH: t,
                    HEIGHT: i
                } = v.config,
                [s, n] = this.isMiniGame ? [0, -300] : [200, 0];
            this.isMiniGame || (e.x -= t / 2, e.y -= i / 2);
            const a = new R(e.x - s, e.y - n);
            T.stopAllByTarget(this.redeff_node), D.bezierTo(this.redeff_node, .7, new R(this.redeff_node.position.x, this.redeff_node.position.y), a, e, {}).call((() => {
                this.drawRedMoveBack()
            })).start()
        }
        redPacketsButton(e) {
            if (v.dataHandler.getUserData().luckTurntables.length > 0) {
                if (0 == this.isRequesting) {
                    var t;
                    let e = v.dataHandler.getUserData().luckTurntables[0];
                    this.isRequesting = !0, this.scheduleOnce(function() {
                        this.isRequesting = !1
                    }.bind(this), 5), v.roomManager.luckTurntablesRewardId = e.record_id, v.worldNet.RequestLuckTurntableResult(e.record_id, null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32RoomId)
                }
            } else this.showRedEnvelope();
            v.MessageCenter.send("hide_bombInfoTips")
        }
        showRedEnvelope() {
            null == this.red_Envelope && (this.red_Envelope = m(this.red_Envelope_prefab), this.red_Envelope.setPosition(0, 0), this.red_Envelope.parent = this.red_Envelope_Parent), this.red_Envelope_Parent.setSiblingIndex(-1), this.red_Envelope.getComponent(E).startUpdate()
        }
        showLuckTurntables() {
            null == this.turntables_node && (this.turntables_node = m(this.turntables_prefab), this.turntables_node.parent = this.red_Envelope_Parent, this.turntables_node.setPosition(0, 0), null != this.selfCoinPos && this.turntables_node.getComponent(y).setGoldMovePos(this.selfCoinPos)), v.dataHandler.getUserData().luckTurntables.length > 0 && (v.MessageCenter.send("LuckTurntables_isView", !0), this.turntables_node.active = !0, this.turntables_node.getComponent(y).updateView())
        }
        showGoldMoveAction(e, t) {
            let i = this.node.getComponent(C).convertToNodeSpaceAR(e),
                s = [new p(7, 18), new p(-24, 21), new p(15, -7), new p(-38, 8), new p(6, -23), new p(-33, -18)],
                n = s.length;
            for (let e = 0; e < n; e++) {
                let n = v.resMgr.createSprite(this.node, "zh_CN/hall/RedPackets/" + (0 == t ? "icon_gold" : "YellowChip"));
                n.setPosition(s[e]);
                let a = s[e],
                    o = a.x > i.x ? a.x - i.x : i.x - a.x,
                    r = a.y > i.y ? a.y - i.y : i.y - a.y,
                    h = o > r ? o : r;
                w(n).delay(.05 * e).show().to(h / 150 * .1, {
                    position: i
                }).removeSelf().start()
            }
        }
        OnAppEnterBackground() {}
        OnAppEnterForeground() {
            this.showReadyTime(), this.showCurrentTime()
        }
        hidePopup() {
            this.red_Envelope && this.red_Envelope.getComponent(E).hideView()
        }
    }).prototype, "bg", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(H.prototype, "bg_time", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(H.prototype, "time_text", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(H.prototype, "effRrootPrefab", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(H.prototype, "redeff_prefab", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(H.prototype, "red_Envelope_prefab", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(H.prototype, "turntables_prefab", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(H.prototype, "gameDataInstance", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = H)) || L));
    s._RF.pop()
}