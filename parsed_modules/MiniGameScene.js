import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as d from "./MiniGameWebview.js";
import * as v from "./worldWebsocket.js";
import * as u from "./LoadingBlocker.js";
import * as b from "./GameViewLoader.js";
import * as _ from "./Pb.js";
import * as M from "./mttconfig.js";
import * as A from "./websocket.js";
import * as f from "./httpApis.js";
import * as k from "./DataManager.js";
import * as w from "./AssetsManager.js";

function main() {
    var E, C, G, P, L, R, W, D, I, T;
    a._RF.push({}, "c616d4TwZpIJrVUo494EQDj", "MiniGameScene", void 0);
    const {
        ccclass: B,
        property: O
    } = n;
    e("MiniGameScene", (E = O(i), C = O(i), G = O([s]), P = O([s]), B((W = t((R = class extends c {
        constructor(...e) {
            super(...e), this.TAG = "MiniGame", o(this, "webViewPrefab", W, this), this.miniGameWebview = null, this.gameViewLoader = new b, o(this, "loadingPrefab", D, this), o(this, "layers", I, this), o(this, "position", T, this), this.loading = null, this.isAppPause = !1, this.hasCallBackAction = !1, this.onWebFinishLoadAction = (e, t) => {
                t === r.EventType.ERROR && (this.miniGameWebview && this.miniGameWebview.remove(), f.checkURL(cc_mtt.vv.DataManager.miniGameURL), this.callPopUpBox("MINIGAME.MINIGAME_LOAD_ERROR", (() => {
                    this.backToHall()
                })))
            }, this.onCCJSAction = (e, t) => {
                if (cc_mtt.vv.ConsoleLog.log("jsCallback", e, t), t.indexOf("ccjs://") >= 0) switch (t = t.replace("ccjs://", "")) {
                    case "back":
                    case "back-normal":
                    case "back-abnormal":
                        this.onBackClickedAction();
                        break;
                    case "WebGL":
                        this.miniGameWebview && this.miniGameWebview.remove(), this.callPopUpBox("MINIGAME.MINIGAME_WEBGL_NOT_SUPPORT", (() => {
                            this.backToHall()
                        }))
                }
            }, this.onUserInfoResponse = e => {
                cc_mtt.vv.ConsoleLog.log("onUserInfoResponse", e), e && e.UserData && (cc_mtt.vv.DataManager.userData = e.UserData)
            }, this.backToHall = () => {
                this.miniGameWebview.remove(), v.reconnectMode = A.NORMAL, cc_mtt.vv.AssetsManager.loadScene(M.SCENE_NAME.HALL)
            }, this.onBackClickedAction = () => {
                this.hasCallBackAction || (this.hasCallBackAction = !0, this.backToHall())
            }, this.onAppPause = () => {
                this.isAppPause ? cc_mtt.vv.ConsoleLog.log(this.TAG, "onAppPause other") : (this.isAppPause = !0, cc_mtt.vv.ConsoleLog.log(this.TAG, "onAppPause"))
            }, this.onAppResume = () => {
                this.isAppPause ? (this.isAppPause = !1, cc_mtt.vv.ConsoleLog.log(this.TAG, "onAppResume")) : cc_mtt.vv.ConsoleLog.log(this.TAG, "onAppResume other")
            }
        }
        onLoad() {
            cc_mtt.vv.ConsoleLog.log("MiniGameScene onload"), l.garbageCollect(), cc_mtt.vv.DataManager = k, cc_mtt.vv.AssetsManager = w, cc_mtt.vv.AssetsManager.init(), cc_mtt.vv.DataManager.worldNetwork.setReConnect(), v.bindSocketMessage(), this.setWorldWebSocketCallBack(), this.bindMessageHandler(), this.loading = h(this.loadingPrefab), this.loading.parent = this.node, m.on(p.EVENT_HIDE, this.onAppPause), m.on(p.EVENT_SHOW, this.onAppResume)
        }
        onDestroy() {
            this.unbindMessageHandler(), this.unscheduleAllCallbacks(), v.setCallBack(), m.off(p.EVENT_HIDE, this.onAppPause), m.off(p.EVENT_SHOW, this.onAppResume)
        }
        start() {
            let e = h(this.webViewPrefab);
            this.miniGameWebview = e.getComponent(d), this.miniGameWebview && (this.miniGameWebview.node.parent = this.layers[0]), this.miniGameWebview.addWebView("", this.onBackClickedAction, this.onWebFinishLoadAction, this.onCCJSAction)
        }
        setWorldWebSocketCallBack() {
            v.setCallBack((e => {
                this.repeatLoginDialog(e)
            }), (e => {
                this.updateUserInfo(e)
            }), (e => {
                this.broadcastMessageEnvelope(e)
            }), (() => {
                u.show(this.TAG + " World")
            }), (() => {
                u.hide(this.TAG + " World")
            }), null, (() => {
                cc_mtt.vv.ConsoleLog.log("World verify token", cc_mtt.vv.DataManager.token), cc_mtt.vv.DataManager.token && v.getInstance().requestSecureTokenCheck()
            }))
        }
        bindMessageHandler() {
            this.gameViewLoader.bindMessageHandler(), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(_.commonProto.SocketMessageId.User_Info_Response, this.onUserInfoResponse)
        }
        unbindMessageHandler() {
            v.hasInstance() && (this.gameViewLoader.unbindMessageHandler(), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(_.commonProto.SocketMessageId.User_Info_Response, this.onUserInfoResponse))
        }
        repeatLoginDialog(e) {
            if (this.miniGameWebview && this.miniGameWebview.remove(), e && e.ErrorCode) {
                let t = "ERROR_CODE_PKW." + e.ErrorCode;
                this.callPopUpBox(t, (() => {
                    v.logout()
                }))
            } else cc_mtt.vv.ConsoleLog.log("impoker repeatLoginDialog: no msg or msg error code"), this.callPopUpBox("GAME.OTHER_LOGIN_PKW", (() => {
                v.logout()
            }))
        }
        updateUserInfo(e) {
            cc_mtt.vv.DataManager.userData = e.UserData
        }
        broadcastMessageEnvelope(e) {
            switch (e.TypeId) {
                case 3e3:
                    let t = _.commonProto.Broadcast_Message_Events_RED_POCKET_NOTICE.decode(e.Body);
                    cc_mtt.vv.ConsoleLog.log("redPocketNotice: MiniGame", t), cc_mtt.vv.DataManager.miniGameRedPocketNotice.push(t)
            }
        }
        callPopUpBox(e, t, o = null, a = "ERROR_CODE_PKW.TITLE", i) {
            cc_mtt.vv.ConsoleLog.log("callPopUpBox", e), g(this.node) && (i = i || this.layers[7], o || (o = [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: t
            }]), cc_mtt.vv.AssetsManager.showDialogBox(a, e, !1, o, i))
        }
    }).prototype, "webViewPrefab", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(R.prototype, "loadingPrefab", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(R.prototype, "layers", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), T = t(R.prototype, "position", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), L = R)) || L));
    a._RF.pop()
}