import * as t from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./mttconfig.js";
import * as g from "./mttconfig.js";
import * as u from "./mttconfig.js";
import * as h from "./mttconfig.js";
import * as m from "./mttconfig.js";
import * as l from "./mttconfig.js";
import * as p from "./worldWebsocket.js";
import * as v from "./Pb.js";
import * as f from "./Translator.js";
import * as _ from "./LoadingBlocker.js";
import * as M from "./ConsoleLog.js";
import * as T from "./CommonTools.js";
import * as I from "./MultipleGame.js";
import * as k from "./MultipleGame.js";
import * as C from "./MTTConnector.js";
import * as L from "./ConnectionTracing.js";
import * as P from "./ConnectionTracing.js";
import * as E from "./ConnectionTracing.js";
import * as w from "./cv.js";
import * as N from "./CrashTracing.js";

function main() {
    t._RF.push({}, "8813eC2xBRCoaZyRQt0qXP7", "websocket", void 0);
    const S = {};
    window && (window.wsRecords = {});
    e("WEB_SOCKET_RECONNECT_MODE", function(e) {
        return e[e.NORMAL = 0] = "NORMAL", e[e.FOREVER_RECONNECT = 1] = "FOREVER_RECONNECT", e
    }({}));
    const R = e("WEB_SOCKET_TYPE", s({
        NONE: 0,
        WORLD: 1,
        HOLDEM: 2,
        HOLDEM_SNG: 3,
        HOLDEM_MTT: 4,
        OMAHA_SNG: 5,
        OMAHA_MTT: 6,
        PINEAPPLE: 7,
        PINEAPPLE_LOOP: 8,
        PINEAPPLE_MTT: 9
    }));
    class y {
        constructor(e, t, s = null, n = null) {
            this.sendMessageId = void 0, this.receiveMessageId = void 0, this.received = void 0, this.timeout = void 0, this.callback = void 0, this.timeoutNodeJS = void 0, this.sendMessageId = e, this.receiveMessageId = t, this.received = [];
            for (let e = 0; e < this.receiveMessageId.length; e++) this.received.push(!1);
            this.timeout = s, this.timeout && (this.timeoutNodeJS = setTimeout(this.timeout, 1e4)), this.callback = n
        }
    }
    e("MessagePair", y);
    class A {
        get url() {
            switch (this._type) {
                case R.HOLDEM:
                    return g.WsUrl;
                case R.HOLDEM_SNG:
                    return g.sngWsUrl;
                case R.HOLDEM_MTT:
                    return g.mttWsUrl;
                case R.OMAHA_SNG:
                    return h.sngWsUrl;
                case R.OMAHA_MTT:
                    return h.mttWsUrl;
                case R.PINEAPPLE:
                    return l.wsUrl;
                case R.PINEAPPLE_LOOP:
                    return l.wsLoopUrl;
                case R.PINEAPPLE_MTT:
                    return l.mttWsUrl
            }
            return d.worldWsUrl
        }
        constructor(e, t) {
            this.isReconnecting = !1, this.isAppPause = !1, this.reconnectTimeout = null, this.reconnectCount = 0, this.hasVerifyToken = !1, this.stopAllConnect = !1, this.blockReconnect = !1, this.trackCrashInfo = !1, this.loadingBlockerMsgPair = [], this.sendOnePendingMsg = [], this.prefix = "", this.lastVerifyToken = "", this._type = 0, this.ws = void 0, this.pbIds = void 0, this.pbMessages = {}, this.pingMessageData = new Uint8Array([0, 0, 0, 6, 0, 3]), this.waitingPong = !1, this.lastAction = Date.now(), this.pingInv = void 0, this.pongInv = void 0, this.tryPongTime = void 0, this.messageHandler = {}, this.records = void 0, this.pendingMessageList = [], this.isShowDisconnectDialog = !1, this.delayReconnectFailTimeout = null, this.sendPendingMessageInterval = null, this.lastVertifyTokenTime = 0, this.vertifyTokenTimeout = null, this.unrespondedVertificationTokenCount = 0, this.connectingTimeout = void 0, this._pendingMessagePairList = [], this.blockResumeReconnect = !1, this.reconnectFail = () => {
                if (A.onReconnectFail) A.onReconnectFail(this);
                else if (!(this.isShowDisconnectDialog || p.getInstance() && p.getInstance().isShowDisconnectDialog)) {
                    _.hide("All");
                    let e = {
                            Translation: "NETWORK.DISCONNECT_DIALOG",
                            isTranslated: !0,
                            resultArray: e => {
                                let t = f(e).split("|");
                                return t[1] = t[1].replace("${server_name}", "world"), t
                            }
                        },
                        t = this;
                    this.isShowDisconnectDialog = !0, cc_mtt.vv.AssetsManager.hideAllDialog(), this.showDialogBox("", e, !1, [{
                        type: 0,
                        text: "",
                        callback: function() {
                            t.reconnectCount = 0, t.unrespondedVertificationTokenCount = 0, t.setReConnect(), t.reConnect(), p.checkNetwork("disconnected") && (p.getInstance().reconnectCount = 0, p.getInstance().unrespondedVertificationTokenCount = 0, p.getInstance().reConnect()), t.isShowDisconnectDialog = !1
                        }
                    }, {
                        type: 0,
                        text: "",
                        callback: function() {
                            t.reset(), t.isShowDisconnectDialog = !1, t.stopAllConnect = !0, p.logout()
                        }
                    }])
                }
            }, this.disconnected = () => {
                this.isReconnecting = !1, this.reconnectCount = 0, this.reconnectFail()
            }, this.onNetworkConnected = () => {
                this.isReconnecting = !1, clearTimeout(this.vertifyTokenTimeout), cc_mtt.vv.ConsoleLog.log("onNetworkConnected hasVerifyToken", this.hasVerifyToken), this.hasVerifyToken || (cc_mtt.vv.DataManager.getNow().getTime() - this.lastVertifyTokenTime > 1e3 ? this.sendVerifyToken() : (cc_mtt.vv.ConsoleLog.log("unrespondedVertificationTokenCount", this.unrespondedVertificationTokenCount), this.unrespondedVertificationTokenCount < 10 ? this.vertifyTokenTimeout = setTimeout((() => {
                    this.unrespondedVertificationTokenCount++, this.sendVerifyToken()
                }), 1e3) : (this.reconnectCount = 10, this.close(!0), this.disconnected())))
            }, this.sendVerifyToken = () => {
                A.showLoading(), A.onVerifyToken ? A.onVerifyToken(this) : this.requestSecureTokenCheck()
            }, this.reconnectAction = () => {
                this.ws && cc_mtt.vv.ConsoleLog.log("game readyState", this.ws.readyState, WebSocket.CLOSED, WebSocket.CLOSING), this.ws && (cc_mtt.vv.ConsoleLog.log("game reconnect " + this.reconnectCount), this.connect("ws_reconnectAction_" + this.reconnectCount), this.reconnectCount++)
            }, this.onNetworkClose = () => {
                if (A.showLoading(), p.checkNetwork("reconnect game websocket")) this.isReconnecting = !1, cc_mtt.vv.ConsoleLog.log("wait for world reconnect");
                else {
                    A.reconnectCountTotal++;
                    let e = Math.floor(A.reconnectCountTotal / 2) % u.SERVER_URL_GAME_TEXT.length;
                    cc_mtt.vv.ConsoleLog.log("game changeGameIndex " + e), u.changeGameIndex(e), this.isReconnecting = !0, this.reconnectCount < d.reConnectCountLimit ? (clearTimeout(this.reconnectTimeout), this.reconnectTimeout = setTimeout(this.reconnectAction, this.reconnectCount % 3 * 1e3)) : this.disconnected()
                }
            }, this.onmessage = e => {
                this.lastAction = Date.now();
                const t = new Uint8Array(e.data),
                    s = T.instance.intFromBytes(t.slice(0, 4)),
                    n = T.instance.intFromBytes(t.slice(4, 6));
                if (4 == n && (this.waitingPong = !1, clearInterval(this.pongInv), L.hasInstance() && L.getInstance().traceHeartBeatWebsocket(E.Response, this.ws.url, this._type, "pong")), s !== t.length) return;
                const i = this.pbMessages[n];
                if (i) {
                    const e = i.decode(t.slice(6));
                    if (cc_mtt.vv.ConsoleLog.log("########### onmessage", i.pbName, n, e), this.checkMessagePair(n), this.messageHandler[n] && this.messageHandler[n].forEach((e => {})), this.messageHandler[n]) {
                        let t = [],
                            s = !1;
                        this.messageHandler[n].forEach((n => {
                            const i = n(e);
                            "skip" === i && (s = !0), !0 !== i && t.push(n)
                        })), s || (this.messageHandler[n] = t)
                    }
                }
                this.handleHideLoading(n)
            }, this.onOpen = e => {
                cc_mtt.vv.ConsoleLog.log("network connected:", this.url, this.pendingMessages.length, this.pendingMessageList.length, e), A.hideLoading(), clearTimeout(this.connectingTimeout), this.Send = this._send, this.listen(), this.keepPing();
                const t = A.EVENT_ID.ON_CONNECTED;
                if (this.messageHandler[t]) {
                    let e = [];
                    cc_mtt.vv.ConsoleLog.log("messageHandler", t, this.messageHandler[t].length), this.messageHandler[t].forEach((t => {
                        !0 !== t(null) && e.push(t)
                    })), this.messageHandler[t] = e
                }
            }, this.onClose = e => {
                cc_mtt.vv.ConsoleLog.log(this.prefix + " closed\n", e), clearInterval(this.pingInv), clearInterval(this.pongInv), clearInterval(this._heartBeatInterval), clearInterval(this.sendPendingMessageInterval), clearTimeout(this.connectingTimeout), this.clearMessagePairList(), this.hasVerifyToken = !1;
                const t = [],
                    s = A.EVENT_ID.ON_CLOSE;
                this.messageHandler[s] && (cc_mtt.vv.ConsoleLog.log("messageHandler", s, this.messageHandler[s].length), this.messageHandler[s].forEach((e => {
                    !0 !== e(null) && t.push(e)
                })), this.messageHandler[s] = t)
            }, this.pendingMessages = [], this._pendSend = (e, t = -1) => {
                this.pendingMessages.push([e, t])
            }, this._send = (e, t = -1, s = null, n = null, i = null, o = !0) => {
                if (!this.ws) return;
                if (this.ws.readyState !== WebSocket.OPEN) {
                    var a;
                    const e = {
                        spanName: N.WebSocketReqError,
                        eventName: "sendMessageToServer",
                        attribute: {
                            data: `call ws send, but ws still not ready to send, ws state: ${null==(a=this.ws)?void 0:a.readyState} stack: ${(new Error).stack}`
                        },
                        spandCode: 2
                    };
                    return void w.tools.logInfo(e)
                }
                this.lastAction = Date.now(), void 0 === (t = -1 != t ? t : this.pbIds[e.constructor.pbName]) && cc_mtt.vv.ConsoleLog.error("Message id undefined", e);
                const c = e.encode();
                if (cc_mtt.vv.ConsoleLog.log("send @@@@@@@@@ =>", e.constructor.pbName), s && s.length > 0) {
                    let e = this.findMessagePairIndex(t); - 1 == e ? this._pendingMessagePairList.push(new y(t, s, n, i)) : this._pendingMessagePairList[e] = new y(t, s, n, i)
                }
                return o && this.handleShowLoading(t), this.ws.send(this.makeArray(c, t))
            }, this.Send = this._send, this._heartBeatInterval = void 0, this.onAppPause = () => {
                n.getScene().name === d.SCENE_NAME.LOGIN || this.isAppPause ? cc_mtt.vv.ConsoleLog.log("onAppPause other " + this.prefix) : (this.isAppPause = !0, cc_mtt.vv.ConsoleLog.log("onAppPause " + this.prefix), "World WebSocket" == this.prefix && M.writeLogs(), this.trackCrashInfo && i.localStorage.setItem(m.key_enterBackground, "1"), _.instance && _.instance.clearShowErrorDialogTimeout(), this.close(!0)), this.onAppPauseCallback()
            }, this.onAppResume = () => {
                n.getScene().name !== d.SCENE_NAME.LOGIN && this.isAppPause ? (this.isAppPause = !1, cc_mtt.vv.ConsoleLog.log("onAppResume " + this.prefix), this.blockResumeReconnect || (this.setReConnect(), this.connect("onAppResume")), this.trackCrashInfo && i.localStorage.setItem(m.key_enterBackground, "0")) : cc_mtt.vv.ConsoleLog.log("onAppResume other " + this.prefix)
            }, this.pbIds = t.MessageId || t.SocketMessageId, Object.keys(t).forEach((e => {
                void 0 !== this.pbIds[e] && (this.pbMessages[this.pbIds[e]] = t[e])
            })), this._type = e, this.prefix = "Game WebSocket", this.blockResumeReconnect = !0, this.loadingBlockerMsgPair = []
        }
        reConnect() {
            this.connect("ws_reConnect")
        }
        showDialogBox(e, t, s, n, i = null, o = null, a = "") {
            I.instance ? I.instance.showDialogBox(k.HOLDEM, e, t, s, n, i, o, a) : cc_mtt.vv.AssetsManager.showDialogBox(e, t, s, n, i, o, a)
        }
        findLBSendIdByReceiveId(e) {
            for (const t of this.loadingBlockerMsgPair)
                if (t.receiveMessageId.indexOf(e) >= 0) return t.sendMessageId;
            return -1
        }
        findLBReceiveIdBySendId(e) {
            for (const t of this.loadingBlockerMsgPair)
                if (t.sendMessageId == e) return t.receiveMessageId;
            return null
        }
        handleShowLoading(e) {
            let t = this.findLBReceiveIdBySendId(e);
            if (t)
                for (const s of t) _.show(this.prefix + " " + e + " " + s)
        }
        handleHideLoading(e) {
            let t = this.findLBSendIdByReceiveId(e); - 1 != t && _.hide(this.prefix + " " + t + " " + e)
        }
        clearTimeout() {
            this.clearReconnectFailTimeout()
        }
        clearReconnectFailTimeout() {
            this.delayReconnectFailTimeout && clearTimeout(this.delayReconnectFailTimeout)
        }
        static setReconnectCallBack(e = null, t = null, s = null, n = null, i = null) {
            A.setLoadingCallBack(e, t), A.onReconnectFail = s, A.onVerifyToken = n, A.onVerifyTokenEnd = i
        }
        static setLoadingCallBack(e = null, t = null) {
            A.onReconnectShowLoading = e, A.onReconnectHideLoading = t
        }
        requestUserToken(e, t, s) {
            this.Send(v.holdem.UserTokenReq.create({
                token: e,
                userId: t,
                hideHole: s
            }))
        }
        requestSecureTokenCheck() {
            cc_mtt.vv.ConsoleLog.log("VerifyToken:", cc_mtt.vv.DataManager.token, cc_mtt.vv.DataManager.userId), cc_mtt.vv.DataManager.token && cc_mtt.vv.DataManager.userId ? this.requestUserToken(cc_mtt.vv.DataManager.token, cc_mtt.vv.DataManager.userId, w.tools.isGameplayMuckLosingHands()) : C.instance.onAuthMttError(C.instance.config.tokenErrorMsg.NO_TOKEN)
        }
        static showLoading() {
            A.onReconnectShowLoading && A.onReconnectShowLoading(this)
        }
        static hideLoading() {
            A.onReconnectHideLoading && A.onReconnectHideLoading(this)
        }
        static isInGame() {
            return n.getScene().name == d.SCENE_NAME.PINEAPPLE || n.getScene().name == d.SCENE_NAME.HOLDEM
        }
        setReConnect() {
            this.RemoveMessageHandler(A.EVENT_ID.ON_CONNECTED), this.AddMessageHandler(A.EVENT_ID.ON_CONNECTED, this.onNetworkConnected), this.RemoveMessageHandler(A.EVENT_ID.ON_CLOSE), this.AddMessageHandler(A.EVENT_ID.ON_CLOSE, this.onNetworkClose), o.off(a.EVENT_HIDE, this.onAppPause), o.off(a.EVENT_SHOW, this.onAppResume), o.on(a.EVENT_HIDE, this.onAppPause), o.on(a.EVENT_SHOW, this.onAppResume)
        }
        unsetReConnect(e = !1) {
            this.RemoveMessageHandler(A.EVENT_ID.ON_CONNECTED), this.RemoveMessageHandler(A.EVENT_ID.ON_CLOSE), e && (o.off(a.EVENT_HIDE, this.onAppPause), o.off(a.EVENT_SHOW, this.onAppResume))
        }
        verifyTokenEnd() {
            this.hasVerifyToken = !0, this.reconnectCount = 0, this.unrespondedVertificationTokenCount = 0, this.lastVerifyToken = cc_mtt.vv.DataManager.token, A.hideLoading(), A.onVerifyTokenEnd && A.onVerifyTokenEnd(this)
        }
        initConnection() {
            this.stopAllConnect = !1, this.hasVerifyToken = !1, clearTimeout(this.reconnectTimeout), clearInterval(this.pingInv), clearInterval(this.pongInv), clearInterval(this._heartBeatInterval), clearInterval(this.sendPendingMessageInterval), clearTimeout(this.connectingTimeout)
        }
        resetLastWebSocket() {
            this.ws && (this.ws.onclose = null, this.ws.onopen = null, this.ws.onerror = null, this.ws.onmessage = null, this.ws.close())
        }
        getWebsocketReadyState() {
            return this.ws ? this.ws.readyState : -1
        }
        connect(e = "unknown") {
            this.blockResumeReconnect = !0;
            let t = this.getWebsocketReadyState(),
                s = this.url;
            A.showLoading(), this.resetLastWebSocket(), this.initConnection(), L.hasInstance() && L.getInstance().traceConnection(P.Start, s, e + "_" + t), !i.isNative || i.os !== i.OS.ANDROID && i.os !== i.OS.WINDOWS ? (this.ws = new WebSocket(this.url), this.setWebSocketCallbacks()) : c.load("ca/cacert", r, ((e, t) => {
                e ? console.error(e.message || e) : (cc_mtt.vv.ConsoleLog.log("cert url ", t.nativeUrl), this.ws = new WebSocket(this.url, "chat", t.nativeUrl), this.setWebSocketCallbacks())
            }))
        }
        setWebSocketCallbacks() {
            let e = this.url;
            const t = this.ws;
            t.binaryType = "arraybuffer", cc_mtt.vv.ConsoleLog.log("connecting ", this.url), this.connectingTimeout = setTimeout((() => {
                this.blockResumeReconnect = !1, L.hasInstance() && L.getInstance().traceConnection(P.Timeout, e), this.onClose(null)
            }), d.websocketConnectTimeoutLimit), this.blockReconnect || (t.onopen = t => {
                L.hasInstance() && L.getInstance().traceConnection(P.Open, e), this.onOpen(t)
            }, t.onclose = t => {
                this.blockResumeReconnect = !1, L.hasInstance() && L.getInstance().traceConnection(P.Close, e, "onclose"), this.onClose(t)
            }, t.onerror = t => {
                this.blockResumeReconnect = !1, L.hasInstance() && L.getInstance().traceConnection(P.Error, e, t.toString()), cc_mtt.vv.ConsoleLog.error("network error:", t), this.isReconnecting || this.close()
            })
        }
        AddMessageHandler(e, t) {
            void 0 === this.messageHandler[e] && (this.messageHandler[e] = []), this.messageHandler[e].push(t), this.messageHandler[e] && this.messageHandler[e].forEach((e => {}))
        }
        RemoveMessageHandler(e, t) {
            if (this.messageHandler[e])
                if (t) {
                    const s = this.messageHandler[e].indexOf(t); - 1 != s && this.messageHandler[e].splice(s, 1)
                } else this.messageHandler[e] = [];
            this.messageHandler[e] && this.messageHandler[e].forEach((e => {}))
        }
        sendPendingMessage() {
            let e = 0;
            for (; e < this.pendingMessageList.length;) p.hasInstance() && this.ws && this.ws.readyState === WebSocket.OPEN && (this.pendingMessageList[e].msgId == v.commonProto.SocketMessageId.User_Login_Request || this.pendingMessageList[e].msgId == v.commonProto.SocketMessageId.Impoker_User_Choose_Agent_Request || this.pendingMessageList[e].msgId == v.commonProto.SocketMessageId.Secure_Token_Check || this.hasVerifyToken) ? (this.pendingMessageList[e].request(), this.pendingMessageList.splice(e, 1)) : e++
        }
        once(e, t) {
            this.AddMessageHandler(e, (e => (t(e), !0)))
        }
        levelList(e, t) {
            this.AddMessageHandler(e, (e => (t(e), p.levelListHandlers.length <= 0)))
        }
        isConnected() {
            return !!this.ws && (this.ws.readyState === WebSocket.OPEN && this.hasVerifyToken)
        }
        close(e = !1, t = !1) {
            cc_mtt.vv.ConsoleLog.log("ws", this.ws), this.clearMessagePairList(), clearTimeout(this.reconnectTimeout), clearInterval(this.pingInv), clearInterval(this.pongInv), clearInterval(this._heartBeatInterval), clearInterval(this.sendPendingMessageInterval), clearTimeout(this.connectingTimeout), e && this.unsetReConnect(t), this.ws && this.ws.close()
        }
        listen() {
            this.ws.onmessage = this.onmessage
        }
        isAllRecieved(e) {
            if (e.received)
                for (let t = 0; t < e.received.length; t++)
                    if (!e.received[t]) return !1;
            return !0
        }
        clearMessagePairList() {
            this.clearAllMessagePairTimeout(), this._pendingMessagePairList = []
        }
        clearAllMessagePairTimeout() {
            if (cc_mtt.vv.ConsoleLog.log("clearAllMessagePairTimeout", this._pendingMessagePairList), this._pendingMessagePairList && this._pendingMessagePairList.length > 0)
                for (let e = 0; e < this._pendingMessagePairList.length; e++)
                    if (this._pendingMessagePairList[e].receiveMessageId && this._pendingMessagePairList[e].receiveMessageId.length > 0)
                        for (let t = 0; t < this._pendingMessagePairList[e].receiveMessageId.length; t++) this._pendingMessagePairList[e].timeoutNodeJS && clearTimeout(this._pendingMessagePairList[e].timeoutNodeJS)
        }
        clearMessagePair(e) {
            this._pendingMessagePairList[e].timeoutNodeJS && clearTimeout(this._pendingMessagePairList[e].timeoutNodeJS), this._pendingMessagePairList[e].callback && this._pendingMessagePairList[e].callback instanceof Function && this._pendingMessagePairList[e].callback(), this._pendingMessagePairList.splice(e, 1)
        }
        checkMessagePair(e) {
            if (this._pendingMessagePairList && this._pendingMessagePairList.length > 0)
                for (let t = 0; t < this._pendingMessagePairList.length; t++)
                    if (this._pendingMessagePairList[t].receiveMessageId && this._pendingMessagePairList[t].receiveMessageId.length > 0)
                        for (let s = 0; s < this._pendingMessagePairList[t].receiveMessageId.length; s++)
                            if (this._pendingMessagePairList[t].receiveMessageId[s] == e) return this._pendingMessagePairList[t].received[s] = !0, void(this.isAllRecieved(this._pendingMessagePairList[t]) && this.clearMessagePair(t))
        }
        findMessagePairIndex(e) {
            if (this._pendingMessagePairList && this._pendingMessagePairList.length > 0)
                for (let t = 0; t < this._pendingMessagePairList.length; t++)
                    if (this._pendingMessagePairList[t].sendMessageId == e) return t;
            return -1
        }
        reset() {
            this.pendingMessageList = [], this.pendingMessages = [], this.unsetReConnect(!0)
        }
        makeArray(e, t) {
            const s = new Uint8Array(e.byteLength + 6);
            return s.set(T.instance.bytesFromInt(e.byteLength + 6, 4), 0), s.set(T.instance.bytesFromInt(t, 2), 4), s.set(e, 6), s
        }
        keepPing() {
            cc_mtt.vv.ConsoleLog.log("keepPing"), clearInterval(this.pingInv), clearInterval(this.pongInv), clearInterval(this._heartBeatInterval), this.pingInv = setInterval((() => {
                Date.now() > this.lastAction + d.websocketPingInterval - 1 && (this.lastAction = Date.now(), this.ws.send(this.pingMessageData), this.waitingPong = !0, this.tryPongTime = 0, this.pongInv = setInterval((() => {
                    this.waitingPong && (this.tryPongTime++, cc_mtt.vv.ConsoleLog.log("wait for pong", this.tryPongTime, w.appConfig.getLobbyConfig().tolerateLostPing, this.ws.url), this.tryPongTime >= w.appConfig.getLobbyConfig().tolerateLostPing && (this.tryPongTime = 0, this.waitingPong = !1, cc_mtt.vv.ConsoleLog.log("pong lost", this.ws.url), clearInterval(this.pongInv), this.connect("keepPingFailed")))
                }), 1e3))
            }), 1e3), this._heartBeatInterval = setInterval(this.heartBeatRequest.bind(this), 8e3)
        }
        heartBeatRequest() {
            L.hasInstance() && L.getInstance().traceHeartBeatWebsocket(E.Request, this.ws.url, this._type, "ping"), this.ws.send(this.pingMessageData)
        }
        static closeAll() {
            Object.keys(S).forEach((e => {
                S[e].RemoveMessageHandler(A.EVENT_ID.ON_CLOSE), S[e].close()
            }))
        }
        onAppPauseCallback() {}
    }
    e("owWebSocket", A), A.EVENT_ID = {
        ON_CLOSE: -1,
        ON_CONNECTED: -2
    }, A.onRepeatLoginDialog = null, A.onUpdateUserInfo = null, A.onBoardcastMessageEnvelope = null, A.onBoardcastMessageEnvelope_FakeMultipleGame = null, A.onReconnectShowLoading = null, A.onReconnectHideLoading = null, A.onReconnectFail = null, A.onVerifyToken = null, A.onVerifyTokenEnd = null, A.onUserLogin = null, A.reconnectCountTotal = 0, t._RF.pop()
}