import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";

function main() {
    o._RF.push({}, "80bb4zZj4RIKp/Q8DhEzI5p", "CIOHandler", void 0);
    class c {
        static getInstance() {
            return c.instance || (c.instance = new c), c.instance
        }
        Login(t) {
            e.isNative && (e.os === e.OS.IOS ? n.reflection.callStaticMethod("CustomerIOSDK", "CustomerIOSDKLogin:", t) : e.os === e.OS.ANDROID && n.reflection.callStaticMethod("com/cocos/game/CIOHandler", "Login", "(Ljava/lang/String;)V", t))
        }
        Logout(t) {
            e.isNative && (e.os === e.OS.IOS ? n.reflection.callStaticMethod("CustomerIOSDK", "CustomerIOSDKLogout:", t) : e.os === e.OS.ANDROID && n.reflection.callStaticMethod("com/cocos/game/CIOHandler", "Logout", "(Ljava/lang/String;)V", ""))
        }
    }
    t("default", c), c.instance = null, o._RF.pop()
}