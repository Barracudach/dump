import * as t from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./websocket.js";
import * as g from "./websocket.js";
import * as l from "./websocket.js";
import * as m from "./mttconfig.js";
import * as h from "./mttconfig.js";
import * as _ from "./Pb.js";
import * as k from "./Translator.js";
import * as u from "./Login_ts.js";
import * as S from "./GameViewLoader.js";
import * as I from "./LoadingBlocker.js";
import * as v from "./WebPlatformTools.js";
import * as M from "./MTTConnector.js";
import * as R from "./ConnectionTracing.js";
import * as f from "./ConnectionTracing.js";
import * as C from "./cv.js";

function main() {
    o._RF.push({}, "adb93r1oBdOMrCSUrNz+T+o", "worldWebsocket", void 0);
    class T extends l {
        constructor() {
            super(g.WORLD, _.commonProto), this.hasBeenReset = !1, this.trackCrashInfo = !0, this.cb = void 0, this.onNetworkConnected = () => {
                if (this.isReconnecting = !1, !this.hasVerifyToken)
                    if (cc_mtt.vv.DataManager.getNow().getTime() - this.lastVertifyTokenTime > 1e3) this.sendVerifyToken();
                    else switch (cc_mtt.vv.ConsoleLog.log("unrespondedVertificationTokenCount", this.unrespondedVertificationTokenCount), T.reconnectMode) {
                        case d.FOREVER_RECONNECT:
                            this.vertifyTokenTimeout = setTimeout((() => {
                                this.unrespondedVertificationTokenCount++, this.sendVerifyToken()
                            }), 1e4);
                            break;
                        default:
                            this.unrespondedVertificationTokenCount < 10 ? this.vertifyTokenTimeout = setTimeout((() => {
                                this.unrespondedVertificationTokenCount++, this.sendVerifyToken()
                            }), 1e3) : (this.reconnectCount = 10, this.close(!0), this.disconnected())
                    }
            }, this.sendVerifyToken = () => {
                T.showLoading(), T.onVerifyToken ? T.onVerifyToken() : this.requestSecureTokenCheck()
            }, this.reconnectAction = () => {
                this.ws && cc_mtt.vv.ConsoleLog.log("world readyState", this.ws.readyState), !this.ws || this.ws.readyState !== WebSocket.CLOSED && this.ws.readyState !== WebSocket.CLOSING || (cc_mtt.vv.ConsoleLog.log("world reconnect " + this.reconnectCount), this.connect("wws_reconnectAction_" + this.reconnectCount), this.reconnectCount++)
            }, this.onNetworkClose = () => {
                T.reconnectCountTotal++;
                let e = C.appConfig.getLobbyConfig().switchServerLimit,
                    o = Math.floor(T.reconnectCountTotal / e) % m.SERVER_URL_WORLD_TEXT.length;
                switch (cc_mtt.vv.ConsoleLog.log("world changeWorldIndex " + o, this.reconnectCount, T.reconnectCountTotal), m.changeWorldIndex(o), T.showLoading(), this.isReconnecting = !0, T.reconnectMode) {
                    case d.FOREVER_RECONNECT:
                        clearTimeout(this.reconnectTimeout), this.reconnectTimeout = setTimeout(this.reconnectAction, 1e4);
                        break;
                    default:
                        this.reconnectCount < h.reConnectCountLimit ? (clearTimeout(this.reconnectTimeout), this.reconnectTimeout = setTimeout(this.reconnectAction, 1e3)) : this.disconnected()
                }
            }, this.onSecureTokenError = e => {
                if (this.close(!0, !0), this.hasVerifyToken = !1, T.hideLoading(), t.getScene().name != h.SCENE_NAME.LOGIN) {
                    if (e.ErrorCode != _.commonProto.ErrorCode.Secure_Token_Invalid || cc_mtt.vv.DataManager.userData && 1 === cc_mtt.vv.DataManager.userData.Status) {
                        if ((e.ErrorCode == _.commonProto.ErrorCode.User_Account_Locked || e.ErrorCode == _.commonProto.ErrorCode.User_Device_Locked) && !T.hasShowLoginFailDialog) {
                            T.hasShowLoginFailDialog = !0;
                            let o = k(e.ErrorCode == _.commonProto.ErrorCode.User_Account_Locked ? "LOGIN.USER_ACCOUNT_LOCKED" : "ERROR_CODE_PKW." + e.ErrorCode);
                            this.showDialogBox("ERROR_CODE_PKW.TITLE", o, !1, [{
                                type: 0,
                                text: "MESSAGE_DIALOG_BLOCKER.OK",
                                callback: function() {
                                    T.hasShowLoginFailDialog = !1, T.logout("Acount Locked")
                                }
                            }])
                        }
                    } else if (!T.hasShowLoginFailDialog) {
                        T.hasShowLoginFailDialog = !0;
                        let e = "GAME.OTHER_LOGIN_PKW";
                        cc_mtt.vv.DataManager.webPlatform != _.commonProto.PLATFORM.TRIBAL_PIONEER && (e = "GAME.LOGIN_TIME_OUT"), this.showDialogBox("ERROR_CODE_PKW.TITLE", e, !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: function() {
                                T.hasShowLoginFailDialog = !1, T.logout("TokenError")
                            }
                        }])
                    }
                } else u.instance && (u.instance.blackOverlay.active = !1, I.hide("login"), T.dropInstance())
            }, this.onUserLogin = e => {
                T.hideLoading(), e && (cc_mtt.vv.ConsoleLog.log("token ok"), e.ErrorCode && cc_mtt.vv.ConsoleLog.log("token ErrorCode", e.ErrorCode), cc_mtt.vv.DataManager.gameList = e.Games, cc_mtt.vv.DataManager.userData = e.UserData, cc_mtt.vv.DataManager.loginData = e, cc_mtt.vv.DataManager.agentCodes = e.AgentCodes, cc_mtt.vv.DataManager.defaultAgentCode = e.DefaultAgentCode, cc_mtt.vv.DataManager.ownAssociationId = e.OwnAssociationId, this.verifyTokenEnd(), this.reconnectCount = 0, this.unrespondedVertificationTokenCount = 0)
            }, this.onClose = () => {
                this.resetLastWebSocket(), cc_mtt.vv.ConsoleLog.log("world websocket closed"), this.hasVerifyToken = !1, this.Send = this._pendSend, clearInterval(this.pingInv), clearInterval(this.pongInv), clearInterval(this.sendPendingMessageInterval), clearTimeout(this.connectingTimeout);
                const e = [],
                    o = T.EVENT_ID.ON_CLOSE;
                this.messageHandler[o] && (this.messageHandler[o].forEach((o => {
                    !0 !== o(null) && e.push(o)
                })), this.messageHandler[o] = e)
            }, this.reconnectFail = () => {
                if (T.onReconnectFail) T.onReconnectFail();
                else {
                    let e = {
                        Translation: "NETWORK.DISCONNECT_DIALOG",
                        isTranslated: !0,
                        resultArray: e => k(e).split("|")
                    };
                    const o = !T.gameSocket || !T.gameSocket.isShowDisconnectDialog,
                        t = !T.gameSNGSocket || !T.gameSNGSocket.isShowDisconnectDialog;
                    if (this.isShowDisconnectDialog || !o && !t) cc_mtt.vv.ConsoleLog.log("world ws reconnectFail::NotShowDialog gameSocket: ", this.isShowDisconnectDialog, T.gameSocket ? T.gameSocket.isShowDisconnectDialog : null), cc_mtt.vv.ConsoleLog.log("world ws reconnectFail::NotShowDialog gameSNGSocket: ", this.isShowDisconnectDialog, T.gameSNGSocket ? T.gameSNGSocket.isShowDisconnectDialog : null);
                    else {
                        I.hide("All");
                        let o = this;
                        this.isShowDisconnectDialog = !0, cc_mtt.vv.ConsoleLog.log("Show world reconnect dialog"), this.showDialogBox("", e, !1, [{
                            type: 0,
                            text: "",
                            callback: function() {
                                cc_mtt.vv.ConsoleLog.log("Reconnect world websocket"), o.reconnectCount = 0, o.unrespondedVertificationTokenCount = 0, o.setReConnect(), o.connect("reconnectFail_confirm"), o.isShowDisconnectDialog = !1
                            }
                        }, {
                            type: 1,
                            text: "",
                            callback: function() {
                                cc_mtt.vv.ConsoleLog.log("Cancel world reconnect dialog"), o.reset(), o.isShowDisconnectDialog = !1, o.stopAllConnect = !0, T.logout()
                            }
                        }], null, null, "NETWORK.DISCONNECT_DIALOG")
                    }
                }
            }, this.disconnected = () => {
                this.isReconnecting = !1, this.reconnectCount = 0, this.unrespondedVertificationTokenCount = 0, T.hideLoading(), T.isInGame() ? (T.onReconnectShowLoading && T.onReconnectShowLoading(), this.clearReconnectFailTimeout(), this.delayReconnectFailTimeout = setTimeout(this.reconnectFail, 4e3)) : this.reconnectFail()
            }, this.requestSecureTokenCheckTimeOut = null, this.loadingBlockerMsgPair = [], this.sendOnePendingMsg = [_.commonProto.SocketMessageId.User_Withdraw_Password_Verification_Request, _.commonProto.SocketMessageId.Transfer_Coffer_Log_Request, _.commonProto.SocketMessageId.List_User_Gifts_Response], this.prefix = "World WebSocket", this.blockResumeReconnect = !1
        }
        static getInstance() {
            return T.g_instance || (T.g_instance = (new T).init()), T.g_instance
        }
        static dropInstance() {
            T.g_instance && (T.g_instance.reset(), T.g_instance = null, T.hasShowLoginFailDialog = !1)
        }
        static hasInstance() {
            return null != T.g_instance
        }
        static checkNetwork(e) {
            return (!T.g_instance || !T.g_instance.isConnected()) && (cc_mtt.vv.ConsoleLog.log("Disconnect when call " + e), !0)
        }
        static getWorkGameSocket(e) {
            return e == h.GAME_LEVEL_LIST_ID.SNG ? T.gameSNGSocket : T.gameSocket
        }
        static GameSocketNotConnect(e) {
            let o = T.getWorkGameSocket(e);
            return null == o || o && !o.isConnected() && !o.isReconnecting
        }
        static GameSocketConnectedOrReconnecting(e) {
            let o = T.getWorkGameSocket(e);
            return o && (o.isConnected() || o.isReconnecting)
        }
        static reconnectAllGameSockets() {
            this.reconnectGameSocket(T.gameSocket), this.reconnectGameSocket(T.gameSNGSocket)
        }
        static closeGameSockets() {
            T.gameSocket && T.gameSocket.close(!0, !0), T.gameSNGSocket && T.gameSNGSocket.close(!0, !0)
        }
        static destroyGameSockets() {
            T.gameSocket && (T.gameSocket.reset(), T.gameSocket.close(!0, !0), T.gameSocket = null), T.gameSNGSocket && (T.gameSNGSocket.reset(), T.gameSNGSocket.close(!0, !0), T.gameSNGSocket = null)
        }
        static reconnectGameSocket(e) {
            cc_mtt.vv.ConsoleLog.log("Token end check gameSNGSocket: ", e, e ? e.url : "unknown url", e ? e.isConnected() + " " + e.isReconnecting : ""), !e || e.isConnected() || e.isReconnecting || (e.setReConnect(), e.reConnect())
        }
        static logout(e = "normal") {
            this.forceClose(e), this.backToLogin()
        }
        static backToLogin() {
            cc_mtt.vv.DataManager.webPlatform != _.commonProto.PLATFORM.TRIBAL_PIONEER ? v.instance.sendCCJS("back-abnormal") : (cc_mtt.vv.DataManager.init(), cc_mtt.vv.DataManager.resetVariables(), T.showLoading(), cc_mtt.vv.AssetsManager.loadScene(h.SCENE_NAME.LOGIN))
        }
        static showLoading() {
            !T.isInGame() && T.onReconnectShowLoading && T.onReconnectShowLoading()
        }
        static hideLoading() {
            !T.isInGame() && T.onReconnectHideLoading && T.onReconnectHideLoading()
        }
        static forceClose(e = "normal") {
            null != cc_mtt.vv && (cc_mtt.vv.ConsoleLog.log("responseLogout " + e), T.g_instance && (clearInterval(T.g_instance.pingInv), clearInterval(T.g_instance.pongInv), clearInterval(T.g_instance.sendPendingMessageInterval), T.g_instance.reset(), T.g_instance.hasVerifyToken = !1), this.levelListHandlers = [], cc_mtt.vv.DataManager.token = "", s.isNative && s.localStorage.setItem("lastLogin", cc_mtt.vv.DataManager.token), cc_mtt.vv.DataManager.init(), cc_mtt.vv.DataManager.resetVariables(), this.dropInstance())
        }
        static bindSocketMessage() {
            cc_mtt.vv.DataManager.worldNetwork.cb.on(_.commonProto.SocketMessageId.User_Logout_Response, this.repeatLoginDialog), cc_mtt.vv.DataManager.worldNetwork.cb.on(_.commonProto.SocketMessageId.User_Info_Updated, this.updateUserInfo), cc_mtt.vv.DataManager.worldNetwork.cb.on(_.commonProto.SocketMessageId.Broadcast_Message_Envelope, this.broadcastMessageEnvelope)
        }
        static unbindSocketMessage() {
            cc_mtt.vv.DataManager.worldNetwork.cb.off(_.commonProto.SocketMessageId.User_Logout_Response), cc_mtt.vv.DataManager.worldNetwork.cb.off(_.commonProto.SocketMessageId.User_Info_Updated), cc_mtt.vv.DataManager.worldNetwork.cb.off(_.commonProto.SocketMessageId.Broadcast_Message_Envelope)
        }
        static bindUserBannerEventMessage() {
            cc_mtt.vv.DataManager.worldNetwork.cb.on(_.commonProto.SocketMessageId.User_Banner_Event_Msg, T.userBannerEventMessage)
        }
        static unbindUserBannerEventMessage() {
            cc_mtt.vv.DataManager.worldNetwork.cb.off(_.commonProto.SocketMessageId.User_Banner_Event_Msg)
        }
        static userBannerEventMessage(e) {
            e && (cc_mtt.vv.DataManager.banners = e.Banners, cc_mtt.vv.DataManager.events = e.Events.sort(((e, o) => o.Id - e.Id)))
        }
        static repeatLoginDialog(e) {
            T.hasInstance() && T.getInstance().close(!0), T.onRepeatLoginDialog && T.onRepeatLoginDialog(e)
        }
        static updateUserInfo(e) {
            T.onUpdateUserInfo && T.onUpdateUserInfo(e)
        }
        static broadcastMessageEnvelope(e) {
            T.onBoardcastMessageEnvelope && T.onBoardcastMessageEnvelope(e), T.onBoardcastMessageEnvelope_FakeMultipleGame && T.onBoardcastMessageEnvelope_FakeMultipleGame(e)
        }
        static setCallBack(e = null, o = null, t = null, s = null, n = null, c = null, a = null, i = null) {
            T.onRepeatLoginDialog = e, T.onUpdateUserInfo = o, T.onBoardcastMessageEnvelope = t, T.setReconnectCallBack(s, n, c, a, i)
        }
        static setReconnectCallBack(e = null, o = null, t = null, s = null, n = null) {
            T.setLoadingCallBack(e, o), T.onReconnectFail = t, T.onVerifyToken = s, T.onVerifyTokenEnd = n
        }
        static setLoadingCallBack(e = null, o = null) {
            T.onReconnectShowLoading = e, T.onReconnectHideLoading = o
        }
        init() {
            return this.cb = {
                on: (e, o, t) => {
                    this.RemoveMessageHandler(e), this.AddMessageHandler(e, o.bind(t))
                },
                off: (e, o, t) => {
                    this.RemoveMessageHandler(e, t ? o.bind(t) : o)
                }
            }, this
        }
        connect(e = "unknown") {
            if (this.blockReconnect) return;
            let o = this.getWebsocketReadyState(),
                t = this.url;
            R.hasInstance() && R.getInstance().traceConnection(f.Start, t, e + "_" + o), this.blockResumeReconnect = !1, this.resetLastWebSocket(), this.initConnection(), !s.isNative || s.os !== s.OS.ANDROID && s.os !== s.OS.WINDOWS ? (this.ws = new WebSocket(this.url), this.setWebSocketCallbacks()) : n.load("ca/cacert", c, ((e, o) => {
                e ? console.error(e.message || e) : (cc_mtt.vv.ConsoleLog.log("cert url ", o.nativeUrl), this.ws = new WebSocket(this.url, "chat", o.nativeUrl), this.setWebSocketCallbacks())
            }))
        }
        setWebSocketCallbacks() {
            let e = this.url;
            const o = this.ws;
            o.binaryType = "arraybuffer", cc_mtt.vv.ConsoleLog.log("connecting ", this.url), this.connectingTimeout = setTimeout((() => {
                this.reconnectCount++, R.hasInstance() && R.getInstance().traceConnection(f.Timeout, e, "reconnectCount:" + this.reconnectCount), this.onClose()
            }), h.websocketConnectTimeoutLimit), o.onopen = () => {
                cc_mtt.vv.ConsoleLog.log("network connected:", this.url), R.hasInstance() && R.getInstance().traceConnection(f.Open, e), this.Send = this._send, this.listen(), clearTimeout(this.connectingTimeout), this.sendPendingMessageInterval = setInterval((() => {
                    this.sendPendingMessage()
                }), 1e3), this.keepPing();
                const o = T.EVENT_ID.ON_CONNECTED;
                if (this.messageHandler[o] && this.messageHandler[o].forEach((e => {})), this.messageHandler[o]) {
                    let e = [];
                    this.messageHandler[o].forEach((o => {
                        !0 !== o(null) && e.push(o)
                    })), this.messageHandler[o] = e
                }
            }, o.onclose = () => {
                R.hasInstance() && R.getInstance().traceConnection(f.Close, e, "onclose"), this.onClose()
            }, o.onerror = o => {
                R.hasInstance() && R.getInstance().traceConnection(f.Error, e, o.toString()), cc_mtt.vv.ConsoleLog.error("network error:", o), this.isReconnecting || this.close()
            }
        }
        unReset() {
            this.hasBeenReset = !1, T.unbindSocketMessage(), T.bindSocketMessage(), T.unbindUserBannerEventMessage(), T.bindUserBannerEventMessage(), this.setReConnect()
        }
        reset() {
            this.hasBeenReset = !0, this.pendingMessageList = [], this.pendingMessages = [], T.unbindSocketMessage(), T.unbindUserBannerEventMessage(), this.unsetReConnect(!0)
        }
        verifyTokenEnd() {
            this.reconnectCount = 0, this.hasVerifyToken = !0, this.lastVerifyToken = cc_mtt.vv.DataManager.token, T.hideLoading(), T.onVerifyTokenEnd && T.onVerifyTokenEnd(), this.pendingMessages.forEach((e => {
                this.Send(e[0], e[1])
            })), this.pendingMessages = [], this.sendPendingMessage()
        }
        setReConnect() {
            this.RemoveMessageHandler(_.commonProto.SocketMessageId.Secure_Token_Error_Response, this.onSecureTokenError), this.AddMessageHandler(_.commonProto.SocketMessageId.Secure_Token_Error_Response, this.onSecureTokenError), this.RemoveMessageHandler(_.commonProto.SocketMessageId.User_Login_Response, this.onUserLogin), this.AddMessageHandler(_.commonProto.SocketMessageId.User_Login_Response, this.onUserLogin), this.RemoveMessageHandler(T.EVENT_ID.ON_CONNECTED, this.onNetworkConnected), this.AddMessageHandler(T.EVENT_ID.ON_CONNECTED, this.onNetworkConnected), this.RemoveMessageHandler(T.EVENT_ID.ON_CLOSE, this.onNetworkClose), this.AddMessageHandler(T.EVENT_ID.ON_CLOSE, this.onNetworkClose), a.off(i.EVENT_HIDE, this.onAppPause), a.off(i.EVENT_SHOW, this.onAppResume), a.on(i.EVENT_HIDE, this.onAppPause), a.on(i.EVENT_SHOW, this.onAppResume)
        }
        unsetReConnect(e = !1) {
            this.RemoveMessageHandler(_.commonProto.SocketMessageId.Secure_Token_Error_Response), this.RemoveMessageHandler(_.commonProto.SocketMessageId.User_Login_Response), this.RemoveMessageHandler(T.EVENT_ID.ON_CONNECTED), this.RemoveMessageHandler(T.EVENT_ID.ON_CLOSE), e && (a.off(i.EVENT_HIDE, this.onAppPause), a.off(i.EVENT_SHOW, this.onAppResume))
        }
        send(e, o, t = !0, s = !0) {
            let n = () => {
                const s = this.pbMessages[e];
                if (t && this.handleShowLoading(e), s) {
                    const n = s.create(o);
                    return this.Send(n, e, null, null, null, t)
                }
                cc_mtt.vv.ConsoleLog.warn("error pb", e, this.pbIds, this.pbMessages, o)
            };
            if (4 == e) T.hasInstance() && this.ws && this.ws.readyState == WebSocket.OPEN && n();
            else if (e == _.commonProto.SocketMessageId.User_Login_Request || e == _.commonProto.SocketMessageId.Impoker_User_Choose_Agent_Request || e == _.commonProto.SocketMessageId.Secure_Token_Check) T.hasInstance() && this.ws && this.ws.readyState == WebSocket.OPEN ? n() : this.pendingMessageList.push({
                msgId: e,
                request: n
            });
            else if (T.checkNetwork("worldwebsocket pending message")) {
                if (cc_mtt.vv.ConsoleLog.log("worldwebsocket:addPending:", e, s), s)
                    if (this.sendOnePendingMsg.indexOf(e) >= 0) {
                        let o = this.pendingMessageList.findIndex((o => o.msgId == e));
                        o < 0 ? this.pendingMessageList.push({
                            msgId: e,
                            request: n
                        }) : this.pendingMessageList[o].request = n
                    } else this.pendingMessageList.push({
                        msgId: e,
                        request: n
                    })
            } else n()
        }
        requestSecureTokenCheck() {
            if (cc_mtt.vv.DataManager.token) {
                if (this.requestSecureTokenCheckTimeOut) return;
                const e = 1500;
                this.requestSecureTokenCheckTimeOut = setTimeout(this.executeRequestSecureTokenCheck.bind(this), e)
            } else M.instance.onAuthMttError(M.instance.config.tokenErrorMsg.NO_TOKEN)
        }
        onAppPauseCallback() {
            this.requestSecureTokenCheckTimeOut && (clearTimeout(this.requestSecureTokenCheckTimeOut), this.requestSecureTokenCheckTimeOut = null)
        }
        executeRequestSecureTokenCheck() {
            if (!this) return;
            let e = this.getDeviceId();
            this.Send(_.commonProto.Secure_Token_Check.create({
                Token: cc_mtt.vv.DataManager.token,
                device: e,
                environment: ""
            })), this.requestSecureTokenCheckTimeOut = null
        }
        requestTokenLogin(e, o) {
            this.send(_.commonProto.SocketMessageId.Secure_Token_Check, e)
        }
        requestUserLogin(e, o) {
            this.send(_.commonProto.SocketMessageId.User_Login_Request, e)
        }
        requestUserData() {
            this.send(_.commonProto.SocketMessageId.User_Info_Request, {})
        }
        requestLevelList(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Game_Levels_Request, e, t)
        }
        requestUserUpdate(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.User_Update_Request, e, t), this.once(_.commonProto.SocketMessageId.User_Update_Response, o)
        }
        requestNicknameCheck(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Nickname_Check_Request, e, t), this.once(_.commonProto.SocketMessageId.Nickname_Check_Response, o)
        }
        requestNicknameUpdate(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.User_Nickname_Update_Request, e, t), this.once(_.commonProto.SocketMessageId.User_Nickname_Update_Response, o)
        }
        requestToolsInBackpackRequest(e, o = !0) {
            this.send(_.commonProto.SocketMessageId.User_Tool_In_Backpacks_Request, {}, o), this.once(_.commonProto.SocketMessageId.User_Tool_In_Backpacks_Response, e)
        }
        requestToolsInfo(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Tool_Info_Request, e, t), this.once(_.commonProto.SocketMessageId.Tool_Info_Response, o)
        }
        requestToolInBackpackRedeem(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Tool_In_Backpack_Redeem_Request, e, t), this.once(_.commonProto.SocketMessageId.Tool_In_Backpack_Redeem_Response, o)
        }
        responseLogout(e) {
            cc_mtt.vv.ConsoleLog.log("responseLogout", e), cc_mtt.vv.DataManager.token = "", cc_mtt.vv.AssetsManager.loadScene(h.SCENE_NAME.LOGIN)
        }
        responseLevelList(e) {
            e && !e.ErrorCode ? S.storeGameLevelList(e) : this.showDialogBox(cc_mtt.vv.DataManager.ERROR_CODE_PKW[e.ErrorCode], cc_mtt.vv.DataManager.ERROR_CODE_PKW[e.ErrorCode], !1, [{
                type: 0,
                text: cc_mtt.vv.DataManager.ERROR_CODE_PKW[e.ErrorCode],
                callback: void 0
            }])
        }
        requestTransferFromImpoker(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Transfer_From_Impoker_Request, e, t), this.once(_.commonProto.SocketMessageId.Transfer_From_Impoker_Response, o)
        }
        requestLegacyImpokerLogin(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Legacy_Impoker_Login_Request, e, t), this.once(_.commonProto.SocketMessageId.Legacy_Impoker_Login_Response, o)
        }
        requestBLMiniGamesNotTakenOut(e, o = !0) {
            this.send(_.commonProto.SocketMessageId.BLMiniGamesNotTakenOutRequest, {}, o), this.once(_.commonProto.SocketMessageId.BLMiniGamesNotTakenOutResponse, e)
        }
        enterMiniGame(e, o = !0) {
            this.send(_.commonProto.SocketMessageId.BLMiniGameEnterReq, e, o)
        }
        exitMiniGame(e, o = !0) {
            this.send(_.commonProto.SocketMessageId.BLMiniGameExitReq, e, o)
        }
        requestBLMiniGameActivityRewards(e, o = !0) {
            this.send(_.commonProto.SocketMessageId.BLMiniGameActivityRewardsRequest, {}, o), this.once(_.commonProto.SocketMessageId.BLMiniGameActivityRewardsResponse, e)
        }
        requestBLMiniGameReceiveActivityReward(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.BLMiniGameReceiveActivityRewardRequest, e, t), this.once(_.commonProto.SocketMessageId.BLMiniGameReceiveActivityRewardResponse, o)
        }
        requestBLMiniGameTakeInStatus(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.BLMiniGameTakeInStatusRequest, e, t), this.once(_.commonProto.SocketMessageId.BLMiniGameTakeInStatusResponse, o)
        }
        requestTransferToCoffer(e, o, t = !0) {
            cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(_.commonProto.SocketMessageId.Transfer_To_Coffer_Response), this.send(_.commonProto.SocketMessageId.Transfer_To_Coffer_Request, e, t, !1), this.once(_.commonProto.SocketMessageId.Transfer_To_Coffer_Response, o)
        }
        requestTransferCofferLog(e, o = !0) {
            cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(_.commonProto.SocketMessageId.Transfer_Coffer_Log_Response), this.send(_.commonProto.SocketMessageId.Transfer_Coffer_Log_Request, {}, o), this.once(_.commonProto.SocketMessageId.Transfer_Coffer_Log_Response, e)
        }
        requestAssociationWithdraw(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Association_Withdraw_Request, e, t), this.once(_.commonProto.SocketMessageId.Association_Withdraw_Response, o)
        }
        requestAssociationApply(e, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Association_Apply_Request, e, t), this.once(_.commonProto.SocketMessageId.Association_Apply_Response, o)
        }
        requestListUserGifts(e, o, t = !0) {
            cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(_.commonProto.SocketMessageId.List_User_Gifts_Response), this.send(_.commonProto.SocketMessageId.List_User_Gifts_Request, e, t), this.once(_.commonProto.SocketMessageId.List_User_Gifts_Response, o)
        }
        requestUserGift(e, o, t = !0) {
            cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(_.commonProto.SocketMessageId.User_Gift_Response), this.send(_.commonProto.SocketMessageId.User_Gift_Request, e, t, !1), this.once(_.commonProto.SocketMessageId.User_Gift_Response, o)
        }
        requestJoinedGame(e = {}, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Joined_Games_Request, e, t), this.once(_.commonProto.SocketMessageId.Joined_Games_Response, o)
        }
        requestImpokerUserChooserAgent(e = {}, o, t = !0) {
            cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(_.commonProto.SocketMessageId.User_Login_Response), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(_.commonProto.SocketMessageId.User_Login_Response, o), this.send(_.commonProto.SocketMessageId.Impoker_User_Choose_Agent_Request, e, t)
        }
        requestUserWithdrawPasswordVerification(e = {}, o, t = !0, s = !0) {
            cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(_.commonProto.SocketMessageId.User_Withdraw_Password_Verification_Response), this.send(_.commonProto.SocketMessageId.User_Withdraw_Password_Verification_Request, e, t, s), this.once(_.commonProto.SocketMessageId.User_Withdraw_Password_Verification_Response, o)
        }
        requestUserWithdrawPasswordForget(e = {}, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.User_Withdraw_Password_Forget_Request, e, t), this.once(_.commonProto.SocketMessageId.User_Withdraw_Password_Forget_Response, o)
        }
        requestUserWithdrawPasswordReset(e = {}, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.User_Withdraw_Password_Reset_Request, e, t), this.once(_.commonProto.SocketMessageId.User_Withdraw_Password_Reset_Response, o)
        }
        requestGameState(e = {}, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Game_State_Request, e, t), this.once(_.commonProto.SocketMessageId.Game_State_Response, o)
        }
        requestToolInBackpackGift(e = {}, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.Tool_In_Backpack_Gift_Request, e, t), this.once(_.commonProto.SocketMessageId.Tool_In_Backpack_Gift_Response, o)
        }
        requestUserSearch(e = {}, o, t = !0) {
            this.send(_.commonProto.SocketMessageId.User_Search_Request, e, t), this.once(_.commonProto.SocketMessageId.User_Search_Response, o)
        }
        getToolsInfo(e, o, t) {
            let s = new _.commonProto.Tool_Info_Response;
            s.ToolInfos = [];
            let n = e.ToolIds.slice();
            if (n = n.filter(((e, o, t) => t.indexOf(e) === o)), T.toolsInfo && T.toolsInfo.ToolInfos) {
                let e = 0;
                for (; e < n.length;) {
                    let o = !1;
                    for (const t of T.toolsInfo.ToolInfos)
                        if (t.Id == n[e]) {
                            o = !0, s.ToolInfos.push(t);
                            break
                        } o ? n.splice(e, 1) : e++
                }
            }
            if (n.length > 0) {
                let c = {
                    ToolIds: n
                };
                this.requestToolsInfo(c, (n => {
                    cc_mtt.vv.ConsoleLog.log("getToolsInfo toolData", e), n && !n.ErrorCode ? (T.toolsInfo || (T.toolsInfo = new _.commonProto.Tool_Info_Response, T.toolsInfo.ToolInfos = []), s.ToolInfos = s.ToolInfos.concat(n.ToolInfos), T.toolsInfo.ToolInfos = T.toolsInfo.ToolInfos.concat(n.ToolInfos), cc_mtt.vv.ConsoleLog.log("getToolsInfo output", s), o(s)) : this.msgErrorDialog(n, t)
                }))
            } else cc_mtt.vv.ConsoleLog.log("getToolsInfo output", s), o(s)
        }
        getDeviceId() {
            if (s.isNative) try {
                if (s.os === s.OS.ANDROID) return r.reflection.callStaticMethod("com/cocos/game/AppActivity", "getDeviceId", "()Ljava/lang/String;");
                if (s.os === s.OS.IOS) return r.reflection.callStaticMethod("AppController", "getUniqueIdentifier")
            } catch (e) {
                cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
            }
            return ""
        }
        msgErrorDialog(e, o) {
            let t = e ? "ERROR_CODE_PKW." + e.ErrorCode : "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR";
            this.showDialogBox("ERROR_CODE_PKW.TITLE", t, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: o
            }])
        }
    }
    e("WorldWebSocket", T), T.gameSocket = null, T.gameSNGSocket = null, T.connectCallback = void 0, T.g_instance = null, T.toolsInfo = void 0, T.levelListHandlers = [], T.hasShowLoginFailDialog = !1, T.needBindAssoCode = !1, T.reconnectMode = 0, o._RF.pop()
}