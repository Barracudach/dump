import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as S from "./cv.js";
import * as T from "./gs_protocol.mjs_cjs=&original=.js";
import * as D from "./DanmuView.js";
import * as v from "./ListView.js";
import * as B from "./GameDataManager.js";
import * as y from "./BarrageHeadItem.js";
import * as w from "./DanmuItem.js";
import * as I from "./SlideView.js";
import * as U from "./FaceEmoBase.js";
import * as x from "./FaceEmoBase.js";
import * as L from "./GameSceneInstance.js";

function main() {
    var N, M, H, P, k, R, E, F, z, A, V, O, G, j, q, K, W, X, Z, J, Q, Y, $, tt, et, it, nt, at, st, rt, ot, ht, lt, ut, dt, ct, gt, pt, mt, _t, bt, Ct;
    n._RF.push({}, "5f34fqMRhxE85WGV2DKNg4p", "FaceBarrage", void 0);
    const {
        ccclass: ft,
        property: St
    } = o;
    var Tt = function(t) {
        return t[t.txt = 0] = "txt", t[t.user = 1] = "user", t
    }(Tt || {});
    t("default", (N = St(w), M = St(a), H = St(a), P = St(a), k = St(a), R = St(a), E = St(a), F = St(a), z = St(a), A = St(a), V = St(a), O = St(a), G = St(a), j = St(a), q = St(a), K = St(a), W = St(s), X = St(r), Z = St(r), J = x("GameDataInstance"), ft(($ = e((Y = class extends I {
        constructor(...t) {
            super(...t), i(this, "slideView", $, this), i(this, "tabUi", tt, this), i(this, "expressionUi", et, this), i(this, "inputUi", it, this), i(this, "contentUi", nt, this), i(this, "stateBtn", at, this), i(this, "sendBtn", st, this), i(this, "inputNode", rt, this), i(this, "barrageList", ot, this), i(this, "userList", ht, this), i(this, "maskBtn", lt, this), i(this, "txtBtn", ut, this), i(this, "atBtn", dt, this), i(this, "descriptionNode", ct, this), i(this, "descriptionTouch", gt, this), i(this, "tipNode", pt, this), i(this, "scrollView", mt, this), i(this, "roleHeadItemPrefab", _t, this), i(this, "danmu_Panel_prefab", bt, this), this.mute = !1, this.muteTime = 0, this.canBarrage = !0, this.canInput = !0, this.price = 0, this._faceLen = 12, this.onOff = !0, this._cdTime = 5, this._isInCd = !1, this._danmu_view = null, this.DZPOKER_DANMU_COUNT = 23, this.roleHeadItemList = [], this.roleHeadDataList = [], this.game = void 0, this._needUpdateUi = !0, this._needUpdateUser = !0, this._needUpdateTxt = !0, this._needUpdateDes = !0, this._atPlayer = null, this._atStr = "@", this._atStrEnd = " ", this._autoHideTip = !0, this._inputStringFormat = "<color=#ffab00>%s</color><color=#ffffff>%s</color>", this._inputStringMaxLen = 36, this._tabUiIndex = 0, i(this, "gameDataInstance", Ct, this)
        }
        onLoad() {
            var t;
            this.hideUi(), this.initScrollviewData(), this.setPrice(), this.descriptionTouch = h("description_touch", this.contentUi), this.descriptionTouch.on(a.EventType.TOUCH_END, function(t) {
                this.hideDescription()
            }.bind(this)), S.gameNet.requestBarrageCount(null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32RoomId)
        }
        initLanguage() {
            let t = S.resMgr.getLabelStringSize(h("btn_barrage/txt", this.tabUi).getComponent(l), S.config.getStringData("Faceview_danmu_button_danmu")).width;
            h("btn_barrage/line", this.tabUi).getComponent(u).width = t, t = S.resMgr.getLabelStringSize(h("btn_expression/txt", this.tabUi).getComponent(l), S.config.getStringData("Faceview_danmu_button_face")).width, h("btn_expression/line", this.tabUi).getComponent(u).width = t
        }
        chineseChar(t) {
            if (!t) return !1;
            let e = t.codePointAt(0);
            return 19968 <= e && e <= 40959 || 13312 <= e && e <= 19903 || 131072 <= e && e <= 173791 || 173824 <= e && e <= 177983 || 177984 <= e && e <= 178207 || 178208 <= e && e <= 183983 || 183984 <= e && e <= 191471 || 196608 <= e && e <= 201551 || 12032 <= e && e <= 12255 || 11904 <= e && e <= 12031 || 63744 <= e && e <= 64255 || 194560 <= e && e <= 195103 || 59413 <= e && e <= 59503 || 58368 <= e && e <= 58856 || 58880 <= e && e <= 59087 || 12736 <= e && e <= 12783 || 12272 <= e && e <= 12287 || 12544 <= e && e <= 12591 || 12704 <= e && e <= 12735 || 12288 <= e && e <= 12351 || 65280 <= e && e <= 65519
        }
        getStrLen(t) {
            let e = t || "",
                i = 0;
            if (0 == e.length) return i;
            let n = Array.from(e),
                a = n.length,
                s = 0;
            for (let t = 0; t < a; ++t) this.chineseChar(n[t]) ? i += 2 : (s = n[t].codePointAt(0), i += s > 65535 ? 2 : 1);
            return i
        }
        hideTip() {
            this.tipNode.active = !1
        }
        showTip(t, e = -1) {
            d.stopAllByTarget(this.tipNode), this.tipNode.active = !0;
            let i = S.resMgr.getLabelStringSize(h("txt", this.tipNode).getComponent(l), t);
            this.tipNode.getComponent(u).setContentSize(i.width + 164, i.height + 22.58), e > 0 ? (this._autoHideTip = !0, c(this.tipNode).delay(e).call((() => {
                this.hideTip()
            })).start()) : this._autoHideTip = !1
        }
        hideDescription() {
            this.descriptionNode.active = !1, this.descriptionTouch.active = !1
        }
        showDescription() {
            if (this.descriptionNode.active = !0, this.descriptionTouch.active = !0, this._needUpdateDes) {
                this._needUpdateDes = !1;
                let t = S.config.getStringData("FaceBarrage_explan").split("\n");
                if (0 == t.length) return;
                let e = h("item_node", this.descriptionNode);
                for (let i = 0; i < t.length; ++i) {
                    let n = g(e),
                        a = S.resMgr.getLabelStringSize(n.children[1].getComponent(l), t[i]);
                    n.getComponent(u).height = a.height, n.active = !0, this.descriptionNode.addChild(n)
                }
            }
        }
        selectTabList(t) {
            t == Tt.txt ? (this.selectTab(this.txtBtn, !0), this.selectTab(this.atBtn, !1), this.hideRoleHead(), this.showScrollView()) : t == Tt.user && (this.selectTab(this.atBtn, !0), this.selectTab(this.txtBtn, !1), this.hideScrollView(), this.showRoleHead()), this._needUpdateUi = !1
        }
        selectTab(t, e) {
            h("icon_bg", t).active = e, h("icon_light", t).active = e, h("icon_dark", t).active = !e
        }
        setStateBtn() {
            let t = h("state_on", this.stateBtn),
                e = this.stateBtn.getComponent(p),
                i = S.tools.isShowBarrage();
            this.mute || !this.canCustomBarrage() || this._isInCd ? (e.interactable = !1, e.enabled = !1, t.active = !1) : i ? (e.interactable = !0, e.enabled = !0, t.active = !0) : (e.interactable = !0, e.enabled = !0, t.active = !1)
        }
        setSendBtn() {
            let t = this.sendBtn.getComponent(p),
                e = S.tools.isShowBarrage();
            this.mute || !this.canCustomBarrage() || this._isInCd || !e ? (t.interactable = !1, t.enabled = !1) : (t.interactable = !0, t.enabled = !0)
        }
        setInputBox() {
            let t = h("input_box", this.inputNode),
                e = t.getComponent(m),
                i = h("content_mask/content", this.inputNode),
                n = h("price", this.inputNode),
                a = h("char_num", this.inputNode),
                s = S.tools.isShowBarrage(),
                r = null;
            i.active = !0, h("TEXT_LABEL", t).getComponent(_).opacity = 0, this.mute || !this.canCustomBarrage() ? (e.string = "", this._atPlayer = null, t.active = !1, r = S.config.getStringData("FaceBarrage_input_txt_disable"), S.StringTools.setRichTextString(i, r), n.active = !1, a.active = !1) : this._isInCd ? (e.string = "", this._atPlayer = null, t.active = !1, r = S.config.getStringData("FaceBarrage_input_txt_send_disable"), S.StringTools.setRichTextString(i, r), n.active = !1, a.active = !1) : s ? (t.active = !0, r = e.string, 0 == r.length ? (r = S.config.getStringData("FaceBarrage_input_txt"), S.StringTools.setRichTextString(i, r), n.active = !0, a.active = !1) : (n.active = !1, a.active = !0, this.setCharNum(r))) : (e.string = "", this._atPlayer = null, t.active = !1, r = S.config.getStringData("FaceBarrage_danmu_off"), S.StringTools.setRichTextString(i, r), n.active = !1, a.active = !1)
        }
        setSelectHead() {
            let t = this._atPlayer ? this._atPlayer.playerid : 0;
            for (let e = 0; e < this.roleHeadItemList.length; e++) 0 != this.roleHeadItemList[e].getPlayerId() && this.roleHeadItemList[e].getPlayerId() == t ? this.roleHeadItemList[e].showSelectImg() : this.roleHeadItemList[e].hideSelectImg()
        }
        onselect(t) {
            for (let e = 0; e < this.roleHeadItemList.length; e++) this.roleHeadItemList[e].getPlayerId() != t ? this.roleHeadItemList[e].hideSelectImg() : this.roleHeadItemList[e].showSelectImg()
        }
        setController() {
            this.setInputBox(), this.setStateBtn(), this.setSendBtn(), this.setSelectHead()
        }
        setPrice() {
            let t = S.StringTools.numToFloatString(this.price);
            h("price", this.inputNode).getComponent(l).string = S.StringTools.formatC(S.config.getStringData("FaceBarrage_input_txt_price"), t)
        }
        lockController(t) {
            this.maskBtn.active = t || this.currentCdStatus()
        }
        currentCdStatus() {
            let t = S.tools.isShowBarrage();
            return this.mute || !t || this._isInCd
        }
        addAtPlayer(t) {
            if (this.currentCdStatus() || this._atPlayer && this._atPlayer.playerid == t.playerid) return;
            let e = h("input_box", this.inputNode).getComponent(m),
                i = h("content_mask/content", this.inputNode),
                n = h("price", this.inputNode),
                a = h("char_num", this.inputNode),
                s = e.string,
                r = s;
            if (this._atPlayer) {
                let t = this._atPlayer.name.length;
                t = s[t] == this._atStrEnd ? t + 1 : t, r = s.substring(t)
            }
            this._atPlayer = t, r = this._atStrEnd + r, e.string = t.name + r;
            let o = S.StringTools.formatC(this._inputStringFormat, t.name, r);
            i.getComponent(b).string = o, n.active = !1, a.active = !0, this.setCharNum(e.string)
        }
        removeAtPlayer() {
            if (this.currentCdStatus() || !this._atPlayer) return;
            let t = h("input_box", this.inputNode).getComponent(m),
                e = h("content_mask/content", this.inputNode),
                i = h("price", this.inputNode),
                n = h("char_num", this.inputNode),
                a = t.string,
                s = this._atPlayer.name.length;
            s = a[s] == this._atStrEnd ? s + 1 : s;
            let r = a.substring(s);
            this._atPlayer = null, t.string = r;
            let o = null;
            if (0 == r.length) {
                let t = this.canCustomBarrage();
                o = t ? S.config.getStringData("FaceBarrage_input_txt") : S.config.getStringData("FaceBarrage_input_txt_disable"), i.active = t, S.StringTools.setRichTextString(e, o), n.active = !1
            } else o = S.StringTools.formatC(this._inputStringFormat, "", r), i.active = !1, e.getComponent(b).string = o, n.active = !0, this.setCharNum(r)
        }
        testEditAtPlayer(t) {
            if (null == t || t.length <= this._atStr.length) return null;
            let e = null;
            for (let i = 0; i < this.roleHeadDataList.length; ++i) {
                if (new RegExp("^" + this._atStr + this.roleHeadDataList[i].name).test(t)) {
                    e = this.roleHeadDataList[i];
                    break
                }
            }
            return e
        }
        onEditBegin(t, e, i) {
            let n = h("input_box", this.inputNode),
                a = h("content_mask/content", this.inputNode),
                s = h("price", this.inputNode),
                r = h("char_num", this.inputNode);
            h("TEXT_LABEL", n).getComponent(_).opacity = 255, a.active = !1, s.active = !1, r.active = !1
        }
        onTextChange(t, e, i) {
            let n = h("input_box", this.inputNode).getComponent(m),
                a = h("content_mask/content", this.inputNode),
                s = n.string;
            s = s.replace(/\r\n|\n/g, ""), n.string = s;
            let r = this.testEditAtPlayer(s),
                o = "",
                l = s;
            r ? (o = this._atStr + r.name, l = s.substring(o.length), this._atPlayer = {
                name: o,
                playerid: r.playerid
            }) : this._atPlayer = null;
            let u = S.StringTools.formatC(this._inputStringFormat, o, l);
            a.getComponent(b).string = u, this.setCharNum(s), this.setSelectHead()
        }
        onEditEnd(t, e, i) {
            let n = h("input_box", this.inputNode),
                a = n.getComponent(m),
                s = h("content_mask/content", this.inputNode),
                r = h("price", this.inputNode),
                o = h("char_num", this.inputNode);
            h("TEXT_LABEL", n).getComponent(_).opacity = 0, s.active = !0;
            let l = a.string;
            0 == l.length ? (l = S.config.getStringData("FaceBarrage_input_txt"), S.StringTools.setRichTextString(s, l), r.active = !0, o.active = !1) : (r.active = !1, o.active = !0)
        }
        setCharNum(t) {
            let e = h("char_num", this.inputNode),
                i = this.getStrLen(t),
                n = S.StringTools.formatC("%d/%d", i, this._inputStringMaxLen);
            e.getComponent(l).string = n
        }
        setViewStyle(t) {
            0 == t ? (this.tabUi.active = !1, this.inputUi.getComponent(C).color = f(25, 25, 33, 255), this.contentUi.getComponent(u).height = 867, this.barrageList.getComponent(u).height = 587, this.userList.getComponent(u).height = 607, this.adjustRoleHead(0)) : 1 == t && (this.tabUi.active = !0, this.inputUi.getComponent(C).color = f(31, 33, 46, 255), this.contentUi.getComponent(u).height = 747, this.barrageList.getComponent(u).height = 467, this.userList.getComponent(u).height = 487, this.adjustRoleHead(1))
        }
        setTabTxt(t, e) {
            h("txt", t).getComponent(C).color = e ? f(251, 216, 136, 255) : f(138, 139, 144, 255), h("line", t).active = e
        }
        setUiTab(t) {
            this._tabUiIndex = t, 0 == this._tabUiIndex ? (this.setTabTxt(h("btn_barrage", this.tabUi), !0), this.setTabTxt(h("btn_expression", this.tabUi), !1), this.inputUi.active = !0, this.contentUi.active = !0, this.expressionUi.active = !1) : (this.setTabTxt(h("btn_barrage", this.tabUi), !1), this.setTabTxt(h("btn_expression", this.tabUi), !0), this.inputUi.active = !1, this.contentUi.active = !1, this.expressionUi.active = !0)
        }
        onBarrageTab(t) {
            S.AudioMgr.playButtonSound("button_click"), this.setUiTab(0)
        }
        onExpressionTab(t) {
            S.AudioMgr.playButtonSound("button_click"), this.setUiTab(1)
        }
        onTxtTab(t) {
            S.AudioMgr.playButtonSound("button_click"), this.selectTabList(Tt.txt), this.hideDescription()
        }
        onUserTab(t) {
            S.AudioMgr.playButtonSound("button_click"), this.selectTabList(Tt.user), this.hideDescription()
        }
        onHelpBtn(t) {
            S.AudioMgr.playButtonSound("button_click"), this.descriptionNode.active ? this.hideDescription() : this.showDescription()
        }
        onSendBtn(t) {
            if (S.dataHandler.getUserData().u32Chips < this.price) return void S.TT.showMsg(S.config.getStringData("ServerErrorCode172"), S.Enum.ToastType.ToastTypeError);
            let e = h("input_box", this.inputNode).getComponent(m).string,
                i = e;
            if (this._atPlayer && (i = e.substring(this._atPlayer.name.length)), 0 == e.length || 0 == i.length) return void S.TT.showMsg(S.config.getStringData("FaceBarrage_input_txt_empty"), S.Enum.ToastType.ToastTypeSuccess);
            if (this.getStrLen(e) > this._inputStringMaxLen) return void S.TT.showMsg(S.config.getStringData("ServerErrorCode1276"), S.Enum.ToastType.ToastTypeSuccess);
            let n = S.StringTools.isSensitiveWords(i, !0);
            i = n || i, i = i.replace(new RegExp("[￰-￿]", "g"), "*"), this.sendBarrage(i, L.protocol.BarrageType.Enum_Custom)
        }
        onStateBtn(t) {
            S.AudioMgr.playButtonSound("button_click");
            let e = S.tools.isShowBarrage();
            S.tools.setShowBarrage(!e), this.clikcOnOff()
        }
        onHideUi(t) {
            this.hideUi()
        }
        onBarrageMute(t) {
            U.isInvalidRoomMultiWindow(t.gameData, null == this ? void 0 : this.node) || (this.mute = t.mute, this.muteTime = t.time, this._isInCd && (this._cdTime = 5, this._isInCd = !1, this.unschedule(this.updateDanmuCd)), this.setController(), this.unschedule(this.updateMuteTime), this.mute ? (this.lockController(!0), -1 == this.muteTime ? this.showTip(S.config.getStringData("ServerErrorCode1274"), 3) : (this.showTip(S.StringTools.formatC(S.config.getStringData("FaceBarrage_danmu_disable"), this.secondToMinute(this.muteTime))), this.schedule(this.updateMuteTime, 10))) : (this.lockController(!1), this.hideTip()), S.MessageCenter.send("updateCdStatus", this.currentCdStatus()))
        }
        onBarrageConfChange(t) {
            this.canBarrage = t.canBarrage, this.canInput = t.canInput, this.price = t.price, this.setPrice(), this.setController()
        }
        onBarrageUpdate(t) {
            this.canBarrage = t.canBarrage, this.canInput = t.canInput, this.price = t.price, this.setPrice(), this.onBarrageMute({
                mute: t.mute,
                time: t.time
            })
        }
        canCustomBarrage() {
            return -1 != this.gameDataInstance.tRoomData.i32SelfSeat ? this.canBarrage && this.canInput : this.canBarrage
        }
        secondToMinute(t) {
            return t < 0 ? 0 : Math.ceil(t / 60)
        }
        onResetCdtime() {
            this._isInCd = !0, this._cdTime = 5, this.setController(), this.lockController(!0), S.MessageCenter.send("updateCdStatus", this.currentCdStatus()), this.schedule(this.updateDanmuCd, 1)
        }
        setGameScene(t) {
            this.game = t
        }
        initRoleHead() {
            for (let t = 0; t < 6; t++) {
                let t = g(this.roleHeadItemPrefab);
                t.getComponent(B).setFaceView(this), t.active = !0, this.userList.addChild(t), this.roleHeadItemList.push(t.getComponent(B))
            }
        }
        adjustRoleHead(t) {
            let e = 1 == t ? 239 : 269,
                i = 1 == t ? 112 : 128,
                n = 1 == t ? 250 : 279,
                a = .5 * this.userList.getComponent(u).width - 202,
                s = -a;
            for (let t = 0; t < this.roleHeadItemList.length; ++t) {
                this.roleHeadItemList[t].selectImg.getComponent(u).height = e, this.roleHeadItemList[t].node.setPosition(s + a * (t % 3), -(i + n * Math.floor(t / 3)))
            }
        }
        showRoleHead() {
            if (this.userList.active = !0, this._needUpdateUser) {
                this._needUpdateUser = !1;
                let t = [],
                    e = this.gameDataInstance.tRoomData.kTablePlayerList.length;
                for (let i = 0; i < e; i++) this.gameDataInstance.tRoomData.kTablePlayerList[i].playerid != S.dataHandler.getUserData().u32Uid && t.push(this.gameDataInstance.tRoomData.kTablePlayerList[i]);
                this.roleHeadDataList = t;
                for (let e = 0; e < this.roleHeadItemList.length; e++) e < t.length ? (this.roleHeadItemList[e].setData(t[e]), this.roleHeadItemList[e].node.active = !0) : (this.roleHeadItemList[e].clearData(), this.roleHeadItemList[e].node.active = !1)
            }
        }
        hideRoleHead() {
            this.userList.active = !1
        }
        onclickRoleHead(t, e) {
            let i = null;
            for (let e = 0; e < this.roleHeadItemList.length; e++) this.roleHeadItemList[e].hideSelectImg(), this.roleHeadItemList[e].getPlayerId() == t && (i = this.roleHeadItemList[e]);
            i && e ? (this.addAtPlayer({
                name: this._atStr + i.getRoleName(),
                playerid: t
            }), i.showSelectImg()) : this.removeAtPlayer()
        }
        start() {
            this.barrageList.getComponent(D).init(this.bindcallfunc.bind(this), this.getItemType.bind(this)), this.initRoleHead(), S.MessageCenter.register("danmuItemClick", this.danmuItemClick.bind(this), this.node), S.MessageCenter.register("getBarrageCountNotice", this.onGetCounts.bind(this), this.node), S.MessageCenter.register("onClickDanmuSwitch", this.clikcOnOff.bind(this), this.node), S.MessageCenter.register("resetCdTime", this.onResetCdtime.bind(this), this.node), S.MessageCenter.register("barrageMute", this.onBarrageMute.bind(this), this.node), S.MessageCenter.register("barrageConfChange", this.onBarrageConfChange.bind(this), this.node), S.MessageCenter.register("barrageUpdate", this.onBarrageUpdate.bind(this), this.node)
        }
        onDestroy() {
            S.MessageCenter.unregister("danmuItemClick", this.node), S.MessageCenter.unregister("getBarrageCountNotice", this.node), S.MessageCenter.unregister("onClickDanmuSwitch", this.node), S.MessageCenter.unregister("resetCdTime", this.node), S.MessageCenter.unregister("barrageMute", this.node), S.MessageCenter.unregister("barrageConfChange", this.node), S.MessageCenter.unregister("barrageUpdate", this.node), S.GameDataManager.clearBarrageData(), this.unschedule(this.updateDanmuCd), this.unschedule(this.updateMuteTime)
        }
        bindcallfunc(t, e, i) {
            t.getComponent(y).updateItemData(e)
        }
        getItemType(t, e) {
            return 0
        }
        onGetCounts() {
            S.GameDataManager.sortBarrageData()
        }
        showScrollView() {
            this.barrageList.active = !0, this._needUpdateTxt ? (this._needUpdateTxt = !1, this.barrageList.getComponent(D).notifyDataSetChanged(S.GameDataManager.getBarrageData()), S.MessageCenter.send("updateCdStatus", this.currentCdStatus())) : this._needUpdateUi && (this.barrageList.getComponent(s).scrollToTop(0), this.barrageList.getComponent(D).notifyDataSetChanged(S.GameDataManager.getBarrageData()))
        }
        hideScrollView() {
            this.barrageList.active = !1
        }
        initScrollviewData() {
            let t = this.DZPOKER_DANMU_COUNT;
            for (let e = 0; e < t; e++) {
                let t = new v;
                t.content = S.config.getStringData(S.StringTools.formatC("Faceview_danmu_text_%d", e)), t.BarrageId = e, t.count = 0, S.GameDataManager.addBarrageData(t)
            }
        }
        danmuItemClick(t) {
            this.sendBarrage(t)
        }
        sendBarrage(t, e = L.protocol.BarrageType.Enum_System) {
            var i;
            if (S.AudioMgr.playEffect("zh_CN/game/dzpoker/audio/danmu"), this.currentCdStatus()) return;
            this._isInCd = !0;
            let n = this._atPlayer;
            this.setController(), this.lockController(!0), S.MessageCenter.send("updateCdStatus", this.currentCdStatus()), this.schedule(this.updateDanmuCd, 1);
            let a = new L.protocol.NoticeSendBarrage;
            a.content = S.String(t), a.nickname = S.dataHandler.getUserData().nick_name, a.playerid = S.Number(S.dataHandler.getUserData().user_id), a.thump_up_status = 1, a.ctype = e;
            let s = [],
                r = [];
            n && (s.push(n.name), r.push(n.playerid)), a.at_list = s, S.gameNet.requestSendBarrage(null == (i = this.gameDataInstance) || null == (i = i.tRoomData) ? void 0 : i.u32RoomId, S.String(t), s, r, 1, e)
        }
        updateMuteTime(t) {
            this.muteTime -= t, this.muteTime <= 0 ? (this.gameDataInstance.tRoomData.muteCustomBarrageSeconds = 0, this.muteTime = 0, this.mute = !1, this.setController(), this.lockController(!1), this.hideTip(), S.MessageCenter.send("updateCdStatus", this.currentCdStatus()), this.unschedule(this.updateMuteTime)) : this.showTip(S.StringTools.formatC(S.config.getStringData("FaceBarrage_danmu_disable"), this.secondToMinute(this.muteTime)))
        }
        updateDanmuCd() {
            this._cdTime -= 1, this._cdTime <= 0 ? (this._cdTime = 5, this._isInCd = !1, this.setController(), this.lockController(!1), this.hideTip(), S.MessageCenter.send("updateCdStatus", this.currentCdStatus()), this.unschedule(this.updateDanmuCd)) : this.showTip(S.StringTools.formatC(S.config.getStringData("Faceview_danmu_cd_tips"), this._cdTime))
        }
        clikcOnOff() {
            S.MessageCenter.send("danmu_onOff", S.tools.isShowBarrage()), this.setController(), S.tools.isShowBarrage() ? (this.lockController(!1), this.showTip(S.config.getStringData("Faceview_danmu_button_on"), 3)) : (this.lockController(!0), this.showTip(S.config.getStringData("Faceview_danmu_button_off"), 3)), S.MessageCenter.send("updateCdStatus", this.currentCdStatus())
        }
        showUi() {
            this._needUpdateUser = !0, this._needUpdateUi = !0, h("input_box", this.inputNode).getComponent(m).string = "", this._atPlayer = null, -1 != this.gameDataInstance.tRoomData.i32SelfSeat ? (this.setViewStyle(1), this.setTabTxt(h("btn_barrage", this.tabUi), !0), this.setTabTxt(h("btn_expression", this.tabUi), !1), this.updateEmotionNeedCoin(), this.setUiTab(this._tabUiIndex)) : (this.setViewStyle(0), this.inputUi.active = !0, this.contentUi.active = !0, this.expressionUi.active = !1, this._tabUiIndex = 0), this.setController(), this.selectTabList(Tt.txt), this.hideDescription(), this._autoHideTip && this.hideTip(), this.slideView.show(!1)
        }
        hideUi() {
            this.slideView.hide()
        }
        faceItemClick(t, e) {
            if (-1 != this.gameDataInstance.tRoomData.i32SelfSeat) {
                let e = t.currentTarget,
                    i = S.Number(e.name.slice(5));
                S.gameNet.RequestSendChat(this.gameDataInstance.tRoomData.u32RoomId, S.Enum.ChatType.Enum_Emoji, S.String(i))
            }
            this.hideUi()
        }
        addChildToContainer(t) {
            this.game.gameMain_panel.addChild(t)
        }
        updateEmotionNeedCoin() {
            for (let t = 0; t < this._faceLen; t++) {
                let e = h(S.StringTools.formatC("face_%d/goldImg/goldText", t), this.expressionUi).getComponent(l),
                    i = h(S.StringTools.formatC("face_%d/goldImg", t), this.expressionUi),
                    n = this.gameDataInstance.tRoomData.kingBee;
                n <= 0 ? (i.active = !1, e.node.active = !1) : (i.active = !0, e.node.active = !0, e.string = S.StringTools.serverGoldToShowString(n))
            }
        }
        setParentNode(t) {
            t && (this._danmu_view = g(this.danmu_Panel_prefab), this._danmu_view.getComponent(T).setParentNode(t))
        }
        setDanmuChanel(t) {
            this._danmu_view && this._danmu_view.getComponent(T).setDanmuChanel(t)
        }
        adjustDanmuMaxNumber(t) {
            this._danmu_view && this._danmu_view.getComponent(T).adjustDanmuMaxNumber(t)
        }
    }).prototype, "slideView", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(Y.prototype, "tabUi", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Y.prototype, "expressionUi", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Y.prototype, "inputUi", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(Y.prototype, "contentUi", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(Y.prototype, "stateBtn", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(Y.prototype, "sendBtn", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(Y.prototype, "inputNode", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(Y.prototype, "barrageList", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(Y.prototype, "userList", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(Y.prototype, "maskBtn", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(Y.prototype, "txtBtn", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(Y.prototype, "atBtn", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(Y.prototype, "descriptionNode", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(Y.prototype, "descriptionTouch", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(Y.prototype, "tipNode", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(Y.prototype, "scrollView", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(Y.prototype, "roleHeadItemPrefab", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(Y.prototype, "danmu_Panel_prefab", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(Y.prototype, "gameDataInstance", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = Y)) || Q));
    n._RF.pop()
}