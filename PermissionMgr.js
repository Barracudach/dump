import * as t from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cv.js";

function main() {
    var l, m;
    s._RF.push({}, "3885fk0Rv5LAbb6t4Kzbnf3", "PermissionMgr", void 0);
    e("PermissionType", function(e) {
        return e.Camera = "CAMERA", e.Location = "LOCATION", e
    }({}));
    var h = function(e) {
            return e.CAMERA = "android.permission.CAMERA", e.LOCATION = "android.permission.ACCESS_COARSE_LOCATION", e
        }(h || {}),
        p = function(e) {
            return e.CAMERA = "camera", e.LOCATION = "location", e
        }(p || {}),
        u = function(e) {
            return e.OnForcePermResponse = "OnForcePermResponse", e
        }(u || {});
    const {
        ccclass: P
    } = t;
    e("PermissionMgr", P(((m = class e {
        static getInstance() {
            return e.instance || (e.instance = new e), e.instance
        }
        constructor() {
            this.forcePermName = void 0, this.forcePermCallback = null, this.requestingPerm = !1, a.MessageCenter.register(u.OnForcePermResponse, this.onPermResponse.bind(this), this), i.on(r.EVENT_SHOW, this.onAppEnterForeground, this)
        }
        openAppSettings(e, s) {
            e && (this.forcePermName = e), s && (this.forcePermCallback = s), n.isNative ? n.os === n.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/PermissionMgr", "openAppSettings", "()V") : n.os === n.OS.IOS ? o.reflection.callStaticMethod("PermissionMgr", "openAppSettings") : n.os === n.OS.OSX ? o.reflection.callStaticMethod("NativeEvents", "openLocationAppSettings") : c("[NativeEvent] -> openAppSettings() Not Supported! isNative: " + n.isNative + " os: " + n.os) : c("[NativeEvent] -> openAppSettings() Not Supported! isNative: " + n.isNative + " os: " + n.os)
        }
        checkPermission(e) {
            if (e && n.isNative) {
                if (n.os === n.OS.ANDROID) return o.reflection.callStaticMethod("com/cocos/game/PermissionMgr", "checkPermission", "(Ljava/lang/String;)I", e) >= 0;
                if (n.os === n.OS.IOS) return o.reflection.callStaticMethod("PermissionMgr", "checkPermission:", e) >= 0
            }
            return !0
        }
        requestPermission(e) {
            e && (this.requestingPerm = !0, n.isNative && (n.os === n.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/PermissionMgr", "requestPermission", "(Ljava/lang/String;)V", e) : n.os === n.OS.IOS && o.reflection.callStaticMethod("PermissionMgr", "requestPermission:", e)))
        }
        onAppEnterForeground() {
            var e;
            this.requestingPerm ? this.requestingPerm = !1 : (null == (e = this.forcePermCallback) || e.call(this, this.checkPermission(this.getPermissionString(this.forcePermName))), this.reset())
        }
        getPermissionString(e) {
            let s = "";
            return n.isNative && (n.os === n.OS.ANDROID ? s = h[e] : n.os === n.OS.IOS && (s = p[e])), s
        }
        reset() {
            this.forcePermCallback = null
        }
        forcePermission(e, s) {
            let t = this.getPermissionString(e);
            "" != t ? this.checkPermission(t) ? null == s || s(!0, !1) : (this.forcePermName = e, this.forcePermCallback = s, this.requestPermission(t)) : null == s || s(!0, !1)
        }
        onPermResponse(e) {
            var s;
            e.accepted ? (null == (s = this.forcePermCallback) || s.call(this, !0), this.reset()) : a.popUp.showMsgI18n({
                txt: "PermissionDenied_" + this.forcePermName,
                isTwoBtn: !0,
                sureCallback: this.openAppSettings.bind(this),
                cancelCallback: () => {
                    var e;
                    null == (e = this.forcePermCallback) || e.call(this, !1), this.reset()
                },
                msgType: a.Enum.ToastType.ToastTypeWarning
            })
        }
    }).instance = void 0, l = m)) || l);
    s._RF.pop()
}