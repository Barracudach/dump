import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as v from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as u from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./cv.js";
import * as f from "./activityData.js";
import * as m from "./Enum.js";

function main() {
    var S, T, A, M;
    s._RF.push({}, "80ce6HxrTZEkrRu315KvSp4", "ActivityView", void 0);
    const {
        ccclass: E,
        property: N
    } = o;
    t("default", (S = N(n), E((M = e((A = class extends a {
        constructor(...t) {
            super(...t), this.webview = null, this.webPng = null, this._bg = null, this._show_index = 0, this._isShowAnimation = !1, this._url = "", this._picture = "", this._isView = !1, this.callback = null, this._isShowVIPTool = !1, this.showType = 0, this.btnClose = null, i(this, "frameArr", M, this), this.frameName = "updatePng"
        }
        onLoad() {
            C.MessageCenter.register("HideWebview_ShowWindows", this.HandleSwitchServer.bind(this), this.node), C.MessageCenter.register("on_webCcjsCallback", this.on_webCcjsCallback.bind(this), this.node), r("bg_panel/background", this.node).on(l.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            }), this), this.btnClose = r("web_bg_panel/close_button", this.node)
        }
        clearCallBack() {
            this.callback = null
        }
        onDestroy() {
            C.MessageCenter.unregister("HideWebview_ShowWindows", this.node), C.MessageCenter.unregister("on_webCcjsCallback", this.node)
        }
        HandleSwitchServer(t) {
            t = 1 == t && 1 == this._isView, this.node && (this.node.active = t)
        }
        init() {
            this._bg = r("web_bg_panel", this.node), this.webview = r("web_bg_panel/web_panel", this.node).getComponent(c), this.webPng = r("web_bg_panel/web_png", this.node).getComponent(h), this.webPng.node.active = !1, null == this.webview && (this.webview = r("web_bg_panel/web_panel", this.node).addComponent(c)), this.webview.node.active = !1, this._show_index = 0, this._isShowAnimation = !1
        }
        removeWebview() {
            null != this.webview && (this.webview.destroy(), this.webview = null)
        }
        onBtnCloseClick() {
            C.AudioMgr.playButtonSound("close.mp3"), this._isShowVIPTool ? this.closeActivity() : this.showActivity(this.showType, this.callback)
        }
        reOpenActivity() {
            this._isShowVIPTool ? this.closeActivity() : this.showActivity(this.showType, this.callback)
        }
        closeActivity(t = !1) {
            t = 1 == t, this.removeWebview(), w.stopAllByTarget(this._bg), _(this._bg).by(.2, {
                scale: new v(0, 0, 0)
            }).call((() => {
                this.node.active = !1, this._isView = !1, this.callback && this.callback(), t || C.MessageCenter.send("sortATLView")
            })).start()
        }
        showActivity(t = 0, e = null) {
            if (C.SwitchLoadingView.isShow()) return;
            if (!u(this._bg, !0)) return;
            this._isShowVIPTool = !1, this.callback = e, this.showType = t;
            let i = C.dataHandler.getActivityData(),
                s = i.activityList.length;
            if (s <= 0 || !C.config.haveWebView()) this.closeActivity();
            else {
                C.dataHandler.getActivityData().isShow = !1;
                let e = null,
                    n = !1,
                    o = 0,
                    a = "",
                    r = "";
                for (let l = this._show_index; l < s; ++l) {
                    if (e = i.getActivityInfo(l), 0 != this.showType && this.showType != e.activity_type) continue;
                    if (e.alreadyShow) continue;
                    if ((e.activity_type == f.GameAvatar || e.activity_type == f.CustomAvatar) && 0 == this.showType) continue;
                    if (C.config.isSiyuType() && (e.activity_type == f.CustomAvatar || e.activity_type == f.GameAvatar || e.activity_type == f.BANNER || e.activity_type == f.JUNMP_MTT)) continue;
                    this._url = e.activity_url, this._picture = e.activity_pictrue, o = e.activity_type;
                    let s = e.forcedJump;
                    if (this.btnClose.active = 1 != s, 2 == e.action_type) {
                        if (this.recordDaytimes(e.day_times, e.activity_id)) {
                            n = !0, this._show_index = l + 1;
                            break
                        }
                    } else if (1 == e.action_type) {
                        let i = C.Number(C.tools.GetStringByCCFile(C.StringTools.formatC("activity_%d", e.activity_id)));
                        if (0 != this.showType && (i = C.Number(C.tools.GetStringByCCFile(C.StringTools.formatC("activity_%d_%d", t, e.activity_id)))), i < e.frequency || -1 == e.frequency) {
                            if (i++, 0 == this.showType ? C.tools.SaveStringByCCFile(C.StringTools.formatC("activity_%d", e.activity_id), i.toString()) : C.tools.SaveStringByCCFile(C.StringTools.formatC("activity_%d_%d", t, e.activity_id), i.toString()), n = !0, this._show_index = l + 1, e.resource.length > 0) {
                                let t = e.resource.split("_");
                                if (a = t[0], r = t[1], r != C.config.GET_CLIENT_VERSION()) return this.showActivity(this.showType, this.callback), void(e.activity_type != f.GameAvatar && e.activity_type != f.CustomAvatar && (e.alreadyShow = !0))
                            }
                            break
                        }
                    }
                }
                if (e && e.activity_type != f.GameAvatar && e.activity_type != f.CustomAvatar && (e.alreadyShow = !0), !n) return void this.closeActivity();
                if (this._bg.scale = new v(v.ONE), this.node.active = !0, this.webPng.node.active = !0, null != this.webview && (this.webview.node.active = !1), this._isView = !0, C.StringTools.getArrayLength(a)) {
                    if (a == this.frameName && r == C.config.GET_CLIENT_VERSION()) {
                        let t = C.config.getCurrentLanguageDetails().index;
                        this.webPng.spriteFrame = this.frameArr[t]
                    }
                } else C.CacheUtils.load(this._picture, (t => {
                    this.webPng.spriteFrame = t, this.webPng.node.active = !0
                }), null);
                this._isShowAnimation && (w.stopAllByTarget(this._bg), _(this._bg).by(.2, {
                    scale: new v(0, 0, 0)
                }).call((() => {})).delay(.01).call((() => {})).to(.2, {
                    scale: new v(1, 1, 1)
                }).start()), this._isShowAnimation = !0, this.webPng.node.targetOff(this), this.webPng.node.on(l.EventType.TOUCH_END, (() => {
                    if (o == f.CustomAvatar || o == f.GameAvatar) return this.closeActivity(), void(C.config.getCurrentScene() == m.HALL_SCENE ? (C.MessageCenter.send("switchSceneToSelfView"), C.MessageCenter.send("open_avatar")) : C.config.getCurrentScene() == m.GAME_SCENE && C.MessageCenter.send("roleInfoSet_setAvatar"));
                    if (o == f.BANNER || -1 != this._url.indexOf("cfull://")) {
                        this.closeActivity(!0);
                        let t = this._url.replace("cfull://", ""),
                            e = new l("activity_webview").addComponent(c);
                        return e.node.getComponent(g).setContentSize(d(C.config.WIDTH, C.config.HEIGHT)), e.node.setPosition(.5 * C.config.WIDTH, .5 * C.config.HEIGHT), y.getScene().addChild(e.node), e.url = t, e.setJavascriptInterfaceScheme("ccjs"), void e.setOnJSCallback((() => {
                            if (-1 != e.url.search("ccjs://https") || -1 != e.url.search("ccjs://http")) {
                                console.log("----------\x3e boob close 1");
                                let t = y.getScene().getComponentInChildren(b).node.getChildByName("activity_webview");
                                t && (t.removeFromParent(), t.destroy());
                                let e = this._show_index,
                                    i = this._isShowAnimation;
                                this.init(), this._show_index = e, this._isShowAnimation = i, this.showActivity(this.showType, this.callback)
                            }
                        }))
                    }
                    if (o == f.JUNMP_MTT) return this.closeActivity(), void C.MessageCenter.send("jumpToMtt");
                    if (o == f.JUNMP_SPORT) return this.closeActivity(), void C.MessageCenter.send("jumpToMiniGamesHall", {
                        junmpType: C.Enum.JUNMPGAMETYPE.JUNMP_TO_SPORT
                    });
                    if (o == f.JUNMP_ELECT_LIST) return this.closeActivity(), void C.MessageCenter.send("jumpToMiniGamesHall", {
                        junmpType: C.Enum.JUNMPGAMETYPE.JUNMP_TO_ELECT_LIST
                    });
                    if (o == f.JUNMP_MINI_GAME) return this.closeActivity(), void C.MessageCenter.send("jumpToMiniGamesHall", {
                        junmpType: C.Enum.JUNMPGAMETYPE.JUNMP_TO_MINI_GAME,
                        gameID: e.gameID
                    });
                    if (o == f.JUNMP_ELECT_GAME) return this.closeActivity(), void C.MessageCenter.send("jumpToMiniGamesHall", {
                        junmpType: C.Enum.JUNMPGAMETYPE.JUNMP_TO_ELECT_GAME,
                        gameCode: e.gameCode
                    });
                    if (o == f.JUNMP_TOP_MATCHES) return this.closeActivity(), void C.MessageCenter.send("jumpToMiniGamesHall", {
                        junmpType: C.Enum.JUNMPGAMETYPE.JUNMP_TO_WATCH_MACTCHS,
                        matchID: e.matchID
                    });
                    if (o == f.JUNMP_HALL_BANK) return this.closeActivity(), void C.MessageCenter.send("jumpToHallBank");
                    if (-1 != this._url.indexOf("cnotice://")) {
                        let t = this._url.replace("cnotice://", "");
                        return this.closeActivity(), void C.MessageCenter.send("jumpgto_notice", t)
                    }
                    if (-1 != this._url.indexOf("cbrowser://")) {
                        let t = this._url.replace("cbrowser://", "");
                        return console.log("===========url::=> %s" + this._url), void p.openURL(t)
                    }
                    return 0 == this._url.length ? void 0 : void(C.config.haveWebView() ? (this.webPng.node.active = !1, null != this.webview && (this.webview.node.active = !0, this.webview.url = this._url)) : C.native.openUrl(this._url))
                }), this)
            }
        }
        showActivity_VIPTool(t) {
            C.SwitchLoadingView.isShow() || null != this.webview && C.config.haveWebView() && (this._isShowVIPTool = !0, this.callback = null, this._url = t, this._bg.scale = new v(v.ONE), this.node.active = !0, this._isView = !0, this.webview.node.active = !0, this.webview.setJavascriptInterfaceScheme("ccjs"), this.webview.setOnJSCallback((function() {
                let t = "http:",
                    e = 0,
                    i = ""; - 1 != this.webview.url.search("ccjs://https") ? (e = this.webview.url.search("ccjs://https"), i = this.webview.url.substr(e + 13, this.webview.url.length), t = "https:") : -1 != this.webview.search("ccjs://http") && (e = this.webview.url.search("ccjs://http"), i = this.webview.url.substr(e + 12, this.webview.url.length)), console.log("===========url::=> %s" + i), p.openURL(t + i)
            })), this._isShowAnimation ? (w.stopAllByTarget(this._bg), _(this._bg).by(.2, {
                scale: new v(0, 0, 0)
            }).call((() => {
                this.webview.url = "about:blank"
            })).delay(.01).call((() => {
                this.webview.url = this._url
            })).to(.2, {
                scale: new v(1, 1, 1)
            }).start()) : this.webview.url = this._url, this._isShowAnimation = !0)
        }
        on_webCcjsCallback(t) {
            if (!t || "string" != typeof t) return;
            let e = "http:",
                i = 0,
                s = "";
            if (-1 != t.search("ccjs://https")) i = t.search("ccjs://https"), s = t.substr(i + 13, t.length), e = "https:";
            else if (-1 != t.search("ccjs://http")) i = t.search("ccjs://http"), s = t.substr(i + 12, t.length);
            else if (-1 != t.search("ccjs://avatar")) return this.closeActivity(), C.MessageCenter.send("switchSceneToSelfView"), void C.MessageCenter.send("open_avatar");
            console.log("===========url::=> %s" + s);
            let n = C.StringTools.formatC('{"cmd": "1012", "url":"%s"}', e + s);
            C.native.SYwebjsToClient(n)
        }
        setCallBackNull() {
            this.callback && (this.callback = null)
        }
        recordDaytimes(t, e) {
            if (null == t || t < 0) return !1;
            if (0 == t) return !0;
            let i = C.Number(C.tools.GetStringByCCFile(C.StringTools.formatC("firstDate_%d", e))),
                s = C.Number(C.tools.GetStringByCCFile(C.StringTools.formatC("activity_times_%d", e))),
                n = (new Date).getTime();
            if (i)
                if (this.isSameday(i)) {
                    if (!(s < t)) return !1;
                    C.tools.SaveStringByCCFile(C.StringTools.formatC("firstDate_%d", e), JSON.stringify(n)), C.tools.SaveStringByCCFile(C.StringTools.formatC("activity_times_%d", e), (++s).toString())
                } else C.tools.SaveStringByCCFile(C.StringTools.formatC("firstDate_%d", e), JSON.stringify(n)), C.tools.SaveStringByCCFile(C.StringTools.formatC("activity_times_%d", e), "1");
            else C.tools.SaveStringByCCFile(C.StringTools.formatC("firstDate_%d", e), JSON.stringify(n)), C.tools.SaveStringByCCFile(C.StringTools.formatC("activity_times_%d", e), (++s).toString());
            return !0
        }
        isSameday(t) {
            try {
                return new Date(t).toDateString() == new Date((new Date).getTime()).toDateString()
            } catch (t) {
                return !1
            }
        }
    }).prototype, "frameArr", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), T = A)) || T));
    s._RF.pop()
}