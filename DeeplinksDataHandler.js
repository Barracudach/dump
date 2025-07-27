import * as t from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cc.js";

function main() {
    c._RF.push({}, "da914t9MsNAvKtxXu6raLIZ", "DeeplinksDataHandler", void 0);
    a("default", class {
        static SaveLocalDataString(a) {
            t.isNative && (t.os === t.OS.IOS ? e.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKSaveLocalData:", a) : t.os === t.OS.OSX ? e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKSaveLocalData:", a) : t.os === t.OS.ANDROID ? e.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "SaveLocalData", "(Ljava/lang/String;)V", a) : t.os === t.OS.WINDOWS && e.cppbridge.sendMessage("BranchSDK", "BranchSDKSaveLocalData", a))
        }
        static GetLocalDataString() {
            var a;
            return t.isNative ? (t.os === t.OS.IOS ? a = e.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKGetLocalData:", "") : t.os === t.OS.OSX ? a = e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKGetLocalData:", "") : t.os === t.OS.ANDROID ? a = e.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "GetLocalData", "()Ljava/lang/String;") : t.os === t.OS.WINDOWS && (a = e.cppbridge.sendMessage("BranchSDK", "BranchSDKGetLocalData")), a) : ""
        }
        static GetLastAttributedDataString() {
            var a = "";
            return t.isNative ? (t.os === t.OS.IOS ? a = e.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKGetLastAttributionData:", "") : t.os === t.OS.OSX ? a = e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKGetLastAttributionData:", "") : t.os === t.OS.ANDROID ? a = e.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "GetLastAttributionData", "()Ljava/lang/String;") : t.os === t.OS.WINDOWS && (a = e.cppbridge.sendMessage("BranchSDK", "BranchSDKGetLastAttributionData", "")), a) : a
        }
        static SaveDeviceInfoDataString(a) {
            t.isNative && (t.os === t.OS.IOS ? e.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKSaveDeviceInfoData:", a) : t.os === t.OS.OSX ? e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKSaveDeviceInfoData:", a) : t.os === t.OS.ANDROID ? e.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "SaveDeviceInfoData", "(Ljava/lang/String;)V", a) : t.os === t.OS.WINDOWS && e.cppbridge.sendMessage("BranchSDK", "BranchSDKSaveDeviceInfoData", a))
        }
        static GetDeviceInfoDataString() {
            var a;
            return t.isNative && (t.os === t.OS.IOS ? a = e.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKGetDeviceInfoData:", "") : t.os === t.OS.OSX ? a = e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKGetDeviceInfoData:", "") : t.os === t.OS.ANDROID ? a = e.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "GetDeviceInfoData", "()Ljava/lang/String;") : t.os === t.OS.WINDOWS && (a = e.cppbridge.sendMessage("BranchSDK", "BranchSDKGetDeviceInfoData"))), a
        }
    }), c._RF.pop()
}