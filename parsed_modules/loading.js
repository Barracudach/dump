import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cv.js";
import * as p from "./ResourceManager.js";
import * as _ from "./mttController.js";

function main() {
    var S, m, w, L, E, C, M, N, y, v;
    n._RF.push({}, "3ff12TMoLBK2J03M+DWzsHi", "loading", void 0);
    const {
        ccclass: D,
        property: W
    } = l;
    e("Loading", (S = W(o), m = W(a), w = W(r), L = W(s), D((M = t((C = class extends g {
        constructor(...e) {
            super(...e), i(this, "panel_loading", M, this), i(this, "txt_loading", N, this), i(this, "bar_loading", y, this), i(this, "logo", v, this)
        }
        onLoad() {
            d.isNative || (b.initBaseClass(), b.config.SET_DISPLAYSTATS());
            let e = p.getInstance();
            e.adaptWidget(this.node), e.adaptWidget(this.panel_loading), e.adaptWidget(this.bar_loading.node), e.adaptWidget(this.bar_loading.barSprite.node), this.logo.sizeMode = s.SizeMode.RAW, this.bar_loading.progress = 0, this.bar_loading.totalLength = this.bar_loading.node.getComponent(c).width, this.bar_loading.barSprite.node.getComponent(c).width = 0, d.isBrowser && (window.addEventListener("offline", this.webNetworkFailed, !1), b.native.initWebLocation()), d.isNative ? this.toStart() : b.resMgr.loadBaseResource(this.toStart.bind(this))
        }
        toStart() {
            b.init(), _.init(), this.registerMsg(), b.resMgr.loadDataFile(this._onLoadingProgress.bind(this)), b.config.adaptScreen(this.node), b.resMgr.setSpriteFrame(this.logo.node, b.config.getLogoPath(b.Enum.SCENE.LOGIN_SCENE));
            b.config.getStringData("Loading_resource");
            if (u("txt_loading", this.panel_loading).getComponent(a).string = b.config.getStringData("Loading_resource"), b.config.setCurrentScene(b.Enum.SCENE.LOADING_SCENE), d.isNative) {
                let e = h.fileUtils ? h.fileUtils.getWritablePath() : "/";
                b.native.SetWriteblePath(e)
            }
        }
        webNetworkFailed() {
            f("offline"), b.netWorkManager.OnCowboyWebNetFailed()
        }
        _onLoadingProgress(e, t, i, n) {
            if (f(b.StringTools.format("load res success - path:{0}, type:{1}, completedCount:{2}, totalCount:{3}", i, n, e, t)), this.bar_loading.progress = Math.min(1, e / (t + 1)), e >= t)
                if (d.isBrowser && window.removeEventListener("offline", this.webNetworkFailed, !1), b.config.GET_CLIENT_TYPE() == b.Enum.ClientType.CowboyWeb) {
                    let e = window.location.href;
                    e = "http://47.56.88.150:8849/cowboyWpk-web-mobile/?token=0552122c4ab94bc2b2b56f9e1d66fbb9&&uid=565555&&gate=ws://47.56.88.150:18003,ws://47.56.88.150:18011&&language=0&&isNative=1&&roomid=112259";
                    let t = "token=",
                        i = e.indexOf(t),
                        n = 0;
                    if (-1 != i && (n = e.indexOf("&&", i), b.dataHandler.getUserData().user_token = e.slice(i + t.length, n)), t = "uid=", i = e.indexOf(t), -1 != i && (n = e.indexOf("&&", i), b.dataHandler.getUserData().user_id = e.slice(i + t.length, n)), t = "gate=", i = e.indexOf(t), -1 != i) {
                        let n = e.slice(i + t.length).split(",");
                        b.domainMgr.initDoMain();
                        let o = n.length;
                        for (let e = 0; e < o; e++) {
                            let t = {
                                h5: n[e],
                                data: "",
                                qiniu: "",
                                api: ""
                            };
                            b.domainMgr.addDomain(t)
                        }
                    }
                    f("--------- ccjs://enter"), document.location.href = "ccjs://enter", b.netWorkManager.SceneOnLoad()
                } else b.authenticator.logOutAndDoGuestLogin()
        }
        onDestroy() {
            b.MessageCenter.unregister(b.Enum.MessageCenterAction.OnLoginSuccess, this.node)
        }
        registerMsg() {
            b.MessageCenter.register(b.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccess.bind(this), this.node)
        }
        onLoginSuccess(e) {
            b.action.switchScene(b.Enum.SCENE.HALL_SCENE)
        }
    }).prototype, "panel_loading", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(C.prototype, "txt_loading", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(C.prototype, "bar_loading", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(C.prototype, "logo", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = C)) || E));
    n._RF.pop()
}