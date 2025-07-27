import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cv.js";

function main() {
    var C, m, w, S, T, v, y, _, I, x;
    n._RF.push({}, "f35dcTj+YRNa4P4l5CfFzY/", "NoticeView", void 0);
    const {
        ccclass: O,
        property: j
    } = r;
    e("default", (C = j(s), m = j(s), w = j(s), S = j(s), O((y = t((v = class extends o {
        constructor(...e) {
            super(...e), i(this, "scrollContent", y, this), i(this, "scrollItem", _, this), i(this, "web", I, this), i(this, "backBtn", x, this), this.urlArr = null, this.itemCount = 0, this.itemIndex = 0, this._path = null
        }
        onLoad() {
            this.registerMsg(), this.initLanguage(), this.scrollContent.removeChild(this.scrollItem), f.MessageCenter.register("on_webCcjsCallback", this.on_webCcjsCallback.bind(this), this.node)
        }
        onDestroy() {
            this.unregisterMsg()
        }
        registerMsg() {
            f.MessageCenter.register(f.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node)
        }
        unregisterMsg() {
            f.MessageCenter.unregister(f.config.CHANGE_LANGUAGE, this.node), f.MessageCenter.unregister("on_webCcjsCallback", this.node)
        }
        initLanguage() {
            f.StringTools.setLabelString(this.node, "notice_button/Label", "ClubNotice_title_1")
        }
        getNoticeWebUrl(e) {
            let t = f.dataHandler.getUserData().u32Uid;
            return e || (e = f.domainMgr.getServerInfo().web_server + "user/article/getlist?clientType=" + String(f.config.GET_CLIENT_TYPE()) + "&language=" + f.config.getCurrentLanguage() + "&uid=" + t), e
        }
        setWebView(e) {
            if (!f.config.haveWebView()) return;
            this.web.getComponent(l) || this.web.addComponent(l);
            let t = this.web.getComponent(l);
            t.url = this.getNoticeWebUrl(e);
            t.setJavascriptInterfaceScheme("ccjs"), t.setOnJSCallback((() => {
                console.log("setOnJSCallback url = " + e), t.setJavascriptInterfaceScheme("ccjs"), t.setOnJSCallback((() => {
                    let e = 0,
                        i = "",
                        n = "http:"; - 1 != t.url.indexOf("ccjs://https") ? (e = t.url.indexOf("ccjs://https"), i = t.url.substr(e + 13, t.url.length), n = "https:") : -1 != t.url.indexOf("ccjs://http") && (e = t.url.indexOf("ccjs://http"), i = t.url.substr(e + 12, t.url.length)), this.DoDownloadPicture(n + i)
                }))
            }))
        }
        cleanWebview() {
            if (!f.config.haveWebView()) return;
            this.web.getComponent(l) || this.web.addComponent(l), this.web.getComponent(l).url = "about:blank"
        }
        onGetNoticeSuccess(e) {
            if (console.log("==============noticeView onGetNoticeSuccess===》》"), null != e) {
                this.urlArr = e.data;
                for (var t = 0; t < this.urlArr.length; ++t) console.log("=======================>>>>>>>>>>" + this.urlArr[t].imgurl);
                this.itemCount = this.urlArr.length, this.schedule(this.initScrollItem, .05)
            }
        }
        initScrollItem() {
            this.itemCount <= this.itemIndex ? this.unschedule(this.initScrollItem) : (a.loadRemote(this.urlArr[this.itemIndex].imgurl, function(e, t) {
                if (e) console.log(e.message || e);
                else {
                    var i = new c;
                    i.rect = new u(0, 0, t.width, t.height), i.texture = t;
                    var n = h(this.scrollItem);
                    this.scrollContent.addChild(n), n.getComponent(g).spriteFrame = i, n.getComponent(p).normalSprite = i, n.getComponent(p).pressedSprite = i, n.getComponent(p).disabledSprite = i, n.url = this.urlArr[this.scrollContent.children.length - 1].srcurl
                }
            }.bind(this)), this.itemIndex++)
        }
        onBtnNoticeItemClick(e) {
            var t = e.target.url;
            console.log("=================>>url = " + t), f.config.haveWebView() ? (this.web.addComponent(l), this.web.getComponent(l).url = t, this.backBtn.active = !0, this.scrollContent.active = !1) : f.native.openUrl(t)
        }
        onBtnBackClick() {
            this.web.getComponent(l) && this.web.removeComponent(l), this.backBtn.active = !1, this.scrollContent.active = !0
        }
        DoDownloadPicture(e) {
            let t = e.lastIndexOf("/") + 1,
                i = e.substr(t);
            if (null != i) {
                var n = new XMLHttpRequest;
                n.responseType = "arraybuffer", n.open("GET", e, !0), n.onreadystatechange = function() {
                    console.log("xhr.readyState  " + n.readyState), console.log("xhr.status  " + n.status), 4 === n.readyState && 200 === n.status && this.OnDownloadCompleted(n.response, i)
                }.bind(this), n.send()
            }
        }
        OnDownloadCompleted(e, t) {
            if (null == e) return;
            let i = e;
            if (b.isNative) {
                let e = (d.fileUtils ? d.fileUtils.getWritablePath() : "/") + t;
                this._path = e, d.fileUtils.isFileExist(e) && d.fileUtils.removeFile(e), d.fileUtils.writeStringToFile(i, e);
                let n = !0,
                    s = "true";
                e.length > 0 ? (b.os == b.OS.IOS ? (s = f.native.invokeSyncFunc(f.nativeCMD.KEY_SAVE_TO_ABLM, {
                    path: this._path
                }), "false" == s && (n = !1)) : b.os == b.OS.ANDROID && (n = d.reflection.callStaticMethod("com/cocos/game/ImagePicker", "saveTophoto", "(Ljava/lang/String;)Z", this._path)), n ? f.TT.showMsg(f.config.getStringData("ClubSpreadTips0"), f.Enum.ToastType.ToastTypeInfo) : f.TT.showMsg(f.config.getStringData("ClubSpreadTips1"), f.Enum.ToastType.ToastTypeInfo)) : f.TT.showMsg(f.config.getStringData("ClubSpreadTips2"), f.Enum.ToastType.ToastTypeInfo)
            }
        }
        on_webCcjsCallback(e) {
            console.log("#######################webview url = " + e);
            let t = 0,
                i = "",
                n = "http:";
            if (-1 != e.indexOf("ccjs://https")) t = e.indexOf("ccjs://https"), i = e.substr(t + 13, e.length), n = "https:";
            else {
                if (-1 == e.indexOf("ccjs://http")) return;
                t = e.indexOf("ccjs://http"), i = e.substr(t + 12, e.length)
            }
            let s = n + i;
            if (b.isBrowser && f.config.GET_CLIENT_TYPE() == f.Enum.ClientType.H5WebPage) {
                let e = '{"cmd": "1008", "url":"%s"}',
                    t = f.StringTools.formatC(e, s);
                f.native.SYwebjsToClient(t)
            } else;
        }
    }).prototype, "scrollContent", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(v.prototype, "scrollItem", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(v.prototype, "web", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(v.prototype, "backBtn", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = v)) || T));
    n._RF.pop()
}