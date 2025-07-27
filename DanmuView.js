import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cv.js";
import * as _ from "./gs_protocol.mjs_cjs=&original=.js";
import * as f from "./Tag.js";
import * as D from "./Tag.js";
import * as b from "./GameSceneInstance.js";

function main() {
    var C, S, N, v;
    n._RF.push({}, "dbbe8NjZD1BHrpDXzRrkdG2", "DanmuView", void 0);
    const {
        ccclass: y,
        property: I
    } = i;
    t("default", (C = D("GameDataInstance"), y((v = e((N = class extends s {
        constructor(...t) {
            super(...t), this.danmuNodes = [], this.danmuChanel = [{
                pos: 318,
                idle: !0
            }, {
                pos: 178,
                idle: !0
            }, {
                pos: -262,
                idle: !0
            }], this._actionTime = 4, this._maxActiveNumber = 5, this._isallin = !1, this._danmuCaches = [], a(this, "gameDataInstance", v, this)
        }
        onLoad() {
            for (let t = 0; t < 10; t++) {
                let e = r(p.StringTools.formatC("bulltScreenBg%d", t), this.node);
                e.active = !1, this.danmuNodes.push(e)
            }
            p.MessageCenter.register("forbid_chat", this.onIsAllin.bind(this), this.node), p.MessageCenter.register("danmu_onOff", this.onDanmu_onOff.bind(this), this.node), this.schedule(this.updateDanmuMsg, this._actionTime / this._maxActiveNumber), this.node.getComponent(o).opacity = p.tools.isShowBarrage() ? 255 : 0
        }
        start() {
            u.on(l.EVENT_HIDE, this.OnAppEnterBackground, this), u.on(l.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        onDestroy() {
            this.unschedule(this.updateDanmuMsg), p.MessageCenter.unregister("danmu_onOff", this.node), p.MessageCenter.unregister("forbid_chat", this.node), u.off(l.EVENT_HIDE, this.OnAppEnterBackground, this), u.off(l.EVENT_SHOW, this.OnAppEnterForeground, this), p.GameDataManager.clearDanmuMsg()
        }
        onIsAllin(t) {
            if (this._isallin = t, !this._isallin && this._danmuCaches.length > 0) {
                for (let t = 0; t < this._danmuCaches.length; t++) {
                    var e;
                    let a = this._danmuCaches[t];
                    p.gameNet.requestSendBarrage(null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId, a.content, a.at_list, a.at_uid_list, a.thump_up_status, a.ctype)
                }
                this._danmuCaches = []
            }
        }
        _getContentStrByKey(t, e, a) {
            let n = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if (-1 == a) return "";
            if (0 == a) return p.config.getStringData(t);
            {
                let a = "";
                return a = p.config.getCurrentLanguage() == p.Enum.LANGUAGE_TYPE.zh_CN ? p.config.getStringData("jackfruit_cardSuit_" + e[2]) + n[p.Number(e[3])] : n[p.Number(e[3])] + p.config.getStringData("jackfruit_cardSuit_" + e[2]), p.StringTools.formatC(p.config.getStringData(t), a)
            }
        }
        _getContentStr(t) {
            let e = "jackfruit_danmu_label_",
                a = -1;
            if (t.length > 0) {
                let n = t.split(";");
                if (4 == n.length) {
                    e += n[0];
                    let t = n[0].split("_");
                    a = 0 == p.Number(t[0]) ? 0 == p.Number(t[1]) ? p.Number(t[2]) < 5 ? 1 : 0 : p.Number(t[2]) < 3 ? 1 : p.Number(t[2]) < 8 ? 2 : 0 : 0 == p.Number(t[1]) ? p.Number(t[2]) < 3 ? 1 : 0 : p.Number(t[2]) < 2 ? 1 : p.Number(t[2]) < 9 ? 2 : 0
                }
                return this._getContentStrByKey(e, n, a)
            }
            return ""
        }
        OnAppEnterBackground() {
            p.config.resetSignTime(), p.GameDataManager.clearDanmuMsg()
        }
        OnAppEnterForeground() {
            p.config.signCurtime(), p.GameDataManager.clearDanmuMsg()
        }
        onDanmu_onOff(t) {
            this.node.getComponent(o).opacity = t ? 255 : 0
        }
        updateDanmuMsg(t) {
            if (this.currentDanmuActiveNumber() >= this._maxActiveNumber) return;
            let e = this.getIdleChannel();
            if (null == e) return;
            let a = p.GameDataManager.getDanmuMsg();
            if (!a) return;
            let n = this.getDanmuNode(),
                i = r("richtext", n),
                s = "",
                u = "",
                l = "";
            const d = f.getInstanceGameId(null == this ? void 0 : this.node);
            if (3 == a.ctype) l = p.StringTools.formatC(p.config.getStringData("Star_danmu_like"), a.liked_nickname, a.nickname);
            else if (4 == a.ctype);
            else if (a.ctype == b.protocol.BarrageType.Enum_Custom) l = a.content;
            else if (u = d == p.Enum.GameId.Jackfruit ? "jackfruit_danmu_label" : "Faceview_danmu_text_", p.StringTools.isNumber(a.content)) l = p.config.getStringData(u + a.content);
            else if (l = this._getContentStr(a.content), 0 == l.length) return;
            d == p.Enum.GameId.Jackfruit || -1 == this.gameDataInstance.tRoomData.i32SelfSeat && !this.isGameStarSeat() ? r("button", n).active = !1 : (r("button", n).active = !0, 1 != a.thump_up_status && 3 != a.thump_up_status || a.playerid == p.dataHandler.getUserData().u32Uid ? 2 == a.thump_up_status && a.playerid != p.dataHandler.getUserData().u32Uid ? (r("button/thumbUp_normal", n).active = !1, r("button/thumbUp_pressed", n).active = !0) : r("button", n).active = !1 : (r("button", n).getComponent(_).setData(a), r("button/thumbUp_normal", n).active = !0, r("button/thumbUp_pressed", n).active = !1));
            let g = "";
            3 == a.ctype || 4 == a.ctype ? (g = "", s = l) : (g = (a.at_list && a.at_list.length) > 0 ? a.at_list[0] : "", s = p.StringTools.formatC("<color=#bb7e41>%s：</color><color=#ffab00>%s </color><color=#ffffff>%s</color>", a.nickname, g, l)), a.playerid == p.dataHandler.getUserData().u32Uid && (s = p.StringTools.formatC("<color=#ffab00>%s：</color><color=#ffab00>%s </color><color=#ffffff>%s</color>", a.nickname, g, l)), this.isAtSelf(g) || a.playerid == p.dataHandler.getUserData().u32Uid ? (r("bulltScreenBg_atself", n).active = !0, r("bulltScreenBg_normal", n).active = !1, n.getComponent(o).opacity = 255) : (r("bulltScreenBg_normal", n).active = !0, r("bulltScreenBg_atself", n).active = !1, n.getComponent(o).opacity = 216.75), i.getComponent(m).string = s, this.useChannel(e), n.active = !0;
            let D = i.getComponent(c).width,
                C = n.getComponent(c);
            C.setContentSize(h(D + 120, C.height)), n.setPosition(p.config.WIDTH / 2 + D / 2 + 10, e.pos);
            C.width, p.config.WIDTH, this._actionTime;
            p.resMgr.adaptWidget(n, !0)
        }
        isAtSelf(t) {
            let e = t.indexOf("@"),
                a = t.slice(e + 1, t.length);
            return p.StringTools.earseSpace(a) == p.dataHandler.getUserData().nick_name
        }
        getDanmuNode() {
            for (let t = 0; t < this.danmuNodes.length; t++)
                if (!this.danmuNodes[t].active) return this.danmuNodes[t];
            let t = d(this.danmuNodes[0]);
            return this.danmuNodes[0].getParent().addChild(t), g.stopAllByTarget(t), t.active = !1, this.danmuNodes.push(t), t
        }
        setDanmuChanel(t) {
            if (!t) return;
            let e = "number" == typeof t ? [t] : t;
            if (0 == e.length) return;
            let a = this.danmuChanel;
            this.danmuChanel = [];
            for (let t = 0; t < e.length; ++t) {
                let n = null;
                for (let i = 0; i < a.length; ++i)
                    if (e[t] == a[i].pos) {
                        n = a[i];
                        break
                    } n || (n = {
                    pos: e[t],
                    idle: !0
                }), this.danmuChanel.push(n)
            }
        }
        getIdleChannel() {
            let t = [];
            for (let e = 0; e < this.danmuChanel.length; ++e) this.danmuChanel[e].idle && t.push(this.danmuChanel[e]);
            return 0 == t.length ? null : t[Math.floor(Math.random() * t.length)]
        }
        freeChannel(t) {
            t && (t.idle = !0)
        }
        useChannel(t) {
            t && (t.idle = !1)
        }
        setParentNode(t) {
            t && t.addChild(this.node)
        }
        adjustDanmuMaxNumber(t) {
            t && (this.unschedule(this.updateDanmuMsg), this._maxActiveNumber = t, this.schedule(this.updateDanmuMsg, this._actionTime / this._maxActiveNumber))
        }
        currentDanmuActiveNumber() {
            let t = 0;
            for (let e = 0; e < this.danmuNodes.length; e++) this.danmuNodes[e].active && t++;
            return t
        }
        onClickThumbUp(t) {
            this.isGameStarSeat() ? this.clickThumbUpStar(t) : this.clickThumbUpNormal(t)
        }
        clickThumbUpNormal(t) {
            if (-1 == this.gameDataInstance.tRoomData.i32SelfSeat || f.getInstanceGameId(null == this ? void 0 : this.node) == p.Enum.GameId.Jackfruit) return;
            let e = t.currentTarget,
                a = e.getComponent(_).getData();
            if (2 == a.thump_up_status) return;
            e.getChildByName("thumbUp_normal").active = !1, e.getChildByName("thumbUp_pressed").active = !0, a.thump_up_status = 2, e.getComponent(_).setData(a);
            let n = new b.protocol.NoticeSendBarrage;
            var i;
            (n.content = a.content, n.nickname = p.dataHandler.getUserData().nick_name, n.playerid = p.Number(p.dataHandler.getUserData().user_id), n.thump_up_status = 3, n.ctype = a.ctype, n.at_list = n.at_list, p.MessageCenter.send("resetCdTime"), this._isallin) ? this._danmuCaches.push(n): p.gameNet.requestSendBarrage(null == (i = this.gameDataInstance) || null == (i = i.tRoomData) ? void 0 : i.u32RoomId, n.content, n.at_list, n.at_uid_list, n.thump_up_status, n.ctype)
        }
        clickThumbUpStar(t) {
            if (-1 == this.gameDataInstance.tRoomData.muteCustomBarrageSeconds || this.gameDataInstance.tRoomData.muteCustomBarrageSeconds > 0) return;
            let e = t.currentTarget,
                a = e.getComponent(_).getData();
            if (2 == a.thump_up_status) return;
            e.getChildByName("thumbUp_normal").active = !1, e.getChildByName("thumbUp_pressed").active = !0, a.thump_up_status = 2, e.getComponent(_).setData(a);
            let n = new b.protocol.NoticeSendBarrage;
            var i;
            (n.content = a.content, n.nickname = p.dataHandler.getUserData().nick_name, n.playerid = p.Number(p.dataHandler.getUserData().user_id), n.thump_up_status = 3, n.ctype = a.ctype, n.at_list = n.at_list, p.MessageCenter.send("resetCdTime"), this._isallin) ? this._danmuCaches.push(n): p.gameNet.requestSendBarrage(null == (i = this.gameDataInstance) || null == (i = i.tRoomData) ? void 0 : i.u32RoomId, n.content, n.at_list, n.at_uid_list, n.thump_up_status, n.ctype)
        }
        isGameStarSeat() {
            return this.gameDataInstance.tRoomData.u32GameID == p.Enum.GameId.StarSeat
        }
    }).prototype, "gameDataInstance", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = N)) || S));
    n._RF.pop()
}