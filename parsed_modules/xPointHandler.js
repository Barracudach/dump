import * as t from "./cc.js";
import * as n from "./cc.js";
import * as e from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cv.js";

function main() {
    t._RF.push({}, "01133C5NzVCq7PUKLca600b", "xPointHandler", void 0);
    class s {
        static getInstance() {
            return s.instance || (s.instance = new s), s.instance
        }
        constructor() {
            this.clientID = "pkdg", this.homepageURL = "", this.serverType = "prod", this.gcloudAndroidDeviceVerificationID = "AIzaSyBYFpSWvo6-VM7zClJ_VlFBz1BidH_YDcQ", this.lastScene = "", this.init()
        }
        init() {
            if (!o.appConfig.getModulesConfig().xPointEnabled) return;
            let i = o.native.GetDeviceUUID(!1);
            e.isNative && (e.os === e.OS.ANDROID ? n.reflection.callStaticMethod("com/cocos/game/XPointLocationHandler", "initialiseSDK", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", this.gcloudAndroidDeviceVerificationID, i, this.clientID, this.homepageURL) : e.os === e.OS.IOS && n.reflection.callStaticMethod("XPointLocationHandler", "initialiseSDK:withClientID:andServerType:", i, this.clientID, this.serverType)), o.MessageCenter.register("switchSceneFinish", this.onSwitchSceneFinish.bind(this), this)
        }
        onSwitchSceneFinish(i) {
            if (i != this.lastScene) {
                let t = o.config.isGameScene(this.lastScene),
                    e = o.config.isGameScene(i);
                0 == t && 1 == e ? this.startWagering() : 1 == t && 0 == e && this.stopWagering(), this.lastScene = i
            }
        }
        startWagering() {
            o.appConfig.getModulesConfig().xPointEnabled && e.isNative && (e.os === e.OS.ANDROID ? n.reflection.callStaticMethod("com/cocos/game/XPointLocationHandler", "startWageringProcess", "()V") : e.os === e.OS.IOS && n.reflection.callStaticMethod("XPointLocationHandler", "startWageringProcess"))
        }
        stopWagering() {
            o.appConfig.getModulesConfig().xPointEnabled && e.isNative && (e.os === e.OS.ANDROID ? n.reflection.callStaticMethod("com/cocos/game/XPointLocationHandler", "stopWageringProcess", "()V") : e.os === e.OS.IOS && n.reflection.callStaticMethod("XPointLocationHandler", "stopWageringProcess"))
        }
        static onNativeXPointFailureCallback(i) {
            a("xPoint FAILED with message: " + i)
        }
    }
    i("xPointHandler", s), s.instance = void 0, window.NativeXPointFailureCallback = s.onNativeXPointFailureCallback, t._RF.pop()
}