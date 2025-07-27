import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as v from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./PersonalSetting.js";
import * as u from "./PersonalSetting.js";
import * as _ from "./PersonalSetting.js";
import * as p from "./Avatar.js";
import * as S from "./mttconfig.js";
import * as y from "./AndroidBackButton.js";
import * as A from "./httpApis.js";
import * as b from "./ResourcesLoader.js";

function main() {
    var R, L, T, E, w, x, f, I, N, C, W, H, $;
    a._RF.push({}, "0df630Zi4FOZYkajOMZ+WF9", "SystemAvatar", void 0);
    const {
        ccclass: U,
        property: X
    } = l;
    t("SystemAvatar", (R = X(o), L = X(n), T = X(r), E = X(i), w = X(i), U((($ = class t extends c {
        constructor(...t) {
            super(...t), s(this, "widget", I, this), s(this, "avatarScrollview", N, this), s(this, "emptyLabel", C, this), s(this, "avatarNode", W, this), s(this, "noMoreNode", H, this), this._personalSetting = null, this.avatarArray = [], this.isDownloading = !1, this.downloadIndex = 0, this._sysAvatarTex = [], this.selectedIndex = ""
        }
        init(e) {
            this.emptyLabel.enabled = !1, this._personalSetting = e, this.setSelected(!1), this.selectedIndex = "", this.avatarScrollview.scrollToLeft(.1), this.getTotal().then((e => {
                cc_mtt.vv.ConsoleLog.log("get total system avatar " + (e.status ? `success: ${this.downloadIndex} , ${t.totalAvatar}` : `fail: ${e.message}`)), this.isDownloading || (this.setNoMore(!1), e.status && this.downloadIndex < t.totalAvatar ? (this.isDownloading = !0, this.createAvatar()) : this.setEmptyOrNoMore())
            })), v.isNative && v.os === v.OS.ANDROID && y.getInstance().addBackFunction(`SettingAction_${u.systemAvatar}`, this._personalSetting.onClickBlockLayer.bind(this._personalSetting))
        }
        getTotal() {
            return new Promise((e => {
                var s = new A(S.URL_TYPE.WEB);
                s.xhr.onabort = () => {
                    cc_mtt.vv.ConsoleLog.log("get total system avatar onabort\n", s), e({
                        status: !1,
                        message: `XHR_STATUS.${s.status}.onabort`
                    })
                }, s.onerror = () => {
                    cc_mtt.vv.ConsoleLog.log("get total system avatar onerror\n", s), e({
                        status: !1,
                        message: `XHR_STATUS.${s.status}.onerror`
                    })
                }, s.onload = () => {
                    cc_mtt.vv.ConsoleLog.log("get total system avatar onload\n", s), s.response && "number" == typeof s.response.total ? (t.totalAvatar = s.response.total, e({
                        status: !0
                    })) : e({
                        status: !1,
                        message: `XHR_STATUS.${s.status}.onload`
                    })
                }, s.ontimeout = () => {
                    cc_mtt.vv.ConsoleLog.log("get total system avatar ontimeout\n", s), e({
                        status: !1,
                        message: `XHR_STATUS.${s.status}.ontimeout`
                    })
                }, s.responseType = "json", s.open("GET", cc_mtt.vv.AssetsManager.getAvatarUrl(null, {
                    isThumbnails: !1,
                    system: !0,
                    total: !0
                })), s.send()
            }))
        }
        getWebImage(e, s) {
            return new Promise(((a, o) => {
                s < t.totalAvatar ? g.loadRemote(e, ((t, n) => {
                    t && (cc_mtt.vv.ConsoleLog.log(`avatar load image url: ${e}\n${JSON.stringify(t)}`), a(!1)), h(this) ? n ? (this._sysAvatarTex[s] = n, b.instance.RetainRes(e), a(!0)) : (cc_mtt.vv.ConsoleLog.log("maybe something wrong here"), a(!1)) : o("this is null")
                })) : (cc_mtt.vv.ConsoleLog.log("no more system avatar in server"), a(!1))
            }))
        }
        createAvatar(t = this.downloadIndex) {
            this.getWebImage(cc_mtt.vv.AssetsManager.getAvatarUrl(t, {
                isThumbnails: !1,
                system: !0
            }), t).then((e => {
                if (e) {
                    if (t % 2 == 0) {
                        let t = m(this.avatarNode);
                        t.parent = this.avatarScrollview.content, t.active = !0;
                        let e = this.avatarScrollview.content.children.length - 1;
                        this.avatarArray[e] = t.getComponent(p), this.avatarArray[e].init(this, e)
                    }
                    let e = this.avatarScrollview.content.children.length - 1;
                    this.avatarArray[e].setAvatar(t % 2, this._sysAvatarTex[t]), this.downloadIndex = t + 1, this.createAvatar()
                } else this.setEmptyOrNoMore(), this.isDownloading = !1
            })).catch((t => {
                cc_mtt.vv.ConsoleLog.log(`get system avatar error: ${t}`)
            }))
        }
        setEmptyOrNoMore() {
            0 === this.avatarScrollview.content.children.length ? this.emptyLabel.enabled = !0 : this.setNoMore(!0)
        }
        setNoMore(t) {
            this.noMoreNode.parent = t ? this.avatarScrollview.content : this.avatarScrollview.content.parent, this.noMoreNode.active = t
        }
        static checkLastWebHost() {
            return this.SERVER_URL_WEB_INDEX + 1 >= S.SERVER_URL_WEB_TEXT.length
        }
        static changeNextWebHost() {
            this.SERVER_URL_WEB_INDEX = (this.SERVER_URL_WEB_INDEX + 1) % S.SERVER_URL_WEB_TEXT.length
        }
        static getWebHost() {
            return S.SERVER_URL_HTTP_PREFIX + "://" + S.SERVER_URL_WEB_TEXT[this.SERVER_URL_WEB_INDEX]
        }
        static changeSystemAvatar(e) {
            return new Promise((s => {
                var a = new A;
                a.xhr.onabort = () => {
                    cc_mtt.vv.ConsoleLog.log("save system avatar onabort\n", a), t.checkLastWebHost() ? s({
                        status: !1,
                        message: `XHR_STATUS.${a.status}.onabort`
                    }) : (cc_mtt.vv.ConsoleLog.log("change next web host"), t.changeNextWebHost(), s(t.changeSystemAvatar(e)))
                }, a.onerror = () => {
                    cc_mtt.vv.ConsoleLog.log("save system avatar onerror\n", a), t.checkLastWebHost() ? s({
                        status: !1,
                        message: `XHR_STATUS.${a.status}.onerror`
                    }) : (cc_mtt.vv.ConsoleLog.log("change next web host"), t.changeNextWebHost(), s(t.changeSystemAvatar(e)))
                }, a.onload = () => {
                    if (cc_mtt.vv.ConsoleLog.log("save system avatar onload\n", a), "save succeeded!" === a.responseText) s({
                        status: !0
                    });
                    else {
                        let o = -1 !== a.responseText.indexOf("stack") ? JSON.parse(a.responseText) : a.responseText;
                        cc_mtt.vv.ConsoleLog.log("save system avatar onload error\n", o), t.checkLastWebHost() ? s({
                            status: !1,
                            message: `XHR_STATUS.${a.status}.${o.message?o.message:o}`
                        }) : (cc_mtt.vv.ConsoleLog.log("change next web host"), t.changeNextWebHost(), s(t.changeSystemAvatar(e)))
                    }
                }, a.ontimeout = () => {
                    cc_mtt.vv.ConsoleLog.log("save system avatar ontimeout\n", a), t.checkLastWebHost() ? s({
                        status: !1,
                        message: `XHR_STATUS.${a.status}.ontimeout`
                    }) : (cc_mtt.vv.ConsoleLog.log("change next web host"), t.changeNextWebHost(), s(t.changeSystemAvatar(e)))
                }, a.open("POST", `/avatar/system?token=${cc_mtt.vv.DataManager.token}&web=${t.getWebHost()}&index=${e}${-1===e?`&total=${t.totalAvatar}`:""}`), a.send()
            }))
        }
        saveAvatar() {
            return new Promise((e => {
                let s = this.selectedIndex.split(".");
                this._personalSetting.triggerLoading(!0), t.changeSystemAvatar(2 * parseInt(s[0]) + parseInt(s[1])).then((t => {
                    e(t)
                }))
            }))
        }
        setAvatar() {
            if ("" === this.selectedIndex) return this._personalSetting.triggerSystemAvatar(!1), !1;
            let t = this.selectedIndex.split(".");
            return this._personalSetting._previewTexture = this._sysAvatarTex[2 * parseInt(t[0]) + parseInt(t[1])], this._personalSetting.selfAvatar.initSet(), this._personalSetting.updateAvatar(!0, !0), this._personalSetting.isAvatar = d.system, this._personalSetting.triggerSystemAvatar(!1), this._personalSetting instanceof _ && this._personalSetting.triggerConfirmButton(), !1
        }
        setSelected(t) {
            if ("" === this.selectedIndex) return;
            let e = this.selectedIndex.split(".");
            this.avatarArray[parseInt(e[0])].setSelected(parseInt(e[1]), t)
        }
        onClickAvatar(t, e) {
            let s = `${t}.${e}`;
            this.setSelected(!1), this.selectedIndex = this.selectedIndex === s ? "" : s, this.setSelected(!0)
        }
    }).totalAvatar = 38, $.SERVER_URL_WEB_INDEX = 0, I = e((f = $).prototype, "widget", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(f.prototype, "avatarScrollview", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(f.prototype, "emptyLabel", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(f.prototype, "avatarNode", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(f.prototype, "noMoreNode", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = f)) || x));
    a._RF.pop()
}