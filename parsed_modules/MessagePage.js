import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as E from "./cc.js";
import * as p from "./cc.js";
import * as A from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as M from "./Pb.js";
import * as C from "./httpApis.js";
import * as S from "./Translator.js";
import * as I from "./mttconfig.js";
import * as b from "./ImpokerHall.js";
import * as y from "./NestableScrollView_Outer_ts.js";
import * as O from "./NestableScrollView_Inner_ts.js";
import * as G from "./MessageTuple.js";
import * as N from "./AndroidBackButton.js";
import * as v from "./TweenControl.js";

function main() {
    var P, L, R, f, w, D, k, V, H, B, U, x, $, F, K, z, J, W;
    a._RF.push({}, "d94bcLjxr9G/4+T72NuROaJ", "MessagePage", void 0);
    const {
        ccclass: X,
        property: Y
    } = r;
    var j = e("BROADCAST_MESSAGE_EVENT_TYPE", i({
            PLAIN: 0,
            LINK: 1,
            HOT_UPDATE_NOTICE: 2,
            ENTER_GAME_NOTICE: 1e3,
            ASSO_APPLICATION_REQ: 1001,
            OUT_GAME_NOTICE: 1002,
            MTT_STATUS_CHANGED_NOTICE: 1003,
            END_GAME_NOTICE: 1004,
            CANCEL_GAME_NOTICE: 1005,
            EVENTS_UPDATED: 2e3,
            RED_POCKET_NOTICE: 3e3,
            RED_POCKET_CAROUSEL: 3001,
            GOT_TOOL: 3500,
            CHANGE_REJECT: 4e3,
            PUSH_CAROUSEL: 4500
        })),
        Q = e("MessageState", i({
            unread: 0,
            read: 1
        })),
        q = (e("ReviewType", i({
            avatar: "AVATAR",
            nickname: "NICKNAME"
        })), i({
            normal: 0,
            mtt: 1,
            holdem: 2,
            roll: 3,
            none: 999
        })),
        Z = i({
            selfMessage: 0,
            systemMessage: 1
        }),
        ee = ["selfMessage", "systemMessage"],
        te = i({
            textOnly: 0,
            textButton: 1,
            pictureContent: 2
        }),
        se = ["MessageTupleType1", "MessageTupleType2", "MessageTupleType3"];
    class ae {
        constructor() {
            this.list = []
        }
    }
    e("MessagePage", (P = Y(o), L = Y([o]), R = Y([o]), f = Y(o), w = Y(y), D = Y([O]), k = Y([l]), V = Y([n]), X((U = t((B = class extends g {
        constructor(...e) {
            super(...e), s(this, "clearNode", U, this), s(this, "subPageHeader", x, this), s(this, "subPageRedDot", $, this), s(this, "underline", F, this), s(this, "pageView", K, this), s(this, "listView", z, this), s(this, "emptyLabel", J, this), s(this, "messageTuple", W, this), this.tuplePerPage = 12, this.grey = (new c).fromHEX(I.FONT_COLOR.GRAY), this.white = (new c).fromHEX(I.FONT_COLOR.WHITE), this._impokerHall = null, this._redirect = null, this.initScroll = !0, this.canClear = !1, this.redDotTimeout = [], this.message = []
        }
        get oneMonthAgo() {
            let e = new Date,
                t = e.getMonth() - 1;
            return e.setFullYear(e.getFullYear() - (t < 0 ? 1 : 0), t < 0 ? 11 : t), e.getTime()
        }
        onLoad() {
            cc_mtt.vv.ConsoleLog.log("message page onload"), this._impokerHall = h.getScene().getComponentInChildren(b), this.pageView.node.on(d.EventType.PAGE_TURNING, (() => {
                let e = this.pageView.content.getComponent(E);
                e.left = -this.pageView.getCurrentPageIndex(), e.right = this.pageView.getCurrentPageIndex() + 1 - this.listView.length;
                let t = this.underline.getComponent(E);
                t.left = this.pageView.getCurrentPageIndex() / this.listView.length, t.right = (this.pageView.getCurrentPageIndex() + 1) % this.listView.length / this.listView.length;
                for (let e = 0; e < this.subPageHeader.length; e++) this.subPageHeader[e].getComponent(m).color = e === this.pageView.getCurrentPageIndex() ? this.white : this.grey;
                this.triggerClearLabel(!this.emptyLabel[this.pageView.getCurrentPageIndex()].enabled), this.setRedDot(this.pageView.getCurrentPageIndex()), this.changeMessage(this.pageView.getCurrentPageIndex(), Q.read), this.initScroll = !1
            })), this.node.active = !1
        }
        start() {
            cc_mtt.vv.ConsoleLog.log("message page start"), this.loadAllMessage(.5).then((e => {
                this._impokerHall.checkMessageRedDot(this.checkAllMessage(Q.unread)), cc_mtt.vv.ConsoleLog.log("MessagePage redirect:\n" + this._redirect), null !== this._redirect ? (this._impokerHall.onClickMessage(this._redirect), this._redirect = null) : this.node.active = !1, cc_mtt.vv.ConsoleLog.log("message page start, message page active: ", this.node.active)
            }))
        }
        update(e) {
            if (this.node.active) {
                let e = this.listView[this.pageView.getCurrentPageIndex()].content;
                e.children.length > 0 && e.position.y + e.children[e.children.length - 1].position.y + e.children[e.children.length - 1].getComponent(_).height >= -e.parent.getComponent(_).height && this.addTuple(this.pageView.getCurrentPageIndex(), 1);
                let t = -this.pageView.node.getComponent(_).width / 2;
                this.underline.position = new p(t - (this.pageView.content.position.x - t) / this.listView.length, this.underline.position.y)
            }
        }
        init(e) {
            u.isNative && u.os === u.OS.ANDROID && N.getInstance().addBackFunction("MessagePage", this.onClickBack.bind(this)), this._impokerHall.showLoading(), this.loadAllMessage().then((t => {
                for (let e = 0; e < ee.length; e++) this.setRedDot(e, !0), this.removeTuple(e), this.triggerEmptyLabel(e, 0 === this.message[e].list.length), this.triggerClearLabel(!this.emptyLabel[e].enabled), this.addTuple(e, this.tuplePerPage);
                this.changeSubPage(isNaN(e) || e < 0 || e >= ee.length ? Z.selfMessage : e, !0), this._impokerHall.hidLoading((() => {
                    t || this.checkAllMessage(Q.unread) || setTimeout((() => {
                        cc_mtt.vv.AssetsManager.showDialogBox("", "MESSAGE_PAGE.GENERAL.DIALOG.NETWORK_ERROR", !1, [{
                            type: 0,
                            text: "MESSAGE_PAGE.GENERAL.DIALOG.CONFIRM",
                            callback: void 0
                        }], this._impokerHall.layers[7])
                    }), 300)
                }))
            }))
        }
        triggerEmptyLabel(e, t) {
            this.emptyLabel[e].enabled = t
        }
        triggerClearLabel(e) {
            this.canClear = e, this.clearNode.getComponent(m).color = this.canClear ? this.white : this.grey
        }
        setRedDot(e, t = !1, s = !1, a = !1) {
            let i = this.checkMessage(e, Q.unread),
                o = t || this.initScroll ? .01 : .3;
            !s && this.redDotTimeout[e] || (v.fade(this.subPageRedDot[e], i ? .01 : o, i ? 255 : 0), a && this._impokerHall.checkMessageRedDot(this.checkAllMessage(Q.unread)), t || a || !i || e !== this.pageView.getCurrentPageIndex() ? this.redDotTimeout[e] = null : this.redDotTimeout[e] = setTimeout((() => {
                "hall" === h.getScene().name && this.clearRedDot(e)
            }), 2e3))
        }
        clearRedDot(e, t = !1) {
            this.changeMessage(e, Q.read), this.setRedDot(e, !1, !0, t);
            for (let t = 0; t < this.listView[e].content.children.length; t++) this.listView[e].content.children[t].getComponent(G).setRedDot(!1);
            t || this._impokerHall.checkMessageRedDot(!1)
        }
        changeSubPage(e, t = !1) {
            (t || this.pageView.getCurrentPageIndex() !== e) && this.pageView.scrollToPage(e, .3)
        }
        onClickBack() {
            u.isNative && u.os === u.OS.ANDROID && N.getInstance().removeBackFunction("MessagePage"), this._impokerHall.controlHallBlockLayer(!0, this.name), this._impokerHall.movePageToRight(this.node), setTimeout((() => {
                this._impokerHall.controlHallBlockLayer(!1, this.name), this.initScroll = !0, this.clearRedDot(this.pageView.getCurrentPageIndex(), !0);
                for (let e = 0; e < ee.length; e++) this.removeTuple(e)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        onClickClear() {
            this.canClear && cc_mtt.vv.AssetsManager.showDialogBox("", "MESSAGE_PAGE.GENERAL.DIALOG.CLEAR", !1, [{
                type: 1,
                text: "MESSAGE_PAGE.GENERAL.DIALOG.CANCEL",
                callback: void 0
            }, {
                type: 0,
                text: "MESSAGE_PAGE.GENERAL.DIALOG.CONFIRM",
                callback: () => {
                    this.removeMessage(this.pageView.getCurrentPageIndex())
                }
            }], this._impokerHall.layers[7])
        }
        onClickSubHeader(e, t) {
            this.changeSubPage(parseInt(t))
        }
        dateFormat(e) {
            return S("MESSAGE_PAGE.DATE.FORMAT").replace("{0}", S(`MESSAGE_PAGE.DATE.MONTH.${e.getMonth()}`)).replace("{1}", `${e.getDate()}`)
        }
        timeFormat(e) {
            let t = e.getHours(),
                s = e.getMinutes();
            return `${t<10?`0${t}`:t}:${s<10?`0${s}`:s}`
        }
        prefix(e, t, s) {
            switch (e) {
                case void 0:
                case q.normal:
                case q.roll:
                    return S("MESSAGE_PAGE.MESSAGE.PREFIX." + (s ? "ROLL" : "NORMAL"));
                case q.mtt:
                    return S("MESSAGE_PAGE.MESSAGE.PREFIX.MTT");
                case q.holdem:
                    return S("MESSAGE_PAGE.MESSAGE.PREFIX." + (t ? "AOF" : "SNG"));
                case q.none:
                    return S("MESSAGE_PAGE.MESSAGE.PREFIX.SYSTEM");
                default:
                    return ""
            }
        }
        createTuple(e, t, s) {
            if (!t) return null;
            let a, i;
            switch (t.type) {
                case j.PLAIN:
                    a = T(this.messageTuple[te.textOnly]), i = a.getComponent(se[te.textOnly]), i.setContent(`${this.prefix(q.none,!1,!1)}${t.body.Content}`);
                    break;
                case j.LINK:
                    a = T(this.messageTuple[te.pictureContent]), i = a.getComponent(se[te.pictureContent]), i.setContent(t.title, t.body.Body, t.body.ImageUrl);
                    break;
                case j.ENTER_GAME_NOTICE:
                    a = T(this.messageTuple[te.textButton]), i = a.getComponent(se[te.textButton]), i.setContent(`${this.prefix(t.body.TypeId,t.body.IsAof,t.body.LevelId)}${S("MESSAGE_PAGE.MESSAGE.ENTER.FORMAT").replace("{0}",t.body.Name)}`, S("MESSAGE_PAGE.MESSAGE.ENTER.BUTTON")), i.setButtonCallback((() => {
                        switch (this._impokerHall.showLoading(), t.body.TypeId) {
                            case void 0:
                            case q.normal:
                            case q.roll:
                                t.body.disable ? this._impokerHall.hidLoading((() => {
                                    setTimeout((() => {
                                        cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "POPUP_HINTS.GAME_END", !1, [{
                                            type: 0,
                                            text: "MESSAGE_PAGE.GENERAL.DIALOG.CONFIRM",
                                            callback: void 0
                                        }], this._impokerHall.layers[7])
                                    }), 300)
                                })) : this._impokerHall.callGameView(M.commonProto.MTT_GAME_MODE.PP, I.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL, t.body.RoomId);
                                break;
                            case q.mtt:
                                this._impokerHall.callGameView(t.body.GameMode, I.GAME_LEVEL_LIST_ID.MTT, t.body.TournamentId);
                                break;
                            case q.holdem:
                                this._impokerHall.callGameView(t.body.GameMode, t.body.IsAof ? I.GAME_LEVEL_LIST_ID.AOF : I.GAME_LEVEL_LIST_ID.SNG, t.body.TournamentId)
                        }
                    }));
                    break;
                case j.MTT_STATUS_CHANGED_NOTICE:
                    a = T(this.messageTuple[te.textOnly]), i = a.getComponent(se[te.textOnly]), i.setContent(`${this.prefix(q.mtt,!1,!1)}${S("MESSAGE_PAGE.MESSAGE.MTT.FORMAT").replace("{0}",t.body.TournamentName).replace("{1}",S(`
                        MESSAGE_PAGE.MESSAGE.MTT.STATUS.$ {
                            t.body.Status
                        }
                        `))}`);
                    break;
                case j.END_GAME_NOTICE:
                    a = T(this.messageTuple[te.textButton]), i = a.getComponent(se[te.textButton]), i.setContent(`${this.prefix(t.body.TypeId,t.body.isAof,t.body.LevelId)}${S("MESSAGE_PAGE.MESSAGE.END.FORMAT").replace("{0}",t.body.Name)}`, S("MESSAGE_PAGE.MESSAGE.END.BUTTON")), i.setButtonCallback((() => {
                        this._impokerHall.showLoading();
                        let e = {
                            UserId: cc_mtt.vv.DataManager.userId
                        };
                        this._impokerHall.getGameResult(e, (e => {
                            let s, a = e.GameResults;
                            for (let e = 0; e < a.length; e++) {
                                let i = !1;
                                if (a[e].GameMode && t.body.GameMode === a[e].GameMode) switch (t.body.TypeId) {
                                    case void 0:
                                    case q.normal:
                                    case q.roll:
                                        if (t.body.LevelId) {
                                            if (a[e].LevelId && t.body.LevelId === a[e].LevelId && a[e].EndTime) {
                                                let o = new Date(a[e].EndTime),
                                                    l = Math.abs(t.time.getTime() - o.getTime());
                                                cc_mtt.vv.ConsoleLog.log("message button click\n     diff:", l, "\ndata.time:", t.time, "\n  EndTime:", o), l < 45e3 ? (cc_mtt.vv.ConsoleLog.log("diff true"), s = a[e], i = !0) : cc_mtt.vv.ConsoleLog.log("diff false")
                                            }
                                        } else a[e].RoomId && t.body.RoomId === a[e].RoomId && (s = a[e], i = !0);
                                        break;
                                    case q.mtt:
                                    case q.holdem:
                                        t.body.TournamentId === a[e].TournamentId && (s = a[e], i = !0)
                                }
                                if (i) break
                            }
                            s ? this._impokerHall.createProfilePage().createHistoryPage(this._impokerHall).callDetailPage(s.Id, this._impokerHall, this.node) : this._impokerHall.hidLoading((() => {
                                setTimeout((() => {
                                    cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_PAGE.GENERAL.DIALOG.GAME_RESULT_ERROR", !1, [{
                                        type: 0,
                                        text: "MESSAGE_PAGE.GENERAL.DIALOG.CONFIRM",
                                        callback: void 0
                                    }], this._impokerHall.layers[7])
                                }), 300)
                            }))
                        }))
                    })), this.setEnterMessage(e, t.body.RoomId);
                    break;
                case j.CANCEL_GAME_NOTICE:
                    a = T(this.messageTuple[te.textOnly]), i = a.getComponent(se[te.textOnly]), i.setContent(`${this.prefix(t.body.TypeId,t.body.isAof,t.body.LevelId)}${S("MESSAGE_PAGE.MESSAGE.CANCEL.FORMAT").replace("{0}",t.body.Name).replace("{1}",S("MESSAGE_PAGE.MESSAGE.CANCEL."+(t.body.LevelId?"ROLL":"DEFAULT")))}`);
                    break;
                default:
                    a = T(this.messageTuple[te.textOnly]), i = a.getComponent(se[te.textOnly]), i.setContent(`${S("MESSAGE_PAGE.MESSAGE.UNKNOWN")}${t.type}`)
            }
            return i.setTime(this.dateFormat(t.time), this.timeFormat(t.time)), i.setRedDot(t.state === Q.unread, !0), a.parent = s, a
        }
        addTuple(e, t, s = !1) {
            if (s) this.createTuple(0, this.message[e].list[0], this.listView[e].content).setSiblingIndex(0);
            else {
                let s = Math.min(this.listView[e].content.children.length + t, this.message[e].list.length);
                for (let t = this.listView[e].content.children.length; t < s; t++) this.createTuple(t, this.message[e].list[t], this.listView[e].content)
            }
        }
        removeTuple(e) {
            this.listView[e].scrollToTop(.01), this.listView[e].content.destroyAllChildren(), this.listView[e].content.removeAllChildren()
        }
        newMessageAction() {
            const e = u.localStorage;
            if (e.getItem("isVolume") && "1" == e.getItem("isVolume") && cc_mtt.vv.AssetsManager.loadResAudio("audio/sound_effect/new_message"), e.getItem("isVibrate") && "1" == e.getItem("isVibrate"))
                if (u.isNative) try {
                    u.os === u.OS.ANDROID ? A.reflection.callStaticMethod("com/cocos/game/AppActivity", "vibrate", "(F)V", .3) : u.os === u.OS.IOS && A.reflection.callStaticMethod("AppController", "vibrate")
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
                } else u.os === u.OS.IOS ? window.webkit.messageHandlers.vibrate.postMessage(null) : window.navigator.vibrate(300)
        }
        setEnterMessage(e, t) {
            let s = this.message[Z.selfMessage].list,
                a = !1;
            for (let i = e; i < s.length; i++) s[i].type !== j.ENTER_GAME_NOTICE || void 0 !== s[i].body.TypeId && s[i].body.TypeId !== q.normal || t !== s[i].body.RoomId || s[i].body.disable || (s[i].body.disable = !0, a = !0);
            this.saveAllMessage(a ? "setEnterMessage" : null)
        }
        addMessage(e, t) {
            this.node.active ? this.loadAllMessage().then((t => {
                t && (this.saveAllMessage("addMessage"), this.setRedDot(e), this.addTuple(e, 1, !0), this.listView[e].scrollToTop(.01))
            })) : t && (this._impokerHall.checkMessageRedDot(!0), this.newMessageAction())
        }
        removeMessage(e) {
            this.message[e].list = [], this.saveAllMessage("removeMessage"), this.setRedDot(e), this.removeTuple(e), this.triggerEmptyLabel(e, 0 === this.message[e].list.length), this.triggerClearLabel(!this.emptyLabel[e].enabled)
        }
        changeMessage(e, t) {
            let s = !1;
            for (let a = 0; a < this.message[e].list.length; a++) this.message[e].list[a].state !== t && (this.message[e].list[a].state = t, s = !0);
            this.saveAllMessage(s ? "changeMessage" : null)
        }
        checkMessage(e, t) {
            for (let s = 0; s < this.message[e].list.length; s++)
                if (this.message[e].list[s].state === t) return !0;
            return !1
        }
        checkAllMessage(e) {
            for (let t = 0; t < this.message.length; t++)
                if (this.checkMessage(t, e)) return !0;
            return !1
        }
        saveAllMessage(e) {
            let t = u.localStorage,
                s = this.oneMonthAgo;
            for (let e = 0; e < ee.length; e++) {
                let a = [];
                for (let t = 0; t < this.message[e].list.length; t++) this.message[e].list[t].time.getTime() > s && a.push(this.message[e].list[t]);
                this.message[e].list = a, t.setItem(`${ee[e]}_${cc_mtt.vv.DataManager.userId}`, JSON.stringify(this.message[e].list)), 0 !== this.message[e].list.length && t.setItem(`${ee[e]}_${cc_mtt.vv.DataManager.userId}_timestamp`, this.message[e].list[0].time.getTime())
            }
            null !== e && cc_mtt.vv.ConsoleLog.log(`${e} call saveAllMessage, localStorage:\n`, this.message)
        }
        loadAllMessage(e = 5) {
            return new Promise((t => {
                this.message = this.getLocalMessage(), this.getServerMessage(e).then((e => {
                    cc_mtt.vv.ConsoleLog.log("getServerMessage promise resolve:\n", e);
                    for (let t = 0; t < ee.length; t++) 0 !== e[t].list.length && (this.message[t].list = e[t].list.concat(this.message[t].list)), this.message[t].list = this.message[t].list.filter((e => {
                        switch (e.type) {
                            case j.PLAIN:
                            case j.LINK:
                            case j.ENTER_GAME_NOTICE:
                            case j.MTT_STATUS_CHANGED_NOTICE:
                            case j.END_GAME_NOTICE:
                            case j.CANCEL_GAME_NOTICE:
                                return !0;
                            case j.HOT_UPDATE_NOTICE:
                            case j.ASSO_APPLICATION_REQ:
                            case j.OUT_GAME_NOTICE:
                            case j.EVENTS_UPDATED:
                            case j.RED_POCKET_NOTICE:
                            case j.RED_POCKET_CAROUSEL:
                            case j.GOT_TOOL:
                            case j.CHANGE_REJECT:
                            case j.PUSH_CAROUSEL:
                                return cc_mtt.vv.ConsoleLog.log("delete known type:", e.type), !1;
                            default:
                                return !0
                        }
                    }));
                    t(!0)
                })).catch((e => {
                    cc_mtt.vv.ConsoleLog.log("getServerMessage promise reject:\n", e), t(!1)
                }))
            }))
        }
        getLocalMessage() {
            let e = u.localStorage,
                t = [];
            for (let s = 0; s < ee.length; s++) {
                let a = e.getItem(`${ee[s]}_${cc_mtt.vv.DataManager.userId}`);
                t[s] = new ae, t[s].list = a ? JSON.parse(a) : [];
                for (let e = 0; e < t[s].list.length; e++) t[s].list[e].time = new Date(t[s].list[e].time)
            }
            return [t[0], t[1]]
        }
        getTimestamp() {
            let e = u.localStorage,
                t = this.oneMonthAgo;
            for (let s = 0; s < ee.length; s++) {
                let a = e.getItem(`${ee[s]}_${cc_mtt.vv.DataManager.userId}_timestamp`);
                t = Math.max(t, a ? parseInt(a) + 1e3 : 0)
            }
            return Math.floor(t / 1e3)
        }
        getServerMessage(e) {
            return new Promise(((t, s) => {
                let a = new M.commonProto.UserBroadcastMessagesRequest;
                a.Token = cc_mtt.vv.DataManager.token, a.Timestamp = this.getTimestamp(), cc_mtt.vv.ConsoleLog.log("getServerMessage inputData:\n", a), C.requestUserBroadcastMessages(a, e).then((e => {
                    let s = new ae,
                        a = new ae;
                    for (let t = 0; t < e.UserBroadcastMessages.length; t++) {
                        let i = {
                                type: e.UserBroadcastMessages[t].TypeId,
                                messageType: e.UserBroadcastMessages[t].MessageType,
                                state: Q.unread,
                                time: e.UserBroadcastMessages[t].Created,
                                title: e.UserBroadcastMessages[t].Title,
                                body: {}
                            },
                            o = {};
                        switch (e.UserBroadcastMessages[t].TypeId) {
                            case j.PLAIN:
                                o = M.commonProto.Broadcast_Message_Plain.decode(e.UserBroadcastMessages[t].Body), i.body = o;
                                break;
                            case j.LINK:
                                o = M.commonProto.Broadcast_Message_Link.decode(e.UserBroadcastMessages[t].Body), i.body = o;
                                break;
                            case j.HOT_UPDATE_NOTICE:
                                break;
                            case j.ENTER_GAME_NOTICE:
                                o = M.commonProto.Broadcast_Message_Enter_Game.decode(e.UserBroadcastMessages[t].Body), i.body = o;
                                break;
                            case j.ASSO_APPLICATION_REQ:
                            case j.OUT_GAME_NOTICE:
                                break;
                            case j.MTT_STATUS_CHANGED_NOTICE:
                                o = M.commonProto.Broadcast_Message_Mtt_Status_Changed_Notice.decode(e.UserBroadcastMessages[t].Body), i.body = o;
                                break;
                            case j.END_GAME_NOTICE:
                            case j.CANCEL_GAME_NOTICE:
                                o = M.commonProto.Broadcast_Message_End_Game.decode(e.UserBroadcastMessages[t].Body), i.body = o;
                                break;
                            case j.EVENTS_UPDATED:
                            case j.RED_POCKET_NOTICE:
                            case j.RED_POCKET_CAROUSEL:
                            case j.GOT_TOOL:
                                break;
                            case j.CHANGE_REJECT:
                                let s = e.UserBroadcastMessages[t].Title.toUpperCase(),
                                    a = u.localStorage.getItem(`${cc_mtt.vv.DataManager.userId}_${s}_REJECT`),
                                    l = (a ? parseInt(a) : (new Date).getTime()) - cc_mtt.vv.DataManager.timeOffset;
                                i.time.getTime() > l && (cc_mtt.vv.ConsoleLog.log(s, "_REVIEW_REJECT:\n", i.time, " , ", new Date(l)), this._impokerHall.reviewReject(s));
                                break;
                            case j.PUSH_CAROUSEL:
                                break;
                            default:
                                cc_mtt.vv.ConsoleLog.log("BROADCAST_MESSAGE_EVENT_TYPE unknown type:\n", e.UserBroadcastMessages[t]), i.body = e.UserBroadcastMessages[t].Body
                        }
                        0 !== Object.keys(i.body).length && (0 === i.messageType ? s.list.push(i) : 1 === i.messageType && a.list.push(i))
                    }
                    let i = (e, t) => t.time.getTime() - e.time.getTime();
                    s.list.sort(i), a.list.sort(i), t([s, a])
                })).catch((e => {
                    s(e)
                }))
            }))
        }
    }).prototype, "clearNode", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(B.prototype, "subPageHeader", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), $ = t(B.prototype, "subPageRedDot", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), F = t(B.prototype, "underline", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(B.prototype, "pageView", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(B.prototype, "listView", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), J = t(B.prototype, "emptyLabel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), W = t(B.prototype, "messageTuple", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), H = B)) || H));
    a._RF.pop()
}