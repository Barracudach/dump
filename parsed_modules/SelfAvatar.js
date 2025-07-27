import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as v from "./PersonalSetting.js";
import * as m from "./PersonalSetting.js";
import * as _ from "./PersonalSetting.js";
import * as u from "./Translator.js";
import * as f from "./mttconfig.js";
import * as S from "./AndroidBackButton.js";

function main() {
    var A, C, T, I;
    s._RF.push({}, "85d19WUUUxAkbcNEB6n49B0", "SelfAvatar", void 0);
    const {
        ccclass: y,
        property: k
    } = o;
    t("SelfAvatar", (A = k(i), y((I = e((T = class t extends n {
        constructor(...t) {
            super(...t), a(this, "widget", I, this), this._personalSetting = null, this._lastTempFile = null, this._base64 = null, this._width = 512, this._height = 512, this._minScale = 1, this.editInfo = {
                x: 0,
                y: 0,
                scale: 1
            }, this.isClick = !1
        }
        onLoad() {
            l.isNative && (window.messageController = this.messageController, window.uploadImage = this.uploadImage)
        }
        init(t) {
            this._personalSetting = t, this._personalSetting.isAvatar !== m.self && this.initSet(), this.isClick = !1, l.isNative && l.os === l.OS.ANDROID && S.getInstance().addBackFunction(`SettingAction_${v.selfAvatar}`, this._personalSetting.onClickBlockLayer.bind(this._personalSetting))
        }
        initSet() {
            this._width = 512, this._height = 512, this._minScale = 1, this.resetEditInfo()
        }
        setEditInfo(t, e, a) {
            this.editInfo.x = t, this.editInfo.y = e, this.editInfo.scale = a
        }
        resetEditInfo() {
            this.setEditInfo(0, 0, this._minScale)
        }
        messageController(e) {
            e.data || (e = JSON.parse(e));
            var a = r.getScene().getComponentInChildren(t);
            "uploading" === e.data ? (a._personalSetting.triggerLoading(!0), a._personalSetting.triggerSelfAvatar(!1)) : "click" === e.data && (a.isClick = !1)
        }
        dataURI(t) {
            var e;
            e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : atob(decodeURIComponent(t.split(",")[1]).replace(/\s/g, ""));
            var a = t.split(",")[0].split(":")[1].split(";")[0],
                s = new Uint8Array(e.length);
            for (let t = 0; t < e.length; t++) s[t] = e.charCodeAt(t);
            return {
                type: a,
                bytes: e,
                blob: s
            }
        }
        uploadImage(e, a = 0, s = 0) {
            var i = r.getScene().getComponentInChildren(t);
            let o = i.dataURI(e);
            const n = `${c.fileUtils.getWritablePath()}temp_${(new Date).getTime()}.${o.type.split("/")[1]}`;
            new Promise((t => {
                c.fileUtils.writeDataToFile(o.blob, n) ? g.loadRemote(n, ((e, a) => {
                    c.fileUtils.removeFile(n), e && (cc_mtt.vv.ConsoleLog.log("self avatar load image error:\n", e), t(!1)), a ? (i._personalSetting._previewTexture = a, t(!0)) : (cc_mtt.vv.ConsoleLog.log("self avatar no texture"), t(!1))
                })) : (cc_mtt.vv.ConsoleLog.log("self avatar write file error"), t(!1))
            })).then((t => {
                t ? (cc_mtt.vv.ConsoleLog.log("self avatar load image success"), i.setAvatar(i, e, a, s), i._lastTempFile && (p.release(i._lastTempFile), cc_mtt.vv.ConsoleLog.log(`self avatar release last image: ${i._lastTempFile}`)), i._lastTempFile = n, cc_mtt.vv.ConsoleLog.log(`self avatar store current image: ${i._lastTempFile}`)) : i._personalSetting.errorDialog(u("PERSONAL_SETTING.AVATAR.DIALOG.UPLOAD_FAIL"))
            }))
        }
        saveAvatar() {
            return new Promise((t => {
                var e = new XMLHttpRequest;
                e.onabort = () => {
                    cc_mtt.vv.ConsoleLog.log("save self avatar onabort\n", e), t({
                        status: !1,
                        message: `XHR_STATUS.${e.status}.onabort`
                    })
                }, e.onerror = () => {
                    cc_mtt.vv.ConsoleLog.log("save self avatar onerror\n", e), t({
                        status: !1,
                        message: `XHR_STATUS.${e.status}.onerror`
                    })
                }, e.onload = () => {
                    if (cc_mtt.vv.ConsoleLog.log("save self avatar onload\n", e), "upload succeeded!" === e.responseText) t({
                        status: !0
                    });
                    else {
                        let a = -1 !== e.responseText.indexOf("stack") ? JSON.parse(e.responseText) : e.responseText;
                        t({
                            status: !1,
                            message: 413 === e.status || "413" === a ? u("PERSONAL_SETTING.AVATAR.DIALOG.IMAGE_TOO_LARGE") : `XHR_STATUS.${e.status}.${a.message?a.message:a}`
                        })
                    }
                }, e.ontimeout = () => {
                    cc_mtt.vv.ConsoleLog.log("save self avatar ontimeout\n", e), t({
                        status: !1,
                        message: `XHR_STATUS.${e.status}.ontimeout`
                    })
                };
                let a = Math.max(this._minScale, this.editInfo.scale),
                    s = (this._width * a - 512) / 2 - this.editInfo.x,
                    i = (this._height * a - 512) / 2 + this.editInfo.y;
                e.open("POST", `${f.avatarApi}/self?token=${cc_mtt.vv.DataManager.token}&scale=${a}&x=${s}&y=${i}`);
                let o = this.dataURI(this._base64),
                    n = `----${l.os}Boundary${(new Date).getTime()}`;
                e.setRequestHeader("Content-Type", `multipart/form-data; boundary=${n}`);
                let r = "";
                r += `--${n}\r\n`, r += 'Content-Disposition: form-data; name="myFile"; filename="blob"\r\n', r += `Content-Type: ${o.type}\r\n`, r += "\r\n", r += o.bytes, r += "\r\n", r += `--${n}--`;
                let c = r.length,
                    g = new Uint8Array(c);
                for (let t = 0; t < c; t++) g[t] = 255 & r.charCodeAt(t);
                e.send(g)
            }))
        }
        setAvatar(t, e, a, s) {
            t._base64 = e, t._width = a, t._height = s, t._minScale = t._personalSetting.minScale(t._width, t._height), t.resetEditInfo(), t._personalSetting.updateAvatar(!0, !0), t._personalSetting.isAvatar = m.self, t._personalSetting.triggerLoading(!1), l.isNative ? t._personalSetting instanceof _ && t._personalSetting.triggerConfirmButton() : t._personalSetting.onClickAvatar()
        }
        onClickPhoto() {
            if (!this.isClick)
                if (this.isClick = !0, l.isNative) try {
                    l.os === l.OS.ANDROID ? c.reflection.callStaticMethod("com/cocos/game/AppActivity", "usePhoto", "()V") : l.os === l.OS.IOS && c.reflection.callStaticMethod("AppController", "usePhoto", "")
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
                } else {
                    let t = this,
                        e = document.createElement("input");
                    e.type = "file", e.accept = "image/*", e.onchange = e => {
                        t.messageController('{"data":"uploading"}');
                        let a = e.target.files[0],
                            s = new FileReader;
                        s.readAsDataURL(a), s.onload = e => {
                            let a = e.target.result,
                                s = new Image;
                            s.src = a, s.onload = () => {
                                let e = new d;
                                e.image = new h(s), t._personalSetting._previewTexture = e, t.setAvatar(t, a, s.width, s.height)
                            }
                        }
                    }, e.onclick = e => {
                        t.isClick = !1
                    }, e.click()
                }
        }
        onClickCamera() {
            if (!this.isClick)
                if (this.isClick = !0, l.isNative) try {
                    l.os === l.OS.ANDROID ? c.reflection.callStaticMethod("com/cocos/game/AppActivity", "useCamera", "()V") : l.os === l.OS.IOS && c.reflection.callStaticMethod("AppController", "useCamera", "")
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
                } else this._personalSetting.errorDialog(u("PERSONAL_SETTING.AVATAR.DIALOG.NOT_SUPPORT"), (() => {
                    this.isClick = !1
                }))
        }
        onClickClose() {
            return this._personalSetting.triggerSelfAvatar(!1), !1
        }
    }).prototype, "widget", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = T)) || C));
    s._RF.pop()
}