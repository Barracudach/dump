import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./gs_protocol.mjs_cjs=&original=.js";
import * as f from "./DanmuView.js";
import * as w from "./ScrollViewReuse.js";
import * as p from "./GameDataManager.js";
import * as I from "./DanmuHeadItem.js";
import * as C from "./Tag.js";
import * as _ from "./SlideView.js";
import * as T from "./FacePanel.js";
import * as b from "./GameSceneInstance.js";
import * as S from "./cv.js";
import * as D from "./JackfruitManager.js";

function main() {
    var N, v, B, V, M, y, U, k, H, P, G, L, R, z, x, E, O, F, j, J, A, W, q, K, Z, Q;
    a._RF.push({}, "fb641oidkhEZ4JWoaE7aGS9", "FaceView", void 0);
    const {
        ccclass: X,
        property: Y
    } = r;
    e("default", (N = Y(C), v = Y(n), B = Y(o), V = Y(s), M = Y(s), y = Y(o), U = Y(s), k = Y(o), H = Y(s), P = Y(s), G = Y(s), L = Y(s), X((x = t((z = class extends _ {
        constructor(...e) {
            super(...e), i(this, "slideView", x, this), i(this, "scrollView", E, this), i(this, "danmuItem", O, this), i(this, "roleHeadBg", F, this), i(this, "roleNameBg", j, this), i(this, "roleHeadItemPrefab", J, this), i(this, "roleNameText", A, this), i(this, "danmu_Panel_prefab", W, this), i(this, "danmu_panel", q, this), i(this, "face_button", K, this), i(this, "danmu_button", Z, this), i(this, "danmu_onOffBtn", Q, this), this.scrollViewNodeUITransform = null, this.faceButtonNodeUITransform = null, this._faceLen = 12, this.onOff = !0, this._cdTime = 5, this._isInCd = !1, this._danmu_view = null, this.JACKFRUIT_DANMU_COUNT = 22, this.DZPOKER_DANMU_COUNT = 23, this.roleHeadItemList = [], this.game = void 0
        }
        onLoad() {
            this.scrollViewNodeUITransform = this.scrollView.node.getComponent(l), this.faceButtonNodeUITransform = this.face_button.getComponent(l), T.getInstanceGameId(null == this ? void 0 : this.node) == b.Enum.GameId.Jackfruit ? b.jackfruitNet.requestBarrageCount() : b.gameNet.requestBarrageCount(T.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        onResetCdtime() {
            this._isInCd = !0, this._cdTime = 5, b.MessageCenter.send("updateCdStatus", this._isInCd || !b.tools.isShowBarrage()), this.schedule(this.updateDanmuCd, 1)
        }
        setGameScene(e) {
            this.game = e
        }
        initRoleHead() {
            for (let e = 0; e < 8; e++) {
                let t = d(this.roleHeadItemPrefab);
                t.getComponent(p).setFaceView(this), t.setPosition(84 + e * (t.getComponent(l).width + 25), 0), this.roleHeadBg.addChild(t), this.roleHeadItemList.push(t.getComponent(p))
            }
        }
        showRoleHead() {
            let e = [],
                t = this.game.gameDataInstance.tRoomData.kTablePlayerList.length;
            for (let i = 0; i < t; i++) this.game.gameDataInstance.tRoomData.kTablePlayerList[i].playerid != b.dataHandler.getUserData().u32Uid && e.push(this.game.gameDataInstance.tRoomData.kTablePlayerList[i]);
            for (let t = 0; t < this.roleHeadItemList.length; t++) t < e.length ? (this.roleHeadItemList[t].setData(e[t]), this.roleHeadItemList[t].node.active = !0) : (this.roleHeadItemList[t].clearData(), this.roleHeadItemList[t].node.active = !1);
            this.roleNameBg.active = !1
        }
        onclickRoleHead(e, t) {
            for (let i = 0; i < this.roleHeadItemList.length; i++)
                if (this.roleHeadItemList[i].getPlayerId() != e) this.roleHeadItemList[i].hideSelectImg();
                else {
                    if (t) {
                        let t = "@ " + this.roleHeadItemList[i].getRoleName(),
                            a = b.resMgr.getLabelStringSize(this.roleNameText.getComponent(u), t);
                        this.roleNameText.getComponent(I).setTag(e);
                        let n = this.roleNameBg.getComponent(l);
                        if (n.setContentSize(new h(a.width + 40, n.height)), !this.roleNameBg.active) {
                            let e = this.scrollView.content.getPosition().y;
                            this.scrollViewNodeUITransform.setContentSize(new h(this.scrollViewNodeUITransform.width, 430)), this.scrollView.node.setPosition(this.scrollView.node.position.x, this.scrollViewNodeUITransform.height / 2 + this.faceButtonNodeUITransform.height), this.scrollView.content.setPosition(this.scrollView.content.getPosition().x, e - 50)
                        }
                    } else {
                        let e = this.scrollView.content.getPosition().y;
                        this.scrollViewNodeUITransform.setContentSize(new h(this.scrollViewNodeUITransform.width, 530)), this.scrollView.node.setPosition(this.scrollView.node.position.x, this.scrollViewNodeUITransform.height / 2 + this.faceButtonNodeUITransform.height), this.scrollView.content.setPosition(this.scrollView.content.getPosition().x, e + 50)
                    }
                    this.roleNameBg.active = t
                }
        }
        onselect(e) {
            for (let t = 0; t < this.roleHeadItemList.length; t++) this.roleHeadItemList[t].getPlayerId() != e ? this.roleHeadItemList[t].hideSelectImg() : this.roleHeadItemList[t].showSelectImg()
        }
        start() {
            b.MessageCenter.register("danmuItemClick", this.danmuItemClick.bind(this), this.node), b.MessageCenter.register("getBarrageCountNotice", this.onGetCounts.bind(this), this.node), b.MessageCenter.register("onClickDanmuSwitch", this.clikcOnOff.bind(this), this.node), b.MessageCenter.register("resetCdTime", this.onResetCdtime.bind(this), this.node), this.node.getComponentsInChildren(c).forEach((e => e.enabled = !0))
        }
        onDestroy() {
            b.MessageCenter.unregister("danmuItemClick", this.node), b.MessageCenter.unregister("getBarrageCountNotice", this.node), b.MessageCenter.unregister("onClickDanmuSwitch", this.node), b.MessageCenter.unregister("resetCdTime", this.node), b.GameDataManager.clearBarrageData()
        }
        onGetCounts() {
            b.GameDataManager.sortBarrageData()
        }
        showScrollview() {
            let e = this.scrollView.getComponent(f);
            e.bindPrefab(this.danmuItem, "DanmuItem", []), e.generateItemPool(), e.bindScrollEventTarget(this);
            T.getInstanceGameId(null == this ? void 0 : this.node), b.Enum.GameId.Jackfruit;
            e.reloadView(b.GameDataManager.getBarrageData()), b.MessageCenter.send("updateCdStatus", this._isInCd || !b.tools.isShowBarrage())
        }
        initScrollviewData() {
            let e = T.getInstanceGameId(null == this ? void 0 : this.node) == b.Enum.GameId.Jackfruit,
                t = e ? this.JACKFRUIT_DANMU_COUNT : this.DZPOKER_DANMU_COUNT;
            for (let i = 0; i < t; i++)
                if (e) {
                    let e = new w;
                    e.content = b.config.getStringData(b.StringTools.formatC("jackfruit_danmu_label%d", i)), e.BarrageId = i, e.count = 0, b.GameDataManager.addBarrageData(e)
                } else {
                    let e = new w;
                    e.content = b.config.getStringData(b.StringTools.formatC("Faceview_danmu_text_%d", i)), e.BarrageId = i, e.count = 0, b.GameDataManager.addBarrageData(e)
                }
        }
        initLanguage() {}
        faceBgClick(e) {}
        hideSlideView() {
            this.slideView.hide()
        }
        addChildToContainer(e) {
            this.game.gameMain_panel.addChild(e)
        }
        danmuItemClick(e) {
            var t;
            if (console.log(e), b.AudioMgr.playEffect("zh_CN/game/dzpoker/audio/danmu"), !b.tools.isShowBarrage()) return void b.TT.showMsg(b.config.getStringData("Faceview_danmu_button_onOff_Tips"), b.Enum.ToastType.ToastTypeWarning);
            if (this._isInCd) {
                let e = b.StringTools.formatC(b.config.getStringData("Faceview_danmu_cd_tips"), this._cdTime);
                return void b.TT.showMsg(e, b.Enum.ToastType.ToastTypeWarning)
            }
            this._isInCd = !0, b.MessageCenter.send("updateCdStatus", this._isInCd || !b.tools.isShowBarrage()), this.schedule(this.updateDanmuCd, 1);
            let i = new D.protocol.NoticeSendBarrage;
            i.content = b.String(e), i.nickname = b.dataHandler.getUserData().nick_name, i.playerid = b.Number(b.dataHandler.getUserData().user_id), i.thump_up_status = 1;
            let a = [],
                n = [];
            var o;
            (this.roleNameBg.active && (a.push(this.roleNameText.getComponent(u).string), n.push(this.roleNameText.getComponent(I).getTag())), i.at_list = a, (null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32GameID) == b.Enum.GameId.Jackfruit) ? b.jackfruitNet.requestSendBarrage(b.String(e)): b.gameNet.requestSendBarrage(null == (o = this.gameDataInstance) || null == (o = o.tRoomData) ? void 0 : o.u32RoomId, b.String(e), a, n)
        }
        updateDanmuCd() {
            this._cdTime -= 1, this._cdTime <= 0 && (this._cdTime = 5, this._isInCd = !1, b.MessageCenter.send("updateCdStatus", this._isInCd || !b.tools.isShowBarrage()), this.unschedule(this.updateDanmuCd))
        }
        onClickDanmuBtn(e) {
            b.AudioMgr.playButtonSound("button_click")
        }
        onClickFaceBtn(e) {}
        clikcOnOff() {
            b.MessageCenter.send("danmu_onOff", b.tools.isShowBarrage()), b.tools.isShowBarrage() ? b.TT.showMsg(b.config.getStringData("Faceview_danmu_button_on"), b.Enum.ToastType.ToastTypeWarning) : b.TT.showMsg(b.config.getStringData("Faceview_danmu_button_off"), b.Enum.ToastType.ToastTypeWarning), b.MessageCenter.send("updateCdStatus", this._isInCd || !b.tools.isShowBarrage())
        }
        setOnOff() {
            m("danmu_ui/danmu_panel/on_off/button_On", this.node).active = b.tools.isShowBarrage(), b.MessageCenter.send("updateCdStatus", this._isInCd || !b.tools.isShowBarrage())
        }
        updateCdStatus() {}
        showUi() {
            let e = T.getInstanceGameId(null == this ? void 0 : this.node) == b.Enum.GameId.Jackfruit;
            this.roleHeadBg.active = !e, e ? (this.scrollViewNodeUITransform.setContentSize(this.scrollViewNodeUITransform.width, 604), this.scrollView.node.setPosition(this.scrollView.node.position.x, this.scrollViewNodeUITransform.height / 2 + this.faceButtonNodeUITransform.height)) : (this.scrollViewNodeUITransform.setContentSize(this.scrollViewNodeUITransform.width, 530), this.scrollView.node.setPosition(this.scrollView.node.position.x, this.scrollViewNodeUITransform.height / 2 + this.faceButtonNodeUITransform.height)), this.showRoleHead(), b.resMgr.adaptWidget(this.node, !0, !1), this.slideView.show(!1)
        }
        updateEmotionNeedCoin() {
            for (let e = 0; e < this._faceLen; e++) {
                let t = m(b.StringTools.formatC("face_%d/goldImg/goldText", e), this.face_panel).getComponent(u),
                    i = m(b.StringTools.formatC("face_%d/goldImg", e), this.face_panel);
                if (T.getInstanceGameId(null == this ? void 0 : this.node) == b.Enum.GameId.Jackfruit) {
                    let e = S.tRoomData.fee.emotionFee2;
                    e <= 0 ? (i.active = !1, t.node.active = !1) : (i.active = !0, t.node.active = !0, t.string = b.StringTools.serverGoldToShowString(e))
                } else {
                    let e = this.game.gameDataInstance.tRoomData.kingBee;
                    e <= 0 ? (i.active = !1, t.node.active = !1) : (i.active = !0, t.node.active = !0, t.string = b.StringTools.serverGoldToShowString(e))
                }
            }
        }
        hideUi() {
            this.slideView.hide()
        }
        showAtRoleHead() {}
        setParentNode(e) {
            e && (this._danmu_view = d(this.danmu_Panel_prefab), this._danmu_view.getComponent(g).setParentNode(e))
        }
        setDanmuChanel(e) {
            this._danmu_view && this._danmu_view.getComponent(g).setDanmuChanel(e)
        }
        adjustDanmuMaxNumber(e) {
            this._danmu_view && this._danmu_view.getComponent(g).adjustDanmuMaxNumber(e)
        }
    }).prototype, "slideView", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(z.prototype, "scrollView", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(z.prototype, "danmuItem", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(z.prototype, "roleHeadBg", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(z.prototype, "roleNameBg", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(z.prototype, "roleHeadItemPrefab", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(z.prototype, "roleNameText", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(z.prototype, "danmu_Panel_prefab", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(z.prototype, "danmu_panel", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(z.prototype, "face_button", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(z.prototype, "danmu_button", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(z.prototype, "danmu_onOffBtn", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = z)) || R));
    a._RF.pop()
}