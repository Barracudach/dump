import * as t from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    t._RF.push({}, "11a4bHZydNP35eG+hvZYnH1", "AppsflyerSDKHandler", void 0);
    class l {
        static getInstance() {
            return l.instance || (l.instance = new l), l.instance
        }
        AppsflyerSDKLogin(e, t = !1, l = "1") {
            a.isNative && (a.os === a.OS.IOS ? (o.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKLogEventLogin:", e), t && o.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKLogEventCompleteRegistration:andStage:", "email", l)) : a.os === a.OS.ANDROID && (o.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "Login", "(Ljava/lang/String;)V", e), t && o.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "LogEventCompleteRegistration", "(Ljava/lang/String;Ljava/lang/String;)V", e, l)))
        }
        AppsflyerLogout(e) {
            a.isNative && (a.os === a.OS.IOS ? o.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKLogEventLogout:", e) : a.os === a.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "Logout", "(Ljava/lang/String;)V", ""))
        }
        AppsflyerLogDeposit(e) {
            a.isNative && (a.os === a.OS.IOS ? o.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKLogEventDeposit:", e.toString()) : a.os === a.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "LogEventDeposit", "(Ljava/lang/String;)V", e.toString()))
        }
        AppsflyerSDKTracking(e, t) {
            a.isNative && (a.os === a.OS.IOS ? o.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKTracking:andCustomData:", e, t) : a.os === a.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "logCustomEventAndData", "(Ljava/lang/String;Ljava/lang/String;)V", e, t))
        }
        AppsflyerAdvertisingDataString() {
            var e;
            return a.isNative && (a.os === a.OS.IOS ? e = o.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKGetAdvertisingInfo:", "") : (a.os, a.OS.ANDROID)), e
        }
    }
    e("AppsflyerSDKHandler", l), l.instance = null, t._RF.pop()
}